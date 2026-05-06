"use server";

import { createClient } from "@/app/_utils/supabase/server";

export async function login(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const honeypot = formData.get("confirm_email") as string;

  // Honeypot check
  if (honeypot) {
    console.warn("[Login] Honeypot triggered by automated attempt.");
    return {
      error:
        "Access Denied: The Arcane Seals do not recognize these credentials.",
    };
  }

  if (!email || !password) {
    return { error: "Email and password are required" };
  }

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    // Return a themed, generic error message to prevent account enumeration
    return {
      error:
        "Access Denied: The Arcane Seals do not recognize these credentials.",
    };
  }

  return { success: true };
}
