import { useState, useEffect } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 825);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <nav className="w-full left-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center space-x-3">
          <img
            src={`${import.meta.env.BASE_URL}favicon.ico`}
            alt="Logo"
            className="w-10 h-10 rounded-full object-cover shadow-md transition-transform duration-300 hover:scale-110"
          />
          <span
            className="font-extrabold text-2xl tracking-widest bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-300 hover:scale-105 cursor-pointer"
            onClick={() => window.location.reload()}
          >
            Jordan Buckley
          </span>
        </div>

        {/* Hamburger for mobile - Conditionally rendered based on isMobile state */}
        {isMobile && (
          <button
            className="flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""
                }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white rounded my-1 transition-all duration-300 ${open ? "opacity-0" : ""
                }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""
                }`}
            ></span>
          </button>
        )}

        {/* Desktop links - Conditionally rendered based on isMobile state */}
        {!isMobile && (
          <div className="flex space-x-8">
            {[
              { href: "#skills", label: "Skills" },
              { href: "#education", label: "Education" },
              { href: "#achievements", label: "Achievements" },
              { href: "#volunteering", label: "Volunteering" },
              { href: "#projects", label: "Projects" },
              { href: "#contact", label: "Contact Me" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-white font-medium transition-colors duration-200 px-2 py-1
                  before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-blue-400 before:transition-all before:duration-300
                  hover:text-blue-400 hover:before:w-full"
                style={{ overflow: "hidden" }}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Mobile menu with slide-down animation - Conditionally rendered based on isMobile state */}
      {isMobile && (
        <div
          className={`flex flex-col space-y-4 px-6 pt-2 pb-6 bg-transparent transition-all duration-500 ease-in-out ${open
            ? "max-h-96 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-4 overflow-hidden"
            }`}
        >
          {[
            { href: "#skills", label: "Skills" },
            { href: "#education", label: "Education" },
            { href: "#achievements", label: "Achievements" },
            { href: "#volunteering", label: "Volunteering" },
            { href: "#projects", label: "Projects" },
            { href: "#contact", label: "Contact Me" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-white font-medium transition-colors duration-200 px-2 py-1
                before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-blue-400 before:transition-all before:duration-300
                hover:text-blue-400 hover:before:w-full"
              style={{ overflow: "hidden" }}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;