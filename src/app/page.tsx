"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Intro from "@/components/Intro";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const experiences = [
  {
    period: "Jun 2025 – Present",
    company: "Bending Spoons",
    role: "Data Scientist",
    location: "Milan, Italy",
    highlight: "$1.56M+ revenue",
    description:
      "Building data infrastructure and analytics for consumer apps with millions of users. Designing ETL pipelines and analytics layers on BigQuery, running A/B tests to inform product decisions, and delivering insights that shape product roadmaps.",
  },
  {
    period: "Sep 2024 – Jun 2025",
    company: "SIBS",
    role: "Applied Research · ML Engineer",
    location: "Lisbon, Portugal",
    highlight: "166M+ transactions analyzed",
    description:
      "Built a forecasting system to predict daily fraud risk for one of Europe's largest payment processors. Designed the full pipeline from feature engineering to model selection, enabling proactive fraud prevention.",
  },
  {
    period: "Jan 2024 – May 2024",
    company: "Cushman & Wakefield",
    role: "Data Analyst Intern",
    location: "Milan, Italy",
    description:
      "Supported real estate investment decisions through data analysis. Built automated reporting pipelines using Python and SQL to transform raw market data into actionable insights.",
  },
];

const education = [
  {
    period: "2024 – 2025",
    institution: "Nova School of Business & Economics",
    degree: "MSc in Business Analytics & Data Science",
    location: "Lisbon, Portugal",
    description:
      "Advanced machine learning, data engineering, and optimization. Thesis on fraud forecasting using XGBoost, neural networks, and transfer learning.",
  },
  {
    period: "2021 – 2024",
    institution: "Bocconi University",
    degree: "BSc in Economics, Management & Computer Science",
    location: "Milan, Italy",
    description:
      "Graduated cum laude. Focus on machine learning, econometrics, and statistics. Thesis on age estimation using computer vision.",
  },
  {
    period: "Aug – Dec 2023",
    institution: "University of Technology Sydney",
    degree: "Exchange Program",
    location: "Sydney, Australia",
    description:
      "Image processing, pattern recognition, database principles, and game theory.",
  },
];

const projects = [
  {
    title: "BullsEye",
    type: "Hackathon Winner · Google AI",
    description:
      "Finance app merging fantasy gaming with investment education. Won 1st place among 150+ participants at Google AI Hackathon Milan. Features an AI-powered chatbot for personalized stock advice.",
    tech: ["Generative AI", "Python", "Gamification"],
    highlight: "🥇 1st Place",
  },
  {
    title: "iTEMIZE",
    type: "AI · Full Stack",
    description:
      "AI-powered resale platform using computer vision to analyze product images and suggest optimal pricing, descriptions, and cross-platform listings.",
    tech: ["Python", "Computer Vision", "React"],
    href: "https://studio--picpurveyor.us-central1.hosted.app/sell",
  },
  {
    title: "Fraud Forecasting System",
    type: "Machine Learning · Thesis",
    description:
      "End-to-end ML pipeline forecasting daily fraud amounts for a major payment processor. Explored XGBoost, quantile regression, and data augmentation techniques.",
    tech: ["Python", "XGBoost", "Time Series"],
  },
  {
    title: "House Price Prediction",
    type: "Machine Learning",
    description:
      "ML models to estimate residential property prices across major Italian cities using feature engineering on real estate and demographic data.",
    tech: ["Python", "Scikit-learn", "Pandas"],
  },
  {
    title: "Age Estimation for Online Safety",
    type: "Computer Vision · Thesis",
    description:
      "Bachelor thesis developing CNN-based facial age estimation to protect minors online. Balanced accuracy with privacy compliance requirements.",
    tech: ["PyTorch", "CNN", "OpenCV"],
  },
  {
    title: "Genesis Sports Insights",
    type: "Founder · Student Association",
    description:
      "Founded a nonprofit at Bocconi focused on the business side of sports. Organized workshops, published articles, and hosted interactive sessions to educate students on sports economics and management.",
    tech: ["Leadership", "Content Creation", "Event Management"],
  },
  {
    title: "ML Bocconi Students Association",
    type: "Mentor",
    description:
      "Guiding younger students on career paths and academic decisions in machine learning and data science. Helping bridge the gap between coursework and industry applications.",
    tech: ["Mentorship", "Machine Learning", "Career Development"],
  },
];

