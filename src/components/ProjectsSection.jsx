import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import '../index.css';
import "../App.css";

const projectsData = [
  {name: "Black-Scholes Option Pricing Model",
   url: "https://github.com/JordanBuckleyGit/Black-Scholes",
   desc: "Black-Scholes model for pricing European call and put options. It allows you to visualize option prices, payoffs, and key metrics, and to download a PDF report of your analysis."
  },
  {
    name: "2D Maze Runner Game",
    url: "https://github.com/JordanBuckleyGit/ca2",
    desc: "Created a JavaScript dungeon style game with elaborate algorithms.",
  },
  {
    name: "NGINX-Hackathon",
    url: "https://github.com/JordanBuckleyGit/NGINX-Hackathon",
    desc: "A web application built for a hackathon that analyzes NGINX logs and provides actionable insights through data visualization.",
  },
  {
    name: "MovieDNA",
    url: "https://github.com/JordanBuckleyGit/CA",
    desc: "I developed a backend website that uses algorithms and user profiling to suggest personalized movie recommendations.",
  },
  {
    name: "ACM-Server",
    url: "https://github.com/JordanBuckleyGit/ACM-Server",
    desc: "Developed a front-end website for the ACM Student Chapter.",
  },
  {
    name: "My-Portfolio",
    url: "https://github.com/JordanBuckleyGit/my-portfolio",
    desc: "My personal portfolio website built with React and Tailwind CSS.",
  },
  {
    name: "Java-Projects",
    url: "https://github.com/JordanBuckleyGit/Java-Projects",
    desc: "A collection of Java-based projects and experiments.",
  },
];

function ProjectsSection() {
  const [page, setPage] = useState(0);
  const containerRef = useRef(null);
  const wheel = useRef({ last: 0, delta: 0, lockedUntil: 0 });
  const startTouchX = useRef(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const totalProjects = projectsData.length;

    const onWheel = (e) => {
      // Laptop screens and above only: on smaller screens it traps normal page scrolling
      if (!window.matchMedia("(min-width: 1024px)").matches) return;
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      e.preventDefault();

      const now = performance.now();
      const delta = Math.abs(e.deltaY);
      const w = wheel.current;
      // A new scroll = a pause in events, or a jump in strength (momentum only ever fades)
      const newGesture = now - w.last > 150 || (delta > w.delta * 1.5 && delta > 15);
      w.last = now;
      w.delta = delta;
      if (!newGesture || now < w.lockedUntil) return;

      w.lockedUntil = now + 200; // ignore the ramp-up of the same scroll
      const dir = Math.sign(e.deltaY);
      setPage((p) => Math.min(Math.max(p + dir, 0), totalProjects - 1));
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel);
    };
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const totalProjects = projectsData.length;

    const handleTouchStart = (e) => {
      startTouchX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      const endTouchX = e.changedTouches[0].clientX;
      const deltaX = endTouchX - startTouchX.current;
      const swipeThreshold = 50;

      if (Math.abs(deltaX) > swipeThreshold) {
        if (deltaX < 0) {
          setPage((prev) => Math.min(prev + 1, totalProjects - 1));
        } else {
          setPage((prev) => Math.max(prev - 1, 0));
        }
      }
    };

    el.addEventListener("touchstart", handleTouchStart, { passive: true });
    el.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const totalProjects = projectsData.length;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        setPage((prev) => Math.min(prev + 1, totalProjects - 1));
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        setPage((prev) => Math.max(prev - 1, 0));
      }
    };

    el.addEventListener("keydown", handleKeyDown);
    return () => el.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      id="projects"
      className="w-full select-none"
    >
      <h2 className="section-title">
        <FaGithub className="text-gray-900 dark:text-white" />
        Projects
      </h2>
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden focus:outline-none"
        tabIndex={0}
      >
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {projectsData.map((project, i) => (
            <div
              key={project.name}
              className="flex w-full items-stretch justify-center flex-shrink-0 px-2 py-6"
              style={{ minWidth: "100%" }}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full max-w-4xl
                           bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/90 dark:to-blue-950/90 
                           rounded-2xl shadow-lg p-6 sm:p-10
                           min-h-[260px] sm:min-h-[320px] flex flex-col justify-center mx-auto border border-blue-300 dark:border-blue-800
                           hover:border-blue-500 dark:hover:border-blue-400 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-4">
                  <FaGithub className="text-blue-600 dark:text-blue-400 text-2xl sm:text-3xl shrink-0 mt-1 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition" />
                  <h3 className="font-bold text-xl sm:text-3xl text-gray-900 dark:text-blue-100">{project.name}</h3>
                </div>
                <p className="text-gray-800 dark:text-blue-300 text-base sm:text-xl leading-relaxed">{project.desc}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-4 gap-3">
        {projectsData.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition ${
              page === index ? "bg-blue-600 dark:bg-blue-300 scale-125" : "bg-blue-300 dark:bg-blue-800"
            }`}
            onClick={() => setPage(index)}
            aria-label={`Go to project ${index + 1}`}
          ></button>
        ))}
      </div>
    </motion.section>
  );
}

export default ProjectsSection;