"use server";

import { prisma } from "@/app/_utils/prisma";
import { createClient } from "@/app/_utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function getGalleryItems() {
  try {
    const items = await prisma.gallery.findMany({
      orderBy: { order: "asc" },
    });
    return items;
  } catch (error) {
    console.error("Failed to fetch gallery items:", error);
    throw new Error("Failed to fetch gallery items");
  }
}

export async function updateGalleryOrder(
  items: { id: string; order: number }[],
) {
  try {
    await prisma.$transaction(
      items.map((item) =>
        prisma.gallery.update({
          where: { id: item.id },
          data: { order: item.order },
        }),
      ),
    );
    return true;
  } catch (error) {
    console.error("Failed to update gallery order:", error);
    return false;
  }
}

export async function createGalleryItem(formData: FormData) {
  try {
    const title = formData.get("title") as string;
    const file = formData.get("image") as File;

    if (!title || !file) {
      return { success: false, error: "Missing required fields." };
    }

    const supabase = await createClient();
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from("gallery-images")
      .upload(fileName, buffer, {
        contentType: file.type,
      });

    if (uploadError) {
      console.error("Supabase Upload Error:", uploadError);
      return { success: false, error: "Failed to upload image." };
    }

    const { data: publicUrlData } = supabase.storage
      .from("gallery-images")
      .getPublicUrl(fileName);

    const imageUrl = publicUrlData.publicUrl;

    const maxOrderRecord = await prisma.gallery.findFirst({
      orderBy: { order: "desc" },
      select: { order: true },
    });

    const newOrder = (maxOrderRecord?.order ?? -1) + 1;

    await prisma.gallery.create({
      data: {
        title,
        date: new Date(),
        imageUrl,
        order: newOrder,
      },
    });

    revalidatePath("/admin/gallery");
    return { success: true };
  } catch (error) {
    console.error("Error creating gallery item:", error);
    return { success: false, error: "An unexpected error occurred." };
  }
}
