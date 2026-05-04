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

interface UpdateBlogData {
  title?: string;
  slug?: string;
  content?: string;
  status?: string;
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
 * Fetch all published blog posts, newest first.
 * Optionally pass a limit to retrieve only the first N posts.
 */
export async function getPublishedBlogs(limit?: number) {
  try {
    return await prisma.blog.findMany({
      where: { status: "PUBLISHED" },
      orderBy: { createdAt: "desc" },
      ...(limit !== undefined && { take: limit }),
    });
  } catch (error) {
    console.error("[getPublishedBlogs] Failed to fetch published blogs:", error);
    return [];
  }
}

/**
 * Fetch a single published blog post by its slug. Returns null if not found.
 */
export async function getBlogBySlug(slug: string) {
  try {
    const blog = await prisma.blog.findFirst({
      where: { slug, status: "PUBLISHED" },
    });
    return blog ?? null;
  } catch (error) {
    console.error("[getBlogBySlug] Failed to fetch blog by slug:", error);
    return null;
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
 * Fetch a single blog post by ID. Returns null if not found.
 */
export async function getBlogById(id: string) {
  try {
    const blog = await prisma.blog.findUnique({ where: { id } });
    return blog ?? null;
  } catch (error) {
    console.error("[getBlogById] Failed to fetch blog:", error);
    return null;
  }
}

/**
 * Update an existing blog post and revalidate all relevant paths.
 */
export async function updateBlog(id: string, data: UpdateBlogData) {
  try {
    const blog = await prisma.blog.update({
      where: { id },
      data: {
        ...(data.title !== undefined && { title: data.title }),
        ...(data.slug !== undefined && { slug: data.slug }),
        ...(data.content !== undefined && { content: data.content }),
        ...(data.status !== undefined && { status: data.status }),
        ...(data.imageUrl !== undefined && { imageUrl: data.imageUrl || null }),
      },
    });

    revalidatePath("/admin/blog");
    revalidatePath("/blog");
    revalidatePath("/blog/[slug]", "page");

    return { success: true, blog };
  } catch (error) {
    console.error("[updateBlog] Failed to update blog:", error);
    return { success: false, error: "Failed to update blog post." };
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
