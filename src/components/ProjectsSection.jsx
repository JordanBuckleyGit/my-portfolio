import { useRef, useEffect, useState, useCallback } from "react";

function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const containerRef = useRef(null);
  const throttlingRef = useRef(false);

useEffect(() => {
  const allowed = [
    "my-portfolio",
    "Hackathon",
    "CA",
    "ACM-Server",
    "Java-Projects",
    "Stock-Prediction-Model",
  ];

  fetch("https://api.github.com/users/JordanBuckleyGit/repos")
    .then(res => res.json())
    .then(data => {
      setProjects(
        data
          .filter(repo => allowed.includes(repo.name))
          .map(repo => ({
            title: repo.name,
            desc: repo.description || "No description",
            url: repo.html_url,
          }))
      );
      setLoading(false);
    });
}, []);

  // Function to handle scroll animation
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

  // Listen for scroll down (next) and up (back) with a throttle
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
          newPage = Math.min(page + 1, projects.length - 1);
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
  }, [page, projects.length]);

  // Handle keyboard navigation (optional, but good for accessibility)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        setPage((prev) => Math.min(prev + 1, projects.length - 1));
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        setPage((prev) => Math.max(prev - 1, 0));
      }
    };

    el.addEventListener("keydown", handleKeyDown);
    return () => el.removeEventListener("keydown", handleKeyDown);
  }, [projects.length]);

  return (
    <section className="w-full py-12 mb-8 select-none bg-transparent">
      <h2 className="text-3xl font-bold text-blue-300 mb-8 text-center">Projects</h2>
      {loading ? (
        <div className="text-center text-blue-200">Loading projects...</div>
      ) : (
        <div
          ref={containerRef}
          className="relative w-full overflow-hidden"
          style={{ height: 240 }}
          tabIndex={0}
        >
          <div className="flex h-full">
            {projects.map((project, i) => (
              <div
                key={project.title}
                className="flex w-full h-full items-center justify-center flex-shrink-0"
                style={{ minWidth: "100%" }}
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-2xl bg-blue-950/70 rounded-xl shadow p-8 h-[200px] flex flex-col justify-center mx-auto hover:bg-blue-900 transition"
                >
                  <h3 className="font-semibold text-2xl text-blue-100 mb-2">{project.title}</h3>
                  <p className="text-blue-300">{project.desc}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="flex justify-center mt-4 gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              page === index ? "bg-blue-300" : "bg-blue-600"
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