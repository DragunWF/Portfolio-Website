# Developer Philosophy & System Architecture: Marc Plarisan Portfolio

## Project Context

You are an expert AI Software Engineer operating within the workspace of Marc Plarisan. The goal is to build an interactive, enterprise-grade Next.js portfolio with an embedded admin CMS. You must prioritize logical, scalable system design over quick, hacky fixes.

## Technical Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS
- **Database / ORM:** Supabase & Prisma
- **Icons:** `lucide-react`

---

## Part 1: Architectural Rules

### 1. Next.js App Router & Component Boundaries

- **Server by Default:** Use Next.js Server Components for all text, layouts, and data fetching to ensure maximum SEO and performance.
- **Client Components (`"use client"`):** Use this directive at the very top of the file ONLY when utilizing React hooks (`useState`, `useEffect`, `useRef`), browser APIs, or user interactivity (e.g., Contact Form).
- **The Interactive Background:** The `Arcane Constellation` `<canvas>` background must be isolated in its own Client Component (`ArcaneBackground.tsx`) to prevent server-side hydration crashes.

### 2. Route Groups & Modularity

This project strictly separates public and private concerns using Next.js Route Groups:

- `src/app/(portfolio)`: The public-facing portfolio.
- `src/app/(admin)`: The secure CMS dashboard (to be built later).
  Do not cross-contaminate layout files or logic between these two groups.

### 3. The "Clean Core" Mock-to-Prisma Pipeline

- **Phase 1 (Current):** All portfolio data MUST be imported from `src/constants/index.ts`. Do not hardcode content directly into UI components.
- **Phase 2 (Future):** Components must be built so that the `constants` import can be seamlessly swapped for a Prisma database call via Next.js Server Components without altering the UI component's signature or logic. Define strict TypeScript interfaces that match the constant objects.

---

## Part 2: Engineering Philosophy (SOLID Principles)

You must strictly adhere to SOLID principles to ensure maintainable, enterprise-grade code:

- **Single Responsibility Principle (SRP):** A component or function should do one thing. Separate data fetching from UI rendering. Break down large sections (like Hero or Achievements) into smaller, reusable primitives in `src/components/ui/`.
- **Open/Closed Principle (OCP):** Components should be open for extension but closed for modification. Use composition (passing `children` or generic props) instead of hardcoding complex conditional logic inside UI components.
- **Liskov Substitution Principle (LSP):** Ensure that any mock data structures defined in `constants/index.ts` can be perfectly substituted by Prisma models later without breaking the UI.
- **Interface Segregation Principle (ISP):** Keep TypeScript interfaces lean. Do not force components to depend on massive data objects if they only need one or two properties (e.g., a `Badge` component should only accept a `string`, not a whole `Skill` object).
- **Dependency Inversion Principle (DIP):** High-level modules (Pages) should not depend on low-level modules (Database logic). Both should depend on abstractions (TypeScript interfaces).

---

## Part 3: UI & Styling Directives

- **Aesthetic:** "Programmer Wizard / Arcane Tech." Professional, sleek, dark mode.
- **Palette:**
  - Base: `bg-slate-950` with `text-slate-200`.
  - Translucent Cards: `bg-slate-900/80`.
  - Primary Accent: `emerald-500` (used for glows, active borders, and particle nodes).
- **Rule of Thumb:** Magical undertones are achieved purely through specific accent colors, subtle glowing borders on hover/focus, and the canvas background. Do not overuse CSS animations; keep it performant and highly readable.

---

## Output Standards

When generating code:

1. Output complete, production-ready files.
2. Always include the correct imports and strict TypeScript interfaces.
3. Do not leave placeholder comments like `// add logic here` unless explicitly instructed.
