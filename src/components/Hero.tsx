import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Smartphone } from 'lucide-react';
import { CodeCarousel } from './CodeCarousel';

export const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen pt-20 flex flex-col justify-center"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl font-bold mb-6 font-avenir">
              Hi, I'm <span className="text-blue-600">Your Name</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 font-inter">
              A passionate developer specializing in Android development, frontend engineering, 
              and data engineering. I create elegant solutions to complex problems.
            </p>
            <div className="flex flex-wrap gap-6 mb-12">
              {[
                { Icon: Smartphone, text: 'Android Developer' },
                { Icon: Code, text: 'Frontend Developer' },
                { Icon: Database, text: 'Data Engineer' }
              ].map(({ Icon, text }, index) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center gap-2 text-gray-600"
                >
                  <Icon size={20} />
                  <span className="font-inter">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <CodeCarousel />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};