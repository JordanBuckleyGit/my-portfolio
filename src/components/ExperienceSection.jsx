import uccLogo from '../assets/ucc.png';
import northmonLogo from '../assets/northmon.png';
import { motion } from "framer-motion";

function ExperienceSection() {
  return (
    <section className="w-full max-w-6xl px-8 py-16">
      <div className="flex w-full items-start">
        {/* Left: Education Content */}
        <div className="flex flex-col items-start w-full max-w-4xl">
          <h2 className="text-6xl font-bold text-white mb-12 text-left">Education</h2>
          <div className="space-y-16 w-full">
            {/* University College Cork */}
            <div className="flex items-center space-x-8 text-left">
              <img
                src={uccLogo}
                alt="University College Cork Logo"
                className="w-28 h-28 object-contain rounded-xl shadow-lg bg-blue-950/40"
              />
              <div>
                <h3 className="text-4xl font-semibold text-blue-50 mb-2">University College Cork</h3>
                <p className="text-2xl font-bold text-blue-200 mb-1">
                  BSc Computer Science 1.1
                </p>
                <p className="text-xl text-blue-300 mb-1">August 2024 - May 2028</p>
                <p className="text-lg text-blue-200 mb-1">Cork, Ireland</p>
                <ul className="list-disc list-inside text-lg text-blue-100 mt-2 space-y-1">
                  <li>Academic Class Representative 2024</li>
                  <li>Netsoc member</li>
                  <li>Datasoc member</li>
                  <li>UCC ACM Student Chapter Webmaster</li>
                </ul>
              </div>
            </div>
            <hr className="border-gray-600 my-8" />
            {/* North Monastery Secondary School */}
            <div className="flex items-center space-x-8 text-left">
              <img
                src={northmonLogo}
                alt="North Monastery Secondary School Logo"
                className="w-28 h-28 object-contain rounded-xl shadow-lg bg-blue-950/40"
              />
              <div>
                <h3 className="text-4xl font-semibold text-blue-50 mb-2">North Monastery Secondary School</h3>
                <p className="text-2xl font-bold text-blue-200 mb-1">
                  Secondary School
                </p>
                <p className="text-xl text-blue-300 mb-1">September 2017 - May 2023</p>
                <p className="text-lg text-blue-200 mb-1">Cork, Ireland</p>
                <ul className="list-disc list-inside text-lg text-blue-100 mt-2 space-y-1">
                  <li>Representative Of Jigsaw Mental Health</li>
                  <li>Student Council Member</li>
                </ul>
              </div>
            </div>
            <hr className="border-gray-600 my-8" />
          </div>
        </div>
        {/* Centered and animated SVG illustration */}
        <motion.div
          className="hidden md:flex flex-col items-center justify-center flex-shrink-0"
          initial={{ x: 180, y: 60, opacity: 0, scale: 0.9 }}
          animate={{
            x: 220,
            y: 120,
            opacity: 1,
            scale: 1,
            rotate: [0, 2, -2, 2, 0],
          }}
          transition={{
            duration: 1.2,
            type: "spring",
            delay: 0.3,
            rotate: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3,
              ease: "easeInOut"
            }
          }}
          style={{ height: "100%" }}
        >
          <img
            src="/education.svg"
            alt="Education Illustration"
            className="w-96 h-96 object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default ExperienceSection;