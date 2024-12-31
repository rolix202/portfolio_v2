import nodemailer from 'nodemailer'
import { HttpError } from './responseHelpers.js';
import { STATUS_CODES } from './statusCodes.js';

export const sendEmail = async (c_name, email, message) => {
    const output = `
    <div style="background-color: #1e293b; color: #f8fafc; font-family: Arial, sans-serif; padding: 20px; border-radius: 8px; max-width: 600px; margin: auto;">
      <h2 style="color: #a855f7; text-align: center; margin-bottom: 20px;">New Message from Your Portfolio Website</h2>
      <p style="color: #cbd5e1; font-size: 16px; line-height: 1.6;">
        Hey Roland,  
        You've received a new message from your website. Here's what they said:
      </p>
      <div style="background-color: #0f172a; padding: 15px; border-radius: 6px; margin: 20px 0;">
        <p><strong style="color: #f8fafc;">Name:</strong> <span style="color: #a855f7;">${c_name}</span></p>
        <p><strong style="color: #f8fafc;">Email:</strong> <span style="color: #a855f7;">${email}</span></p>
        <p><strong style="color: #f8fafc;">Message:</strong></p>
        <p style="color: #cbd5e1;">${message}</p>
      </div>
      <p style="font-size: 14px; color: #cbd5e1;">
        Remember to respond to this inquiry as soon as possible to keep up with your amazing branding and client relationships!
      </p>
    </div>
  `;

    const transporter = nodemailer.createTransport({
        service: 'Zoho',
        host: 'smtp.zoho.com',
        port: 587,
        auth: {
            user: process.env.ZOHO_USER,
            pass: process.env.ZOHO_PASS,
        }
    });

    try {
        const info = await transporter.sendMail({
            from: `"Oodo Roland" <${process.env.ZOHO_USER}>`,
            to: process.env.ZOHO_USER,
            subject: "New Message from Oodo Roland’s Website ✔",
            html: output,
        })

        return info.messageId;
    } catch (error) {
        throw new HttpError("Failed to send message", STATUS_CODES.INTERNAL_SERVER_ERROR)
    }

}