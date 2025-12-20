"use client";

const appIcons = [
  { icon: "🔍", label: "Search", color: "bg-gray-500" },
  { icon: "🧭", label: "Discover", color: "bg-blue-500" },
  { icon: "✨", label: "Create", color: "bg-purple-500" },
  { icon: "💼", label: "Work", color: "bg-orange-500" },
  { icon: "🎮", label: "Play", color: "bg-green-500" },
  { icon: "⚡", label: "Develop", color: "bg-yellow-500" },
  { icon: "📁", label: "Categories", color: "bg-pink-500" },
  { icon: "🔔", label: "Updates", color: "bg-red-500" },
];

const frontendSkills = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "React Native", icon: "📱" },
  { name: "JavaScript", icon: "💛" },
  { name: "TypeScript", icon: "💙" },
  { name: "Redux", icon: "🔄" },
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "Tailwind CSS", icon: "🌊" },
];

const backendSkills = [
  { name: "Node.js", icon: "💚" },
  { name: "Python", icon: "🐍" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MongoDB", icon: "🍃" },
  { name: "GraphQL", icon: "◼️" },
  { name: "REST APIs", icon: "🔗" },
  { name: "Docker", icon: "🐳" },
  { name: "Git", icon: "📚" },
];

export default function AboutSection() {
  return (
    <section id="about-me" className="py-20 px-4">
      <h2 className="section-title text-white mb-12">About Me</h2>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* iPhone with App Icons */}
        <div className="iphone-frame w-[280px] shrink-0 mx-auto lg:mx-0">
          <div className="iphone-notch"></div>
          <div className="iphone-screen p-4">
            {/* About text */}
            <p className="text-white/80 text-sm mb-6 leading-relaxed">
              Hi! My name is <span className="font-semibold text-white">Davide Dal Cero</span> and 
              I&apos;m a <span className="font-semibold text-white">Full Stack Software Engineer</span> passionate 
              about building beautiful and functional web applications.
            </p>

            {/* App Grid */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              {appIcons.map((app, index) => (
                <div key={index} className="flex flex-col items-center gap-1">
                  <div className={`app-icon ${app.color}`}>
                    {app.icon}
                  </div>
                  <span className="text-[10px] text-white/60">{app.label}</span>
                </div>
              ))}
            </div>

            {/* Profile Card */}
            <div className="glass rounded-xl p-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-lg font-bold">
                D
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm">Davide Dal Cero</h4>
                <p className="text-white/50 text-xs">Software Engineer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="flex-1 glass rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-white mb-6">Skills</h2>

          {/* Frontend & Mobile */}
          <div className="mb-6">
            <p className="text-white/60 text-sm mb-3">Frontend & Mobile</p>
            <div className="flex flex-wrap gap-2">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="skill-badge">
                  <span>{skill.icon}</span>
                  <span className="text-white/80">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <p className="text-white/60 text-sm mb-3">Backend & DevOps</p>
            <div className="flex flex-wrap gap-2">
              {backendSkills.map((skill, index) => (
                <div key={index} className="skill-badge">
                  <span>{skill.icon}</span>
                  <span className="text-white/80">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

