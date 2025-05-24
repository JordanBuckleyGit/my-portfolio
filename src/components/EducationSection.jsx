import { useEffect, useState } from "react";
import uccLogo from '../assets/ucc.png';
import northmonLogo from '../assets/northmon.png';
import { motion } from "framer-motion";
import '../App.css';

function EducationSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
    return (
      <section id="education" className="w-full max-w-6xl px-4 sm:px-8 py-10 sm:py-16">
      <div className="education-responsive flex flex-col md:flex-row w-full items-start">
        {/* ...education content... */}
        <div className="flex flex-col items-start w-full md:max-w-4xl">
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-8 sm:mb-12 text-left">Education</h2>
          <div className="space-y-12 sm:space-y-16 w-full">
            {/* University College Cork */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 text-left">
              <img
                src={uccLogo}
                alt="University College Cork Logo"
                className="w-20 h-20 sm:w-28 sm:h-28 object-contain rounded-xl shadow-lg bg-blue-950/40"
              />
              <div>
                <h3 className="text-2xl sm:text-4xl font-semibold text-blue-50 mb-2">University College Cork</h3>
                <p className="text-lg sm:text-2xl font-bold text-blue-200 mb-1">
                  BSc Computer Science 1.1
                </p>
                <p className="text-base sm:text-xl text-blue-300 mb-1">August 2024 - May 2028</p>
                <p className="text-sm sm:text-lg text-blue-200 mb-1">Cork, Ireland</p>
                <ul className="list-disc list-inside text-sm sm:text-lg text-blue-100 mt-2 space-y-1">
                  <li>Academic Class Representative 2024</li>
                  <li>Netsoc member</li>
                  <li>Datasoc member</li>
                  <li>UCC ACM Student Chapter Webmaster</li>
                </ul>
              </div>
            </div>
            <hr className="border-gray-600 my-6 sm:my-8" />
            {/* North Monastery Secondary School */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 text-left">
              <img
                src={northmonLogo}
                alt="North Monastery Secondary School Logo"
                className="w-20 h-20 sm:w-28 sm:h-28 object-contain rounded-xl shadow-lg bg-blue-950/40"
              />
              <div>
                <h3 className="text-2xl sm:text-4xl font-semibold text-blue-50 mb-2">North Monastery Secondary School</h3>
                <p className="text-lg sm:text-2xl font-bold text-blue-200 mb-1">
                  Secondary School
                </p>
                <p className="text-base sm:text-xl text-blue-300 mb-1">September 2017 - May 2023</p>
                <p className="text-sm sm:text-lg text-blue-200 mb-1">Cork, Ireland</p>
                <ul className="list-disc list-inside text-sm sm:text-lg text-blue-100 mt-2 space-y-1">
                  <li>Representative Of Jigsaw Mental Health</li>
                  <li>Student Council Member</li>
                </ul>
              </div>
            </div>
            <hr className="border-gray-600 my-6 sm:my-8" />
          </div>
        </div>
        {/* Animated SVG illustration */}
        <motion.div
          className="education-svg-motion"
          initial={
            isMobile
              ? { x: 0, y: 0, opacity: 0, scale: 0.9 }
              : { x: 180, y: 60, opacity: 0, scale: 0.9 }
          }
          animate={
            isMobile
              ? {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  rotate: [0, 2, -2, 2, 0],
                }
              : {
                  x: 220,
                  y: 120,
                  opacity: 1,
                  scale: 1,
                  rotate: [0, 2, -2, 2, 0],
                }
          }
          transition={{
            duration: 1.2,
            type: "spring",
            delay: 0.3,
            rotate: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3,
              ease: "easeInOut",
            },
          }}
          style={{ height: "100%" }}
        >
          <img
            src="/education.svg"
            alt="Education Illustration"
            className="education-svg-img object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default EducationSection;