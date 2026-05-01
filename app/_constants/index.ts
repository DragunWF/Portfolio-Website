import { PortfolioData } from "../_types";

export const PORTFOLIO_DATA: PortfolioData = {
  hero: {
    name: "Marc Plarisan",
    title: "Software Engineer",
    about:
      "Driven by complex logic and the thrill of competitive building. What started as a self-taught obsession with game development has evolved into a career spanning full-stack architecture and enterprise-grade backend systems. I specialize in crafting clean, scalable solutions (Clean Core philosophy), always looking to solve the next 'impossible' problem.",
  },
  highlights: [
    {
      id: "codewars",
      label: "CodeWars",
      value: "Top 0.165% Global",
      url: "https://www.codewars.com/users/DragunWF",
      iconName: "code",
    },
    {
      id: "monkeytype",
      label: "MonkeyType",
      value: "150+ WPM",
      url: "https://monkeytype.com/profile/DragunWF",
      iconName: "keyboard",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "Professional Profile",
      url: "https://linkedin.com/in/marc-plarisan",
      iconName: "linkedin",
    },
    {
      id: "hackathons",
      label: "Track Record",
      value: "6x Hackathon Winner",
      iconName: "trophy",
    },
    {
      id: "news",
      label: "National Recognition",
      value: "Featured on Rappler",
      url: "https://www.rappler.com/bulletin-board/events/winners-nbdb-philippines-hackathon-2025",
      iconName: "newspaper",
    },
  ],
  skills: [
    { id: "ts", name: "TypeScript" },
    { id: "react-native", name: "React Native" },
    { id: "express", name: "Express.js" },
    { id: "prisma", name: "Prisma ORM" },
    { id: "supabase", name: "Supabase" },
    { id: "python", name: "Python" },
    { id: "sap-abap", name: "SAP ABAP" },
    { id: "unity", name: "Unity" },
  ],
  experience: [
    {
      id: "accenture-intern",
      role: "Software Engineer Intern",
      company: "Accenture Philippines",
      startDate: "Feb 2026",
      endDate: "May 2026",
      skills: [
        "SAP ABAP",
        "Enterprise Systems Development",
        "Backend Development",
        "ERP Systems",
      ],
    },
  ],
  education: [
    {
      id: "sti",
      institution: "STI College Ortigas-Cainta",
      degree: "Bachelor of Science in Information Technology",
      startDate: "Sep 2022",
      endDate: "Present",
      details:
        "(Placeholder text reserved for future graduation awards and Latin honors).",
    },
  ],
  volunteering: [
    {
      id: "vol-alpha",
      role: "Software Development Associate",
      startDate: "Aug 2025",
      endDate: "Jan 2026",
      organization:
        "ALPHA: Alliance of Leading Programmers through Heuristic Adaptation",
      description:
        "Assigned as a Software Development Associate in an IT student organization in STI Ortigas-Cainta named ALPHA, responsible for building, maintaining, and enhancing digital platforms to improve member engagement and support event operations.",
    },
    {
      id: "vol-csg",
      role: "IT Representative | Web Developer",
      startDate: "Apr 2024",
      endDate: "Jun 2025",
      organization: "STI College Ortigas-Cainta: College Student Government",
      description: [
        "Develops and maintains websites for the student organization.",
        "Provides technical support and manpower assistance for various campus-wide events, including seminars, competitions, talent shows, hackathons, and special activities.",
        "Acts as a representative and advocate for IT students in the student council.",
      ],
    },
  ],
  achievements: [
    {
      id: "ach-1",
      tier: 1,
      title: "1st Place",
      event: "PyGame Community Winter Jam",
      project: "ChronoFrost",
    },
    {
      id: "ach-2",
      tier: 1,
      title: "National News Feature (Rappler) & Minor Awardee",
      event: "Readers Rising Hackathon 2025",
      project: "BasaBuddy, recognized by the NBDB Philippines",
    },
    {
      id: "ach-3",
      tier: 1,
      title: "Global Nominee",
      event: "NASA Space Apps Challenge 2024",
    },
    {
      id: "ach-4",
      tier: 1,
      title: "National Finalist & Dual-Champion (Local/Cluster)",
      event: "Tagisan ng Talino 2025: Codefest",
    },
    {
      id: "ach-5",
      tier: 2,
      title: "Best Capstone & 8th Place",
      event: "1st Cainta Research Congress",
    },
    {
      id: "ach-6",
      tier: 2,
      title: "Champion",
      event: "Techfest 2025 Python Programming",
    },
    {
      id: "ach-7",
      tier: 2,
      title: "Champion",
      event: "App Development: ICT Week of November 2024",
    },
    {
      id: "ach-8",
      tier: 2,
      title: "1st Runner-Up",
      event: "Tagisan ng Talino 2024: Codefest Local Level",
    },
    {
      id: "ach-9",
      tier: 2,
      title: "1st Runner-Up",
      event: "App Development: ICT Week of June 2024",
    },
    {
      id: "ach-10",
      tier: 2,
      title: "Top 10 Finalist",
      event: "KMC Hackathon 2024",
    },
    {
      id: "ach-11",
      tier: 2,
      title: "Top 20 Finalist",
      event: "AppCon 2024 Hackathon",
    },
    {
      id: "ach-12",
      tier: 2,
      title: "Finalist",
      event: "13th & 14th IT Skills Olympics, Python Programming",
    },
  ],
  projects: [
    {
      id: "proj-1",
      title: "GitHub",
      description:
        "Explore my open-source repositories and Clean Core implementations.",
      buttonText: "View Source Code",
      url: "https://github.com/marcplarisan",
      platform: "github",
    },
    {
      id: "proj-2",
      title: "Itch.io",
      description: "Play my latest indie game builds.",
      buttonText: "Enter Realm",
      url: "https://marcplarisan.itch.io",
      platform: "itchio",
    },
  ],
  blogs: [
    {
      id: "blog-1",
      title: "Implementing Clean Architecture in React Native",
      imageUrl: "/images/blog1.jpg",
      url: "/blog/clean-architecture",
    },
    {
      id: "blog-2",
      title: "The Making of BasaBuddy",
      imageUrl: "/images/blog2.jpg",
      url: "/blog/making-of-basabuddy",
    },
  ],
  gallery: [
    {
      id: "gal-1",
      imageUrl: "/images/gallery1.jpg",
      altText: "Hackathon event",
    },
    { id: "gal-2", imageUrl: "/images/gallery2.jpg", altText: "Seminar event" },
    {
      id: "gal-3",
      imageUrl: "/images/gallery3.jpg",
      altText: "Networking event",
    },
    { id: "gal-4", imageUrl: "/images/gallery4.jpg", altText: "Another event" },
  ],
};
