import React from 'react';

const About = () => {
  const highlights = [
    {
      icon: "👩‍💻",
      title: "Full-Stack Developer",
      description: "Specialized in Python, FastAPI, React, and AWS cloud services",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: "🎓",
      title: "Physics to Tech",
      description: "Unique analytical mindset from education background",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: "🚀",
      title: "Current Role",
      description: "Software Developer at DayOff, building scalable applications",
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate software engineer with a unique journey from Physics education to modern web development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main About Card */}
          <div className="modern-card rounded-3xl p-8 hover-lift transition-all duration-500 group relative overflow-hidden animate-slideInLeft">
            {/* Animated Background */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl group-hover:animate-bounce">
                  👋
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Hi, I&apos;m Nandini!</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">Software Developer</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  I&apos;m a passionate software engineer who transitioned from Physics education to building 
                  modern web applications. Currently working at <strong className="text-gray-900 dark:text-white">DayOff</strong>, 
                  I specialize in creating scalable backend systems and intuitive user experiences.
                </p>
                
                <p>
                  My core expertise includes <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Python, FastAPI, React, Next.js, and AWS</span>. I&apos;ve delivered full-stack platforms, 
                  authentication systems, and API integrations for various clients.
                </p>
                
                <p>
                  My unique journey from education to technology brings exceptional problem-solving skills 
                  and a passion for continuous learning to every project I work on.
                </p>
              </div>

              {/* Tech Stack Badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                {["Python", "FastAPI", "React", "AWS", "MongoDB", "Docker"].map((tech, index) => (
                  <span
                    key={tech}
                    className="tech-badge hover-wiggle transition-all duration-300 animate-bounceIn"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights Cards */}
          <div className="space-y-6 animate-slideInRight">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.title}
                className={`modern-card rounded-2xl p-6 hover-lift transition-all duration-500 group animate-scaleIn animate-delay-${(index + 1) * 100}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${highlight.color} rounded-2xl flex items-center justify-center text-xl group-hover:animate-bounce flex-shrink-0`}>
                    {highlight.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Call to Action */}
            <div className="modern-card rounded-2xl p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 hover-lift transition-all duration-500 group animate-scaleIn animate-delay-400">
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Ready to Collaborate?
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  I&apos;m actively seeking opportunities to work with high-performing teams on impactful projects.
                </p>
                <a
                  href="#contact"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover-scale transition-all duration-300"
                >
                  Let&apos;s Connect →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fadeInUp animate-delay-500">
          <div className="text-center p-6 modern-card rounded-2xl hover-scale transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              2+
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">
              Years Coding
            </div>
          </div>
          <div className="text-center p-6 modern-card rounded-2xl hover-scale transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
              10+
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">
              Projects Built
            </div>
          </div>
          <div className="text-center p-6 modern-card rounded-2xl hover-scale transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
              15+
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">
              Technologies
            </div>
          </div>
          <div className="text-center p-6 modern-card rounded-2xl hover-scale transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">
              Dedication
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
