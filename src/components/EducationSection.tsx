"use client";

import { useEffect, useState } from "react";

const educationItems = [
  {
    degree: "Master's Degree in Computer Science",
    period: "Sept. 2021 - July 2023",
    institution: "University Name",
    location: "City",
    details: [
      "- Specialization in Software Engineering",
      "- Relevant Courses: Distributed Systems, Machine Learning, Cloud Computing",
      "- GPA: 4.0/4.0",
    ],
    command: "node masters.js",
  },
  {
    degree: "Bachelor's Degree in Computer Science",
    period: "Sept. 2018 - July 2021",
    institution: "University Name",
    location: "City",
    details: [
      "- Relevant Courses: Data Structures, Algorithms, Database Systems",
      "- Dean's List all semesters",
      "- GPA: 3.9/4.0",
    ],
    command: "node bachelors.js",
  },
  {
    degree: "Online Courses & Certifications",
    period: "Ongoing",
    institution: "Various Platforms",
    location: "Online",
    details: [
      "- AWS Certified Developer",
      "- Meta React Native Specialization",
      "- Google Cloud Professional",
    ],
    command: "node certifications.js",
  },
];

export default function EducationSection() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const lines: string[] = [];
    
    educationItems.forEach((item) => {
      lines.push(`davide@portfolio ~ % ${item.command}`);
      lines.push("*".repeat(80));
      lines.push(`${item.degree}          ${item.period}`);
      lines.push(`${item.institution}          ${item.location}`);
      item.details.forEach((detail) => lines.push(detail));
      lines.push("*".repeat(80));
      lines.push("");
    });

    setDisplayedLines(lines);
  }, []);

  const handleRunCommand = () => {
    if (isTyping) return;
    setIsTyping(true);
    setDisplayedLines([]);
    
    const lines: string[] = [];
    educationItems.forEach((item) => {
      lines.push(`davide@portfolio ~ % ${item.command}`);
      lines.push("*".repeat(80));
      lines.push(`${item.degree}          ${item.period}`);
      lines.push(`${item.institution}          ${item.location}`);
      item.details.forEach((detail) => lines.push(detail));
      lines.push("*".repeat(80));
      lines.push("");
    });

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < lines.length) {
        setDisplayedLines((prev) => [...prev, lines[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 100);
  };

  return (
    <section id="education" className="py-20 px-4">
      <h2 className="section-title text-white mb-12">Education</h2>

      <div className="terminal-frame max-w-4xl mx-auto">
        {/* Terminal Title Bar */}
        <div className="terminal-titlebar">
          <div className="flex gap-2">
            <div className="macos-btn macos-btn-close"></div>
            <div className="macos-btn macos-btn-minimize"></div>
            <div className="macos-btn macos-btn-maximize"></div>
          </div>
          <span className="text-white/60 text-sm">davide — zsh — 120x40</span>
          <button
            onClick={handleRunCommand}
            className="text-white/60 text-sm hover:text-white transition-colors"
            disabled={isTyping}
          >
            ↻ Run
          </button>
        </div>

        {/* Terminal Content */}
        <div className="terminal-content h-[500px] overflow-y-auto">
          {displayedLines.map((line, index) => (
            <p
              key={index}
              className={`font-mono ${
                line.startsWith("davide@")
                  ? "text-green-400"
                  : line.startsWith("*")
                  ? "text-white/30"
                  : line.startsWith("-")
                  ? "text-white/70"
                  : "text-white"
              }`}
            >
              {line || "\u00A0"}
            </p>
          ))}
          <p className="text-green-400 animate-pulse">
            davide@portfolio ~ % <span className="bg-green-400 text-black">_</span>
          </p>
        </div>
      </div>
    </section>
  );
}

