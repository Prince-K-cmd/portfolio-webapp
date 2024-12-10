import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Smartphone, Server, Cloud, Lock } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const skills = [
  {
    category: 'Android Development',
    icon: Smartphone,
    skills: ['Jetpack Compose', 'Kotlin Coroutines', 'MVVM Architecture', 'Material Design 3']
  },
  {
    category: 'Frontend Development',
    icon: Code,
    skills: ['React/Next.js', 'TypeScript', 'Tailwind CSS', 'Redux/Context']
  },
  {
    category: 'Data Engineering',
    icon: Database,
    skills: ['Apache Spark', 'Python', 'SQL/NoSQL', 'ETL Pipelines']
  },
  {
    category: 'Backend Development',
    icon: Server,
    skills: ['Node.js', 'Express', 'PostgreSQL', 'REST APIs']
  },
  {
    category: 'Cloud Services',
    icon: Cloud,
    skills: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes']
  },
  {
    category: 'Security',
    icon: Lock,
    skills: ['OAuth 2.0', 'JWT', 'HTTPS', 'Data Encryption']
  }
];

export const Skills = () => {
  const { theme } = useTheme();

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-3xl font-bold text-center mb-12 font-avenir ${theme.colors.text}`}
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${theme.colors.surface} rounded-lg p-6 shadow-lg`}
            >
              <div className="flex items-center mb-4">
                <skill.icon className={`${theme.colors.primary.replace('bg-', 'text-')} mr-3`} size={24} />
                <h3 className={`text-xl font-semibold font-avenir ${theme.colors.text}`}>
                  {skill.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {skill.skills.map((item) => (
                  <li 
                    key={item}
                    className={`${theme.colors.subText} font-inter flex items-center`}
                  >
                    <span className={`${theme.colors.accent.replace('bg-', 'text-')} mr-2`}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};