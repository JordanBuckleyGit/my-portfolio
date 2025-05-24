import { useRef, useEffect, useState } from "react";

const projects = [
  {
    title: "Portfolio Website",
    desc: "A personal website built with React and Tailwind CSS.",
  },
  {
    title: "Weather App",
    desc: "A weather forecasting app using OpenWeatherMap API.",
  },
  {
    title: "Chat Application",
    desc: "A real-time chat app built with Socket.io and Node.js.",
  },
  {
    title: "Task Manager",
    desc: "A productivity tool for managing daily tasks.",
  },
  {
    title: "Blog Platform",
    desc: "A full-stack blog platform with authentication.",
  },
  {
    title: "E-commerce Demo",
    desc: "A demo online store with shopping cart and checkout.",
  },
];

function ProjectsSection() {
  const [page, setPage] = useState(0);
  const containerRef = useRef(null);
  const [lastScroll, setLastScroll] = useState(Date.now());

  // Listen for scroll down (next) and up (back) with a throttle
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const throttleMs = 500; // slower scroll
    const onWheel = (e) => {
      const now = Date.now();
      if (now - lastScroll < throttleMs) return;
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        if (e.deltaY > 0 && page < projects.length - 1) {
          setPage((prev) => Math.min(prev + 1, projects.length - 1));
          setLastScroll(now);
          e.preventDefault();
        } else if (e.deltaY < 0 && page > 0) {
          setPage((prev) => Math.max(prev - 1, 0));
          setLastScroll(now);
          e.preventDefault();
        }
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [page, lastScroll]);

  // Animate slide to new page
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const slideWidth = el.offsetWidth;
    el.scrollTo({
      left: page * slideWidth,
      behavior: "smooth",
    });
  }, [page]);

  return (
    <section className="w-screen max-w-none py-12 mb-8 select-none bg-transparent">
      <h2 className="text-3xl font-bold text-blue-300 mb-8 text-center">Projects</h2>
      <div
        ref={containerRef}
        className="relative w-screen max-w-none overflow-hidden"
        style={{ height: 240 }}
        tabIndex={0}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{
            width: `${projects.length * 100}%`,
            transform: `translateX(-${page * 100}%)`,
          }}
        >
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="flex w-full h-full items-center justify-center"
              style={{ minWidth: "100%" }}
            >
              <div className="w-full bg-blue-950/70 rounded-xl shadow p-8 h-[200px] flex flex-col justify-center">
                <h3 className="font-semibold text-2xl text-blue-100 mb-2">{project.title}</h3>
                <p className="text-blue-300">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;