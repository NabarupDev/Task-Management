import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container mx-auto text-center py-16">
      <motion.h1
        className="text-5xl font-bold text-blue-600 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to Task Manager
      </motion.h1>
      <p className="text-lg text-gray-700 mb-8">
        Organize your tasks efficiently and never miss a deadline.
      </p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Link to="/tasks">
          <button className="px-8 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
            Get Started
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
