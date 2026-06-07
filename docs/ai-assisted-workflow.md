# AI-Assisted UI/UX Web Development Workflow

**Purpose**: This document outlines the standard operating procedure for designing, prototyping, and implementing new features or UI components. The goal is to prevent premature integration of unverified code and maintain strict architectural integrity within the web application.

## Phase 1: Ideation & Concept Generation

Before any code is written, the architectural approach and user experience must be defined.

- **User Action**: Provide the AI with the raw requirements or a list of desired features for a specific page, layout, or component.
- **AI Directive**: The AI must respond with a categorized list of conceptual approaches. These suggestions must include:
  - **Visual Layouts**: How the UI should be structured.
  - **Psychological Framing**: How the design impacts user behavior (e.g., friction, reward loops).
  - **Thematic Alignment**: How it fits the established project aesthetic (e.g., Dark slate, emerald accents, glassmorphism).
- **Outcome**: The user selects one specific concept to move forward with.

---

## Phase 2: The Sandbox Prototype

Once a concept is selected, it must be visually verified in an isolated environment before touching the project codebase.

- **User Action**: Command the AI to "Generate a prototype prompt for [Selected Concept]."
- **AI Directive**: The AI must output a strict, highly detailed prompt designed specifically for an AI sandbox environment (like Gemini Canvas).
- **Prototype Prompt Constraints**:
  - **Self-Contained**: Must be a standalone React component or a single HTML file using Tailwind CSS via CDN.
  - **Zero Dependencies**: No external images or stylesheets; use SVGs and inline configurations.
  - **Isolated Logic**: Use simple React state (or Vanilla JS if using HTML) solely for demonstrating UI state changes (e.g., modal toggles, active states, tab switching). No complex application logic, external data fetching, or routing.
  - **Focus**: Purely for aesthetic review, structural layout, and verifying Tailwind utility classes.
- **Outcome**: The user tests the generated prototype in the sandbox. Adjustments to colors, spacing, layout, and copy are made here.

---

## Phase 3: Project Implementation (The Architecture)

Once the sandbox prototype is visually approved, the validated design is ported into the actual codebase under strict engineering standards.

- **User Action**: Command the AI to "Generate the prompt for the actual implementation of this prototype."
- **AI Directive**: The AI must output a precision prompt instructing a coding assistant (e.g., Cursor, Copilot) to integrate the UI into the project.
- **Implementation Prompt Constraints**:
  - **Adherence to Project Rules**: Must explicitly reference local architecture guidelines (Clean Architecture, SOLID, DRY).
  - **Tech Stack**: Must specify the Next.js + TypeScript + Tailwind CSS configuration.
  - **Separation of Concerns**: Must maintain a strict boundary between Server Components (for data fetching and SEO) and Client Components (`"use client"` for interactivity). Presentation markup should be decoupled from complex business logic, utilizing custom hooks for state and side effects.
  - **No Black-Box Logic**: The generated prompt must require the AI to write modular components, extract reusable UI elements, avoid monolithic files, and define strict TypeScript interfaces for all props and state.
  - **Platform Specifics**: Must account for Next.js optimizations and constraints (e.g., utilizing `next/image` for assets, `next/link` for navigation, proper routing paradigms, and avoiding browser-only APIs in server contexts).
- **Outcome**: A modular, highly performant, and visually verified component is seamlessly integrated into the Next.js application.
