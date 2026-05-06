"use client";

import { usePathname } from "next/navigation";

/**
 * AdminBreadcrumbs component
 *
 * Dynamically generates a breadcrumb string based on the current admin route.
 * Follows the "Arcane Tech" design system with a monospace font.
 */
export default function AdminBreadcrumbs() {
  const pathname = usePathname();

  const getBreadcrumbs = () => {
    if (pathname === "/admin" || pathname === "/admin/") {
      return "Admin / System / Ready";
    }

    const segments = pathname.split("/").filter(Boolean);

    // Safety check: if not in admin area, return default
    if (segments[0] !== "admin") {
      return "System / External / Ready";
    }

    const parts = ["Admin"];

    // The section is the second segment (e.g., "blog", "gallery")
    const section = segments[1];

    if (section === "blog") {
      parts.push("Blog");

      // Determine sub-action
      if (segments.length === 2) {
        parts.push("Dashboard");
      } else if (segments[2] === "new") {
        parts.push("New Post");
      } else {
        parts.push("Editor");
      }
    } else if (section === "gallery") {
      parts.push("Gallery");

      // Determine sub-action
      if (segments.length === 2) {
        parts.push("Grid");
      } else if (segments[2] === "new") {
        parts.push("New Item");
      } else {
        parts.push("Edit Item");
      }
    } else if (section === "messages") {
      parts.push("Communications");
      parts.push("Inbox");
    } else {
      // Fallback: capitalize the segment name
      parts.push(section.charAt(0).toUpperCase() + section.slice(1));
      parts.push("Ready");
    }

    return parts.join(" / ");
  };

  return (
    <span className="text-slate-500 font-mono transition-all duration-300 ease-in-out">
      {getBreadcrumbs()}
    </span>
  );
}
