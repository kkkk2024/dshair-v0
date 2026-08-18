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
      instagram,
      website,
      methods = [],
      yearsExperience,
      about,
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
    if (honeypotTriggered(body)) {
      return NextResponse.json({ success: true, message: 'ok' });
    }
    if (isTooFast(submitTime)) {
      return NextResponse.json(
        { error: 'Submission too fast. Please slow down and try again.' },
        { status: 429 }
      );
    }
    if (isDisposableEmail(email)) {
      return NextResponse.json(
        { error: 'Please use a real business or personal email address.' },
        { status: 400 }
      );
    }
    if (
      tooLong(salonName, 200) ||
      tooLong(location, 200) ||
      tooLong(instagram, 200) ||
      tooLong(website, 500) ||
      tooLong(about, 2000)
    ) {
      return NextResponse.json({ error: 'Invalid input.' }, { status: 400 });
    }
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
      console.log('Find a Stylist application (demo mode):', body);
      return NextResponse.json({
        success: true,
        message: 'Demo mode - email not sent. Configure RESEND_API_KEY in Vercel.'
      });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const methodsList = Array.isArray(methods) ? methods.join(', ') : methods;
    const instagramHandle = instagram ? instagram.replace('@', '') : null;

    // Send email notification
    const data = await resend.emails.send({
      from: 'D.S HAIR & BEAUTY <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL || 'caro@dshairbeauty.co.uk'],
      subject: `✨ New Stylist Application: ${salonName} — ${location || 'Location TBC'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1a1a1a 0%, #333 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0;">New Stylist Application</h1>
            <p style="color: #ccc; margin: 8px 0 0;">Find a Stylist Directory — dshairbeauty.co.uk/find-stylist</p>
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
              ${phone ? `
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold;">Phone / WhatsApp</td>
                <td style="padding: 12px; border-bottom: 1px solid #ddd;">
                  <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}">${phone}</a>
                </td>
              </tr>
              ` : ''}
              ${instagram ? `
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold;">Instagram</td>
                <td style="padding: 12px; border-bottom: 1px solid #ddd;">
                  <a href="https://instagram.com/${instagramHandle}">@${instagramHandle}</a>
                </td>
              </tr>
              ` : ''}
              ${website ? `
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold;">Website / Booking</td>
                <td style="padding: 12px; border-bottom: 1px solid #ddd;">
                  <a href="${website}" target="_blank">${website}</a>
                </td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold;">Methods Offered</td>
                <td style="padding: 12px; border-bottom: 1px solid #ddd;">${methodsList || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold;">Years of Experience</td>
                <td style="padding: 12px; border-bottom: 1px solid #ddd;">${yearsExperience || 'Not specified'}</td>
              </tr>
              ${about ? `
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold;">About</td>
                <td style="padding: 12px; border-bottom: 1px solid #ddd;">${about}</td>
              </tr>
              ` : ''}
            </table>

            <div style="margin-top: 30px; padding: 20px; background: #e8f5e9; border-radius: 8px;">
              <p style="margin: 0 0 10px;"><strong>Suggested Actions:</strong></p>
              <ul style="margin: 0; padding-left: 20px;">
                <li>Review their Instagram: <a href="https://instagram.com/${instagramHandle}">@${instagramHandle}</a></li>
                ${phone ? `<li>Send a welcome message via <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}">WhatsApp</a></li>` : ''}
                <li>Add to CRM with status: "Stylist Application — Pending Review"</li>
                <li>If approved: add to Find a Stylist directory</li>
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
    console.error('Error processing stylist application:', error);
    return NextResponse.json(
      { error: 'Failed to process application' },
      { status: 500 }
    );
  }
}
