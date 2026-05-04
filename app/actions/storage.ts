"use server";

import { createClient } from "@/app/_utils/supabase/server";

const BUCKET = "blog-images";

// ── Helpers ───────────────────────────────────────────────────────────────────

/**
 * Produces a safe, unique filename by combining the current timestamp
 * with a sanitised version of the original filename.
 *
 * Example: "1746364789123-my-cover-photo.webp"
 */
function buildUniqueFilename(originalName: string): string {
  const safe = originalName
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9.\-_]/g, "");
  return `${Date.now()}-${safe}`;
}

// ── Actions ───────────────────────────────────────────────────────────────────

/**
 * Upload a blog cover image to the `blog-images` Supabase Storage bucket.
 *
 * Accepts a `FormData` object containing a single field named `"file"`.
 * Returns the public URL of the uploaded asset on success.
 */
export async function uploadBlogImage(
  formData: FormData,
): Promise<{ success: true; url: string } | { success: false; error: string }> {
  const file = formData.get("file");

  // ── Validation ──────────────────────────────────────────────────────────────

  if (!(file instanceof File)) {
    return { success: false, error: "No file provided." };
  }

  const MAX_BYTES = 4 * 1024 * 1024; // 4 MB
  if (file.size > MAX_BYTES) {
    return { success: false, error: "File exceeds the 4 MB limit." };
  }

  const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];
  if (!ALLOWED_TYPES.includes(file.type)) {
    return {
      success: false,
      error: "Unsupported file type. Please upload a PNG, JPG, WEBP, or GIF.",
    };
  }

  // ── Upload ──────────────────────────────────────────────────────────────────

  try {
    const supabase = await createClient();
    const filename = buildUniqueFilename(file.name);

    const { error: uploadError } = await supabase.storage
      .from(BUCKET)
      .upload(filename, file, {
        contentType: file.type,
        upsert: false,
      });

    if (uploadError) {
      console.error("[uploadBlogImage] Supabase upload error:", uploadError);
      return { success: false, error: uploadError.message };
    }

    // ── Resolve Public URL ───────────────────────────────────────────────────

    const {
      data: { publicUrl },
    } = supabase.storage.from(BUCKET).getPublicUrl(filename);

    return { success: true, url: publicUrl };
  } catch (err) {
    console.error("[uploadBlogImage] Unexpected error:", err);
    return {
      success: false,
      error: "An unexpected error occurred during upload.",
    };
  }
}
