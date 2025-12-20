"use client";

const contactInfo = {
  github: "www.github.com/yourusername",
  linkedin: "www.linkedin.com/in/yourusername",
  email: "your.email@example.com",
  resume: "Davide Dal Cero CV",
};

export default function ContactSection() {
  return (
    <section id="contact-me" className="py-20 px-4">
      <h2 className="section-title text-white mb-12">Contact Me</h2>

      <div className="messages-frame max-w-lg mx-auto">
        {/* Messages Header */}
        <div className="messages-header">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold shadow-lg">
            D
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Davide Dal Cero</h3>
            <p className="text-white/50 text-sm">Available for opportunities</p>
          </div>
        </div>

        {/* Contact Links */}
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-white/60 min-w-[80px]">My Github:</span>
            <a
              href={`https://${contactInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              {contactInfo.github}
            </a>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-white/60 min-w-[80px]">My Linkedin:</span>
            <a
              href={`https://${contactInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              {contactInfo.linkedin}
            </a>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-white/60 min-w-[80px]">My Email:</span>
            <a
              href={`mailto:${contactInfo.email}`}
              className="contact-link"
            >
              {contactInfo.email}
            </a>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-white/60 min-w-[80px]">My Resume:</span>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              {contactInfo.resume}
            </a>
          </div>

          <div className="pt-4 border-t border-white/10 mt-6">
            <p className="text-white/80 text-center">
              Feel free to hit me up! 👋
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center mt-16 text-white/40 text-sm">
        <p>Designed with ❤️ inspired by Rodrigo Fernandes</p>
      </footer>
    </section>
  );
}

