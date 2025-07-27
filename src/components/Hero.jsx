
import React, { useState } from "react";
import { motion } from "framer-motion";
import JoinWaitlistModal from "./JoinWaitlistModal";


export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="hero" className="bg-white pt-20">
    
      <div className="min-h-screen flex flex-col justify-center items-center px-6 text-center max-w-3xl mx-auto">
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Simplify Your Commute
          <br className="hidden md:block" />
          with <span className="text-blue-600">RideJoin</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Why commute alone? Team up, save cash, and go eco-friendly.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
          onClick={() => setIsOpen(true)}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Join the Waitlist
        </motion.button>

        {/* Modal */}
        <JoinWaitlistModal isOpen={isOpen} onClose={() => setIsOpen(false)} />

        {/* Scroll Indicator */}
        <motion.div
  className="mt-16 text-gray-400 animate-bounce cursor-pointer"
  onClick={() => {
    const section = document.getElementById("whatwedo");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1 }}
>
  ↓
</motion.div>

        
      </div>
    </section>
  );
}
