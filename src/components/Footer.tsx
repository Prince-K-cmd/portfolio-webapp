import React from 'react';
import { motion } from 'framer-motion';
import { ResumeButton } from './ResumeButton';
import { useTheme } from '../hooks/useTheme';

export const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${theme.colors.surface} py-12 border-t ${theme.colors.border}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <ResumeButton className="px-6 py-3" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <p className={`${theme.colors.text} text-sm font-opensans`}>
              © {currentYear} KPrince-Coder. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};