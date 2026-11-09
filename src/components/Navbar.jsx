import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`w-full transition-all duration-300 ${
      scrolled || open ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg shadow-black/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4 px-4 sm:px-6 lg:px-8 h-16 sm:h-20">
        <div className="flex items-center gap-3 min-w-0">
          <img
            src={`${import.meta.env.BASE_URL}favicon.ico`}
            alt="Logo"
            className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-full object-cover shadow-md transition-transform duration-300 hover:scale-110"
          />
          <span
            className="truncate font-extrabold text-lg sm:text-2xl tracking-wide sm:tracking-widest bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent transition-all duration-300 hover:scale-105 cursor-pointer"
            onClick={() => window.location.reload()}
          >
            Jordan Buckley
          </span>
        </div>

        <div className="flex items-center gap-4 xl:gap-8 shrink-0">
          {/* Desktop links */}
            <div className="hidden lg:flex lg:gap-1 xl:gap-4">
              {[
                { href: "#skills", label: "Skills" },
                { href: "#education", label: "Education" },
                { href: "#experiences", label: "Experiences" },
                { href: "#achievements", label: "Achievements" },
                { href: "#volunteering", label: "Volunteering" },
                { href: "#projects", label: "Projects" },
                { href: "#contact", label: "Contact Me" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative text-gray-800 dark:text-white text-sm xl:text-base font-medium whitespace-nowrap transition-colors duration-200 px-2 py-1
                    before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-blue-600 dark:before:bg-blue-400 before:transition-all before:duration-300
                    hover:text-blue-600 dark:hover:text-blue-400 hover:before:w-full"
                  style={{ overflow: "hidden" }}
                >
                  {item.label}
                </a>
              ))}
            </div>

          {/* Theme Toggle Button - Switch Style - Always at the far right */}
          <button
            onClick={toggleTheme}
            className={`relative shrink-0 w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              isDark ? 'bg-gray-600' : 'bg-blue-400'
            }`}
            aria-label="Toggle theme"
          >
            <div
              className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 flex items-center justify-center ${
                isDark ? 'translate-x-7' : 'translate-x-0'
              }`}
            >
              {isDark ? (
                <FaMoon className="text-gray-700 text-sm" />
              ) : (
                <FaSun className="text-yellow-500 text-sm" />
              )}
            </div>
          </button>

          {/* Hamburger for mobile */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <span
                className={`block h-0.5 w-6 bg-gray-800 dark:bg-white rounded transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""
                  }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-gray-800 dark:bg-white rounded my-1 transition-all duration-300 ${open ? "opacity-0" : ""
                  }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-gray-800 dark:bg-white rounded transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""
                  }`}
              ></span>
            </button>
        </div>
      </div>

      {/* Mobile menu with slide-down animation - Conditionally rendered based on isMobile state */}
        <div
          className={`lg:hidden grid gap-2 px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out ${open
            ? "max-h-[32rem] pb-6 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
            }`}
        >
          {[
            { href: "#skills", label: "Skills" },
            { href: "#education", label: "Education" },
            { href: "#experiences", label: "Experiences" },
            { href: "#achievements", label: "Achievements" },
            { href: "#volunteering", label: "Volunteering" },
            { href: "#projects", label: "Projects" },
            { href: "#contact", label: "Contact Me" },
          ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="relative text-gray-800 dark:text-white font-medium transition-colors duration-200 px-4 py-3 rounded-lg
              before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-blue-600 dark:before:bg-blue-400 before:transition-all before:duration-300
              hover:text-blue-600 dark:hover:text-blue-400 hover:before:w-full
              bg-gray-100/80 dark:bg-gray-800/80 hover:bg-gray-200/80 dark:hover:bg-gray-700/80"
            style={{ overflow: "hidden" }}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
          ))}
        </div>
    </nav>
  );
}

export default Navbar;