import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email recipients for contact form notifications
const NOTIFICATION_EMAILS = [
  'neeraj.vishen@gmail.com',
  'ayushee2290@gmail.com'
];

// Email configuration - using Gmail SMTP
// For production, use environment variables
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASSWORD || '', // Use App Password for Gmail
  },
});

interface ContactFormData {
  fullName: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { fullName, email, company, service, message } = body;

    // Validate required fields
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: fullName, email, and message are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Format the email content
    const emailSubject = `🚀 New Contact Form Submission - ${service || 'General Inquiry'}`;
    
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
    .header { background: linear-gradient(135deg, #0a0f1c 0%, #1e3a5f 100%); color: white; padding: 30px; text-align: center; }
    .header h1 { margin: 0; font-size: 24px; }
    .header p { margin: 10px 0 0; opacity: 0.9; }
    .content { padding: 30px; }
    .field { margin-bottom: 20px; }
    .field-label { font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px; }
    .field-value { font-size: 16px; color: #333; padding: 12px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #06b6d4; }
    .message-box { background: #f0f9ff; padding: 20px; border-radius: 8px; border: 1px solid #bae6fd; }
    .footer { background: #f8f9fa; padding: 20px; text-align: center; font-size: 12px; color: #666; }
    .badge { display: inline-block; background: #06b6d4; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📬 New Contact Form Submission</h1>
      <p>Someone wants to connect with Vishenera Technologies</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="field-label">Full Name</div>
        <div class="field-value">${fullName}</div>
      </div>
      <div class="field">
        <div class="field-label">Email Address</div>
        <div class="field-value"><a href="mailto:${email}">${email}</a></div>
      </div>
      <div class="field">
        <div class="field-label">Company</div>
        <div class="field-value">${company || 'Not specified'}</div>
      </div>
      <div class="field">
        <div class="field-label">Service of Interest</div>
        <div class="field-value"><span class="badge">${service || 'General Inquiry'}</span></div>
      </div>
      <div class="field">
        <div class="field-label">Message</div>
        <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
      </div>
    </div>
    <div class="footer">
      <p>This email was sent from the Vishenera Technologies website contact form.</p>
      <p>© ${new Date().getFullYear()} Vishenera Technologies. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
    `;

    const emailText = `
New Contact Form Submission - Vishenera Technologies
=====================================================

Full Name: ${fullName}
Email: ${email}
Company: ${company || 'Not specified'}
Service of Interest: ${service || 'General Inquiry'}

Message:
${message}

-----------------------------------------------------
This email was sent from the Vishenera Technologies website contact form.
    `;

    // Check if SMTP is configured
    if (process.env.SMTP_USER && process.env.SMTP_PASSWORD) {
      // Send email to all recipients
      await transporter.sendMail({
        from: `"Vishenera Website" <${process.env.SMTP_USER}>`,
        to: NOTIFICATION_EMAILS.join(', '),
        replyTo: email,
        subject: emailSubject,
        text: emailText,
        html: emailHtml,
      });

      // Send confirmation email to the user
      await transporter.sendMail({
        from: `"Vishenera Technologies" <${process.env.SMTP_USER}>`,
        to: email,
        subject: '✅ Thank you for contacting Vishenera Technologies',
        text: `Dear ${fullName},\n\nThank you for reaching out to Vishenera Technologies. We have received your message and will get back to you within 24-48 hours.\n\nBest regards,\nVishenera Technologies Team`,
        html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
    .header { background: linear-gradient(135deg, #0a0f1c 0%, #1e3a5f 100%); color: white; padding: 30px; text-align: center; }
    .content { padding: 30px; line-height: 1.6; }
    .footer { background: #f8f9fa; padding: 20px; text-align: center; font-size: 12px; color: #666; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thank You! ✅</h1>
    </div>
    <div class="content">
      <p>Dear ${fullName},</p>
      <p>Thank you for reaching out to <strong>Vishenera Technologies</strong>. We have received your message regarding <strong>${service || 'your inquiry'}</strong>.</p>
      <p>Our team will review your request and get back to you within <strong>24-48 hours</strong>.</p>
      <p>In the meantime, feel free to explore our services and solutions on our website.</p>
      <br>
      <p>Best regards,<br><strong>Vishenera Technologies Team</strong></p>
    </div>
    <div class="footer">
      <p>© ${new Date().getFullYear()} Vishenera Technologies. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
        `,
      });

      console.log('✅ Notification emails sent successfully to:', NOTIFICATION_EMAILS.join(', '));
    } else {
      // Log the submission if SMTP is not configured
      console.log('⚠️ SMTP not configured. Contact form submission received:');
      console.log(JSON.stringify({ fullName, email, company, service, message, timestamp: new Date().toISOString() }, null, 2));
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message. We will get back to you soon!' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again later.' },
      { status: 500 }
    );
  }
}
