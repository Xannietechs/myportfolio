import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-200">
        <ThemeToggle />
        <Hero />
        <About />
        <Services />
        <Work />
        <Contact />
        <WhatsAppButton />
      </div>
    </ThemeProvider>
  );
}

export default App;