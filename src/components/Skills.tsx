import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "🐍",
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
      skills: [
        { name: "Python 3", level: 95 },
        { name: "Shell/Unix", level: 85 },
        { name: "JavaScript", level: 75 },
        { name: "SQL", level: 90 },
      ],
    },
    {
      title: "Python Frameworks",
      icon: "⚡",
      color: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
      skills: [
        { name: "FastAPI", level: 90 },
        { name: "Django", level: 85 },
        { name: "Flask", level: 85 },
        { name: "RESTful APIs", level: 95 },
      ],
    },
    {
      title: "Databases",
      icon: "🗄️",
      color: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Cassandra", level: 75 },
        { name: "SQLite", level: 85 },
        { name: "Redis", level: 75 },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      color: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
      skills: [
        { name: "AWS (EC2, Lambda, S3)", level: 85 },
        { name: "Docker & Kubernetes", level: 80 },
        { name: "GitHub Actions", level: 85 },
        { name: "ArgoCD", level: 75 },
        { name: "Git", level: 95 },
        { name: "CI/CD", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Technical
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My technical expertise spanning Python development, cloud technologies, and database management
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`group modern-card rounded-3xl p-1 hover-lift transition-all duration-500 animate-scaleIn animate-delay-${(categoryIndex + 1) * 100} bg-gradient-to-br ${category.bgGradient}`}
            >
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 h-full relative overflow-hidden">
                {/* Animated Background Pattern */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} opacity-5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`}></div>
                
                {/* Header */}
                <div className="text-center mb-8 relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-3xl flex items-center justify-center text-3xl mb-4 mx-auto group-hover:animate-bounce transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {category.title}
                  </h3>
                  <div className={`h-1 w-16 bg-gradient-to-r ${category.color} rounded-full mt-3 mx-auto`}></div>
                </div>

                {/* Skills */}
                <div className="space-y-5 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name} 
                      className="group/skill animate-fadeInUp"
                      style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` }}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full animate-pulse`}></div>
                          <span className="text-xs font-bold bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full">
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                      
                      {/* Animated Progress Bar */}
                      <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-shimmer relative overflow-hidden`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${skillIndex * 150}ms`
                          }}
                        >
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer opacity-0 group-hover:opacity-100"></div>
                        </div>
                        
                        {/* Glow effect */}
                        <div 
                          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.color} rounded-full opacity-0 group-hover:opacity-30 blur-sm transition-all duration-500`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Category Stats */}
                <div className="mt-8 p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl relative z-10">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400 font-medium">Technologies</span>
                    <span className="font-bold text-gray-900 dark:text-white text-lg">{category.skills.length}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-2">
                    <span className="text-gray-600 dark:text-gray-400 font-medium">Avg. Proficiency</span>
                    <span className={`font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent text-lg`}>
                      {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%
                    </span>
                  </div>
                </div>

                {/* Hover Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-shimmer"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AWS Services Section */}
        <div className="mt-20 animate-fadeInUp animate-delay-400">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            AWS Services
            <span className="block text-xl text-gray-600 dark:text-gray-400 font-normal mt-2">Cloud Infrastructure Expertise</span>
          </h3>
          <div className="modern-card rounded-3xl p-8 bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 dark:from-orange-900/20 dark:via-amber-900/20 dark:to-red-900/20 hover-lift transition-all duration-500 group relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
            
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              <div className="text-center p-8 modern-card rounded-3xl hover-scale transition-all duration-300 group/item">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center text-3xl mb-6 mx-auto group-hover/item:animate-bounce shadow-lg group-hover/item:shadow-xl">💻</div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-xl group-hover/item:text-transparent group-hover/item:bg-gradient-to-r group-hover/item:from-orange-500 group-hover/item:to-red-500 group-hover/item:bg-clip-text transition-all duration-300">Compute Services</h4>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-xl p-3">
                    <p className="text-gray-700 dark:text-gray-300 font-semibold">EC2 Instances</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Scalable Computing</p>
                  </div>
                  <div className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-xl p-3">
                    <p className="text-gray-700 dark:text-gray-300 font-semibold">Lambda Functions</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Serverless Computing</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center p-8 modern-card rounded-3xl hover-scale transition-all duration-300 group/item">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center text-3xl mb-6 mx-auto group-hover/item:animate-bounce shadow-lg group-hover/item:shadow-xl">📧</div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-xl group-hover/item:text-transparent group-hover/item:bg-gradient-to-r group-hover/item:from-blue-500 group-hover/item:to-cyan-500 group-hover/item:bg-clip-text transition-all duration-300">Communication</h4>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-xl p-3">
                    <p className="text-gray-700 dark:text-gray-300 font-semibold">SES (Email)</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Email Service</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-xl p-3">
                    <p className="text-gray-700 dark:text-gray-300 font-semibold">SNS (Push)</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Notification Service</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center p-8 modern-card rounded-3xl hover-scale transition-all duration-300 group/item">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center text-3xl mb-6 mx-auto group-hover/item:animate-bounce shadow-lg group-hover/item:shadow-xl">💾</div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-xl group-hover/item:text-transparent group-hover/item:bg-gradient-to-r group-hover/item:from-purple-500 group-hover/item:to-pink-500 group-hover/item:bg-clip-text transition-all duration-300">Data Storage</h4>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl p-3">
                    <p className="text-gray-700 dark:text-gray-300 font-semibold">S3 Buckets</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Object Storage</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl p-3">
                    <p className="text-gray-700 dark:text-gray-300 font-semibold">DynamoDB</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">NoSQL Database</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-10 relative z-10">
              <div className="inline-block p-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-2xl">
                <span className="block bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-bold text-lg">
                  🚪 API Gateway & Secure REST APIs
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center animate-fadeInUp animate-delay-500">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Certifications & Learning
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "PCEP – Certified Entry-Level Python Programmer",
              "Python Essentials - CISCO",
              "Prince2 Foundations Certification",
              "Protocol Buffers - LFS145",
              "Udemy Python/Flask/Django Bootcamp",
              "Udemy JavaScript Bootcamp",
              "Linux Foundation Mentorship",
            ].map((cert, index) => (
              <span
                key={cert}
                className={`tech-badge hover-wiggle transition-all duration-300 animate-bounceIn`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                🏆 {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
