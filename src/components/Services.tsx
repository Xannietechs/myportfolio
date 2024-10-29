import React from 'react';
import { Monitor, Database, Smartphone } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:transform hover:-translate-y-2 transition-all">
            <Monitor className="w-12 h-12 text-blue-500 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Web Development</h3>
            <p className="text-gray-600 dark:text-gray-300">Custom websites and web applications built with modern frameworks and technologies.</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:transform hover:-translate-y-2 transition-all">
            <Database className="w-12 h-12 text-emerald-500 dark:text-emerald-400 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
            <p className="text-gray-600 dark:text-gray-300">Robust and scalable server-side solutions with secure API development.</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:transform hover:-translate-y-2 transition-all">
            <Smartphone className="w-12 h-12 text-purple-500 dark:text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Mobile Development</h3>
            <p className="text-gray-600 dark:text-gray-300">Cross-platform mobile applications that deliver exceptional user experiences.</p>
          </div>
        </div>
      </div>
    </section>
  );
}