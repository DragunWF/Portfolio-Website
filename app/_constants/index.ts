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
      value: "Top 0.158% Globally",
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
      id: "accenture-group",
      company: "Accenture",
      logoUrl: "/accenture-logo.jpg",
      location: "National Capital Region, Philippines",
      roles: [
        {
          id: "accenture-ase",
          role: "Associate Software Engineer",
          startDate: "Jul 2026",
          endDate: "Present",
          employmentType: "Full-time",
          locationType: "Hybrid",
          skills: [
            "Salesforce",
            "CRM Systems",
            "Apex",
            "JavaScript",
            "HTML",
            "CSS",
            "Git",
            "SOQL",
            "VisualForce",
            "Lightning Web Components (LWC)",
            "REST APIs",
            "SOAP APIs",
            "Waterfall Methodology",
            "Agile Methodology",
            "SCRUM",
          ],
          description: [
            "Will update this description after gaining more experience",
          ],
        },
        {
          id: "accenture-intern",
          role: "Software Engineer Intern",
          startDate: "Feb 2026",
          endDate: "Jun 2026",
          employmentType: "Internship",
          locationType: "Remote",
          skills: [
            "SAP ABAP",
            "ERP Systems",
            "OpenSQL",
            "SAP GUI",
            "SAP S/4HANA",
            "ALV Reports",
            "SAP RAP (RESTful Application Programming Model)",
            "Core Data Services (CDS)",
            "Clean Core",
            "SAP BTP (Business Technology Platform)",
          ],
          description: [
            "Completed the Accenture SAP Advanced Business Application Programming (ABAP) Academy internship program (OJT), building expertise in classical SAP ABAP development with SAP GUI.",
            "Executed the full software development lifecycle (SDLC) during a collaborative technical case study as a leader, managing requirements analysis, debugging, testing, and transport logistics and successfully passing the evaluation to officially be tagged as an Accenture Academy Internship Program Completer.",
            "Attained the SAP Certified Implementation Consultant for End-to-End Business Processes (C_IEE2E) certificate, effectively bridging technical execution with core business process integration.",
            "Developed robust backend solutions utilizing Object-Oriented ABAP, ALV Reports, and custom Function Modules.",
            "Built cloud-ready applications on SAP BTP using ADT in Eclipse, leveraging CDS Views, OData Services, and the RESTful ABAP Programming Model (RAP).",
          ],
        },
      ],
    },
  ],
  education: [
    {
      id: "sti",
      institution: "STI College Ortigas-Cainta",
      degree: "Bachelor of Science in Information Technology",
      startDate: "Sep 2022",
      endDate: "Jul 2026",
      logoUrl: "/sti-logo.jpg",
      grade: {
        honor: "Magna Cum Laude",
      },
      achievements: [
        {
          id: "edu-ach-1",
          title: "Best Capstone",
          description:
            "Selected as the top capstone project and represented the institution at the 1st Cainta Research Congress to compete against other leading capstone/thesis projects from other universities.",
          emoji: "🥇",
        },
        {
          id: "edu-ach-2",
          title: "National Finalist & 2x Champion (Cluster/Local)",
          description: "Tagisan ng Talino Codefest 2025",
          emoji: "🏆",
        },
        {
          id: "edu-ach-3",
          title: "Minor Awardee (2nd Highest Award)",
          description:
            "Readers Rising Hackathon 2025 (Project featured on national news via Rappler)",
          emoji: "🥈",
        },
        {
          id: "edu-ach-4",
          title: "Global Nominee",
          description: "NASA International Space Apps Challenge 2024 Hackathon",
          emoji: "🌍",
        },
        {
          id: "edu-ach-5",
          title: "Top Finalist in National Hackathons",
          description: "AppCon 2024 (Top 20) & KMC Hackathon 2024 (Top 10)",
          emoji: "🌟",
        },
        {
          id: "edu-ach-6",
          title: "4x Champion & 6x Finalist/Medalist",
          description:
            "Collegiate hackathons & competitive programming contests (IT Skills Olympics, etc)",
          emoji: "💻",
        },
        {
          id: "edu-ach-7",
          title: "Service Awardee in Academics",
          description:
            "Represented the school on multiple local, regional, & national competitions and won placements.",
          emoji: "🎖️",
        },
        {
          id: "edu-ach-8",
          title: "Consistent President's Honor Lister",
          description:
            "Maintained a high academic standing throughout multiple semesters (Jan 2023 - Jul 2026)",
          emoji: "⭐",
        },
        {
          id: "edu-ach-9",
          title: "Software Development Associate (Aug 2025 – Jan 2026)",
          description: "ALPHA (IT Student Organization)",
          emoji: "💻",
        },
        {
          id: "edu-ach-10",
          title: "IT Representative & Web Developer (Apr 2024 – Jun 2025)",
          description: "College Student Government",
          emoji: "🌐",
        },
      ],
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
      logoUrl: "/alpha-logo.jpg",
      description: [
        "Developed the official General Assembly registration and event website using React and Django, successfully streamlining operations for over 200+ attendees.",
        "Built the organization's Python Discord bot, automating a membership verification process for 60+ members and developing interactive utility commands.",
        "Engineered and maintained internal digital platforms, websites, and mobile apps using Next.js, React Native, TypeScript, and MongoDB.",
      ],
      skills: [
        "React",
        "Django",
        "Python",
        "Discord.py",
        "Next.js",
        "React Native",
        "Expo",
        "TypeScript",
        "JavaScript",
        "MongoDB",
        "HTML",
        "CSS",
        "Git",
      ],
    },
    {
      id: "vol-csg",
      role: "IT Representative | Web Developer",
      startDate: "Apr 2024",
      endDate: "Jun 2025",
      organization: "STI College Ortigas-Cainta: College Student Government",
      logoUrl: "/csg-logo.jpg",
      description: [
        "Develops and maintains websites for the student organization with React.",
        "Provides technical support and manpower assistance for various campus-wide events, including seminars, competitions, talent shows, hackathons, and special activities.",
        "Acts as a representative and advocate for IT students in the student council.",
      ],
      skills: ["React", "HTML", "CSS", "JavaScript", "Git"],
    },
  ],
  achievements: [
    {
      id: "ach-1",
      tier: 1,
      title: "Minor Awardee (2nd Highest Award)",
      event: "Readers Rising Hackathon 2025",
      project: "BasaBuddy",
      isFeatured: true,
      badgeText: "NATIONAL COMPETITION",
      imageUrl:
        "https://marc-plarisan.vercel.app/_next/image?url=https%3A%2F%2Fldjjwfcxdavecmmqxvwz.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fgallery-images%2F1778152072945-vqcckq.jpg&w=3840&q=75",
      description:
        "Recognized as a Minor Awardee (2nd highest award) as the leader of Team Hackademics at the Readers Rising Hackathon 2025 for developing BasaBuddy, a cross-platform mobile reading app built with React Native. BasaBuddy introduces an AI companion named Tassie, whose personality evolves based on the books a user reads. The app features a chatbot, OCR-powered book page scanning with AI insights, and gamified elements including a leveling system, achievements, pomodoro timers, streaks, and more, making reading more interactive and engaging.",
      date: "Sep 2025",
    },
    {
      id: "ach-2",
      tier: 1,
      title: "National Finalist & 2x Champion (Local/Cluster)",
      event: "Tagisan ng Talino 2025: Codefest",
      isFeatured: true,
      badgeText: "NATIONAL COMPETITION",
      imageUrl:
        "https://marc-plarisan.vercel.app/_next/image?url=https%3A%2F%2Fldjjwfcxdavecmmqxvwz.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fgallery-images%2F1778152470324-rio6it.jpg&w=3840&q=75",
      description:
        "Recognized by the whole network of STI Colleges and featured in a national news article. Competed across multiple levels solving complex algorithmic challenges.",
      date: "May 2025",
    },
    {
      id: "ach-3",
      tier: 1,
      title: "Cluster Champion",
      event: "Tagisan ng Talino 2025: Codefest Cluster Level",
      badgeText: "CLUSTER COMPETITION",
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D4D2DAQGPBn8maNLXZQ/profile-treasury-image-shrink_1280_1280/B4DZ5kwFfgHMAY-/0/1779806788156?e=1784973600&v=beta&t=wzsPcaw4MXZrrNN8LVTPW7_17AMnqAJHKCHto99T_oA",
      description:
        "Led a three-member team as the team captain to victory as the cluster-level champion in a 6-hour mobile development hackathon. Competed against fellow local-level Codefest champions from other STI Colleges. The event took place at STI College Ortigas-Cainta inside a computer laboratory on April 4, 2025.",
      date: "April 2025",
    },
    {
      id: "ach-4",
      tier: 1,
      title: "Local Champion",
      event: "Tagisan ng Talino 2025: Codefest Local Level",
      badgeText: "LOCAL COMPETITION",
      imageUrl:
        "https://marc-plarisan.vercel.app/_next/image?url=https%3A%2F%2Fldjjwfcxdavecmmqxvwz.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fgallery-images%2F1778152161951-unj39.jpg&w=3840&q=75",
      description:
        "Led a three-member team as captain to secure the championship title in a 6-hour mobile development hackathon. Competed against fellow students within the campus in a local-level coding competition held in a computer laboratory on March 5, 2025.",
      date: "March 2025",
    },
    {
      id: "ach-5",
      tier: 1,
      title: "Champion",
      event: "Techfest 2025 Python Programming",
      badgeText: "LOCAL COMPETITION",
      isFeatured: true,
      imageUrl:
        "https://marc-plarisan.vercel.app/_next/image?url=https%3A%2F%2Fldjjwfcxdavecmmqxvwz.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fgallery-images%2F1778152055847-rdw06.jpg&w=3840&q=75",
      description:
        "Solved 6 Python programming problems at an onsite competitive programming contest at STI College Ortigas-Cainta. The competition lasted for 2 hours and took place on November 17, 2025 at a computer laboratory.",
      date: "November 2025",
    },
    {
      id: "ach-6",
      tier: 1,
      title: "Champion",
      event: "App Development: ICT Week of November 2024",
      badgeText: "LOCAL HACKATHON",
      imageUrl:
        "https://marc-plarisan.vercel.app/_next/image?url=https%3A%2F%2Fldjjwfcxdavecmmqxvwz.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fgallery-images%2F1778152198572-oyr8uc.jpg&w=3840&q=75",
      description:
        "Successfully led a team of three to design and develop an Android app with Android Studio and Java in a 6-hour competition, organized by a student organization named ALPHA at STI College Ortigas-Cainta.",
      date: "November 2024",
    },
    {
      id: "ach-11",
      tier: 1,
      title: "Global Nominee",
      event: "NASA International Space Apps Challenge 2024",
      badgeText: "INTERNATIONAL COMPETITION",
      imageUrl:
        "https://res.cloudinary.com/dsfsvpsqi/image/upload/v1784382262/Screenshot_2026-07-18_at_9.43.43_PM_ktw3cn.png",
      description:
        "Nominated globally for creating an innovative space technology software solution utilizing open-source NASA data during a rigorous 48-hour hackathon.",
      date: "October 2024",
    },
    {
      id: "ach-7",
      tier: 1,
      title: "1st Place in Theme Integrity",
      event: "PyGame Community Winter Jam 2026",
      project: "ChronoFrost",
      badgeText: "ONLINE GAME JAM",
      imageUrl:
        "https://res.cloudinary.com/dsfsvpsqi/image/upload/v1784381788/Screenshot_2026-07-18_at_9.36.14_PM_zhh9cn.png",
      description:
        "Awarded 1st Place for perfectly integrating the jam's secret theme into 'ChronoFrost', a Python-based 2D game. Handled all physics, rendering, and logic using PyGame.",
      date: "March 2026",
    },
    {
      id: "ach-8",
      tier: 1,
      title: "1st Runner-Up",
      event: "Tagisan ng Talino 2024: Codefest Local Level",
      badgeText: "LOCAL COMPETITION",
      imageUrl:
        "https://marc-plarisan.vercel.app/_next/image?url=https%3A%2F%2Fldjjwfcxdavecmmqxvwz.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fgallery-images%2F1778152396490-t96w7w.jpg&w=3840&q=75",
      description:
        "Led a team of three developers to 1st Runner-Up in the Tagisan ng Talino: Codefest Locals, a hackathon focused on mobile development with Java and Android Studio. The event took place on March 15, 2024, at STI College Ortigas-Cainta.",
      date: "March 2024",
    },
    {
      id: "ach-9",
      tier: 1,
      title: "1st Runner-Up",
      event: "App Development: ICT Week of June 2024",
      badgeText: "LOCAL HACKATHON",
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D562DAQFy4rlBoMizFA/profile-treasury-image-shrink_1920_1920/B56ZwDhcQlHAAc-/0/1769585624772?e=1784988000&v=beta&t=FSoypSnwlMiQNS8jEhp7tncrzk__uJu5rjO03kUWCvw",
      description:
        "Led a team of three developers to design and build an Android app using Android Studio and Java in a 6-hour hackathon hosted by ALPHA, a student organization at STI College Ortigas-Cainta.",
      date: "June 2024",
    },
    {
      id: "ach-10",
      tier: 2,
      title: "Ranked among the top 20 finalists",
      event: "14th IT Skills Olympics (Python Programming Category)",
      badgeText: "NATIONAL COMPETITION",
      imageUrl:
        "https://marc-plarisan.vercel.app/_next/image?url=https%3A%2F%2Fldjjwfcxdavecmmqxvwz.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fgallery-images%2F1778152627546-bwbjh5.jpg&w=3840&q=75",
      description:
        "Represented STI College Ortigas-Cainta on a national competition at the University of Makati (UMAK), solving 6 Python algorithmic programming problems and landed on the final round (Ranked among the top 20 out of 60+ universities)",
      date: "November 2025",
    },
    {
      id: "ach-23",
      tier: 2,
      title: "Ranked among the top 20 finalists",
      event: "13th IT Skills Olympics (Python Programming Category)",
      badgeText: "NATIONAL COMPETITION",
      imageUrl:
        "https://marc-plarisan.vercel.app/_next/image?url=https%3A%2F%2Fldjjwfcxdavecmmqxvwz.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fgallery-images%2F1778152611153-g3ekx9.JPG&w=3840&q=75",
      description:
        "Represented STI College Ortigas-Cainta in the Python Programming category at a national-level competition, the 13th IT Skills Olympics held at the University of Makati (UMAK). Achieved a top 2 ranking among participants from 35+ universities and colleges in the elimination round and advanced to the finals, solving 7 Python programming challenges.",
      date: "November 2024",
    },
    {
      id: "ach-12",
      tier: 1,
      title: "8th Place",
      event: "1st Cainta Research Congress",
      badgeText: "RESEARCH CONGRESS",
      imageUrl:
        "https://marc-plarisan.vercel.app/_next/image?url=https%3A%2F%2Fldjjwfcxdavecmmqxvwz.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fgallery-images%2F1778166115813-shr4a.jpg&w=3840&q=75",
      description:
        "Selected as the top BSIT capstone project among the entire 4th-year batch, earning the distinction to represent STI College Ortigas-Cainta. As Project Leader, I guided our team to an 8th Place finish at the 1st Cainta Research Congress, successfully competing against leading thesis and capstone entries from multiple universities/colleges. Capstone Project Title: An online resort booking, reservation, and monitoring system with payment verification, and sales and auditing report generation, and a website with AI integration for Curvera Rest House. ",
      date: "March 2026",
    },
    {
      id: "ach-13",
      tier: 2,
      title: "Top 10 Finalist",
      event: "KMC Hackathon 2024",
      badgeText: "NATIONAL COMPETITION",
      imageUrl:
        "https://marc-plarisan.vercel.app/_next/image?url=https%3A%2F%2Fldjjwfcxdavecmmqxvwz.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fgallery-images%2F1778076714562-e8j9ip.jpg&w=3840&q=75",
      description:
        "Led a team of three developers in a two-day hackathon focused on addressing KMC's internal HR challenges through a web-based solution. Our team successfully built a working prototype and was selected as one of the finalists. The event welcomed not only students but also graduates and industry professionals, providing a diverse and competitive environment that made the experience both challenging and rewarding.",
      date: "October 2024",
    },
    {
      id: "ach-14",
      tier: 2,
      title: "Ranked among the Top 20 finalists",
      event: "AppCon 2024 Hackathon",
      isFeatured: true,
      badgeText: "NATIONAL COMPETITION",
      imageUrl:
        "https://marc-plarisan.vercel.app/_next/image?url=https%3A%2F%2Fldjjwfcxdavecmmqxvwz.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fgallery-images%2F1778152096627-wnnl0p.jpg&w=3840&q=75",
      description:
        "Achieved a position among the top 20 out of 178 teams nationwide at the AppCon 2024 Hackathon, a national competition that challenged students to develop web or mobile applications addressing social issues in the Philippines using AI or IoT technologies. Represented STI College Ortigas-Cainta as part of Team Hackademics. The project spanned six months from November 2024 to April 2025, culminating in a final awarding ceremony held at Adamson University Theatre on June 28, 2025.",
      date: "June 2025",
    },
    {
      id: "ach-15",
      tier: 2,
      title: "Finalist",
      event: "InterCICSkewla Programming Challenge 2026",
      badgeText: "NATIONAL COMPETITION",
      imageUrl:
        "https://res.cloudinary.com/dsfsvpsqi/image/upload/v1784384264/Screenshot_2026-07-18_at_10.16.17_PM_oa2xiz.png",
      description:
        "Represented STI College Ortigas-Cainta in a national competitive programming challenge, solving complex algorithmic problems using Python.",
      date: "April 2026",
    },
  ],
  certifications: [
    {
      id: "cert-1",
      title:
        "SAP Certified Implementation Consultant - End-to-End Business Processes (C_IEE2E)",
      institution: "SAP",
      dateObtained: "Jun 2026",
      imageUrl: "/github-banner.webp",
      credentialUrl: "https://www.credly.com",
      isFeatured: true,
    },
    {
      id: "cert-2",
      title: "AWS Certified Solutions Architect – Associate",
      institution: "Amazon Web Services (AWS)",
      dateObtained: "Apr 2026",
      imageUrl: "/game-dev-banner.webp",
      credentialUrl: "https://www.credly.com",
      isFeatured: true,
    },
    {
      id: "cert-3",
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      institution: "Microsoft",
      dateObtained: "Jan 2026",
      imageUrl: "/github-banner.webp",
      credentialUrl: "https://learn.microsoft.com",
      isFeatured: true,
    },
    {
      id: "cert-4",
      title: "Google Associate Cloud Engineer",
      institution: "Google Cloud",
      dateObtained: "Nov 2025",
      imageUrl: "/game-dev-banner.webp",
      credentialUrl: "https://www.credential.net",
      isFeatured: false,
    },
    {
      id: "cert-5",
      title: "Meta Front-End Developer Professional Certificate",
      institution: "Meta / Coursera",
      dateObtained: "Aug 2025",
      imageUrl: "/github-banner.webp",
      credentialUrl: "https://www.coursera.org",
      isFeatured: false,
    },
    {
      id: "cert-6",
      title: "Postman API Fundamentals Student Expert",
      institution: "Postman",
      dateObtained: "May 2025",
      imageUrl: "/game-dev-banner.webp",
      credentialUrl: "https://www.badgr.com",
      isFeatured: false,
    },
    {
      id: "cert-7",
      title: "HackerRank Verified Skill: Software Engineer Intern",
      institution: "HackerRank",
      dateObtained: "Mar 2025",
      imageUrl: "/github-banner.webp",
      credentialUrl: "https://www.hackerrank.com",
      isFeatured: false,
    },
    {
      id: "cert-8",
      title: "EF SET English Certificate (C2 Proficient)",
      institution: "EF Standard English Test (EF SET)",
      dateObtained: "Feb 2025",
      imageUrl: "/game-dev-banner.webp",
      credentialUrl: "https://www.efset.org",
      isFeatured: false,
    },
    {
      id: "cert-9",
      title: "Cisco Certified Support Technician (CCST) Networking",
      institution: "Cisco",
      dateObtained: "Dec 2024",
      imageUrl: "/github-banner.webp",
      credentialUrl: "https://www.credly.com",
      isFeatured: false,
    },
    {
      id: "cert-10",
      title: "Oracle Certified Associate, Java SE 8 Programmer",
      institution: "Oracle",
      dateObtained: "Oct 2024",
      imageUrl: "/game-dev-banner.webp",
      credentialUrl: "https://www.credly.com",
      isFeatured: false,
    },
    {
      id: "cert-11",
      title: "IBM Data Science Professional Certificate",
      institution: "IBM / Coursera",
      dateObtained: "Aug 2024",
      imageUrl: "/github-banner.webp",
      credentialUrl: "https://www.coursera.org",
      isFeatured: false,
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
      imageUrl: "/github-banner.webp",
    },
    {
      id: "proj-2",
      title: "Itch.io",
      description:
        "Originally started during my Junior High School years, this page is a collection of my personal game development projects built using Unity, Godot, and PyGame. It highlights my journey through game development as a fun and meaningful side hobby.",
      buttonText: "Enter Realm",
      url: "https://dragunwf.itch.io",
      platform: "itchio",
      imageUrl: "/game-dev-banner.webp",
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
