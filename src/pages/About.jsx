import React from 'react';

export default function About() {
  return (
    <div className="h-min bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="backdrop-blur-lg p-8 container mx-auto flex flex-col items-center justify-center max-w-3xl"
        style={{
          backgroundColor: '#EDEADE', // Solid background color with some transparency
          background: 'rgba(237, 234, 222, 0.7)', // Semi-transparent background
          backdropFilter: 'blur(10px)', // Blur effect
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.18)', // Border style
        }}
      >
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">About Task Manager</h1>
        <p className="text-lg text-gray-700 text-center mb-4">
          Task Manager is a simple yet powerful tool that allows you to organize and track your tasks efficiently. With a beautiful and intuitive design, you can easily manage tasks that are in progress, completed, or discarded.
        </p>
        <p className="text-lg text-gray-700 text-center mb-4">
          Our goal is to help you stay organized and productive while providing a seamless experience for managing your tasks. Whether you're working on personal projects, work tasks, or studying, Task Manager is here to support you.
        </p>
        <p className="text-lg text-gray-700 text-center mb-6">
          Thank you for choosing Task Manager! We hope it helps you manage your tasks with ease and efficiency.
        </p>
      </div>
    </div>
  );
}
