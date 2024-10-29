import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon from react-icons

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/+27767362968"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition-all z-50"
    >
      <FaWhatsapp className="w-6 h-6 text-white" /> {/* Add the icon here */}
    </a>
  );
}
