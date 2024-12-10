import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Project } from '../types/Project';
import { useTheme } from '../hooks/useTheme';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`${theme.colors.background} rounded-lg shadow-lg overflow-hidden border ${theme.colors.border}`}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className={`text-xl font-semibold mb-2 font-avenir ${theme.colors.text}`}>
          {project.title}
        </h3>
        <p className={`mb-4 font-inter ${theme.colors.subText}`}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={`px-3 py-1 ${theme.colors.surface} rounded-full text-sm ${theme.colors.text}`}
            >
              {tech}
            </span>
          ))}
        </div>
        {project.link && (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 ${theme.colors.primary.replace('bg-', 'text-')} hover:opacity-80`}
            whileHover={{ x: 5 }}
          >
            View Project <ExternalLink size={16} />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};