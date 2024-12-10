import { Project } from '../types/Project';

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Mobile App',
    description: 'A full-featured Android e-commerce application with Material Design 3, MVVM architecture, and Jetpack Compose.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Room DB', 'Coroutines'],
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc',
    category: 'android',
    link: 'https://github.com/yourusername/ecommerce-app'
  },
  {
    id: 2,
    title: 'SaaS Dashboard',
    description: 'Modern dashboard interface built with React and TypeScript, featuring real-time data visualization.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    category: 'frontend',
    link: 'https://github.com/yourusername/saas-dashboard'
  },
  {
    id: 3,
    title: 'Data Pipeline Framework',
    description: 'Scalable ETL pipeline framework for processing large datasets using Apache Spark.',
    technologies: ['Python', 'Apache Spark', 'Airflow', 'AWS'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    category: 'data',
    link: 'https://github.com/yourusername/data-pipeline'
  }
];