const skills = {
  "Machine Learning": ["Python", "PyTorch", "Scikit-learn", "Deep Learning", "TensorFlow"],
  "Data Engineering": ["SQL", "BigQuery", "Airflow", "Spark", "Terraform", "Docker"],
  "Analytics & BI": ["A/B Testing", "Looker", "Tableau", "Power BI", "Pandas"],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      
      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

      const sections = navItems.map((item) => item.id);
      let currentSection = "hero";
      
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3) {
            currentSection = id;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navbarHeight = 80;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setActiveSection(id);
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-300 selection:bg-emerald-500/30 selection:text-white">
      {/* Welcome Intro Overlay */}
      <Intro onComplete={() => setShowContent(true)} />

      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={showContent ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0a0a0a]/90 backdrop-blur-md shadow-lg shadow-black/20" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-white font-semibold text-lg hover:text-emerald-400 transition-colors"
            >
              DDC
            </button>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.id
                      ? "text-emerald-400"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <a
              href="mailto:dalce02@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block px-4 py-2 border border-emerald-500 text-emerald-400 rounded text-sm font-medium hover:bg-emerald-500/10 transition-colors duration-300"
            >
              Get in Touch
            </a>

            <button className="md:hidden text-zinc-400 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <motion.div
        className="w-full"
        variants={containerVariants}
        initial="hidden"
        animate={showContent ? "visible" : "hidden"}
      >
        {/* Hero Section */}
        <motion.section
          id="hero"
          variants={itemVariants}
          className="min-h-screen flex items-center justify-center px-6 sm:px-10 lg:px-16"
        >
          <div className="max-w-5xl w-full">
            <motion.p
              className="text-emerald-400 font-mono text-sm md:text-base mb-4 tracking-wide"
              variants={itemVariants}
            >
              Hi, my name is
            </motion.p>
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-4"
              variants={itemVariants}
            >
              Davide Dal Cero.
            </motion.h1>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-500 mb-8"
              variants={itemVariants}
            >
              I turn data into decisions.
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-3xl mb-6"
              variants={itemVariants}
            >
              Data Scientist at{" "}
              <span className="text-zinc-200">Bending Spoons</span>.{" "}
              <span className="text-zinc-200">Bocconi</span> graduate,{" "}
              <span className="text-zinc-200">Nova SBE</span> Master&apos;s.
              I build ML pipelines, design analytics infrastructure, and run experiments
              that drive product and business outcomes.
            </motion.p>
            <motion.div
              className="max-w-3xl mb-10 border-l-2 border-emerald-500/50 pl-6"
              variants={itemVariants}
            >
              <p className="text-base md:text-lg text-zinc-400 leading-relaxed italic">
                &ldquo;Davide stands out for his sharp reasoning and proactivity. He never limits himself to what&apos;s asked: he anticipates needs and brings forward solutions that push the team forward.&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3 text-sm">
                <span className="text-zinc-500">Team Lead, Bending Spoons</span>
                <span className="text-zinc-700">|</span>
                <a
                  href="https://www.linkedin.com/in/davidedalcero/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  Read on LinkedIn →
                </a>
              </div>
            </motion.div>
            <motion.button
              onClick={() => scrollToSection("projects")}
              variants={itemVariants}
              className="inline-block px-8 py-4 border border-emerald-500 text-emerald-400 rounded font-mono text-sm hover:bg-emerald-500/10 transition-colors duration-300"
            >
              View my work
            </motion.button>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          variants={itemVariants}
          className="py-24 md:py-32 px-6 sm:px-10 lg:px-16 bg-zinc-900/30"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-sm font-bold tracking-[0.2em] text-zinc-500 uppercase mb-4">
              What I Work With
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-12">
              Skills & Technologies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="bg-zinc-900/50 rounded-xl p-6 lg:p-8 border border-zinc-800 hover:border-emerald-500/30 transition-colors duration-300">
                  <h4 className="text-emerald-400 font-mono text-sm mb-6">{category}</h4>
                  <ul className="space-y-3">
                    {items.map((skill) => (
                      <li key={skill} className="text-zinc-300 flex items-center gap-3">
                        <span className="text-emerald-400">▸</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          id="experience"
          variants={itemVariants}
          className="py-24 md:py-32 px-6 sm:px-10 lg:px-16"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-sm font-bold tracking-[0.2em] text-zinc-500 uppercase mb-4">
              Where I&apos;ve Worked
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-12">
              Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative p-6 lg:p-8 bg-zinc-900/30 rounded-xl border border-zinc-800 hover:border-emerald-500/30 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h4 className="text-2xl font-semibold text-white">
                          {exp.company}
                        </h4>
                        {exp.highlight && (
                          <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-mono rounded-full">
                            {exp.highlight}
                          </span>
                        )}
                      </div>
                      <p className="text-emerald-400 font-medium">
                        {exp.role}
                      </p>
                    </div>
                    <div className="lg:text-right">
                      <span className="text-zinc-400 font-mono text-sm">
                        {exp.period}
                      </span>
                      <p className="text-zinc-500 text-sm">
                        {exp.location}
                      </p>
                    </div>
                  </div>
                  <p className="text-zinc-400 leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          id="education"
          variants={itemVariants}
          className="py-24 md:py-32 px-6 sm:px-10 lg:px-16 bg-zinc-900/30"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-sm font-bold tracking-[0.2em] text-zinc-500 uppercase mb-4">
              Where I&apos;ve Studied
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-12">
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative p-6 lg:p-8 bg-[#0a0a0a] rounded-xl border border-zinc-800 hover:border-emerald-500/30 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-4">
                    <div>
                      <h4 className="text-2xl font-semibold text-white">
                        {edu.institution}
                      </h4>
                      <p className="text-emerald-400 font-medium">
                        {edu.degree}
                      </p>
                    </div>
                    <div className="lg:text-right">
                      <span className="text-zinc-400 font-mono text-sm">
                        {edu.period}
                      </span>
                      <p className="text-zinc-500 text-sm">
                        {edu.location}
                      </p>
                    </div>
                  </div>
                  <p className="text-zinc-400 leading-relaxed">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          variants={itemVariants}
          className="py-24 md:py-32 px-6 sm:px-10 lg:px-16"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-sm font-bold tracking-[0.2em] text-zinc-500 uppercase mb-4">
              What I&apos;ve Built
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-12">
              Selected Projects
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => {
                const CardWrapper = project.href ? motion.a : motion.div;
                const cardProps = project.href
                  ? { href: project.href, target: "_blank", rel: "noopener noreferrer" }
                  : {};
                return (
                <CardWrapper
                  key={index}
                  variants={itemVariants}
                  className={`group block p-6 lg:p-8 bg-zinc-900/30 rounded-xl border border-zinc-800 hover:border-emerald-500/50 transition-all duration-300 ${project.href ? "cursor-pointer" : ""}`}
                  {...cardProps}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-emerald-400 font-mono text-sm">
                      {project.type}
                    </span>
                    {project.highlight && (
                      <span className="px-3 py-1 bg-yellow-500/10 text-yellow-400 text-xs font-bold rounded-full">
                        {project.highlight}
                      </span>
                    )}
                  </div>
                  <h4 className="text-xl lg:text-2xl font-semibold text-white mt-2 mb-3 flex items-center gap-2">
                    {project.title}
                    {project.href && (
                      <svg
                        className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-emerald-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    )}
                  </h4>
                  <p className="text-zinc-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </CardWrapper>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          variants={itemVariants}
          className="py-24 md:py-32 px-6 sm:px-10 lg:px-16 bg-zinc-900/30"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-sm font-bold tracking-[0.2em] text-zinc-500 uppercase mb-4">
              What&apos;s Next?
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let&apos;s Connect
            </h3>
            <p className="text-zinc-400 text-lg md:text-xl max-w-xl mx-auto mb-10">
              I&apos;m always open to discussing new opportunities, interesting projects,
              or ways to create measurable impact together.
            </p>
            <a
              href="mailto:dalce02@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 border border-emerald-500 text-emerald-400 rounded font-mono text-base hover:bg-emerald-500/10 transition-colors duration-300"
            >
              Say Hello
            </a>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          variants={itemVariants}
          className="py-8 px-6 sm:px-10 lg:px-16 border-t border-zinc-800/50"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-600">
              Designed & Built by Davide Dal Cero
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com/ddalbend"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-emerald-400 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/davidedalcero"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-emerald-400 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="mailto:dalce02@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-emerald-400 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </motion.footer>
      </motion.div>
    </main>
  );
}
