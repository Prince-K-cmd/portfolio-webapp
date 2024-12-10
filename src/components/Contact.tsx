import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const Contact = () => {
  const { theme } = useTheme();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the data to a backend
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className={`text-3xl font-bold mb-8 text-center font-avenir ${theme.colors.text}`}>
            Get in Touch
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label 
                htmlFor="name" 
                className={`block mb-2 text-sm font-medium ${theme.colors.text}`}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formState.name}
                onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                className={`w-full px-4 py-2 rounded-lg border ${theme.colors.border} ${theme.colors.surface} ${theme.colors.text}`}
                required
              />
            </div>
            
            <div>
              <label 
                htmlFor="email" 
                className={`block mb-2 text-sm font-medium ${theme.colors.text}`}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formState.email}
                onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                className={`w-full px-4 py-2 rounded-lg border ${theme.colors.border} ${theme.colors.surface} ${theme.colors.text}`}
                required
              />
            </div>
            
            <div>
              <label 
                htmlFor="message" 
                className={`block mb-2 text-sm font-medium ${theme.colors.text}`}
              >
                Message
              </label>
              <textarea
                id="message"
                value={formState.message}
                onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                rows={5}
                className={`w-full px-4 py-2 rounded-lg border ${theme.colors.border} ${theme.colors.surface} ${theme.colors.text}`}
                required
              />
            </div>
            
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`${theme.colors.primary} text-white px-6 py-3 rounded-lg w-full flex items-center justify-center space-x-2`}
            >
              {isSubmitted ? (
                <>
                  <CheckCircle size={20} />
                  <span>Message Sent!</span>
                </>
              ) : (
                <>
                  <Send size={20} />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};