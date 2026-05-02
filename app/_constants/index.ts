import { PortfolioData } from "../_types";

export const PORTFOLIO_DATA: PortfolioData = {
  hero: {
    name: "Marc Plarisan",
    title: "Software Engineer",
    about:
      "I am a software developer who builds websites, mobile apps, and video games. When I'm not coding, you'll find me lost in a good book or jotting down my thoughts in my journal, balancing personal growth with technical curiosity.",
  },
  highlights: [
    {
      id: "codewars",
      label: "CodeWars",
      value: "Top 0.158% Global",
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
    // Programming, Scripting, & Markup Languages
    { id: "sap-abap", name: "SAP ABAP" },
    { id: "py", name: "Python" },
    { id: "java", name: "Java" },
    { id: "cs", name: "C#" },
    { id: "c", name: "C" },
    { id: "lua", name: "Lua" },
    { id: "js", name: "JavaScript" },
    { id: "typescript", name: "TypeScript" },
    { id: "css", name: "CSS" },
    { id: "html", name: "HTML" },

    // Libraries, Frameworks, & Databases
    { id: "express", name: "Express.js" },
    { id: "react", name: "React" },
    { id: "jquery", name: "jQuery" },
    { id: "expo", name: "Expo" },
    { id: "bootstrap", name: "Bootstrap" },
    { id: "flask", name: "Flask" },
    { id: "django", name: "Django" },
    { id: "firebase", name: "Firebase" },
    { id: "mongodb", name: "MongoDB" },
    { id: "sqlite", name: "SQLite" },
    { id: "mysql", name: "MySQL" },
    { id: "sqlserver", name: "SQL Server" },
    { id: "selenium", name: "Selenium" },
    { id: "unity", name: "Unity" },
    { id: "godot", name: "Godot" },
    { id: "pygame", name: "Pygame" },
    { id: "dotnet", name: ".NET" },

    // Environment & Tools
    { id: "git", name: "Git" },
  ],
  experience: [
    {
      id: "accenture-intern",
      role: "Software Engineer Intern",
      company: "Accenture in the Philippines",
      startDate: "Feb 2026",
      endDate: "Present",
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
      title: "Minor Awardee (2nd Highest Placement)",
      event: "Readers Rising Hackathon 2025",
      project:
        "Recognized by the NBDB Philippines and got featured on the national news (Rappler)",
    },
    {
      id: "ach-2",
      tier: 1,
      title: "National Finalist",
      event: "Tagisan ng Talino 2025: Codefest National Level",
      project:
        "Recognized by the whole network of STI Colleges and got on a national news article",
    },
    {
      id: "ach-3",
      tier: 1,
      title: "Champion",
      event: "Tagisan ng Talino 2025: Codefest Cluster Level",
    },
    {
      id: "ach-4",
      tier: 1,
      title: "Champion",
      event: "Tagisan ng Talino 2025: Codefest Local Level",
    },
    {
      id: "ach-5",
      tier: 2,
      title: "Champion",
      event: "Techfest 2025 Python Programming",
    },
    {
      id: "ach-6",
      tier: 2,
      title: "Champion",
      event: "App Development: ICT Week of November 2024",
    },
    {
      id: "ach-7",
      tier: 2,
      title: "1st Place in Theme Integrity",
      event: "PyGame Community Winter Jam 2026",
      project: "ChronoFrost",
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
      title: "Finalist",
      event: "13th & 14th IT Skills Olympics, Python Programming",
    },
    {
      id: "ach-11",
      tier: 2,
      title: "Global Nominee",
      event: "NASA Space Apps Challenge 2024",
    },
    {
      id: "ach-12",
      tier: 2,
      title: "8th Place",
      event: "1st Cainta Research Congress",
    },
    {
      id: "ach-13",
      tier: 2,
      title: "Top 10 Finalist",
      event: "KMC Hackathon 2024",
    },
    {
      id: "ach-14",
      tier: 2,
      title: "Top 20 Finalist",
      event: "AppCon 2024 Hackathon",
    },
  ],
  projects: [
    {
      id: "proj-1",
      title: "GitHub",
      description:
        "A comprehensive collection of my software development projects, encompassing automation tools, desktop applications, full-stack web apps, mobile apps, game development, and AI-powered chatbots.",
      buttonText: "Explore Profile",
      url: "https://github.com/DragunWF",
      platform: "github",
    },
    {
      id: "proj-2",
      title: "Itch.io",
      description:
        "Originally started during my Junior High School years, this page is a collection of my personal game development projects built using Unity, Godot, and PyGame. It highlights my journey through game development as a fun and meaningful side hobby.",
      buttonText: "Enter Realm",
      url: "https://dragunwf.itch.io",
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
