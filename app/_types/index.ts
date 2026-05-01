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

export interface SkillData {
  id: string;
  name: string;
}

export interface ExperienceData {
  id: string;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  skills: string[];
}

export interface EducationData {
  id: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  details: string;
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

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  url: string;
  platform: "github" | "itchio";
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
  skills: SkillData[];
  experience: ExperienceData[];
  education: EducationData[];
  volunteering: VolunteerData[];
  achievements: AchievementData[];
  projects: ProjectData[];
  blogs: BlogData[];
  gallery: GalleryData[];
}
