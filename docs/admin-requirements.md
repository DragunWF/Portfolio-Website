# Admin Panel Requirements Specification

**Project:** DragunWF Portfolio CMS
**Architecture:** Headless Next.js Admin paired with ISR Front-end

## 1. Tech Stack & Infrastructure

- **Framework:** Next.js (App Router)
- **Database:** Supabase (PostgreSQL)
- **ORM:** Prisma
- **Authentication:** Supabase Auth (Email/Password)
- **File Storage:** Supabase Storage (for Blog Covers & Gallery Images)
- **Performance Strategy:** Server Actions triggering `revalidatePath()` upon data mutation to retain Incremental Static Regeneration (ISR) speeds on the public-facing portfolio.

## 2. Design System: "Arcane Tech"

- **Theme:** Deep dark mode, terminal-inspired, keyboard-centric.
- **Global Background:** Existing "Arcane" animated background overlaying `bg-slate-950`.
- **Primary Text:** `text-slate-300` (sans-serif for UI, serif for reading).
- **Muted Text:** `text-slate-500` (for breadcrumbs, disabled links).
- **Accent Color:** `emerald-500` (used sparingly for active states, borders, and primary actions).
- **Components:** Heavy use of Deep Glass (`backdrop-blur-xl`, `bg-slate-900/30`) over solid modals.

## 3. Global Layout Architecture

The `/admin` route is wrapped in a dedicated layout featuring two distinct zones to maximize horizontal workspace.

**A. Persistent Left Sidebar (Fixed 250px)**

- **Header:** "DragunWF Admin" branding + link back to live portfolio.
- **Navigation Groups:**
  - `Portfolio Data`: (Locked/Disabled for V1) Displays Padlock icon.
  - `Engineering Notes`: "All Notes", "Write New Entry".
  - `Media Vault`: "Event Gallery", "Bulk Upload".
- **Footer:** System status indicator (pulsing emerald dot "Supabase: Connected") and Logout button.

**B. Main Workspace (Flex-1)**

- **Top HUD (Sticky Header):**
  - Left: Dynamic Breadcrumbs (e.g., `Admin / Notes / Edit`).
  - Center: Command Palette trigger (`Cmd + K` search).
  - Right: Contextual Action Button (e.g., "Save to Draft", "Publish").
- **Content Area:** Scrollable container for Data Tables or full-screen Editor.

## 4. Authentication Module (`/admin/login`)

- **Aesthetic:** "Deep Glass".
- **UI Container:** A centered, heavy frosted-glass card (`backdrop-blur-2xl`) sitting over the Arcane background with subtle emerald/slate ambient orbs.
- **Form Details:**
  - Email and Password only.
  - Minimalist, borderless inputs with left-aligned Lucide icons (`Mail`, `Key`).
  - **UX Requirement:** Email input must have `autoFocus` enabled on mount for instant keyboard entry.
- **Security:** Invalid attempts show a subtle red border/text; successful login redirects to `/admin/notes`.

## 5. Active Modules (V1 Build)

### Module A: Engineering Notes (Blog CMS)

- **List View (`/admin/notes`):** A reusable `<DataTable>` showing Title, Status (Draft/Published), Read Time, Date, and Edit/Delete actions.
- **Editing Approach:** **Dedicated Page Routing** (`/admin/notes/[id]`).
- **The Editor:**
  - Must be a distraction-free, full-screen markdown environment.
  - Supports standard Markdown shortcuts for headers, blockquotes, and code blocks (optimized for 144+ WPM typing).
  - Includes a dedicated drag-and-drop zone at the top for uploading the `coverImage` directly to Supabase Storage.

### Module B: Media Vault (Gallery CMS)

- **Grid View (`/admin/gallery`):** A masonry or strict grid view mirroring the public site, but with admin overlays (Delete, Edit Metadata).
- **Upload Approach:** A massive drag-and-drop zone at the top of the gallery view allowing for bulk uploads.
- **Data Handling:** Images upload to Supabase Storage; returned URLs and metadata (Event Title) are saved via Prisma to the Gallery table.

## 6. Stubbed Modules (V2 Roadmap)

- **Scope:** Skills Matrix, Professional Experience, Education, Achievements, Volunteering.
- **UI Approach (Future):** These will utilize the reusable `<DataTable>`. However, instead of Dedicated Pages, they will use **Slide-Out Drawers** (Right-side modals) for rapid, contextual CRUD operations to keep the user anchored to the list view.
- **Current State:** Visible in the sidebar but styled with `opacity-60`, `cursor-not-allowed`, and a Lock icon.

## 7. Security Rules

- All `/admin` routes must be protected via Next.js Middleware checking for a valid Supabase Auth session token.
- Unauthenticated users attempting to access `/admin/*` are immediately redirected to `/admin/login`.
