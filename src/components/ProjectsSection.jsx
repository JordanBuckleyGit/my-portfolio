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
  const throttlingRef = useRef(false);
  const startTouchX = useRef(0);


  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const throttleMs = 500;
    const totalProjects = projectsData.length;

    const onWheel = (e) => {
      e.preventDefault();
      if (throttlingRef.current) return;

      const isVerticalScroll = Math.abs(e.deltaY) > Math.abs(e.deltaX);
      if (isVerticalScroll) {
        let newPage = page;
        if (e.deltaY > 0) {
          newPage = Math.min(page + 1, totalProjects - 1);
        } else if (e.deltaY < 0) {
          newPage = Math.max(page - 1, 0);
        }

        if (newPage !== page) {
          setPage(newPage);
          throttlingRef.current = true;
          setTimeout(() => {
            throttlingRef.current = false;
          }, throttleMs);
        }
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel);
    };
  }, [page]);

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
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      id="projects"
      className="w-full py-16 mb-12 select-none"
    >
      <h2 className="text-4xl font-extrabold text-white mb-12 text-center tracking-tight drop-shadow-lg">
        <FaGithub className="inline-block mr-3 text-4xl align-middle text-white" />
        Projects
      </h2>
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden h-72 sm:h-80 md:h-96"
        tabIndex={0}
      >
        <div
          className="flex h-full transition-transform duration-500"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {projectsData.map((project, i) => (
            <div
              key={project.name}
              className="flex w-full h-full items-center justify-center flex-shrink-0 px-2"
              style={{ minWidth: "100%" }}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full max-w-xs sm:max-w-md lg:max-w-xl xl:max-w-3xl 2xl:max-w-4xl
                           bg-gradient-to-br from-blue-900/90 to-blue-950/90 rounded-2xl shadow-2xl p-6 sm:p-10
                           min-h-[220px] flex flex-col justify-center mx-auto border border-blue-800
                           hover:border-blue-400 hover:scale-[1.025] transition-all duration-300"
              >
                <div className="flex items-center mb-3">
                  <FaGithub className="text-blue-400 text-2xl mr-2 group-hover:text-blue-300 transition" />
                  <h3 className="font-bold text-2xl text-blue-100">{project.name}</h3>
                </div>
                <p className="text-blue-300 text-lg">{project.desc}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6 gap-2">
        {projectsData.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition ${
              page === index ? "bg-blue-300 scale-125" : "bg-blue-700"
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