"use client";

const experiences = [
  {
    title: "Software Engineer",
    company: "Your Company",
    period: "Jan 2023 - Present",
    description: `Working on building scalable web applications using modern technologies. 
    Responsible for designing and implementing features, conducting code reviews, and mentoring junior developers.`,
    roles: [
      {
        title: "Frontend Development",
        description: "Built responsive user interfaces using React, Next.js, and TypeScript. Implemented state management solutions and optimized performance.",
      },
      {
        title: "Backend Development", 
        description: "Designed and developed RESTful APIs using Node.js and Express. Worked with databases including PostgreSQL and MongoDB.",
      },
      {
        title: "DevOps",
        description: "Set up CI/CD pipelines, managed Docker containers, and deployed applications to cloud platforms like AWS and Vercel.",
      },
    ],
    links: [
      { label: "Website", url: "#" },
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4">
      <h2 className="section-title text-white mb-12">Experience</h2>

      <div className="browser-frame max-w-5xl mx-auto">
        {/* Browser Toolbar */}
        <div className="browser-toolbar">
          <div className="flex gap-2">
            <div className="macos-btn macos-btn-close"></div>
            <div className="macos-btn macos-btn-minimize"></div>
            <div className="macos-btn macos-btn-maximize"></div>
          </div>
          <div className="browser-address-bar">
            localhost:3000/experience
          </div>
          <div className="flex gap-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 text-white/40">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
        </div>

        {/* Browser Content */}
        <div className="p-8">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col lg:flex-row gap-8">
              {/* Experience Details */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    {exp.title} - {exp.company}
                  </h3>
                  {exp.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm hover:bg-white/20 transition-colors"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      {link.label}
                    </a>
                  ))}
                </div>

                <p className="text-white/60 mb-6">{exp.period}</p>

                <p className="text-white/80 mb-8 leading-relaxed">
                  {exp.description}
                </p>

                {exp.roles.map((role, i) => (
                  <div key={i} className="experience-item mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">{role.title}</h4>
                    <p className="text-white/70 leading-relaxed">{role.description}</p>
                  </div>
                ))}
              </div>

              {/* Screenshots placeholder */}
              <div className="lg:w-1/3 flex flex-col gap-4">
                <div className="glass rounded-xl aspect-[9/16] flex items-center justify-center">
                  <div className="text-center text-white/40">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12 mx-auto mb-2">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm">Project Screenshot</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

