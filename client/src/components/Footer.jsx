import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="md:flex md:justify-between md:items-center">
          {/* Branding and About - Hidden on Small Screens */}
          <div className="hidden md:block mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              Apoorv's Blog
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              A place to share insights, stories, and updates on the latest in tech, lifestyle, and more.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-6 md:mb-0">
            <NavLink 
              to="/about" 
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              About
            </NavLink>
            <NavLink 
              to="/contact" 
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Contact
            </NavLink>
            <NavLink 
              to="/privacy" 
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Privacy Policy
            </NavLink>
            <NavLink 
              to="/legal" 
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Legal
            </NavLink>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6">
            <NavLink
              to={{ pathname: "https://www.linkedin.com/in/your-linkedin-profile/" }}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FaLinkedin size={24} />
            </NavLink>
            <NavLink
              to={{ pathname: "https://www.facebook.com" }}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FaFacebook size={24} />
            </NavLink>
            <NavLink
              to={{ pathname: "https://www.twitter.com" }}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FaTwitter size={24} />
            </NavLink>
            <NavLink
              to={{ pathname: "https://www.instagram.com" }}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FaInstagram size={24} />
            </NavLink>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Apoorv Vikram. All rights reserved.
          </p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Built with love and passion for sharing knowledge.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
