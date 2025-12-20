"use client";

export default function IntroSection() {
  return (
    <section id="intro" className="min-h-screen flex items-center justify-center py-20">
      <div className="macos-window max-w-2xl w-full mx-4 animate-fadeInUp">
        {/* Title Bar */}
        <div className="macos-titlebar">
          <div className="macos-btn macos-btn-close"></div>
          <div className="macos-btn macos-btn-minimize"></div>
          <div className="macos-btn macos-btn-maximize"></div>
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col sm:flex-row items-center gap-8">
          {/* Profile Image Placeholder */}
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl animate-float">
              <div className="w-full h-full bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 flex items-center justify-center text-5xl font-bold text-white">
                D
              </div>
            </div>
            {/* Online indicator */}
            <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 rounded-full border-2 border-gray-800"></div>
          </div>

          {/* Info */}
          <div className="text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
              Davide Dal Cero
            </h1>
            <p className="text-xl text-white/60">
              software engineer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

