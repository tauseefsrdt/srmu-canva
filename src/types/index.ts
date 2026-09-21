export type ProjectCategory = 
  | 'All Projects'
  | 'Websites'
  | 'Logo & Branding'
  | 'Print Design'
  | 'Digital Marketing'
  | 'Illustration'
  | 'Photography'
  | 'Merchandise'
  | 'Others';

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  image: string;
  client: string;
  year: string;
  featured?: boolean;
  services: string[];
  liveUrl?: string;
  overview?: string;
  challenge?: string;
  solution?: string;
  features?: string[];
  metrics?: {
    value: string;
    label: string;
  }[];
  screenshots?: string[];
  accentColor?: string;
}

export interface Service {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  deliverables: string[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  benefits: string[];
  featuredProjects: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    dribbble?: string;
  };
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}
