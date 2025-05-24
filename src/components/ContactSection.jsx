import { FaPhoneAlt, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

function ContactSection() {
  return (
    // Main Section Container:
    // - w-full: Takes full width available.
    // - max-w-screen-xl mx-auto: Limits overall width on very large screens and centers it.
    // - p-4 sm:p-8 md:p-10: Responsive padding instead of fixed p-8.
    // - flex-col by default: Stacks content vertically on small screens.
    // - md:flex-row: Changes to horizontal layout on medium screens and up.
    // - items-center: Keeps content centered horizontally when stacked, and vertically when in a row.
    // - justify-between: Spreads items horizontally in a row.
    <section
      id="contact"
      className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between p-4 sm:p-8 md:p-10 mb-8 mt-8"
    >
      {/* Left: Contact Info */}
      {/*
        - flex-1: Allows it to grow in md:flex-row.
        - w-full: Takes full width when stacked.
        - items-center by default: Centers content horizontally on small screens.
        - md:items-start: Aligns content to the start on medium screens (row layout).
        - text-center by default: Centers text on small screens.
        - md:text-left: Aligns text to left on medium screens.
      */}
      <div className="flex-1 flex flex-col items-center md:items-start w-full text-center md:text-left">
        {/* Contact Me Heading */}
        {/*
          - text-3xl sm:text-4xl md:text-5xl lg:text-7xl: Responsive font sizes.
          - mb-4 sm:mb-6 md:mb-8: Responsive bottom margin.
          - gap-3 sm:gap-4 md:gap-6: Responsive gap for icon.
        */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-blue-300 mb-4 sm:mb-6 md:mb-8 flex items-center justify-center md:justify-start gap-3 sm:gap-4 md:gap-6">
          Contact Me{" "}
          <FaPhoneAlt className="text-red-400 text-3xl sm:text-4xl md:text-5xl lg:text-7xl" />
        </h2>

        {/* Email Address */}
        {/*
          - text-xl sm:text-2xl md:text-3xl lg:text-5xl: Responsive font sizes.
          - mb-6 sm:mb-8 md:mb-10: Responsive bottom margin.
          - break-words instead of break-all: Usually better for email addresses.
        */}
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white font-light mb-6 sm:mb-8 md:mb-10 break-words">
          jordanbuckleycork{" "}
          <span className="text-blue-400 text-lg sm:text-xl md:text-2xl lg:text-3xl">(at)</span>{" "}
          gmail{" "}
          <span className="text-blue-400 text-lg sm:text-xl md:text-2xl lg:text-3xl">(dot)</span>{" "}
          com
        </p>

        {/* Social Icons */}
        {/*
          - space-x-4 sm:space-x-6 md:space-x-8: Responsive horizontal spacing.
          - mt-6 sm:mt-8 md:mt-10: Responsive top margin.
        */}
        <div className="flex space-x-4 sm:space-x-6 md:space-x-8 mt-6 sm:mt-8 md:mt-10">
          <a href="https://github.com/JordanBuckleyGit" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-4xl sm:text-5xl text-white hover:text-blue-400 transition" />
          </a>
          <a href="https://www.linkedin.com/in/jordan05/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-4xl sm:text-5xl text-white hover:text-blue-400 transition" />
          </a>
          <a href="mailto:jordanbuckleycork@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="text-4xl sm:text-5xl text-white hover:text-blue-400 transition" />
          </a>
        </div>
      </div>

      {/* Right: Animated Mail Illustration */}
      {/*
        - flex-1: Allows it to grow in md:flex-row.
        - justify-center: Centers the image.
        - mt-8 sm:mt-10 md:mt-0: Responsive top margin (0 on md+ to align with left).
        - w-32 h-32 sm:w-44 sm:h-44 md:w-72 md:h-72: Responsive image sizes.
      */}
      <div className="flex-1 flex justify-center mt-8 sm:mt-10 md:mt-0">
        <motion.img
          src="/mail.svg"
          alt="Mail Illustration"
          className="w-32 h-32 sm:w-44 sm:h-44 md:w-72 md:h-72 object-contain"
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