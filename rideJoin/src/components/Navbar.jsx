// components/Navbar.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-white shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <button
          onClick={reloadPage}
          className="text-xl font-bold text-blue-600 focus:outline-none"
        >
          RideJoin
        </button>

        <ul className="flex gap-6 text-gray-700 font-medium">
          <li><button onClick={() => scrollTo("hero")} className="hover:text-blue-500">Home</button></li>
          <li><button onClick={() => scrollTo("whatwedo")} className="hover:text-blue-500">Mission</button></li>
          <li><button onClick={() => scrollTo("how")} className="hover:text-blue-500">How</button></li>
          <li><button onClick={() => scrollTo("faq")} className="hover:text-blue-500">FAQ</button></li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
