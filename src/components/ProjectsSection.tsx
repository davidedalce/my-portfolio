"use client";

import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Project One",
    subtitle: "A full-stack web application",
    shortDescription: "Built a comprehensive web application using React, Node.js, and PostgreSQL...",
    fullDescription: `This project is a full-stack web application that demonstrates modern development practices. 
    
Built with React and Next.js on the frontend, it features a beautiful and responsive UI with smooth animations. The backend uses Node.js with Express and connects to a PostgreSQL database.

Key features include:
- User authentication and authorization
- Real-time data updates
- Responsive design for all devices
- Dark mode support

Technologies used: React, Next.js, TypeScript, Node.js, PostgreSQL, Tailwind CSS`,
    links: {
      github: "https://github.com/yourusername/project-one",
      live: "https://project-one.vercel.app",
    },
  },
  {
    id: 2,
    title: "Project Two",
    subtitle: "Mobile-first application",
    shortDescription: "A React Native mobile app with seamless user experience...",
    fullDescription: `A cross-platform mobile application built with React Native and Expo.

The app provides a seamless user experience with native-like performance and beautiful animations. It connects to a REST API backend and includes features like push notifications and offline support.

Technologies used: React Native, Expo, TypeScript, Redux`,
    links: {
      github: "https://github.com/yourusername/project-two",
    },
  },
  {
    id: 3,
    title: "Project Three",
    subtitle: "Open Source Contribution",
    shortDescription: "A collection of learning projects and open source contributions...",
    fullDescription: `This repository contains various learning projects and contributions to open source.

Includes experiments with new technologies, tutorials, and contributions to popular open source projects. A great showcase of continuous learning and community involvement.

Technologies used: Various`,
    links: {
      github: "https://github.com/yourusername/learning-projects",
    },
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section id="projects" className="py-20 px-4">
      <h2 className="section-title text-white mb-12">Projects</h2>

      <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
        {/* Mail-style list */}
        <div className="lg:w-1/3">
          <div className="glass rounded-2xl overflow-hidden">
            {/* Inbox Header */}
            <div className="p-4 border-b border-white/10">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-white">Inbox</h4>
                <span className="text-white/50 text-sm">{projects.length} projects</span>
              </div>
            </div>

            {/* Project List */}
            <div className="divide-y divide-white/5">
              {projects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={`project-card p-4 ${
                    selectedProject.id === project.id ? "bg-white/10" : ""
                  }`}
                >
                  <h3 className="font-semibold text-white mb-1">{project.title}</h3>
                  <h4 className="text-sm text-blue-400 mb-2">{project.subtitle}</h4>
                  <p className="text-white/60 text-sm line-clamp-2">
                    {project.shortDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* iPhone mockup with project details */}
        <div className="lg:w-2/3">
          <div className="iphone-frame max-w-[350px] mx-auto">
            <div className="iphone-notch"></div>
            <div className="iphone-screen p-6">
              {/* Project Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xl">
                  📱
                </div>
                <div>
                  <h3 className="font-bold text-white">{selectedProject.title}</h3>
                  <h4 className="text-sm text-blue-400">{selectedProject.subtitle}</h4>
                </div>
              </div>

              {/* Description */}
              <div className="text-white/80 text-sm leading-relaxed whitespace-pre-line mb-6">
                {selectedProject.fullDescription}
              </div>

              {/* Links */}
              <div className="space-y-3">
                {selectedProject.links.github && (
                  <a
                    href={selectedProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm"
                  >
                    <span>📁</span>
                    <span>Code repository: {selectedProject.links.github}</span>
                  </a>
                )}
                {selectedProject.links.live && (
                  <a
                    href={selectedProject.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm"
                  >
                    <span>💻</span>
                    <span>Live: {selectedProject.links.live}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

