import { useEffect, useState } from "react";
import uccLogo from '../assets/ucc.png';
import northmonLogo from '../assets/northmon.png';
import { motion } from "framer-motion";

function EducationSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 1024);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="education"
      className="flex flex-col lg:flex-row w-full items-start lg:items-stretch gap-2 lg:gap-8" // Drastically reduced gap
    >
      {/* Inner div containing content and SVG, still flex-col on smaller screens */}
      <div className={`flex flex-col ${isMobile ? "" : "lg:flex-row"} w-full items-start lg:items-stretch relative`}>

        {/* Education Content Block */}
        <div
          className="flex flex-col items-start w-full sm:max-w-xs md:max-w-[18rem] lg:max-w-3xl lg:flex-grow" // AGGRESSIVE MAX-WIDTHS
        >
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-8 sm:mb-12 text-left">Education</h2>
          <div className="space-y-12 sm:space-y-16 w-full">
            {/* University College Cork Section */}
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

            {/* North Monastery Secondary School Section */}
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

        {/* Animated SVG illustration Container */}
        <motion.div
          className="flex justify-center items-center w-full mt-8 lg:mt-0 lg:ml-8 lg:w-[20rem] lg:h-[20rem] flex-none overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <img
            src="/education.svg"
            alt="Education Illustration"
            className="w-[8rem] h-[8rem] max-w-full max-h-full sm:w-[10rem] sm:h-[10rem] md:w-[10rem] md:h-[10rem] lg:w-full lg:h-full object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default EducationSection;