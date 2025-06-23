import React from "react";

const Skills = () => {
  const allSkills = [
    // Frontend
    {
      name: "React",
      icon: "⚛️",
      gradient: "from-slate-700 via-slate-800 to-slate-900",
    },
    {
      name: "Next.js",
      icon: "▲",
      gradient: "from-gray-800 via-gray-900 to-black",
    },
    {
      name: "TypeScript",
      icon: "TS",
      gradient: "from-blue-900 via-slate-800 to-gray-900",
    },
    {
      name: "JavaScript",
      icon: "JS",
      gradient: "from-amber-800 via-orange-900 to-red-900",
    },
    {
      name: "Tailwind CSS",
      icon: "🎨",
      gradient: "from-teal-800 via-slate-700 to-gray-800",
    },
    {
      name: "HTML/CSS",
      icon: "🌐",
      gradient: "from-orange-900 via-red-900 to-rose-900",
    },

    // Backend
    {
      name: "Python",
      icon: "🐍",
      gradient: "from-emerald-800 via-green-900 to-slate-900",
    },
    {
      name: "FastAPI",
      icon: "⚡",
      gradient: "from-green-800 via-emerald-900 to-slate-800",
    },
    {
      name: "Django",
      icon: "🎯",
      gradient: "from-emerald-900 via-green-900 to-gray-900",
    },

    {
      name: "REST APIs",
      icon: "🔗",
      gradient: "from-blue-900 via-indigo-900 to-slate-900",
    },

    // Database
    {
      name: "MongoDB",
      icon: "🍃",
      gradient: "from-green-900 via-emerald-900 to-slate-900",
    },
    {
      name: "PostgreSQL",
      icon: "🐘",
      gradient: "from-blue-900 via-indigo-900 to-purple-900",
    },
    {
      name: "MySQL",
      icon: "🐬",
      gradient: "from-blue-800 via-slate-800 to-gray-900",
    },
    {
      name: "Redis",
      icon: "🔴",
      gradient: "from-red-900 via-rose-900 to-slate-900",
    },

    // DevOps & Tools
    {
      name: "AWS",
      icon: "☁️",
      gradient: "from-orange-900 via-amber-900 to-yellow-900",
    },
    {
      name: "Docker",
      icon: "🐳",
      gradient: "from-blue-800 via-slate-800 to-gray-900",
    },
    {
      name: "Kubernetes",
      icon: "⚙️",
      gradient: "from-blue-900 via-indigo-900 to-slate-900",
    },
    {
      name: "Git",
      icon: "🔧",
      gradient: "from-orange-900 via-red-900 to-slate-900",
    },
    {
      name: "Linux",
      icon: "🐧",
      gradient: "from-gray-800 via-slate-900 to-black",
    },
    {
      name: "CI/CD",
      icon: "🔄",
      gradient: "from-purple-900 via-indigo-900 to-slate-900",
    },
  ];

  const certifications = [
    "PCEP Python Programmer",
    "Python Essentials - CISCO",
    "Prince2 Foundations",
    "Linux Foundation Mentorship",
  ];

  return (
    <section
      id="skills"
      className="py-16 bg-gradient-to-br from-slate-50 via-gray-100 to-blue-50 dark:from-gray-900 dark:via-slate-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Technologies I work with
          </p>
        </div>

        {/* Skills Button Grid */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {allSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Skill Button */}
              <div
                className={`
                relative px-5 py-3 rounded-full 
                bg-gradient-to-r ${skill.gradient}
                text-white font-medium text-sm
                shadow-lg hover:shadow-xl
                transform hover:scale-105 hover:-translate-y-1
                transition-all duration-300 ease-out
                cursor-pointer
                border border-white/20
                backdrop-blur-sm
              `}
              >
                <div className="flex items-center gap-2">
                  <span className="text-base">{skill.icon}</span>
                  <span className="font-semibold">{skill.name}</span>
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="flex justify-center mb-12">
          {[
            {
              label: "Certifications",
              value: "8+",
              gradient: "from-orange-900 via-red-900 to-slate-900",
              icon: "🏆",
            },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`
                relative p-4 rounded-xl text-center
                bg-gradient-to-r ${stat.gradient}
                text-white shadow-lg hover:shadow-xl
                transform hover:scale-105
                transition-all duration-300
                border border-white/20
                w-48
              `}
              style={{
                animationDelay: `${allSkills.length * 50 + index * 100}ms`,
              }}
            >
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-xs font-medium opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            🎓 Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <div
                key={cert}
                className={`
                  px-4 py-2 rounded-full
                  bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900
                  text-white text-sm font-medium
                  shadow-lg hover:shadow-xl
                  transform hover:scale-105
                  transition-all duration-300
                  border border-gray-600/50
                `}
                style={{
                  animationDelay: `${
                    allSkills.length * 50 + 400 + index * 100
                  }ms`,
                }}
              >
                🏆 {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
