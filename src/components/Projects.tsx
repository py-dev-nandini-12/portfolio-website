import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Popular Movies with Storybook",
      description:
        "A comprehensive movie discovery application built with React and TypeScript, featuring component documentation with Storybook.",
      technologies: [
        "REACT",
        "TYPESCRIPT",
        "STORYBOOK",
        "TAILWIND CSS",
        "TMDB API",
        "NEXT.JS",
      ],
      liveUrl: "https://popular-movies-with-storybook-kq83ahc8g.vercel.app/",
      githubUrl:
        "https://github.com/py-dev-nandini-12/Popular_Movies_With_Storybook",
      gradient: "from-purple-500 via-pink-500 to-red-500",
      icon: "🎬",
    },
    {
      title: "Shopping App",
      description:
        "A modern e-commerce shopping application with product catalog, cart functionality, and user-friendly interface.",
      technologies: ["REACT", "TYPESCRIPT", "NEXT.JS", "TAILWIND CSS"],
      liveUrl:
        "https://shopping-qbdej2m7h-nandinis-projects-ce9532aa.vercel.app/",
      githubUrl: "https://github.com/py-dev-nandini-12/shopping-app",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      icon: "🛒",
    },
    {
      title: "Wind Speed Visualization",
      description:
        "Interactive data visualization application for wind speed analysis using modern charting libraries and responsive design.",
      technologies: ["PYTHON", "DATA VISUALIZATION", "CHARTS"],
      githubUrl: "https://github.com/py-dev-nandini-12/WindSpeed_visualization",
      gradient: "from-green-500 via-emerald-500 to-blue-500",
      icon: "📊",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Featured
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my latest work combining modern technologies with
            creative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group modern-card rounded-3xl p-1 hover-lift transition-all duration-500 animate-scaleIn animate-delay-${
                (index + 1) * 100
              }`}
            >
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 h-full relative overflow-hidden">
                {/* Gradient Background Effect */}
                <div
                  className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-br ${project.gradient} opacity-10 rounded-t-3xl`}
                ></div>

                {/* Project Icon */}
                <div className="relative z-10 mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center text-2xl group-hover:animate-bounce transition-all duration-300`}
                  >
                    {project.icon}
                  </div>
                </div>

                {/* Project Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className={`tech-badge animate-shimmer hover-scale transition-all duration-300 animate-delay-${
                          techIndex * 50
                        }`}
                        style={{
                          animationDelay: `${index * 200 + techIndex * 100}ms`,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 py-3 px-6 bg-gradient-to-r ${project.gradient} text-white rounded-xl font-semibold text-center hover-scale hover-glow transition-all duration-300 animate-pulse-glow`}
                      >
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-6 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold text-center hover:border-blue-500 hover:text-blue-500 transition-all duration-300"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Hover Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 animate-fadeInUp animate-delay-500">
          <div className="inline-block p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl hover-scale transition-all duration-300">
            <a
              href="https://github.com/py-dev-nandini-12"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-transparent hover:text-white transition-all duration-300"
            >
              Explore All Projects →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
