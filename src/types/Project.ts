export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  category: 'android' | 'frontend' | 'data';
  link?: string;
}