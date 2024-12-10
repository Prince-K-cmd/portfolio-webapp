import { useState, useEffect } from 'react';
import { ThemeType } from '../types/Theme';
import { themes } from '../data/themes';

export function useTheme() {
  const [themeId, setThemeId] = useState<ThemeType>('cyberpunk');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeType;
    if (savedTheme && themes.some(t => t.id === savedTheme)) {
      setThemeId(savedTheme);
    }
  }, []);

  const changeTheme = (newTheme: ThemeType) => {
    setThemeId(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const theme = themes.find(t => t.id === themeId) || themes[0];

  return { theme, changeTheme };
}