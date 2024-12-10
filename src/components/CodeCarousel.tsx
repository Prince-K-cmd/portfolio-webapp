import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { codeSnippets } from '../data/codeSnippets';

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

  return (
    <div className="w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-xl bg-gray-900">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-sm text-gray-400">
          {currentSnippet.title}
        </span>
      </div>
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            key={`${category}-${snippetIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="p-4"
          >
            <SyntaxHighlighter
              language={
                category === 'android' 
                  ? 'kotlin' 
                  : category === 'frontend' 
                    ? 'typescript' 
                    : 'python'
              }
              style={atomOneDark}
              showLineNumbers
              customStyle={{
                background: 'transparent',
                padding: '1rem',
                fontSize: '0.9rem',
                lineHeight: '1.5',
              }}
            >
              {currentSnippet.code}
            </SyntaxHighlighter>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};