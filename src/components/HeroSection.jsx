import { FaPhoneAlt, FaGithub, FaLinkedin, FaEnvelope, FaApple } from "react-icons/fa";
import { motion } from "framer-motion";
import "../index.css";
import cv from "../assets/cv.pdf";

function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      className="w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-8 min-h-[calc(100svh-8rem)] py-6"
    >
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <a
          href="#experiences"
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 bg-white/60 dark:bg-white/5 backdrop-blur px-4 py-1.5 text-xs sm:text-sm font-medium text-gray-800 dark:text-blue-100 shadow-sm hover:border-blue-500 dark:hover:border-blue-400 transition"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          <FaApple className="text-base" /> Incoming Software Engineering Intern @ Apple
        </a>
        <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
          Hi there, I'm Jordan{" "}
          <span className="inline-block animate-wave-hand">👋</span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-blue-100 mb-8 font-light max-w-xl">
          I can only program while listening to music, and I love it!
        </p>
        <div className="flex gap-5 mb-8">
          <a href="https://github.com/JordanBuckleyGit" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl sm:text-4xl text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition" />
          </a>
          <a href="https://www.linkedin.com/in/jordan05/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl sm:text-4xl text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition" />
          </a>
          <a href="mailto:jordanbuckleycork@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="text-3xl sm:text-4xl text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition" />
          </a>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs sm:max-w-none sm:w-auto">
          <a
            href="#contact"
            className="btn"
          >
            CONTACT ME
          </a>
          <a
            href={cv}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            SEE MY CV
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-center w-full">
        <img
          src={`${import.meta.env.BASE_URL}programmer.svg`}
          alt="Programmer"
          className="w-full max-w-xs sm:max-w-md md:max-w-none h-auto object-contain animate-bounce-illustration"
        />
      </div>
    </motion.section>
  );
}

export default HeroSection;