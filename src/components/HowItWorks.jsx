import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: '📝',
    title: 'Post Ride Plan',
    desc: 'Enter your pickup, drop location, and preferred time of travel. You can also mark if you’re flexible with timing.',
  },
  {
    icon: '🔍',
    title: 'Find a Match',
    desc: 'Our smart algorithm finds people commuting on similar routes. You’ll get suggestions based on timing, location, and preferences.',
  },
  {
    icon: '💬',
    title: 'Connect & Confirm',
    desc: 'Chat securely in-app to confirm ride details, pickup points, or adjustments if needed.',
  },
  {
    icon: '🚕',
    title: 'Share the Ride',
    desc: 'Book a cab together directly through the app and split the fare seamlessly with integrated payment options.',
  },
  {
    icon: '🛡️',
    title: 'Safe & Verified',
    desc: 'All users are verified, and rides are GPS-tracked to ensure safety and trust. You can also rate your co-riders.',
  },
  {
    icon: '🎁',
    title: 'Earn Rewards',
    desc: 'Every ride you share earns you points. Redeem them for discounts or partner perks — ride more, save more!',
  },
];

export default function HowItWorks() {
  const scrollToFAQ = () => {
    const faqSection = document.getElementById("faq");
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToHero = () => {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      className="min-h-screen py-20 px-6 bg-white text-center relative"
      id="how-it-works"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <section id="how" className="pt-24"></section>

      <h2 className="text-4xl font-bold text-gray-800 mb-4">How It Works</h2>

      <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12">
        RideJoin streamlines cab-sharing by helping you plan, match, and ride together with verified commuters. Here’s how the journey flows:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
        {steps.map(({ icon, title, desc }, index) => (
          <motion.div
            key={index}
            className="bg-blue-50 rounded-xl p-6 shadow hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="text-4xl mb-4"
            >
              {icon}
            </motion.div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{desc}</p>
          </motion.div>
        ))}
      </div>

     

      {/* ↓ Scroll to FAQ */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-3xl text-gray-400 animate-bounce cursor-pointer"
        onClick={scrollToFAQ}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        ↓
      </motion.div>
    </motion.section>
  );
}
