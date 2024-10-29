import React from 'react';
import { ExternalLink } from 'lucide-react';

// Import images from assets folder
import topcoreImg from '../assets/topcore.png';
import extraClassesHubImg from '../assets/extra-classes-hub.png';
import snakeGameImg from '../assets/snake-game.png';
import weatherAppImg from '../assets/weather-app.png';
import chessGameImg from '../assets/chess-game.png';
import goodWrenchImg from '../assets/good-wrench.png';

export default function Work() {
  // Project data array with image imports and links
  const projects = [
    {
      title: 'Topcore',
      description: 'Technologies Used: React.js, CSS',
      imageUrl: topcoreImg,
      link: 'https://topcore.co.za' // Add the link for Topcore
    },
    {
      title: 'Extra Classes Hub',
      description: 'Technologies Used: React.js, Node.js, and CSS',
      imageUrl: extraClassesHubImg,
      link: 'https://extraclasseshub.co.za' // Add the link for Extra Classes Hub
    },
    {
      title: 'Snake Game',
      description: 'Technologies Used: React.js, Node.js, and CSS',
      imageUrl: snakeGameImg,
      link: 'https://snakeworld.netlify.app' // Add the link for Snake Game
    },
    {
      title: 'Weather App',
      description: 'Technologies Used: React.js, CSS, and OpenWeather API',
      imageUrl: weatherAppImg,
      link: 'https://liveweathers.netlify.app' // Add the link for Weather App
    },
    {
      title: 'Chess Game',
      description: 'Technologies Used: React.js, Node.js, and CSS',
      imageUrl: chessGameImg,
      link: 'https://chessboard-games.netlify.app' // Add the link for Chess Game
    },
    {
      title: 'The Good Wrench',
      description: 'Technologies Used: HTML, JavaScript, and CSS',
      imageUrl: goodWrenchImg,
      link: 'https://thegoodwrench.netlify.app' // Add the link for The Good Wrench
    }
  ];

  return (
    <section id="work" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Recent Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
              <img 
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-200 mb-4">{project.description}</p>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-blue-400 hover:text-blue-300"
                  >
                    View Project <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
