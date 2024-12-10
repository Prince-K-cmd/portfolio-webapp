import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette } from 'lucide-react';
import { themes } from '../data/themes';
import { ThemeType } from '../types/Theme';

interface ThemeSelectorProps {
  currentTheme: ThemeType;
  onThemeChange: (theme: ThemeType) => void;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  currentTheme,
  onThemeChange,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const currentThemeData = themes.find(t => t.id === currentTheme)!;

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 rounded-full ${currentThemeData.colors.surface} ${currentThemeData.colors.text}`}
      >
        <Palette size={20} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg ${currentThemeData.colors.surface} ring-1 ring-black ring-opacity-5`}
          >
            <div className="py-1">
              {themes.map((theme) => (
                <motion.button
                  key={theme.id}
                  whileHover={{ x: 5 }}
                  onClick={() => {
                    onThemeChange(theme.id);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    currentTheme === theme.id
                      ? `${theme.colors.primary} ${theme.colors.text}`
                      : `${currentThemeData.colors.text} hover:${theme.colors.surface}`
                  }`}
                >
                  {theme.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};