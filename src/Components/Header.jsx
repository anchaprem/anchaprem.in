import { useState, useEffect, useMemo, useCallback } from "react";
import { FaGithub, FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";

const Header = () => {
  // Gradients stored once
  const gradients = useMemo(
    () => [
      "linear-gradient(90deg, #00f5a0, #00d9f6)", // teal-cyan
      "linear-gradient(90deg, #FFD700, #FFA500)", // gold-orange
      "linear-gradient(90deg, #8E2DE2, #4A00E0)", // purple
      "linear-gradient(90deg, #FF512F, #DD2476)", // red-pink
      "linear-gradient(90deg, #36D1DC, #5B86E5)", // blue blend
      "linear-gradient(90deg, #F7971E, #FFD200)", // orange-yellow
    ],
    []
  );

  const [current, setCurrent] = useState(0);

  // Just pick a random gradient index
  const pickRandomGradient = useCallback(() => {
    const next = Math.floor(Math.random() * gradients.length);
    setCurrent(next);
  }, [gradients]);

  // Change gradient every 5s
  useEffect(() => {
    const interval = setInterval(pickRandomGradient, 5000);
    return () => clearInterval(interval);
  }, [pickRandomGradient]);

  return (
    <header className="bg-gray-800/95 backdrop-blur-sm fixed top-0 left-0 w-full flex flex-row justify-between items-center p-4 z-50 border-b border-gray-700/50">
      <div
        className="sm:ml-23 font-extrabold text-xl tracking-wide bg-clip-text text-transparent transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: gradients[current],
        }}
      >
        anchaprem
      </div>

      <nav className="md:mr-23 nav-links flex gap-4 sm:mr-6 text-white transition-all duration-700 ease-in-out">
        <a href="mailto:anchapremchand@gmail.com" title="Email">
          <FaEnvelope className="sm:text-2xl hover:text-gray-300 text-lg" />
        </a>
        <a href="https://github.com/anchaprem" target="_blank" rel="noopener noreferrer" title="GitHub">
          <FaGithub className="sm:text-2xl hover:text-gray-300 text-lg" />
        </a>
        <a href="https://www.linkedin.com/in/anchaprem/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <FaLinkedin className="sm:text-2xl hover:text-gray-300 text-lg" />
        </a>
        <a href="https://x.com/anchaprem_" target="_blank" rel="noopener noreferrer" title="Twitter">
          <FaTwitter className="sm:text-2xl hover:text-gray-300 text-lg" />
        </a>
      </nav>
    </header>
  );
};

export default Header;
