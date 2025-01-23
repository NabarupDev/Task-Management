import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className=" bg-center">
      <div
        className="backdrop-blur-lg p-6 container mx-auto flex items-center justify-between"
        style={{ backgroundColor: '#FCF5E5' }}
      >
        <h1 className="text-2xl font-bold"> Task Manager</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:underline hover:text-gray-700">
              Home
            </Link>
          </li>
          <li>
            <Link to="/tasks" className="hover:underline hover:text-gray-700">
              Tasks
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline hover:text-gray-700">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
