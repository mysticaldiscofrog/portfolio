

import React from 'react';

export const Footer = () => (
  <footer className="p-4 bg-white dark:bg-gray-800 text-center">
    <p className="text-sm">&copy; {new Date().getFullYear()} Studio Create. All rights reserved.</p>
    <div className="mt-2 flex justify-center space-x-4">
      <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">Twitter</a>
      <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">LinkedIn</a>
      <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">GitHub</a>
    </div>
  </footer>
);
