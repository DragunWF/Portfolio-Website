export interface HeroData {
  name: string;
  title: string;
  about: string;
}

export interface HighlightData {
  id: string;
  label: string;
  value: string;
  url?: string;
  iconName: string;
}

export interface SkillSet {
  currentFocus: string[];
  fullArchive: string[];
}

export interface RoleData {
  id: string;
  role: string;
  startDate: string;
  endDate: string;
  employmentType?: string; // e.g. "Full-time", "Internship"
  locationType?: string; // e.g. "Hybrid", "Remote"
  skills: string[];
  description: string[];
  certificate?: {
    title: string;
    url?: string;
  };
}

export interface ExperienceData {
  id: string;
  company: string;
  logoUrl?: string; // Path to logo image
  duration?: string; // Total duration, e.g., "6 mos"
  location?: string; // e.g., "National Capital Region, Philippines"
  roles: RoleData[];
}

export interface EducationData {
  id: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  logoUrl?: string; // Path to school logo
  grade?: {
    honor: string;
    details?: string; // Made optional
  };
  achievements?: {
    id: string;
    title: string;
    description?: string;
    emoji?: string; // Custom emoji bullet
  }[];
}

export interface VolunteerData {
  id: string;
  role: string;
  startDate: string;
  endDate: string;
  organization: string;
  description: string | string[];
  skills: string[];
  logoUrl?: string; // Optional organization logo path
}

export interface AchievementData {
  id: string;
  tier: 1 | 2;
  title: string;
  event: string;
  project?: string;
}

// TODO: Implement featured projects section in the future
export interface FeaturedProjectData {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  url: string;
  categories: string[];
}

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  url: string;
  platform: "github" | "itchio";
}

// TODO: Implement this on the main portfolio data
export interface CertificationData {
  id: string;
  title: string;
  institution: string;
  dateObtained: string;
  url: string; // indicates the image URL from Supabase
}

export interface BlogData {
  id: string;
  title: string;
  imageUrl: string;
  url: string;
}

export interface GalleryData {
  id: string;
  imageUrl: string;
  altText: string;
}

export interface PortfolioData {
  hero: HeroData;
  highlights: HighlightData[];
  skills: SkillSet;
  experience: ExperienceData[];
  education: EducationData[];
  volunteering: VolunteerData[];
  achievements: AchievementData[];
  projects: ProjectData[];
  blogs: BlogData[];
  gallery: GalleryData[];
}
