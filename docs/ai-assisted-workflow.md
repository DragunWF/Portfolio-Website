# AI-Assisted UI/UX and Feature Development Workflow

**Purpose**: This document outlines the standard operating procedure for designing, prototyping, and implementing new features, pages, or database interactions within the **Arcane Tech Portfolio**. The goal is to prevent premature integration of unverified code, enforce strict Next.js App Router boundaries, protect Lighthouse performance scores, and optimize resource allocation within Google Antigravity.

---

## Phase 1: Ideation & Concept Generation

Before any code is written or database schemas are modified, the architectural approach and user experience must be strictly defined.

- **User Action**: Provide the AI with raw specifications, feature concepts, or a wireframe layout for a specific view or server action.
- **AI Directive**: The AI must respond with a categorized list of conceptual approaches. These suggestions must include:
  - **Visual Layouts**: How the screen elements or data structures should be organized for responsive web interfaces, with a focus on desktop command-center aesthetics.
  - **Psychological Framing**: How the design reinforces the elite developer/digital wizard persona (e.g., mimicking terminal interfaces, minimizing layout shift via skeletons).
  - **Thematic Alignment**: How it integrates with the established "Arcane Tech" aesthetic—deep slate backgrounds (`bg-slate-950`), high-visibility emerald green accents, and glassmorphism components.
- **Outcome**: The user selects one specific concept or refined feature scope to advance to the sandbox.

---

## Phase 2: The Prototype Sandbox (Gemini Canvas / v0)

Once a concept is selected, its visual and layout parameters are verified in an isolated environment before generating actual React components for the main codebase.

- **User Action**: Command the AI to "Generate a prototype prompt for [Selected Concept]."
- **AI Directive**: The AI must output a strict, highly detailed prompt optimized for **Gemini Canvas**, **v0.dev**, or **bolt.new**.
- **Prototype Prompt Constraints**:
  - **Self-Contained React Component**: Must render as a single, fully functional React component using Tailwind CSS.
  - **Zero External Dependencies**: Use standard Lucide React icons. Avoid external image assets unless specifically testing Next.js `<Image>` fallbacks. For complex animations (like glowing runes or sweeps), inject standard HTML `<style>` tags with custom keyframes directly inside the component to ensure it runs standalone.
  - **State Simulation**: Use lightweight React state (`useState`, `useEffect`) solely for interactive simulation (e.g., hovering on a gallery card, toggling a command menu). No backend fetching.
  - **Focus**: Purely for aesthetic evaluation, testing staggered Framer Motion timings, copy validation, and verifying Tailwind utility mapping.
- **Outcome**: The user reviews and refines the interactive mockup. Spacing variables, typography hierarchies (sans-serif/mono), and emerald glow effects are locked in.

---

## Phase 3: Project Implementation & Model Selection

Once the visual layout is verified, the design and underlying requirements are ported into the codebase. This step enforces strict compliance with the Next.js App Router architecture and selects the optimal engine within Google Antigravity for the task.

### 1. Intelligence Allocation (Model Selection & Ranking)

Before generating the engineering prompt, the AI assistant must evaluate the engineering complexity of the task (e.g., UI component vs. Prisma ORM mutations) and output a ranked recommendation from the available **Google Antigravity** model pool:

- Gemini 3.5 Flash (Low)
- Gemini 3.5 Flash (Medium)
- Gemini 3.5 Flash (High)
- Gemini 3.1 Pro (Low)
- Gemini 3.1 Pro (High)
- Claude Sonnet 4.6 (Thinking)
- Claude Opus 4.6 (Thinking)

The assistant will categorize the task and rank the top 3 models using the following evaluation framework:

- **High-Context Boilerplate / Simple UI Layouts**: Favor efficiency (e.g., _Gemini 3.5 Flash High/Medium_). Ideal for static pages or standard Tailwind structural updates.
- **Complex Data Mutations / Prisma Schema Updates / Server Actions / Supabase Storage**: Favor reasoning depth (e.g., _Claude Sonnet 4.6 Thinking_ or _Gemini 3.1 Pro High_).

### 2. Implementation Prompt Constraints

The AI then outputs a precision prompt tailored to the top-ranked model to execute code integration. The prompt must enforce:

- **Adherence to Next.js App Router Paradigms**: Enforce explicit separation across the layers:
  - **Routing & Loading**: Utilize `page.tsx`, `layout.tsx`, and `loading.tsx` (for skeletons/spinners) correctly within the `app/` directory.
  - **Data Mutations**: Use strictly typed Next.js Server Actions (`actions/`) for database operations, implementing `revalidatePath` to clear cache.
  - **UI Components**: Encapsulate reusable visual elements (cards, dialogs, buttons) in the `_components/ui/` directory.
- **Tech Stack Alignment**: Strict usage of Next.js Server/Client component boundaries (`"use client"` only when necessary), TypeScript types, Prisma ORM queries, Supabase bucket interactions, and `LazyMotion` for Framer Motion to preserve bundle size.
- **No Black-Box Architectures**: All code modifications must provide complete, copy-pasteable file definitions rather than generic placeholders, ensuring existing Tailwind structural classes are preserved.

- **Outcome**: A modular, type-safe, and visually verified Next.js feature is successfully integrated into the Arcane Tech portfolio.
