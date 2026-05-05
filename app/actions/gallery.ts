"use server"

import { prisma } from "@/app/_utils/prisma"

export async function getGalleryItems() {
  try {
    const items = await prisma.gallery.findMany({
      orderBy: { order: "asc" },
    })
    return items
  } catch (error) {
    console.error("Failed to fetch gallery items:", error)
    throw new Error("Failed to fetch gallery items")
  }
}

export async function updateGalleryOrder(items: { id: string; order: number }[]) {
  try {
    await prisma.$transaction(
      items.map((item) =>
        prisma.gallery.update({
          where: { id: item.id },
          data: { order: item.order },
        })
      )
    )
    return true
  } catch (error) {
    console.error("Failed to update gallery order:", error)
    return false
  }
}
