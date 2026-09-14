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
    const { firstName, lastName, email, phone, subject, orderNumber, message, leadType, turnstileToken, submitTime } = body;

    // Validate required fields
    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email and message are required' },
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
    if (tooLong(message, 5000) || tooLong(subject, 200) || tooLong(orderNumber, 100)) {
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

    // ── Push inquiry to Buyer Agent intake webhook (awaited, bounded timeout) ──
    const agentWebhookUrl = process.env.AGENT_INTAKE_WEBHOOK_URL;
    if (agentWebhookUrl) {
      const rawText = [
        `Name: ${firstName || ''} ${lastName || ''}`.trim(),
        `Email: ${email || ''}`,
        phone ? `Phone/WhatsApp: ${phone}` : '',
        subject ? `Subject: ${subject}` : '',
        leadType ? `Lead Type: ${leadType}` : '',
        orderNumber ? `Order Number: ${orderNumber}` : '',
        message ? `Message: ${message}` : '',
      ].filter(Boolean).join('\n');

      try {
        const ctrl = new AbortController();
        const timer = setTimeout(() => ctrl.abort(), 8000);
        await fetch(agentWebhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(process.env.AGENT_WEBHOOK_SECRET ? { 'X-Webhook-Secret': process.env.AGENT_WEBHOOK_SECRET } : {}),
          },
          body: JSON.stringify({
            project: 'dshairbeauty',
            channel: 'website-form',
            raw_text: rawText,
          }),
          signal: ctrl.signal,
        });
        clearTimeout(timer);
      } catch (err) {
        // Agent intake slow/unreachable — don't break the user-facing response
        console.error('[Agent intake webhook] failed:', err);
      }
    }
    // ─────────────────────────────────────────────────────────────────

    // Check if RESEND_API_KEY is configured
    if (!process.env.RESEND_API_KEY) {
      // For demo: just log and return success without sending email
      console.log('Contact form submission (demo mode):', { firstName, lastName, email, message });
      return NextResponse.json({ 
        success: true, 
        message: 'Demo mode - email not sent. Configure RESEND_API_KEY to enable.' 
      });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Caro <caro@dshairbeauty.co.uk>',
      to: ['caro@dshairbeauty.co.uk'],
      subject: `New Contact [${leadType === 'salon' ? 'SALON' : leadType === 'wholesaler' ? 'WHOLESALE' : leadType === 'individual' ? 'RETAIL' : 'GENERAL'}]: ${subject || 'General Enquiry'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject || 'General Enquiry'}</p>
        <p><strong>Lead Type:</strong> ${leadType || 'Not provided'}</p>
        <p><strong>Order Number:</strong> ${orderNumber || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Resend send error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please contact us directly at caro@dshairbeauty.co.uk' },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
