"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/app/_utils/prisma";
import { deleteBlogImage } from "./storage";


import { Blog } from "@prisma/client";

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

export interface BlogsResponse {
  blogs: Blog[];
  totalPages: number;
  currentPage: number;
}

// ── Actions ───────────────────────────────────────────────────────────────────

/**
 * Fetch all blog posts ordered by creation date (newest first) with pagination.
 */
export async function getBlogs(page = 1, limit = 10): Promise<BlogsResponse> {
  try {
    const skip = (page - 1) * limit;
    
    const [blogs, totalCount] = await Promise.all([
      prisma.blog.findMany({
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
      }),
      prisma.blog.count(),
    ]);

    const totalPages = Math.max(1, Math.ceil(totalCount / limit));

    return { blogs, totalPages, currentPage: page };
  } catch (error) {
    console.error("[getBlogs] Failed to fetch blogs:", error);
    return { blogs: [] as Blog[], totalPages: 1, currentPage: page };
  }
}

/**
 * Fetch all published blog posts, newest first, with pagination.
 */
export async function getPublishedBlogs(page = 1, limit = 6): Promise<BlogsResponse> {
  try {
    const skip = (page - 1) * limit;

    const [blogs, totalCount] = await Promise.all([
      prisma.blog.findMany({
        where: { status: "PUBLISHED" },
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
      }),
      prisma.blog.count({
        where: { status: "PUBLISHED" },
      }),
    ]);

    const totalPages = Math.max(1, Math.ceil(totalCount / limit));

    return { blogs, totalPages, currentPage: page };
  } catch (error) {
    console.error("[getPublishedBlogs] Failed to fetch published blogs:", error);
    return { blogs: [] as Blog[], totalPages: 1, currentPage: page };
  }
}

/**
 * Fetch a single published blog post by its slug. Returns null if not found.
 */
export async function getBlogBySlug(slug: string): Promise<Blog | null> {
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
export async function getBlogById(id: string): Promise<Blog | null> {
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
 * This also removes the associated cover image from Supabase Storage 
 * if the image is hosted there.
 */
export async function deleteBlog(id: string) {
  try {
    // ── 1. Fetch blog to get image URL ───────────────────────────────────────
    const blog = await prisma.blog.findUnique({
      where: { id },
      select: { imageUrl: true },
    });

    // ── 2. Delete Image from Storage if it exists ────────────────────────────
    if (blog?.imageUrl) {
      await deleteBlogImage(blog.imageUrl);
    }

    // ── 3. Delete from Database ──────────────────────────────────────────────
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
