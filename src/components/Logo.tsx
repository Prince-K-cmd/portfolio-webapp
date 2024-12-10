// import React from 'react';
// import { motion } from 'framer-motion';
// import { Code } from 'lucide-react';
// import { useTheme } from '../hooks/useTheme';

// export const Logo = () => {
//   const { theme } = useTheme();

//   return (
//     <motion.div
//       className="flex items-center gap-2"
//       whileHover={{ scale: 1.05 }}
//     >
//       <Code className={`${theme.colors.accent.replace('bg-', 'text-')}`} size={24} />
//       <motion.span
//         className="text-2xl font-bold relative"
//         initial={{ opacity: 0, x: -20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <span className=" bg-clip-text font-exo relative z-10">
//           KPrince-Coder
//         </span>
//         <span className="absolute inset-0 bg-gradient-to-r from-slate-200 to-blue-400 opacity-10 blur-sm" />
//         <span className={`text-slate-400`}>&lt;</span>
//         <span className={`text-blue-400`}>/&gt;</span>
//       </motion.span>
//     </motion.div>
//   );
// };

import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const Logo = () => {
  const { theme } = useTheme();

  return (
    <motion.div
      className="flex items-center gap-2"
      whileHover={{ scale: 1.05 }}
    >
      <Code className={`${theme.colors.accent.replace('bg-', 'text-')} text-2xl text-blue-500`} size={32} />
      <motion.span
        className="text-3xl font-bold relative"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 font-exo relative z-10">
          KPrince-Coder
        </span>
        {/* <span className="absolute inset-0 bg-gradient-to-r from-slate-100 to-blue-200 opacity-10 blur-sm" /> */}
        <span className={`text-slate-500 text-3xl`}>&lt;</span>
        <span className={`text-blue-500 text-3xl`}>\&gt;</span>
      </motion.span>
    </motion.div>
  );
};

