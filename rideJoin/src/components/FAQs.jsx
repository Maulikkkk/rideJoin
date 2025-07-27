import React from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'Is RideJoin safe?',
    answer: 'Yes. We only allow verified users and are adding SOS tracking and emergency sharing features.',
  },
  {
    question: 'Do I need to pay through the app?',
    answer: 'Currently, you can split fares manually. Integrated digital payments will be available in future updates.',
  },
  {
    question: 'How is this different from Uber Pool?',
    answer: 'Unlike Uber Pool, RideJoin lets you choose your co-riders — whether friends, coworkers, or verified nearby matches.',
  },
  {
    question: 'Can I schedule rides in advance?',
    answer: 'Yes! You can post your ride plan ahead of time to find matches early and avoid last-minute hassle.',
  },
  {
    question: 'What if my timings change?',
    answer: 'You can always edit your ride plan. We’ll update your match suggestions instantly.',
  },
  {
    question: 'Is this free to use?',
    answer: 'Yes. RideJoin is completely free while we are in beta testing. Premium features may be added later.',
  },
];

export default function FAQs() {
  return (
    <motion.section
      className="py-20 px-6 bg-white text-center"
      id="faqs"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Anchor ID for scroll */}
      <section id="faq" className="pt-24"></section>

      {/* Section Title */}
      <h2 className="text-4xl font-bold text-gray-800 mb-12">FAQs</h2>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto text-left space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="border-l-4 border-blue-600 pl-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h4 className="font-semibold text-lg text-blue-700 mb-1">
              {faq.question}
            </h4>
            <p className="text-gray-700 text-sm">{faq.answer}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
