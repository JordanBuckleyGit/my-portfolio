import { FaPhoneAlt, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import "../index.css";
import cv from "../assets/cv.pdf";

function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="w-full flex flex-col md:flex-row items-center justify-between py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 gap-4 md:gap-6 overflow-hidden"
    >
      <div className="flex-1 md:flex-[1.2] flex flex-col items-start">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 dark:text-white mb-6 sm:mb-8 leading-tight">
          Hi there, I'm Jordan{" "}
          <span className="inline-block animate-wave-hand">👋</span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-700 dark:text-blue-100 mb-8 sm:mb-12 font-light max-w-3xl">
          I can only program while listening to music, and I love it!
        </p>
        <div className="flex space-x-4 mb-6">
          <a href="https://github.com/JordanBuckleyGit" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-4xl text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition" />
          </a>
          <a href="https://www.linkedin.com/in/jordan05/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-4xl text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition" />
          </a>
          <a href="mailto:jordanbuckleycork@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="text-4xl text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition" />
          </a>
        </div>
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mb-6 w-full sm:w-auto">
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold py-2 px-4 sm:px-6 rounded transition transform hover:scale-105 text-center text-sm sm:text-base"
          >
            CONTACT ME
          </a>
          <a
            href={cv}
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold py-2 px-4 sm:px-6 rounded transition transform hover:scale-105 text-center text-sm sm:text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            SEE MY CV
          </a>
        </div>
      </div>
      <div className="flex-none md:flex-[1.8] lg:flex-[2] flex justify-center mt-10 md:mt-0 overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}programmer.svg`}
          alt="Programmer"
          className="w-96 md:w-full h-auto max-w-full object-contain animate-bounce-illustration"
        />
      </div>
    </motion.section>
  );
}

export default HeroSection;