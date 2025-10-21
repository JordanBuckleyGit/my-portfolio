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
      className="w-screen flex flex-col md:flex-row items-center justify-between max-w-none mx-0 py-16 px-6 md:px-16"
    >
      <div className="flex-1 flex flex-col items-start">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
          Hi there, I'm Jordan{" "}
          <span className="inline-block animate-wave-hand">👋</span>
        </h1>
        <p className="text-2xl md:text-3xl text-gray-700 dark:text-blue-100 mb-10 font-light max-w-2xl">
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
        <div className="flex space-x-4">
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition transform hover:scale-105"
          >
            CONTACT ME
          </a>
          <a
            href={cv}
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            SEE MY CV
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-center mt-10 md:mt-0">
        <img
          src={`${import.meta.env.BASE_URL}programmer.svg`}
          alt="Programmer"
          className="w-90 h-90 object-contain animate-bounce-illustration"
        />
      </div>
    </motion.section>
  );
}

export default HeroSection;