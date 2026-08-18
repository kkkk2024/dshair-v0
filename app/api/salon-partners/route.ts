import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import {
  honeypotTriggered,
  isTooFast,
  isDisposableEmail,
  tooLong,
  verifyTurnstile,
} from '@/lib/antispam';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      name, 
      salonName, 
      location, 
      email, 
      phone, 
      methods = [], 
      monthlySpend, 
      currentSupplier,
      howFoundUs,
      instagram,
      notes,
      isAmbassador = false,
      turnstileToken,
      submitTime,
    } = body;

    // Validate required fields
    if (!name || !email || !salonName || !location || !phone) {
      return NextResponse.json(
        { error: 'Name, email, salon name, location and phone are required' },
        { status: 400 }
      );
    }

    // ── Anti-spam hardening (all checks fail-open, see lib/antispam.ts) ──
    // Honeypot: a real user never sees this field; silently drop bots.
    if (honeypotTriggered(body)) {
      return NextResponse.json({ success: true, message: 'ok' });
    }
    // Submit-time: humans cannot fill the form in under MIN_SUBMIT_MS.
    if (isTooFast(submitTime)) {
      return NextResponse.json(
        { error: 'Submission too fast. Please slow down and try again.' },
        { status: 429 }
      );
    }
    // Disposable / throwaway email domains are almost always bots.
    if (isDisposableEmail(email)) {
      return NextResponse.json(
        { error: 'Please use a real business or personal email address.' },
        { status: 400 }
      );
    }
    // Field-length caps (defence against oversized / injected payloads).
    if (
      tooLong(salonName, 200) ||
      tooLong(location, 200) ||
      tooLong(currentSupplier, 200) ||
      tooLong(notes, 2000) ||
      tooLong(howFoundUs, 200)
    ) {
      return NextResponse.json({ error: 'Invalid input.' }, { status: 400 });
    }
    // Cloudflare Turnstile — skipped automatically until TURNSTILE_SECRET_KEY is set.
    const turnstile = await verifyTurnstile(turnstileToken);
    if (!turnstile.ok) {
      return NextResponse.json(
        { error: 'Verification failed. Please complete the challenge and retry.' },
        { status: 403 }
      );
    }
    // ──────────────────────────────────────────────────────────────────────

    // Check if RESEND_API_KEY is configured
    if (!process.env.RESEND_API_KEY) {
      console.log('Salon Partner application (demo mode):', body);
      return NextResponse.json({ 
        success: true, 
        message: 'Demo mode - email not sent. Configure RESEND_API_KEY in Vercel.' 
      });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const applicationType = isAmbassador 
      ? 'Ambassador Programme Application' 
      : 'Salon Partner Application';
    const methodsList = Array.isArray(methods) ? methods.join(', ') : methods;

    // Send email notification
    const data = await resend.emails.send({
      from: 'D.S HAIR & BEAUTY <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL || 'caro@dshairbeauty.co.uk'],
      subject: `🎉 New ${applicationType}: ${salonName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1a1a1a 0%, #333 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0;">New ${applicationType}</h1>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold; width: 40%;">Name</td>
                <td style="padding: 12px; border-bottom: 1px solid #ddd;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold;">Salon Name</td>
                <td style="padding: 12px; border-bottom: 1px solid #ddd;">${salonName}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold;">Location</td>
                <td style="padding: 12px; border-bottom: 1px solid #ddd;">${location || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold;">Email</td>
                <td style="padding: 12px; border-bottom: 1px solid #ddd;">
                  <a href="mailto:${email}">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold;">Phone</td>
                <td style="padding: 12px; border-bottom: 1px solid #ddd;">
                  <a href="https://wa.me/${phone?.replace(/[^0-9]/g, '')}">${phone || 'Not provided'}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold;">Extension Methods</td>
                <td style="padding: 12px; border-bottom: 1px solid #ddd;">${methodsList || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold;">Monthly Spend</td>
                <td style="padding: 12px; border-bottom: 1px solid #ddd;">${monthlySpend || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold;">Current Supplier</td>
                <td style="padding: 12px; border-bottom: 1px solid #ddd;">${currentSupplier || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold;">How Found Us</td>
                <td style="padding: 12px; border-bottom: 1px solid #ddd;">${howFoundUs || 'Not specified'}</td>
              </tr>
              ${instagram ? `
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold;">Instagram</td>
                <td style="padding: 12px; border-bottom: 1px solid #ddd;"><a href="https://instagram.com/${instagram.replace('@','')}">${instagram}</a></td>
              </tr>
              ` : ''}
              ${notes ? `
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold;">Notes</td>
                <td style="padding: 12px; border-bottom: 1px solid #ddd;">${notes}</td>
              </tr>
              ` : ''}
            </table>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #ddd;">
              <p style="margin: 0 0 10px;"><strong>Suggested Actions:</strong></p>
              <ul style="margin: 0; padding-left: 20px;">
                <li>Send welcome message via <a href="https://wa.me/${phone?.replace(/[^0-9]/g, '')}">WhatsApp</a></li>
                <li>Add to CRM with status: "New Lead"</li>
                <li>Send trade price list</li>
                ${isAmbassador ? '<li>Send Ambassador programme details</li>' : ''}
              </ul>
            </div>
          </div>
          
          <div style="background: #333; color: white; padding: 15px; text-align: center; font-size: 12px;">
            D.S Hair & Beauty | dshairbeauty.co.uk
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error processing application:', error);
    return NextResponse.json(
      { error: 'Failed to process application' },
      { status: 500 }
    );
  }
}
