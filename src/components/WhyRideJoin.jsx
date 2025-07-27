import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: '💸',
    title: 'Affordable',
    desc: 'Cut your daily cab expenses by up to 50%.',
  },
  {
    icon: '🌱',
    title: 'Eco-Friendly',
    desc: 'Fewer cabs on the road means less pollution.',
  },
  {
    icon: '🔒',
    title: 'Safe & Verified',
    desc: 'Only connect with verified users, with SOS support coming soon.',
  },
];

export default function WhyRideJoin() {
  return (
    <motion.section
      className="bg-gray-100 py-20 px-6 text-center"
      id="why-ridejoin"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Why RideJoin?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map(({ icon, title, desc }, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
