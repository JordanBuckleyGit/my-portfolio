import { useRef, useEffect, useState, useCallback } from "react";

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
  const throttlingRef = useRef(false); // To manage scroll throttling

  // Function to handle scroll animation
  const scrollToPage = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;

    // We'll use scrollIntoView for smooth, built-in scrolling to the correct project
    // Find the element for the current page
    const projectElement = el.children[0]?.children[page];
    if (projectElement) {
      projectElement.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    }
  }, [page]);

  // Effect to trigger scroll animation when 'page' changes
  useEffect(() => {
    scrollToPage();
  }, [page, scrollToPage]);

  // Listen for scroll down (next) and up (back) with a throttle
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const throttleMs = 500; // Adjust as needed for desired scroll speed

    const onWheel = (e) => {
      // Prevent default scroll behavior to avoid scrolling the whole page
      e.preventDefault();

      if (throttlingRef.current) {
        return; // If currently throttling, ignore the event
      }

      const isVerticalScroll = Math.abs(e.deltaY) > Math.abs(e.deltaX);

      if (isVerticalScroll) {
        let newPage = page;
        if (e.deltaY > 0) {
          // Scroll Down
          newPage = Math.min(page + 1, projects.length - 1);
        } else if (e.deltaY < 0) {
          // Scroll Up
          newPage = Math.max(page - 1, 0);
        }

        if (newPage !== page) {
          setPage(newPage);
          throttlingRef.current = true; // Start throttling
          setTimeout(() => {
            throttlingRef.current = false; // End throttling after a delay
          }, throttleMs);
        }
      }
    };

    // Use a passive: false listener to allow e.preventDefault()
    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel);
    };
  }, [page]); // Depend on 'page' to get the latest state

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
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <section className="w-full py-12 mb-8 select-none bg-transparent">
      <h2 className="text-3xl font-bold text-blue-300 mb-8 text-center">Projects</h2>
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden"
        style={{ height: 240 }} // Set a fixed height for the container
        tabIndex={0} // Make the container focusable for keyboard navigation
      >
        <div
          // This inner div will contain all projects laid out horizontally
          className="flex h-full"
          // We no longer need transformX here, as scrollIntoView handles positioning
          // The individual project divs will control their width
        >
          {projects.map((project, i) => (
            <div
              key={project.title}
              // Each project takes up the full width of the container
              className="flex w-full h-full items-center justify-center flex-shrink-0" // flex-shrink-0 is crucial
              style={{ minWidth: "100%" }} // Ensure each project takes full width
            >
              <div className="w-full max-w-2xl bg-blue-950/70 rounded-xl shadow p-8 h-[200px] flex flex-col justify-center mx-auto">
                <h3 className="font-semibold text-2xl text-blue-100 mb-2">{project.title}</h3>
                <p className="text-blue-300">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Optional: Add navigation dots */}
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