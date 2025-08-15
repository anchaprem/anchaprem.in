import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const featuredProjects = [
    {
      id: 1,
      title: "portfolio.js",
      description: "Portfolio.js is a small JS library that helps with clear and succinct data presentation that is easy to navigate. Built by Premchand.",
      technologies: ["NODE.JS (EXPRESS.JS)", "React.js", "JavaScript"],
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "TDSB Homework Management Interface",
      description: "An application created for Toronto District School Board, with a Flask back-end and a Vue front-end.",
      technologies: ["Python (Flask)", "Vue.js", "Bootstrap", "SQL"],
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Adam A.I.",
      description: "A self-learning A.I. that learns to traverse through a complex maze using the genetic algorithm.",
      technologies: ["Javascript", "HTML / CSS"],
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=center"
    }
  ];

  const allProjects = [
    {
      id: 1,
      title: "Todo: Store locally",
      description: "A responsive task manager with deadlines, notifications, filtering, and local storage, built using HTML, CSS, JavaScript, and Bootstrap.",
      technologies: ["JavaScript","Local storage","DOM","Event Handling"," Event Listeners"],
      github: "https://github.com/anchaprem/Todo",
      live: "https://anchaprem.github.io/Todo/"
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  // Auto-rotate carousel every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextProject();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-[#0b1220] text-white px-4 py-16 pt-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="mb-16">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold italic text-white">
              &lt;pet projects/&gt;
            </h2>
          </div>
        </div>

        {/* Featured Projects Carousel - Visible from md screens only */}
        <div className="hidden mb-16">
          <div className="relative max-w-4xl mx-auto">
            {/* Carousel Container */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-teal-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-teal-400 text-2xl">📁</span>
                </div>
                <div className="flex gap-4">
                  <a href={featuredProjects[currentProject].github} className="text-gray-400 hover:text-teal-400 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href={featuredProjects[currentProject].live} className="text-gray-400 hover:text-teal-400 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Project Content with Image */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4 leading-tight">{featuredProjects[currentProject].title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">{featuredProjects[currentProject].description}</p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {featuredProjects[currentProject].technologies.map((tech, index) => (
                      <span key={index} className="text-sm text-gray-400 bg-gray-700/50 px-3 py-2 rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Project Image */}
                <div className="relative">
                  <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
                    <img 
                      src={featuredProjects[currentProject].image}
                      alt={featuredProjects[currentProject].title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-6 mb-8">
                <button className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-teal-500 hover:text-teal-400 transition-all duration-300 text-base font-medium">
                  examples
                </button>
                <button className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-teal-500 hover:text-teal-400 transition-all duration-300 text-base font-medium">
                  🚀 live hotspot
                </button>
                <button className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-teal-500 hover:text-teal-400 transition-all duration-300 text-base font-medium">
                  get started
                </button>
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-3">
                {featuredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentProject ? 'bg-teal-400 w-8' : 'bg-gray-600 w-3'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/80 rounded-full flex items-center justify-center text-white hover:bg-teal-500/20 transition-all duration-300 border border-gray-700/50"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/80 rounded-full flex items-center justify-center text-white hover:bg-teal-500/20 transition-all duration-300 border border-gray-700/50"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* All Projects Grid Section */}
        <div>
          
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project) => (
              <div key={project.id} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-teal-500/50 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center">
                    <span className="text-teal-400 text-2xl">📁</span>
                  </div>
                  <div className="flex gap-3">
                    <a href={project.github} className="text-gray-400 hover:text-teal-400 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a href={project.live} target='_blank' className="text-gray-400 hover:text-teal-400 transition-colors">
                      🚀
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
