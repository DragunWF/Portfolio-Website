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

export interface ExperienceData {
  id: string;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  skills: string[];
  description: string;
}

export interface EducationData {
  id: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  details: string;
  grade?: {
    honor: string;
    details: string;
  };
  achievements?: {
    id: string;
    title: string;
    description: string;
  }[];
  leadership?: {
    id: string;
    role: string;
    duration: string;
    organization: string;
  }[];
}

export interface VolunteerData {
  id: string;
  role: string;
  startDate: string;
  endDate: string;
  organization: string;
  description: string | string[];
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
