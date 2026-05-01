# System Architecture: Marc Plarisan Interactive Portfolio & CMS

## 1. System Overview

This project is a monolithic Next.js App Router application that contains two logically separated sub-applications within a single repository:

1.  **The Public Portfolio:** A highly optimized, read-only frontend for recruiters and engineering managers.
2.  **The Admin CMS:** A secure, authenticated dashboard for managing portfolio content without touching the codebase.

The system adheres to "Clean Core" principles, maintaining strict decoupling between the user interface, business logic, and the data layer.

---

## 2. The Public Portfolio (`/app/(portfolio)`)

**Primary Goal:** Speed, SEO, and visual impact.
**Access:** Public (Read-only).

- **Architecture:** Built primarily with Next.js Server Components. It fetches data directly from the database (or mock constants during Phase 1) and renders it on the server before shipping HTML to the client.
- **Routing Structure:**
  - `/` (Home): The main single-page scroll experience (Hero, Experience, Highlights, Contact).
  - `/blog`: A dedicated index page listing all published developer logs and articles.
  - `/gallery`: A dedicated masonry gallery page showcasing all hackathon, seminar, and networking photos.
- **Interactivity:** Client Components (`"use client"`) are strictly isolated to interactive islands, such as the `ArcaneBackground` canvas and the contact form.
- **Data Flow:** Unidirectional. It only reads data; it never mutates it.
- **Detailed Specs:** See `PORTFOLIO_PRD.md` for exact UI/UX and content requirements.

---

## 3. The Admin CMS (`/app/(admin)`)

**Primary Goal:** Secure, frictionless content management.
**Access:** Private (Protected by Supabase Auth).

- **Architecture:** A protected dashboard utilizing Next.js Middleware to block unauthorized access.
- **Features:**
  - **Experience Manager:** Add/edit/remove professional experience and skills.
  - **Devlog/Blog Editor:** Draft, edit, and publish markdown-based blog posts.
  - **Achievement & Gallery Tracker:** Update hackathon wins and manage gallery image URLs.
- **Data Flow:** Bidirectional. This route utilizes Next.js Server Actions to securely mutate the Prisma database.

---

## 4. The Data Layer (Supabase & Prisma)

The application uses a headless architecture for data management.

- **Database:** Supabase (PostgreSQL) acts as the primary data store.
- **ORM:** Prisma is used for strict type-safety and schema modeling.
- **Phase 1 (Current):** Data is mocked in `src/constants/index.ts` to allow for rapid UI development without database bottlenecks.
- **Phase 2 (Integration):** The mock `constants` will be seamlessly replaced by Prisma Client calls within the Next.js Server Components. The UI components will not need to change, as they rely on strict TypeScript interfaces, not the data source itself.

---

## 5. High-Level Directory Structure

```text
src/
├── app/
│   ├── (portfolio)/       # Public routes
│   │   ├── page.tsx       # Main landing page (Portfolio overview)
│   │   ├── blog/          # "View All Blogs" route
│   │   └── gallery/       # "View Full Gallery" route
│   ├── (admin)/           # Protected routes (Dashboard, Editor)
│   ├── api/               # External API endpoints (if required)
│   └── layout.tsx         # Root layout (Global providers)
├── components/
│   ├── portfolio/         # UI components strictly for the public site
│   ├── admin/             # UI components strictly for the CMS (Tables, Forms)
│   └── ui/                # Shared atomic primitives (Buttons, Inputs, Cards)
├── lib/
│   ├── prisma.ts          # Prisma client instantiation
│   └── supabase.ts        # Supabase auth/storage client
└── types/                 # Shared TypeScript interfaces (mirrors Prisma schema)
```
