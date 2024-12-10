import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme, changeTheme } = useTheme();

  return (
    <div className={`min-h-screen ${theme.colors.background} ${theme.colors.text}`}>
      <Header currentTheme={theme.id} onThemeChange={changeTheme} />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;