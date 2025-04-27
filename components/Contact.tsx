import React from 'react';
import { FaDiscord } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="bg-black text-white w-full px-10 py-8 border-t border-gray-700">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="text-sm font-light">&copy; Mind & Motion 2025 - Founded by Mark Wijn. Supported with help from Jonathan</p>
          <p className="text-sm font-light mt-2">Made with ❤️ by William</p>
          <p className="text-sm font-light mt-2">Helpline (Contact our founder straight): +31 6 14697269</p>
        </div>
        <div className="flex items-center">
          <span className="mr-3 text-sm">Join our Community on Discord</span>
          <a href="https://discord.gg/gVdDE8FQa7" className="flex items-center hover:text-blue-400 transition transform hover:scale-105">
            <FaDiscord className="w-10 h-10" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;