import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "DayOff, London UK",
      period: "Sept 2023 - Nov 2024",
      description: [
        "Implemented authenticated user journeys for login and logout using JWT tokens in an event-driven mechanism using AWS Lambda and Cassandra database",
        "Developed Create, modify, and search trip details using RESTful APIs in a backend service with MongoDB as the data store",
        "Built user profile management service with Cassandra database",
        "Created authentication registration flows in Lambda function with OTP using AWS SNS",
      ],
      technologies: [
        "Python",
        "AWS Lambda",
        "Cassandra",
        "MongoDB",
        "JWT",
        "RESTful APIs",
        "AWS SNS",
      ],
      icon: "🚀",
      color: "from-blue-500 to-purple-600",
    },
    {
      title: "Software Developer",
      company: "Natter, London UK",
      period: "Dec 2023 - July 2024",
      description: [
        "Built authenticated user journeys for login and logout using JWT tokens for FastAPI RESTful endpoints",
        "Integrated Zoom API on the backend to facilitate authenticated users to host meetings and invite other users",
        "Developed core logic for natter points system, a backend FastAPI service to capture user journeys and assign points based on tasks completed",
        "Implemented AWS S3 as an image store for create and read blog posts feature",
      ],
      technologies: [
        "FastAPI",
        "JWT",
        "Zoom API",
        "AWS S3",
        "Python",
        "RESTful APIs",
      ],
      icon: "💻",
      color: "from-green-500 to-blue-600",
    },
    {
      title: "Software Developer (Freelance)",
      company: "PeoplePerHour, UK",
      period: "Aug 2023 - Jan 2024",
      description: [
        "Containerized web service with NGINX using Docker",
        "Automated builds with GitHub Actions/workflows",
        "Deployed application into Kubernetes (minikube) using k8s",
        "Developed and deployed gRPC plugin",
        "Refactored Flask backend algorithm for EA FC 24 player chemistry optimization",
        "Integrated with Futwiz Player search API to load player data",
      ],
      technologies: [
        "Docker",
        "Kubernetes",
        "GitHub Actions",
        "gRPC",
        "Flask",
        "NGINX",
        "Python",
      ],
      icon: "🔧",
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "Cloudforet Plugin Development Mentee",
      company: "The Linux Foundation",
      period: "Nov 2023 - Feb 2024",
      description: [
        "Participated in LFX Mentorship Programme for Cloudforet Plugin Development",
        "Worked on open-source cloud management platform development",
        "Contributed to plugin architecture and development",
        "Collaborated with international development team",
      ],
      technologies: [
        "Python",
        "Cloud Technologies",
        "Open Source",
        "Plugin Development",
      ],
      icon: "🌟",
      color: "from-orange-500 to-red-600",
    },
    {
      title: "Financial Administrator",
      company: "IronstoneLegal, London UK",
      period: "Apr 2022 - Nov 2022",
      description: [
        "Managed financial records and administrative tasks",
        "Processed invoices and maintained client accounts",
        "Supported legal operations with financial documentation",
        "Transitioned career focus towards software development during this period",
      ],
      technologies: [
        "Finance Management",
        "Administration",
        "Client Relations",
      ],
      icon: "📊",
      color: "from-indigo-500 to-blue-600",
    },
    {
      title: "Physics Lecturer",
      company: "Hutchings High School and Junior College, Pune India",
      period: "Jun 2019 - Oct 2021",
      description: [
        "Taught Physics to high school and junior college students",
        "Developed curriculum and educational materials",
        "Mentored students in scientific problem-solving",
        "Applied analytical and teaching skills that later enhanced programming abilities",
      ],
      technologies: ["Education", "Physics", "Problem Solving", "Mentoring"],
      icon: "🎓",
      color: "from-emerald-500 to-teal-600",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Professional
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A timeline of my career growth and technical achievements
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 h-full rounded-full hidden lg:block"></div>

          <div className="space-y-12 stagger-children">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } animate-slideInLeft animate-delay-${(index + 1) * 100}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white dark:bg-gray-900 border-4 border-purple-500 rounded-full z-10 hidden lg:block animate-pulse"></div>

                {/* Experience Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="modern-card rounded-3xl p-8 hover-lift transition-all duration-500 group relative overflow-hidden">
                    {/* Gradient Background Effect */}
                    <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-br ${exp.color} opacity-5 rounded-t-3xl`}></div>
                    
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6 relative z-10">
                      <div className={`w-16 h-16 bg-gradient-to-br ${exp.color} rounded-2xl flex items-center justify-center text-2xl group-hover:animate-bounce transition-all duration-300 flex-shrink-0`}>
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                          {exp.company}
                        </p>
                        <span className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full font-medium">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-3 mb-6 relative z-10">
                      {exp.description.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-gray-700 dark:text-gray-300 flex items-start animate-fadeInUp"
                          style={{ animationDelay: `${itemIndex * 100}ms` }}
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${exp.color} rounded-full mt-2 mr-4 flex-shrink-0 animate-pulse`}></div>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 relative z-10">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="tech-badge hover-scale transition-all duration-300 animate-bounceIn"
                          style={{ animationDelay: `${techIndex * 50}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Hover Shimmer Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer"></div>
                    </div>
                  </div>
                </div>

                {/* Empty space for timeline balance */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fadeInUp animate-delay-500">
          <div className="text-center p-6 modern-card rounded-2xl hover-scale transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              6+
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">
              Roles
            </div>
          </div>
          <div className="text-center p-6 modern-card rounded-2xl hover-scale transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
              20+
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">
              Technologies
            </div>
          </div>
          <div className="text-center p-6 modern-card rounded-2xl hover-scale transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              5+
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">
              Years Experience
            </div>
          </div>
          <div className="text-center p-6 modern-card rounded-2xl hover-scale transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
              10+
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">
              Projects
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
