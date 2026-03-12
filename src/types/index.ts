export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Role {
  title: string;
  organization: string;
  affiliation?: string;
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  year: string;
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  summary: string;
  link?: string;
}

export interface ResearchArea {
  title: string;
  description: string;
}

export interface Course {
  name: string;
  institution: string;
  description: string;
  current: boolean;
}

export interface SpeakingEvent {
  title: string;
  event: string;
  date: string;
  location: string;
  description?: string;
  videoUrl?: string;
}

export interface Experience {
  year: string;
  title: string;
  organization: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface MediaItem {
  title: string;
  type: "tv" | "press" | "podcast" | "video";
  source: string;
  date: string;
  description?: string;
  url?: string;
  videoId?: string;
}

export interface BookInfo {
  title: string;
  description: string;
  chapters?: string[];
  links?: { label: string; url: string }[];
}
