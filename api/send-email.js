// api/send-email.js

import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'kareem99710@gmail.com',
      subject: `New message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
      reply_to: email,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email failed:", error);
    return res.status(500).json({ success: false, error: 'Failed to send email' });
  }
}