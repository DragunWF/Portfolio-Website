import { PortfolioData } from "../_types";

// Skills Section
export const CURRENT_FOCUS = [
  "SAP ABAP",
  "Python",
  "TypeScript",
  "React Native",
  "Tailwind CSS",
  "Next.js",
  "Supabase",
  "Prisma ORM",
];

export const FULL_ARCHIVE = [
  ...CURRENT_FOCUS,
  "React",
  "MongoDB",
  "Git",
  ".NET",
  "Flask",
  "Django",
  "Lua",
  "Java",
  "C",
  "HTML",
  "CSS",
  "JavaScript",
  "jQuery",
  "Bootstrap",
  "SQLite",
  "MySQL",
  "Expo",
  "Pygame",
  "Firebase",
  "Selenium",
  "Android Studio",
  "Postman",
  "Express.js",
  "Discord.py",
  "Microsoft SQL Server",
];

// Primary Portfolio Data
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
      url: "#achievements",
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
  skills: {
    currentFocus: CURRENT_FOCUS,
    fullArchive: FULL_ARCHIVE,
  },
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
      description: "(Will update this description after the internship)",
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
        "(Description reserved for future graduation awards and Latin honors).",
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
      description: [
        "Develops and maintains organizational websites (React, Next.js, MongoDB, Django) and Python Discord bots.  ",
        "Provides technical support to ensure seamless execution of events.  ",
      ],
    },
    {
      id: "vol-csg",
      role: "IT Representative | Web Developer",
      startDate: "Apr 2024",
      endDate: "Jun 2025",
      organization: "STI College Ortigas-Cainta: College Student Government",
      description: [
        "Develops and maintains websites for the student organization with React.",
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

export const FOOTER_LINKS = {
  github: "https://github.com/DragunWF",
  linkedin: "https://www.linkedin.com/in/marc-plarisan/",
  email: "plarisanmarc.dev@gmail.com",
};

export const GALLERY_IMAGES = [
  {
    id: "gi-1",
    title: "PyGame Community Winter Jam",
    description:
      "Awarded 1st Place in Theme Integrity for the ChronoFrost project.",
    heightClass: "h-64",
    image: "",
  },
  {
    id: "gi-2",
    title: "Readers Rising Hackathon",
    description:
      "Recognized as a Minor Awardee by the NBDB Philippines for BasaBuddy.",
    heightClass: "h-96",
    image: "",
  },
  {
    id: "gi-3",
    title: "NASA Space Apps Challenge 2024",
    description:
      "Nominated globally for an innovative space technology solution.",
    heightClass: "h-80",
    image: "",
  },
  {
    id: "gi-4",
    title: "Tagisan ng Talino Codefest",
    description:
      "Secured National Finalist and Dual-Champion across local and cluster levels.",
    heightClass: "h-[22rem]",
    image: "",
  },
  {
    id: "gi-5",
    title: "1st Cainta Research Congress",
    description: "Achieved 8th Place with a recognized Best Capstone project.",
    heightClass: "h-64",
    image: "",
  },
];

export const BLOG_POSTS = [
  {
    id: "bp-1",
    title: "Architecting BasaBuddy: Lessons from Readers Rising",
    dateCreated: "Mar 10, 2026",
    dateUpdated: "Mar 15, 2026",
    readTime: "6 min read",
    coverImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    excerpt:
      "Exploring the system design choices that powered our reading comprehension platform. We dive into the robust data architecture that caught the attention of the NBDB Philippines.",
  },
  {
    id: "bp-2",
    title: "Post-Mortem: Winning PyGame Winter Jam with ChronoFrost",
    dateCreated: "Feb 22, 2026",
    dateUpdated: "Feb 23, 2026",
    readTime: "8 min read",
    coverImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    excerpt:
      "A look back at the chaotic 7-day development cycle of ChronoFrost. From core mechanics to achieving 1st place in Theme Integrity.",
  },
  {
    id: "bp-3",
    title: "SAP ABAP & Clean Core: Enterprise Backend Strategies",
    dateCreated: "Jan 15, 2026",
    dateUpdated: "Jan 20, 2026",
    readTime: "5 min read",
    coverImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    excerpt:
      "Modernizing legacy ERP systems using the Clean Core philosophy. How strict boundaries and extensible code keep enterprise software maintainable.",
  },
  {
    id: "bp-4",
    title: "Building CogniTrack: Offline-First Habit Tracking",
    dateCreated: "Dec 05, 2025",
    dateUpdated: "Dec 10, 2025",
    readTime: "7 min read",
    coverImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    excerpt:
      "Tackling the challenge of local-first mobile applications in React Native. Syncing local SQLite with remote Supabase databases elegantly.",
  },
  {
    id: "bp-5",
    title: "The Socratic Method in Competitive Programming",
    dateCreated: "Nov 18, 2025",
    dateUpdated: "Nov 18, 2025",
    readTime: "4 min read",
    coverImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    excerpt:
      "How I apply analytical questioning to break down impossible competitive programming problems. A psychological approach to passing the Tagisan ng Talino Codefest.",
  },
  {
    id: "bp-6",
    title: "Why the M4 MacBook Pro is a Developer's Best Friend",
    dateCreated: "Oct 30, 2025",
    dateUpdated: "Nov 02, 2025",
    readTime: "5 min read",
    coverImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    excerpt:
      "Reviewing Apple's latest silicon from a full-stack engineer's perspective. It handled my Dockerized microservices and Unity builds flawlessly.",
  },
];
