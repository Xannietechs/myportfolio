import React from 'react';
import profileImage from './profile.jpg'; // Adjust the path if the image is in a different folder within src

export default function Hero() {
  return (
    <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image (External URL) */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 dark:opacity-20"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Profile Image (Local src folder) */}
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-blue-500 dark:border-blue-400">
            <img
              src={profileImage}
              alt="Tumelo Modupi"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400">
            Tumelo Modupi
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
            Full Stack Developer & Digital Craftsman
          </p>
          
          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <a href="#contact" className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
              Get in Touch
            </a>
            <a href="#work" className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-6 py-3 rounded-lg font-semibold transition-all">
              View My Work
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
