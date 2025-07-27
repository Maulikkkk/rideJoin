import React from 'react';
import { motion } from 'framer-motion';

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
      <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
      <p>Coming soon on <span className="underline">LinkedIn</span> • <span className="underline">Instagram</span> • <span className="underline">Twitter</span></p>
      <p className="mt-4 text-sm">© 2025 RideJoin. All rights reserved.</p>
    </motion.footer>
  );
}