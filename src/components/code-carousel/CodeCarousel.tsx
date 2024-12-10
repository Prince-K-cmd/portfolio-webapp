import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { codeSnippets } from '../../data/codeSnippets';
import { CodeSnippet } from './CodeSnippet';
import { CarouselHeader } from './CarouselHeader';

type Category = keyof typeof codeSnippets;
const categories: Category[] = ['android', 'frontend', 'data'];

export const CodeCarousel = () => {
  const [category, setCategory] = useState<Category>('android');
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const currentSnippets = codeSnippets[category];
  const currentSnippet = currentSnippets[snippetIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setSnippetIndex((current) => {
          if (current + 1 < currentSnippets.length) {
            return current + 1;
          }
          setCategory((currentCat) => {
            const nextIndex = categories.indexOf(currentCat) + 1;
            return categories[nextIndex % categories.length];
          });
          return 0;
        });
        setIsVisible(true);
      }, 500);
    }, 8000);

    return () => clearInterval(interval);
  }, [category, currentSnippets.length]);

  const getLanguage = (cat: Category): string => {
    switch (cat) {
      case 'android':
        return 'kotlin';
      case 'frontend':
        return 'typescript';
      case 'data':
        return 'python';
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-xl bg-gray-900">
      <CarouselHeader title={currentSnippet.title} />
      <AnimatePresence mode="wait">
        {isVisible && (
          <CodeSnippet
            code={currentSnippet.code}
            language={getLanguage(category)}
            title={currentSnippet.title}
          />
        )}
      </AnimatePresence>
    </div>
  );
};