import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <motion.footer
      className="bg-blue-600 text-white py-10 text-center"
      id="footer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
      
      <div className="flex justify-center space-x-6 text-2xl">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-200 transition-colors duration-300"
        >
          <FaLinkedin />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-200 transition-colors duration-300"
        >
          <FaInstagram />
        </a>

        {/* Twitter */}
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-200 transition-colors duration-300"
        >
          <FaTwitter />
        </a>
      </div>

      <p className="mt-6 text-sm">© 2025 RideJoin. All rights reserved.</p>
    </motion.footer>
  );
}
