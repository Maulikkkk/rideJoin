import React from 'react';
import { motion } from 'framer-motion';
import logoRideJoin from '../assets/logoridejoin.svg'; // ✅ Import your SVG image

const IntroSplash = ({ onDone }) => {
  return (
    <section className="h-screen bg-gradient-to-br from-blue-100 via-white to-green-100 flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">

      {/* Floating Decorative Bubbles */}
      <motion.div
        className="absolute top-10 left-10 w-16 h-16 bg-blue-200 rounded-full opacity-50"
        animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-20 h-20 bg-green-200 rounded-full opacity-40"
        animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Logo Title */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-5xl font-extrabold text-blue-700 mb-6 tracking-wide">RideJoin</div>
      </motion.div>

      {/* Tagline */}
      <motion.h1
        className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Share the Ride. <br className="sm:hidden" />
        Split the Fare.
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="mt-4 max-w-xl text-gray-600 text-base sm:text-lg"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        RideJoin connects daily commuters heading the same way to share cabs,
        save money, and reduce environmental impact.
      </motion.p>

      {/* Local SVG Illustration */}
      <motion.img
        src={logoRideJoin}
        alt="RideJoin Illustration"
        className="w-60 sm:w-72 md:w-80 mt-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      />

      {/* Scroll Arrow */}
      <motion.div
        className="mt-12 text-3xl text-gray-500 animate-bounce cursor-pointer"
        onClick={onDone}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        title="Start Exploring"
      >
        ↓
      </motion.div>
    </section>
  );
};

export default IntroSplash;
