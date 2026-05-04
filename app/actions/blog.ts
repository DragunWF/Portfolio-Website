"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/app/_utils/prisma";

// ── Types ─────────────────────────────────────────────────────────────────────

interface CreateBlogData {
  title: string;
  slug: string;
  content: string;
  status: string;
  imageUrl?: string;
}

// ── Actions ───────────────────────────────────────────────────────────────────

/**
 * Fetch all blog posts ordered by creation date (newest first).
 */
export async function getBlogs() {
  try {
    return await prisma.blog.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("[getBlogs] Failed to fetch blogs:", error);
    return [];
  }
}

/**
 * Create a new blog post and revalidate both the admin list and public blog.
 */
export async function createBlog(data: CreateBlogData) {
  try {
    const blog = await prisma.blog.create({
      data: {
        title: data.title,
        slug: data.slug,
        content: data.content,
        status: data.status,
        imageUrl: data.imageUrl ?? null,
      },
    });

    revalidatePath("/admin/blog");
    revalidatePath("/blog");

    return { success: true, blog };
  } catch (error) {
    console.error("[createBlog] Failed to create blog:", error);
    return { success: false, error: "Failed to create blog post." };
  }
}

/**
 * Delete a blog post by ID and revalidate the admin list.
 */
export async function deleteBlog(id: string) {
  try {
    await prisma.blog.delete({ where: { id } });

    revalidatePath("/admin/blog");

    return { success: true };
  } catch (error) {
    console.error("[deleteBlog] Failed to delete blog:", error);
    return { success: false, error: "Failed to delete blog post." };
  }
}

/**
 * Update the published/draft status of a blog post.
 */
export async function updateBlogStatus(id: string, status: string) {
  try {
    const blog = await prisma.blog.update({
      where: { id },
      data: { status },
    });

    revalidatePath("/admin/blog");
    revalidatePath("/blog");

    return { success: true, blog };
  } catch (error) {
    console.error("[updateBlogStatus] Failed to update status:", error);
    return { success: false, error: "Failed to update blog status." };
  }
}
