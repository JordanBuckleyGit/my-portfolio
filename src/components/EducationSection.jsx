import uccLogo from '../assets/ucc.png';
import northmonLogo from '../assets/northmon.png';
import { motion } from "framer-motion";

function EducationSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      id="education"
      className="w-full"
    >
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 w-full">

        {/* Education Content Block */}
        <div
          className="flex flex-col w-full lg:flex-1"
        >
          <h2 className="section-title lg:justify-start lg:text-left">Education</h2>
          <div className="space-y-8 w-full">
            {/* University College Cork Section */}
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 text-left">
              <img
                src={uccLogo}
                alt="University College Cork Logo"
                className="w-16 h-16 sm:w-24 sm:h-24 shrink-0 object-contain p-1 rounded-xl shadow-lg bg-blue-950/40"
              />
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-blue-50 mb-2">University College Cork</h3>
                <p className="text-base sm:text-xl font-bold text-gray-800 dark:text-blue-200 mb-1">
                  BSc Computer Science 1.1
                </p>
                <p className="text-sm sm:text-base text-gray-600 dark:text-blue-300 mb-1">August 2024 - May 2028</p>
                <p className="text-sm sm:text-base text-gray-600 dark:text-blue-200 mb-1">Cork, Ireland</p>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-800 dark:text-blue-100 mt-2 space-y-1">
                  <li>Academic Class Representative 2024</li>
                  <li>Netsoc member</li>
                  <li>Datasoc member</li>
                  <li>UCC ACM Student Chapter Webmaster</li>
                </ul>
              </div>
            </div>
            <hr className="border-gray-300 dark:border-gray-700" />

            {/* North Monastery Secondary School Section */}
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 text-left">
              <img
                src={northmonLogo}
                alt="North Monastery Secondary School Logo"
                className="w-16 h-16 sm:w-24 sm:h-24 shrink-0 object-contain p-1 rounded-xl shadow-lg bg-blue-950/40"
              />
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-blue-50 mb-2">North Monastery Secondary School</h3>
                <p className="text-base sm:text-xl font-bold text-gray-800 dark:text-blue-200 mb-1">
                  Secondary School
                </p>
                <p className="text-sm sm:text-base text-gray-600 dark:text-blue-300 mb-1">September 2017 - May 2023</p>
                <p className="text-sm sm:text-base text-gray-600 dark:text-blue-200 mb-1">Cork, Ireland</p>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-800 dark:text-blue-100 mt-2 space-y-1">
                  <li>Representative Of Jigsaw Mental Health</li>
                  <li>Student Council Member</li>
                </ul>
              </div>
            </div>
            <hr className="border-gray-300 dark:border-gray-700" />
          </div>
        </div>

        {/* SVG Container */}
        <motion.div
          className="w-48 sm:w-60 lg:w-80 shrink-0"
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
    </motion.section>
  );
}

export default EducationSection;