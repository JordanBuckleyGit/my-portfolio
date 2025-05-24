import { useRef, useEffect, useState, useCallback } from "react";
import { FaGithub } from "react-icons/fa";

const projectsData = [
  {
    name: "my-portfolio",
    url: "https://github.com/JordanBuckleyGit/my-portfolio",
    desc: "My personal portfolio website built with React and Tailwind CSS.",
  },
  {
    name: "Hackathon",
    url: "https://github.com/JordanBuckleyGit/Hackathon",
    desc: "A collaborative hackathon project focused on innovative solutions.",
  },
  {
    name: "CA",
    url: "https://github.com/JordanBuckleyGit/CA",
    desc: "Coursework assignments and academic projects.",
  },
  {
    name: "ACM-Server",
    url: "https://github.com/JordanBuckleyGit/ACM-Server",
    desc: "Backend server for the ACM Student Chapter website.",
  },
  {
    name: "Java-Projects",
    url: "https://github.com/JordanBuckleyGit/Java-Projects",
    desc: "A collection of Java-based projects and experiments.",
  },
  {
    name: "Stock-Prediction-Model",
    url: "https://github.com/JordanBuckleyGit/Stock-Prediction-Model",
    desc: "A machine learning model for predicting stock prices.",
  },
];

function ProjectsSection() {
  const [page, setPage] = useState(0);
  const containerRef = useRef(null);
  const throttlingRef = useRef(false);

  const scrollToPage = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const projectElement = el.children[0]?.children[page];
    if (projectElement) {
      projectElement.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    }
  }, [page]);

  useEffect(() => {
    scrollToPage();
  }, [page, scrollToPage]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const throttleMs = 500;

    const onWheel = (e) => {
      e.preventDefault();
      if (throttlingRef.current) return;
      const isVerticalScroll = Math.abs(e.deltaY) > Math.abs(e.deltaX);
      if (isVerticalScroll) {
        let newPage = page;
        if (e.deltaY > 0) {
          newPage = Math.min(page + 1, projectsData.length - 1);
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

    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        setPage((prev) => Math.min(prev + 1, projectsData.length - 1));
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        setPage((prev) => Math.max(prev - 1, 0));
      }
    };

    el.addEventListener("keydown", handleKeyDown);
    return () => el.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="projects" className="w-full py-16 mb-12 select-none ">
      <h2 className="text-4xl font-extrabold text-white mb-12 text-center tracking-tight drop-shadow-lg">
        <FaGithub className="inline-block mr-3 text-4xl align-middle text-white" />
        Projects
      </h2>
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden"
        style={{ height: 280 }}
        tabIndex={0}
      >
        <div className="flex h-full">
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
                className="group w-full max-w-3xl bg-gradient-to-br from-blue-900/90 to-blue-950/90 rounded-2xl shadow-2xl p-10 h-[220px] flex flex-col justify-center mx-auto border border-blue-800 hover:border-blue-400 hover:scale-[1.025] transition-all duration-300"
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
    </section>
  );
}

export default ProjectsSection;