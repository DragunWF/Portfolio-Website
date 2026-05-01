# Product Requirements Document: Developer Portfolio

## 1. Project Overview

- **Project Name:** Marc Plarisan - Interactive Developer Portfolio
- **Target Audience:** Engineering managers, technical recruiters, and potential indie game collaborators.
- **Core Objective:** Showcase enterprise-level backend expertise (SAP/Clean Core) alongside highly competitive programming metrics and indie game development achievements.
- **Design Aesthetic:** "Programmer Wizard / Arcane Tech." Professional and sleek, but with distinct, state-driven magical undertones.

## 2. Technical Stack

- **Tech Stack:** React, Next.js, TypeScript, Supabase, Prisma ORM, and Tailwind CSS.
- **Icons:** `lucide-react`
- **Animations/Effects:** Native HTML5 `<canvas>` with React `useEffect` for the background.

## 3. Design System & Global Mechanics

### Color Palette (State-Driven)

- **Base (Static):** Very dark slate/black (`bg-slate-950`).
- **Cards/Containers:** Lighter translucent overlays (`bg-slate-900/80`).
- **Typography:** Off-white (`text-slate-200`) for primary text, muted slate for secondary text.
- **Theme: Earth/Alchemy:** Emerald Green accents (`emerald-500`) applied to glowing borders, highlighted text, and background particles.

### Global Features

1.  **Sticky Navigation:** Top navigation bar with smooth-scroll anchor links matching the exact section titles.
2.  **Background - "Arcane Constellation":**
    - A `<canvas>` background spanning the entire viewport.
    - Drifting nodes that draw connecting lines when in close proximity to each other.
    - Nodes subtly react to mouse cursor proximity.
    - Colors and lines strictly follow the active theme (Emerald or Cyan) at low opacity (30-40%).

---

## 4. Content Architecture & Section Specifications

### 1. Hero Section

- **Layout Constraint:** DO NOT use any small text, pre-titles, or badges above the name.
- **Name:** Marc Plarisan
- **Title:** Software Engineer
- **About Copy:** "Driven by complex logic and the thrill of competitive building. What started as a self-taught obsession with game development has evolved into a career spanning full-stack architecture and enterprise-grade backend systems. I specialize in crafting clean, scalable solutions (Clean Core philosophy), always looking to solve the next 'impossible' problem."

### 2. Socials & Highlights (Hero Cards)

- **Layout:** Horizontal row of sleek stat/link cards directly below the hero text.
- **Items:**
  - **LinkedIn:** Link to professional profile.
  - **CodeWars:** "Top 0.165% Global" (1,500+ Katas solved).
  - **MonkeyType:** "150+ WPM".
  - **Track Record:** "6-Time Hackathon Winner".
  - **National Recognition:** "Featured on National News (Rappler) by the National Book Development Board".

### 3. Skills

- **Layout:** Grid layout using modern badging or icons.
- **Technologies:** TypeScript, React Native, Express.js, Prisma ORM, Supabase, Python, SAP ABAP, Unity.

### 4. Professional Experience

- **Layout:** Prominent, full-width (or max-width) dedicated section.
- **Role:** Software Engineer Intern
- **Company:** Accenture Philippines
- **Dates:** Feb 2026 - May 2026
- **Skills Used:** Display as a row of sleek tags/badges (e.g., `SAP ABAP`, `Enterprise Systems Development`, `Backend Development`, `ERP Systems`).

### 5. Education

- **Layout Constraint:** Prominent, full-width dedicated section. Must be on its own row.
- **Institution (Primary):** STI College Ortigas-Cainta
- **Degree (Secondary):** Bachelor of Science in Information Technology
- **Dates:** Aug 2022 - Present
- **Details:** _(Placeholder text reserved for future graduation awards and Latin honors)._

### 6. Volunteering Organizations

- **Layout Constraint:** Prominent, full-width dedicated section. Must be on its own row.
- **Items:**
  - **Role:** Software Development Associate
    **Organization:** ALPHA: Alliance of Leading Programmers through Heuristic Adaptation
    **Description:** Assigned as a Software Development Associate in an IT student organization in STI Ortigas-Cainta named ALPHA, responsible for building, maintaining, and enhancing digital platforms to improve member engagement and support event operations.
  - **Role:** IT Representative | Web Developer
    **Organization:** STI College Ortigas-Cainta: College Student Government
    **Description:**
    - Develops and maintains websites for the student organization.
    - Provides technical support and manpower assistance for various campus-wide events, including seminars, competitions, talent shows, hackathons, and special activities.
    - Acts as a representative and advocate for IT students in the student council.

### 7. Achievements

- **Layout:** Clean, tiered visual hierarchy. Strictly Placement + Competition Name.
- **Tier 1 (Major Wins & Features - Large Cards):**
  - 1st Place — PyGame Community Winter Jam (ChronoFrost)
  - National News Feature (Rappler) & Minor Awardee — Readers Rising Hackathon 2025 (BasaBuddy, recognized by the NBDB Philippines)
  - Global Nominee — NASA Space Apps Challenge 2024
  - National Finalist & Dual-Champion (Local/Cluster) — Tagisan ng Talino 2025: Codefest
- **Tier 2 (Podiums & Placements - Dense Grid/List):**
  - Best Capstone & 8th Place — 1st Cainta Research Congress
  - Champion — Techfest 2025 Python Programming
  - Champion — App Development: ICT Week of November 2024
  - 1st Runner-Up — Tagisan ng Talino 2024: Codefest Local Level
  - 1st Runner-Up — App Development: ICT Week of June 2024
  - Top 10 Finalist — KMC Hackathon 2024
  - Top 20 Finalist — AppCon 2024 Hackathon
  - Finalist — 13th & 14th IT Skills Olympics, Python Programming
- **Action Buttons (Bottom of Section):**
  - "View Achievement Gallery" (Currently visual only).
  - "View Certifications on LinkedIn" (External link).

### 8. Projects

- **Layout:** Two distinct external link cards.
- **Card A (GitHub):** "Explore my open-source repositories and Clean Core implementations." (Button: View Source Code)
- **Card B (Itch.io):** "Play my latest indie game builds." (Button: Enter Realm)

### 9. Blog

- **Layout:** 2 placeholder cards for future devlogs.
- **Requirements:** Each card must include a designated top area for a thumbnail/cover image.
- **Content Examples:** "Implementing Clean Architecture in React Native", "The Making of BasaBuddy".
- **Action Button:** "View All Blogs" (Currently visual only).

### 10. Gallery

- **Layout:** A visually engaging masonry or grid layout of photos.
- **Content:** 4-6 placeholder images representing you at hackathons, seminars, and networking events.
- **Action Button:** A prominent button at the bottom labeled "View Full Gallery" (Currently visual only).

### 11. Contact

- **Layout:** Sleek, modern form.
- **Fields:** Name, Email, Message.
- **Button:** Submit.
- **Interaction:** Input field borders must glow with the active theme color upon user focus.

### 12. Footer

- **Layout:** Minimalist block at the bottom.
- **Content:** Copyright notice (e.g., © 2026 Marc Plarisan) and a clean row of social icons (GitHub, LinkedIn, Email).
