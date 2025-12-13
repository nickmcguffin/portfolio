import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I&apos;m <span className="text-blue-400">Nick</span>
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-blue-100">
            Full Stack Engineer & Problem Solver
          </p>
          <p className="text-lg mb-8 text-slate-300 max-w-2xl mx-auto leading-relaxed">
            I create modern, responsive web applications and integrate complex systems with clean code and great user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-center border-2 border-transparent"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 text-center"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}