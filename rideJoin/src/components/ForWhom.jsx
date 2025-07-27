import React from 'react';
import { motion } from 'framer-motion';

const targetGroups = [
  {
    icon: '🎓',
    title: 'College Students',
    desc: 'Save on daily commute while traveling with peers from your campus or locality.',
  },
  {
    icon: '💼',
    title: 'Office Workers',
    desc: 'Book cabs with coworkers or professionals going your way.',
  },
  {
    icon: '🏙️',
    title: 'Urban Commuters',
    desc: 'Perfect for those who travel short distances regularly in busy cities.',
  },
];

export default function ForWhom() {
  return (
    <motion.section
      className="bg-gray-100 py-20 px-6 text-center"
      id="for-whom"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-10">Who Is RideJoin For?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {targetGroups.map(({ icon, title, desc }, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
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