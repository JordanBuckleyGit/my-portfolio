import { useState } from "react";

const skills = [
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg" },
];

const ITEMS_PER_PAGE = 5;

function SkillsSection() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right, 0 for none

  const totalPages = Math.ceil(skills.length / ITEMS_PER_PAGE);

  const start = page * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const visibleSkills = skills.slice(start, end);

  const prev = () => {
    setDirection(-1);
    setPage((p) => (p === 0 ? totalPages - 1 : p - 1));
  };
  const next = () => {
    setDirection(1);
    setPage((p) => (p === totalPages - 1 ? 0 : p + 1));
  };

  return (
    <section className="w-full max-w-[2500px] mx-auto p-8 mb-8 flex flex-col items-center">
      <h2 className="text-5xl font-bold text-blue-300 mb-6">Skills</h2>
      <div className="flex items-center w-full justify-center space-x-6 mb-4">
        {/* Custom Arrow Button - Left */}
        <button
          onClick={prev}
          className="rounded-full bg-blue-900/60 hover:bg-blue-700/80 text-blue-200 hover:text-white shadow-lg w-14 h-14 flex items-center justify-center text-4xl transition-all duration-200 active:scale-90 focus:outline-none"
          aria-label="Previous"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        {/* Animated Skills List */}
        <div
          className={`flex flex-1 justify-center space-x-12 transition-transform duration-500 ${
            direction === 1
              ? "animate-slide-left"
              : direction === -1
              ? "animate-slide-right"
              : ""
          }`}
          onAnimationEnd={() => setDirection(0)}
        >
          {visibleSkills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center min-w-[120px]">
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-28 h-28 mb-2 transition-all duration-300 drop-shadow-lg"
              />
              <span className="text-blue-100 text-xl font-semibold text-center">{skill.name}</span>
            </div>
          ))}
        </div>
        {/* Custom Arrow Button - Right */}
        <button
          onClick={next}
          className="rounded-full bg-blue-900/60 hover:bg-blue-700/80 text-blue-200 hover:text-white shadow-lg w-14 h-14 flex items-center justify-center text-4xl transition-all duration-200 active:scale-90 focus:outline-none"
          aria-label="Next"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="flex justify-center mt-2 space-x-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${i === page ? "bg-blue-400" : "bg-blue-900"}`}
          />
        ))}
      </div>
      {/* Animation keyframes for sliding */}
      <style>
        {`
          @keyframes slide-left {
            0% { transform: translateX(0); opacity: 1; }
            40% { transform: translateX(-60px); opacity: 0.5; }
            100% { transform: translateX(0); opacity: 1; }
          }
          @keyframes slide-right {
            0% { transform: translateX(0); opacity: 1; }
            40% { transform: translateX(60px); opacity: 0.5; }
            100% { transform: translateX(0); opacity: 1; }
          }
          .animate-slide-left {
            animation: slide-left 0.5s;
          }
          .animate-slide-right {
            animation: slide-right 0.5s;
          }
        `}
      </style>
    </section>
  );
}

export default SkillsSection;