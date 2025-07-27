import React from 'react';
import { motion } from 'framer-motion';

export default function WhatWeDo() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("how");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      id="whatwedo"
      className="min-h-screen pt-24 px-6 bg-white text-center flex flex-col justify-center relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-6">What We Do</h2>
      <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12">
        RideJoin connects daily commuters traveling similar routes. By sharing rides, you save on travel costs, reduce traffic congestion, and help the environment — all with a seamless mobile experience.
      </p>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-left md:text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
            alt="Find Matches"
            className="w-24 h-24 mb-4"
          />
          <h3 className="text-2xl font-semibold text-blue-600 mb-2">Smart Ride Matching</h3>
          <p className="text-gray-600">
            Our algorithm finds people who live and work near you and have a similar schedule. 
            You can instantly connect and plan your ride together with minimal effort.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-left md:text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2620/2620984.png"
            alt="Split Fare"
            className="w-24 h-24 mb-4"
          />
          <h3 className="text-2xl font-semibold text-blue-600 mb-2">Split Fare, Save Big</h3>
          <p className="text-gray-600">
            Share your ride and automatically split the fare through the app. 
            Save up to 60% of your commute cost while making new connections on the go.
          </p>
        </div>
      </div>

      {/* ↓ Scroll to "How It Works" */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-3xl text-gray-400 animate-bounce cursor-pointer"
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        ↓
      </motion.div>
    </motion.section>
  );
}

