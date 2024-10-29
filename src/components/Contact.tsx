import React, { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Reset the form fields after submission
    e.target.reset();
    // You can add any additional logic you want here after submission
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Get in Touch</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-300">I'm always interested in hearing about new projects and opportunities.</p>
              <div className="flex flex-col space-y-4">
                <a href="mailto:tumzena@gmail.com" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                  <Mail className="w-6 h-6 mr-4" />
                  tumzena@gmail.com
                </a>
                <a href="https://github.com/xannietechs" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                  <Github className="w-6 h-6 mr-4" />
                  @xannietechs
                </a>
                <a href="https://www.linkedin.com/in/tumelo-modupi-ab5aba311" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                  <Linkedin className="w-6 h-6 mr-4" />
                  Tumelo Modupi
                </a>
              </div>
            </div>
            <form 
              onSubmit={handleSubmit} 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              className="space-y-6"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-colors duration-200"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-colors duration-200"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-colors duration-200"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  name="message"
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-colors duration-200"
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                Send Message
              </button>
              <input type="hidden" name="form-name" value="contact" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
