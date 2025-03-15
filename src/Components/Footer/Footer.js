// import React from "react";
// import "./Footer.css";

// export const Footer = () => {
//   return (
//     <footer className="footerDetails">
//       <p className="footer">©️ Copyrights Reserved</p>
//     </footer>
//   );
// };

import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Footer.css";

// FontAwesome Icons
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaSun,
  FaMoon,
} from "react-icons/fa";

export const Footer = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.style.setProperty(
      "--bg-color",
      darkMode ? "#f8f9fa" : "#333"
    );
    document.documentElement.style.setProperty(
      "--text-color",
      darkMode ? "#333" : "#f8f9fa"
    );
  };

  return (
    <motion.footer
      className="footerDetails"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Social Media Icons */}
      <div className="footerIcons">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>

      {/* Copyright Text */}
      <p className="footer">
        ©️ {new Date().getFullYear()} Copyrights Reserved
      </p>

      {/* Dark Mode Toggle Button */}
      <button
        className="darkModeToggle"
        onClick={toggleDarkMode}
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </motion.footer>
  );
};
