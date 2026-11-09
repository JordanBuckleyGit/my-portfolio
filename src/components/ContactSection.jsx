import { FaPhoneAlt, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

function ContactSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      id="contact"
      className="w-full flex flex-col md:flex-row items-center justify-between gap-10"
    >
      {/* Left: Contact Info */}
      <div className="flex-1 flex flex-col items-center md:items-start w-full text-center md:text-left">
        {/* Contact Me Heading */}

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-300 mb-6 flex items-center justify-center md:justify-start gap-4">
          Contact Me{" "}
          <FaPhoneAlt className="text-red-500 dark:text-red-400 text-3xl sm:text-4xl lg:text-5xl" />
        </h2>

        {/* Email Address */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-900 dark:text-white font-light mb-8 break-words">
          jordanbuckleycork{" "}
          <span className="text-blue-600 dark:text-blue-400 text-base sm:text-lg lg:text-xl">(at)</span>{" "}
          gmail{" "}
          <span className="text-blue-600 dark:text-blue-400 text-base sm:text-lg lg:text-xl">(dot)</span>{" "}
          com
        </p>

        {/* Social Icons */}
        <div className="flex gap-6">
          <a href="https://github.com/JordanBuckleyGit" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-4xl sm:text-5xl text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition" />
          </a>
          <a href="https://www.linkedin.com/in/jordan05/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-4xl sm:text-5xl text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition" />
          </a>
          <a href="mailto:jordanbuckleycork@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="text-4xl sm:text-5xl text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition" />
          </a>
        </div>
      </div>

      {/* Right: Animated Mail Illustration */}
      <div className="flex-1 flex justify-center">
        <motion.img
          src={`${import.meta.env.BASE_URL}mail.svg`}
          alt="Mail Illustration"
          className="w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 object-contain"
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
    </motion.section>
  );
}

export default ContactSection;