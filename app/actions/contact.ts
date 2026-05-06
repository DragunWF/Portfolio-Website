"use server";

import { Resend } from "resend";
import { z } from "zod";
import { headers } from "next/headers";
import { prisma } from "@/app/_utils/prisma";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
  honeypot: z.string().optional(),
});

export async function sendContactMessage(formData: {
  name: string;
  email: string;
  message: string;
  honeypot?: string;
}) {
  try {
    const parsedData = contactSchema.safeParse(formData);

    if (!parsedData.success) {
      return { success: false, error: parsedData.error.issues[0].message };
    }

    const { name, email, message, honeypot } = parsedData.data;

    // Honeypot check - silently drop if filled
    if (honeypot) {
      console.warn("[sendContactMessage] Honeypot filled. Dropping request.");
      return { success: true };
    }

    // IP Rate Limiting
    const headersList = await headers();
    const forwardedFor = headersList.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0] : "127.0.0.1";

    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);

    const recentMessage = await prisma.contactMessage.findFirst({
      where: {
        ip: ip,
        createdAt: {
          gte: fiveMinutesAgo,
        },
      },
    });

    if (recentMessage) {
      return {
        success: false,
        error:
          "The Arcane energies are still recovering... Please wait 5 minutes before sending another message.",
      };
    }

    // Save to Database
    await prisma.contactMessage.create({
      data: {
        name,
        email,
        message,
        ip,
      },
    });

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
