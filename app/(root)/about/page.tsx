"use client";

import { error } from 'console';
import { motion } from 'framer-motion';

const Page = () => {
  // throw new Error("Not Implemented")
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-6xl text-center m-10 text-gray-400 border-4 border-gray-500 p-10 rounded-2xl"
    >
      <p>This is the About us Page.</p>
    </motion.div>
  );
};

export default Page;
