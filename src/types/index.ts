// Project and portfolio types
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  images?: string[];
  technologies: string[];
  category: ProjectCategory;
  url?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
  status: 'completed' | 'in-progress' | 'archived';
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: string[];
  location: string;
}

export interface Skill {
  name: string;
  category: SkillCategory;
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export type ProjectCategory = 'web-design' | 'development' | 'mobile' | 'branding' | 'ui-ux';
export type SkillCategory = 'design' | 'frontend' | 'backend' | 'tools' | 'soft-skills';

// Component props
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}