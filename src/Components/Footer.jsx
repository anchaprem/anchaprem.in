import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b1220]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="text-center">
          <p className="text-black text-sm sm:text-base text-white">
            Built and designed by anchaprem❤
          </p>
          <p className="text-black text-sm sm:text-base text-white">
          All rights reserved. © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
