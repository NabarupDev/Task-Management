import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Tasks() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    return savedTasks || { onProgress: [], completed: [], discarded: [] };
  });
  const [taskInput, setTaskInput] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks((prevTasks) => ({
        ...prevTasks,
        onProgress: [...prevTasks.onProgress, taskInput],
      }));
      setTaskInput('');
    }
  };

  const markAsCompleted = (index) => {
    setTasks((prevTasks) => {
      const task = prevTasks.onProgress[index];
      return {
        ...prevTasks,
        onProgress: prevTasks.onProgress.filter((_, i) => i !== index),
        completed: [...prevTasks.completed, task],
      };
    });
  };

  const discardTask = (index) => {
    setTasks((prevTasks) => {
      const task = prevTasks.onProgress[index];
      return {
        ...prevTasks,
        onProgress: prevTasks.onProgress.filter((_, i) => i !== index),
        discarded: [...prevTasks.discarded, task],
      };
    });
  };

  return (
    <div className="container mx-auto py-8 px-4 lg:px-16">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-10">
        Task Manager
      </h1>

      {/* Task Input */}
      <div className="flex justify-center items-center mb-8">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add a new task..."
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addTask}
          className="px-6 ml-2 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Add Task
        </button>
      </div>

      {/* Task Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* On Progress Tasks */}
        <div className="pr-4">
          <h2 className="text-xl font-bold text-blue-600 mb-4">On Progress</h2>
          <div className="space-y-4">
            {tasks.onProgress.length > 0 ? (
              tasks.onProgress.map((task, index) => (
                <motion.div
                  key={index}
                  className={`bg-white  p-4  flex justify-between items-center ${
                    index !== 0 ? 'border-t' : ''
                  }`}
                  style={{ borderColor: '#28282B' }} // Custom border color
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-gray-800">{task}</span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => markAsCompleted(index)}
                      className="px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600 transition"
                    >
                      Complete
                    </button>
                    <button
                      onClick={() => discardTask(index)}
                      className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition"
                    >
                      Discard
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="text-gray-500 italic">No tasks in progress.</p>
            )}
          </div>
        </div>

        {/* Completed Tasks */}
        <div className="px-4">
          <h2 className="text-xl font-bold text-green-600 mb-4">Completed</h2>
          <div className="space-y-4">
            {tasks.completed.length > 0 ? (
              tasks.completed.map((task, index) => (
                <motion.div
                  key={index}
                  className={`bg-white  p-4  ${
                    index !== 0 ? 'border-t' : ''
                  }`}
                  style={{ borderColor: '#28282B' }} // Custom border color
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-gray-800">{task}</span>
                </motion.div>
              ))
            ) : (
              <p className="text-gray-500 italic">No completed tasks.</p>
            )}
          </div>
        </div>

        {/* Discarded Tasks */}
        <div className="px-4">
          <h2 className="text-xl font-bold text-red-600 mb-4">Discarded</h2>
          <div className="space-y-4">
            {tasks.discarded.length > 0 ? (
              tasks.discarded.map((task, index) => (
                <motion.div
                  key={index}
                  className={`bg-white p-4  ${
                    index !== 0 ? 'border-t' : ''
                  }`}
                  style={{ borderColor: '#28282B' }} // Custom border color
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-gray-800">{task}</span>
                </motion.div>
              ))
            ) : (
              <p className="text-gray-500 italic">No discarded tasks.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
