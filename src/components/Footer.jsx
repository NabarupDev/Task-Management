import React from 'react';

export default function Footer() {
  // Get the current year based on the user's locale (India in this case)
  const currentYear = new Intl.DateTimeFormat('en-IN', { year: 'numeric' }).format(new Date());

  return (
    <footer className="bg-gradient-to-r from-[#F9F6EE] to-[#F3E5AB] text-gray-800 py-6 mt-8">
      <div className="container mx-auto text-center space-y-4">
        <div className="flex justify-center items-center space-x-4">
          <p className="text-lg">
            &copy; {currentYear} Task Manager. All rights reserved.
          </p>
        </div>

        <div className="flex justify-center items-center space-x-8 text-sm text-gray-600">
          <a
            href="https://www.linkedin.com/in/nabarup-roy/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/NabarupDev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="/privacy-policy"
            className="hover:text-indigo-500 transition-colors duration-300"
          >
            Privacy Policy
          </a>
        </div>

        <div className="mt-4 text-xs text-gray-500">
          <p>Made with ❤️ by Task Manager Team</p>
        </div>
      </div>
    </footer>
  );
}
