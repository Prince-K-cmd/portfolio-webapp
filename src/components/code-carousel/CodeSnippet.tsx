import React from 'react';
import { motion } from 'framer-motion';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import kotlin from 'react-syntax-highlighter/dist/esm/languages/hljs/kotlin';
import typescript from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';
import python from 'react-syntax-highlighter/dist/esm/languages/hljs/python';

SyntaxHighlighter.registerLanguage('kotlin', kotlin);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('python', python);

interface CodeSnippetProps {
  code: string;
  language: string;
  title: string;
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, language, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="p-4"
    >
      <SyntaxHighlighter
        language={language}
        style={atomOneDark}
        showLineNumbers
        customStyle={{
          background: 'transparent',
          padding: '1rem',
          fontSize: '0.9rem',
          lineHeight: '1.5',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </motion.div>
  );
};