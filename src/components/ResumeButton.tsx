import React from 'react';
import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

interface ResumeButtonProps {
  className?: string;
}

export const ResumeButton: React.FC<ResumeButtonProps> = ({ className = '' }) => {
  const { theme } = useTheme();

  return (
    <motion.a
      href="/KPrince-CV.pdf"
      download
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${theme.colors.primary} text-white px-4 py-2 rounded-lg inline-flex items-center space-x-2 shadow-lg hover:opacity-90 transition-opacity ${className}`}
    >
      <FileDown size={18} />
      <span className="font-exo">Resume</span>
    </motion.a>
  );
};