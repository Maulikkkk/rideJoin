// src/components/JoinWaitlistModal.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function JoinWaitlistModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbysvnMmsya1TcLoPXb-FxGvj_R0DpAU1PP7BEQkliToZf2rYm3rja1yK5ZGF7Cxf5Lm/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitted(true);
        alert("You're on the waitlist 🎉");
      } else {
        console.error("Server error:", response.status);
        alert("Failed to submit. Try again.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md text-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Join the Waitlist</h2>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex justify-center gap-4">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <p className="text-green-600 font-medium">Successfully submitted!</p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
