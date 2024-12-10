import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projects';
import { useTheme } from '../hooks/useTheme';

export const Projects = () => {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = React.useState('all');

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'android', label: 'Android' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'data', label: 'Data Engineering' },
  ];

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'all' || project.category === activeCategory
  );

  return (
    <section className={`py-20 ${theme.colors.surface}`}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-3xl font-bold text-center mb-12 font-avenir ${theme.colors.text}`}
        >
          Featured Projects
        </motion.h2>

        <div className="flex justify-center gap-4 mb-12">
          {categories.map(({ value, label }) => (
            <motion.button
              key={value}
              onClick={() => setActiveCategory(value)}
              className={`px-4 py-2 rounded-full ${
                activeCategory === value
                  ? `${theme.colors.primary} ${theme.colors.text}`
                  : `${theme.colors.surface} ${theme.colors.text} hover:${theme.colors.secondary}`
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {label}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};