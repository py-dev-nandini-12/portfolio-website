"use client";

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "phy.nandini@gmail.com",
      link: "mailto:phy.nandini@gmail.com",
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+1 (xxx) xxx-xxxx",
      link: "tel:+1xxxxxxxxxx",
    },
    {
      icon: "📍",
      title: "Location",
      value: "San Francisco, CA",
      link: "#",
    },
    {
      icon: "💼",
      title: "Available for",
      value: "Full-time & Freelance",
      link: "#",
    },
  ];

  const socialLinks = [
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
      name: "Twitter",
      icon: "🐦",
      url: "https://twitter.com/yourusername",
      color: "bg-sky-500 hover:bg-sky-600",
    },
    {
      name: "Resume",
      icon: "📄",
      url: "/Nc_python_cv.pdf",
      color: "bg-purple-600 hover:bg-purple-700",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 animate-fade-in">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I&apos;m always excited to discuss new opportunities and innovative projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
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
            <div className="modern-card p-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
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

            {/* Response Time */}
            <div className="modern-card p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-700 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <div className="text-center">
                <span className="text-3xl mb-2 block">⚡</span>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                  Quick Response
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  I typically respond within 24 hours
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="modern-card p-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send me a message
              </h3>

              {submitted && (
                <div className="mb-6 p-4 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-300 dark:border-green-700 rounded-lg text-green-800 dark:text-green-300 text-center animate-bounce-in">
                  <span className="text-2xl mr-2">✅</span>
                  Thank you for your message! I&apos;ll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600"
                    placeholder="Let's discuss a project"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600 resize-none"
                    placeholder="Hi Nandini, I'd like to discuss a project opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group"
                >
                  <span className="flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                          →
                        </span>
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="modern-card p-8 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 border-blue-200 dark:border-blue-700 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to start your project?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Whether you need a full-stack web application, API development, or data analysis solutions, 
              I&apos;m here to help bring your vision to reality.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:phy.nandini@gmail.com"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                <span className="mr-2">📧</span>
                Email Me
              </a>
              <a
                href="/Nc_python_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                <span className="mr-2">📄</span>
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
