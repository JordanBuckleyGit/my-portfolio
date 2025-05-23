import { FaPhoneAlt, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

function ContactSection() {
  return (
    <section id="contact" className="w-screen max-w-none flex flex-col md:flex-row items-center justify-between mx-0 rounded-none shadow-none p-8 mb-8 mt-8">
      {/* Left: Contact Info */}
      <div className="flex-1 flex flex-col items-start">
        <h2 className="text-5xl md:text-7xl font-bold text-blue-300 mb-8 flex items-center gap-6">
          Contact Me <FaPhoneAlt className="text-red-400 text-5xl md:text-7xl" />
        </h2>
        <p className="text-3xl md:text-5xl text-white font-light mb-10 break-all">
          jordanbuckleycork <span className="text-blue-400">(at)</span> gmail <span className="text-blue-400">(dot)</span> com
        </p>
        <div className="flex space-x-8 mt-4">
          <a href="https://github.com/JordanBuckleyGit" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-5xl text-white hover:text-blue-400 transition" />
          </a>
          <a href="https://www.linkedin.com/in/jordan05/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-5xl text-white hover:text-blue-400 transition" />
          </a>
          <a href="mailto:jordanbuckleycork@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="text-5xl text-white hover:text-blue-400 transition" />
          </a>
        </div>
      </div>
      {/* Right: Animated Mail Illustration */}
      <div className="flex-1 flex justify-center mt-10 md:mt-0">
      <motion.img
        src="/mail.svg"
        alt="Mail Illustration"
        className="w-44 h-44 md:w-72 md:h-72 object-contain"
        animate={{
          x: [0, -20, 20, -20, 20, 0],
          rotate: [0, -10, 10, -10, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />
      </div>
    </section>
  );
}

export default ContactSection;