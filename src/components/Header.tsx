import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Logo } from './Logo';
import { ThemeSelector } from './ThemeSelector';
import { ResumeButton } from './ResumeButton';
import { ThemeType } from '../types/Theme';
import { useTheme } from '../hooks/useTheme';

interface HeaderProps {
  currentTheme: ThemeType;
  onThemeChange: (theme: ThemeType) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTheme, onThemeChange }) => {
  const { theme } = useTheme();
  
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 ${theme.colors.surface} backdrop-blur-sm border-b ${theme.colors.border}`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-6">
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className={theme.colors.text}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className={theme.colors.text}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:your.email@example.com"
              whileHover={{ scale: 1.2 }}
              className={theme.colors.text}
            >
              <Mail size={20} />
            </motion.a>
            <ResumeButton />
            <ThemeSelector
              currentTheme={currentTheme}
              onThemeChange={onThemeChange}
            />
          </div>
        </div>
      </div>
    </motion.header>
  );
};