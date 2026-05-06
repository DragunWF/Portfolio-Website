"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactMessage(data: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return { success: false, error: "All fields are required." };
    }

    // Natively send the email using Resend
    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", 
      to: process.env.CONTACT_EMAIL || "test@example.com",
      replyTo: email,
      subject: `New Contact Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("[sendContactMessage] Resend API error:", error);
      return {
        success: false,
        error: "Failed to send message. Please try again later.",
      };
    }

    return { success: true };
  } catch (error) {
    console.error("[sendContactMessage] Unexpected error:", error);
    return { success: false, error: "An unexpected error occurred." };
  }
}
