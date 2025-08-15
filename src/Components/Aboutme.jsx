import React from 'react';

const AboutMe = () => {
  return (
    <section className="min-h-screen bg-[#0b1220] text-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12 pt-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold italic text-white">
              &lt;about me/&gt;
            </h2>
           
          </div>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-4 sm:space-y-6 order-2 sm:order-1">
            {/* First Paragraph */}
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
  I am a <span className="font-semibold">Python & MERN Stack Developer</span> with a passion for building 
  high-performance applications, from full-stack solutions to AI-powered tools. 
  I have hands-on experience in developing secure, real-time, and scalable systems through diverse projects. 
  I recently completed my <span className="font-semibold text-teal-400">B.Tech in Information Technology </span> 
  at <span className="font-semibold text-teal-400">Bapatla Engineering College</span>.
</p>


            {/* Technologies Section */}
            <div className="mt-6 sm:mt-8">
              <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-200 mb-3 sm:mb-4">
                Here are some technologies I have been working with:
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <ul className="space-y-1 sm:space-y-2">
                  <li className="flex items-center text-gray-300 text-sm sm:text-base">
                    <span className="text-teal-400 mr-2 sm:mr-3">▸</span>
                    Python
                  </li>
                  <li className="flex items-center text-gray-300 text-sm sm:text-base">
                    <span className="text-teal-400 mr-2 sm:mr-3">▸</span>
                    React.js
                  </li>
                  <li className="flex items-center text-gray-300 text-sm sm:text-base">
                    <span className="text-teal-400 mr-2 sm:mr-3">▸</span>
                    Javascript ES6+
                  </li>
                </ul>
                <ul className="space-y-1 sm:space-y-2">
                  <li className="flex items-center text-gray-300 text-sm sm:text-base">
                    <span className="text-teal-400 mr-2 sm:mr-3">▸</span>
                    Node.js & Express
                  </li>
                  <li className="flex items-center text-gray-300 text-sm sm:text-base">
                    <span className="text-teal-400 mr-2 sm:mr-3">▸</span>
                    SQL & Mongoose
                  </li>
                  <li className="flex items-center text-gray-300 text-sm sm:text-base">
                    <span className="text-teal-400 mr-2 sm:mr-3">▸</span>
                    Data Structures & Algorithms
                  </li>
                </ul>
              </div>
            </div>

            {/* Second Paragraph */}
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 mt-6 sm:mt-8">
              Outside of work, I'm interested in following the developments of science and play lot of video games.
            </p>

            {/* Resume Button */}
            <div className="mt-6 sm:mt-8">
              <a 
                href="https://drive.google.com/file/d/10r3IjrNX0eZCJ93IqTKAL-bP6X8Ccvvz/view" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-teal-500/20 border border-teal-400/50 text-teal-400 rounded-lg hover:bg-teal-500/30 hover:border-teal-400 transition-all duration-300 font-medium text-sm sm:text-base group"
              >
                <span className="mr-2">📄</span>
                View Resume
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - Photo (Visible from sm screens and above) */}
          <div className="hidden sm:block order-1 sm:order-2">
            <div className="relative">
              {/* Photo Container with responsive sizing and hover effects */}
              <div className="w-full max-w-40 sm:max-w-48 md:max-w-56 lg:max-w-64 mx-auto">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-3xl hover:shadow-teal-500/20 group">
                  {/* Actual photo from Cloudinary */}
                  <img 
                    src="https://res.cloudinary.com/dn0jgzymu/image/upload/v1708834425/profotile/IMG_20230905_083838_583_ncksvj.jpg"
                    alt="Profile Photo"
                    className="w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
                    style={{ zIndex: 999 }}
                  />
                  {/* Hover overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;