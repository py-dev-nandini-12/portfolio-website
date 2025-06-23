"use client";

import React, { useMemo, use, Suspense } from "react";

// Modern React 19 approach: Create a promise for contact data
const createContactDataPromise = () => {
  return Promise.resolve({
    responseTime: "24 hours",
    availability: "Full-time & Freelance",
    timezone: "PST",
  });
};

// Component that uses the 'use' hook to read the promise
const ContactMetadata = ({
  promise,
}: {
  promise: Promise<{
    responseTime: string;
    availability: string;
    timezone: string;
  }>;
}) => {
  const data = use(promise);

  return (
    <div className="modern-card p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-700 animate-slide-up">
      <div className="text-center">
        <span className="text-3xl mb-2 block">⚡</span>
        <h4 className="font-bold text-gray-900 dark:text-white mb-1">
          Quick Response
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          I typically respond within {data.responseTime}
        </p>
      </div>
    </div>
  );
};

const Contact = () => {
  // Modern React 19: Create promise for contact metadata
  const contactDataPromise = useMemo(() => createContactDataPromise(), []);

  // Memoized contact info to prevent unnecessary re-renders
  const contactInfo = useMemo(
    () => [
      {
        icon: "📧",
        title: "Email",
        value: "phy.nandini@gmail.com",
        link: "mailto:phy.nandini@gmail.com",
      },
      {
        icon: "📍",
        title: "Location",
        value: "London, UK",
        link: "https://www.google.com/maps/place/London,+UK",
      },
      {
        icon: "💼",
        title: "Available for",
        value: "Full-time & Freelance",
        link: "#contact", // or leave as "#" if you want no navigation
      },
    ],
    []
  );

  // Memoized social links
  const socialLinks = useMemo(
    () => [
      {
        name: "GitHub",
        icon: "🔗",
        url: "https://github.com/yourusername",
        color: "bg-gray-800 hover:bg-gray-700",
      },
      {
        name: "LinkedIn",
        icon: "💼",
        url: "https://linkedin.com/in/yourusername",
        color: "bg-blue-600 hover:bg-blue-700",
      },

      {
        name: "Resume",
        icon: "📄",
        url: "/Nc_python_cv.pdf",
        color: "bg-purple-600 hover:bg-purple-700",
      },
    ],
    []
  );

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 animate-fade-in">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I&apos;m always excited to
            discuss new opportunities and innovative projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information Cards */}
          <div className="space-y-6">
            <div className="modern-card p-6 animate-slide-up">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 group"
                  >
                    <span className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {info.title}
                      </p>
                      <p className="text-gray-900 dark:text-white font-medium">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div
              className="modern-card p-6 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Connect with Me
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} text-white p-3 rounded-lg text-center transition-all duration-300 hover:scale-105 group`}
                  >
                    <span className="text-xl mb-1 block group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>
                    <span className="text-sm font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Response Time - Using React 19 'use' hook */}
            <Suspense
              fallback={
                <div className="modern-card p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-700 animate-pulse">
                  <div className="text-center">
                    <span className="text-3xl mb-2 block">⏳</span>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                      Loading...
                    </h4>
                  </div>
                </div>
              }
            >
              <ContactMetadata promise={contactDataPromise} />
            </Suspense>
          </div>

          {/* Contact CTA */}
          <div className="flex items-center">
            <div
              className="modern-card p-8 w-full bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 border-blue-200 dark:border-blue-700 animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="text-center">
                <div className="text-6xl mb-6">💼</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Ready to start your project?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                  Whether you need a full-stack web application, API
                  development, or data analysis solutions, I&apos;m here to help
                  bring your vision to reality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:phy.nandini@gmail.com"
                    className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <span className="mr-2">📧</span>
                    Email Me
                  </a>
                  <a
                    href="/Nc_python_cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-md"
                  >
                    <span className="mr-2">📄</span>
                    View Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
