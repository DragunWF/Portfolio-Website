"use server";

import { prisma } from "@/app/_utils/prisma";
import { createClient } from "@/app/_utils/supabase/server";
import { revalidatePath } from "next/cache";
import { Gallery } from "@prisma/client";

export async function getGalleryItems(): Promise<Gallery[]> {
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

export async function deleteGalleryItem(id: string) {
  try {
    const item = await prisma.gallery.findUnique({
      where: { id },
    });

    if (!item) {
      return { success: false, error: "Item not found." };
    }

    const fileUrl = item.imageUrl;
    const fileName = fileUrl.split("/").pop();

    if (fileName) {
      const supabase = await createClient();
      const { error: deleteError } = await supabase.storage
        .from("gallery-images")
        .remove([fileName]);

      if (deleteError) {
        console.error("Supabase Deletion Error:", deleteError);
      }
    }

    await prisma.gallery.delete({
      where: { id },
    });

    revalidatePath("/admin/gallery");
    return { success: true };
  } catch (error) {
    console.error("Error deleting gallery item:", error);
    return { success: false, error: "An unexpected error occurred." };
  }
}

export async function updateGalleryItem(id: string, formData: FormData) {
  try {
    const title = formData.get("title") as string;
    const file = formData.get("image") as File | null;

    if (!title) {
      return { success: false, error: "Title is required." };
    }

    const item = await prisma.gallery.findUnique({
      where: { id },
    });

    if (!item) {
      return { success: false, error: "Item not found." };
    }

    let imageUrl = item.imageUrl;

    if (file && file.size > 0) {
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
        return { success: false, error: "Failed to upload new image." };
      }

      const { data: publicUrlData } = supabase.storage
        .from("gallery-images")
        .getPublicUrl(fileName);

      imageUrl = publicUrlData.publicUrl;

      // Delete old image
      const oldFileName = item.imageUrl.split("/").pop();
      if (oldFileName) {
        await supabase.storage.from("gallery-images").remove([oldFileName]);
      }
    }

    await prisma.gallery.update({
      where: { id },
      data: {
        title,
        imageUrl,
      },
    });

    revalidatePath("/admin/gallery");
    return { success: true };
  } catch (error) {
    console.error("Error updating gallery item:", error);
    return { success: false, error: "An unexpected error occurred." };
  }
}
