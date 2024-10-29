import React from 'react';
import { Code2, Monitor, Layout } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            I'm a passionate full-stack developer with a keen eye for creating elegant solutions to complex problems. With expertise in modern web technologies and a commitment to clean, efficient code, I help businesses transform their digital presence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transition-colors duration-200">
              <Code2 className="w-12 h-12 text-blue-500 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
              <p className="text-gray-600 dark:text-gray-300">Writing maintainable, scalable, and efficient code is my passion.</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transition-colors duration-200">
              <Monitor className="w-12 h-12 text-emerald-500 dark:text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Modern Tech</h3>
              <p className="text-gray-600 dark:text-gray-300">Staying current with the latest technologies and best practices.</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transition-colors duration-200">
              <Layout className="w-12 h-12 text-purple-500 dark:text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
              <p className="text-gray-600 dark:text-gray-300">Creating beautiful experiences across all devices.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}