export const SITE_CONFIG = {
  name: 'Your Name',
  title: 'Designer & Developer',
  description: 'Creative designer and skilled developer crafting digital experiences',
  url: 'https://yourportfolio.vercel.app',
  author: {
    name: 'Your Name',
    email: 'your.email@example.com',
    twitter: '@yourusername',
    github: 'yourusername',
    linkedin: 'yourprofile',
  },
};

export const NAVIGATION = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
] as const;

export const PROJECT_CATEGORIES = [
  { value: 'all', label: 'All Projects' },
  { value: 'web-design', label: 'Web Design' },
  { value: 'development', label: 'Development' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'branding', label: 'Branding' },
  { value: 'ui-ux', label: 'UI/UX' },
] as const;

export const SKILLS = {
  design: ['Figma', 'Adobe Creative Suite', 'Sketch', 'Principle'],
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  backend: ['Node.js', 'PostgreSQL', 'MongoDB', 'API Design'],
  tools: ['Git', 'Vercel', 'VS Code', 'Linear'],
} as const;