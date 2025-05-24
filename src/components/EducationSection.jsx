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
      className="flex flex-col lg:flex-row w-full items-start lg:items-stretch gap-8 lg:gap-16 px-4"
    >
      {/* Inner div containing content and SVG.
          Add items-center conditionally for mobile (when flex-col) */}
      <div className={`flex flex-col ${isMobile ? "items-center" : "lg:flex-row items-start lg:items-stretch"} w-full relative`}>

        {/* Education Content Block */}
        <div
          className="flex flex-col items-start w-full
                     max-w-md
                     sm:max-w-sm
                     md:max-w-3xl
                     lg:max-w-xl
                     lg:flex-grow"
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

        {/* SVG Container */}
        <motion.div
          className="flex justify-center items-center w-full mt-8 lg:mt-0 lg:ml-8
                     lg:w-1/3 xl:w-1/4 2xl:w-1/5
                     max-w-[12rem] sm:max-w-[15rem] md:max-w-[18rem] lg:max-w-[20rem] xl:max-w-[22rem] 2xl:max-w-[24rem]
                     flex-none flex-shrink-0"
          animate={{ rotate: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <img
            src={`${import.meta.env.BASE_URL}education.svg`}
            alt="Education Illustration"
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default EducationSection;