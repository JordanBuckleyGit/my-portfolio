import { motion } from "framer-motion";

// Animation for the logo
const logoVariants = {
  initial: { scale: 0.92, opacity: 0, rotate: 0 },
  animate: {
    scale: [0.92, 1.06, 1],
    opacity: 1,
    rotate: [0, 8, 0],
    transition: {
      duration: 1.4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};

function Loader() {
  return (
    <>
      <motion.div
        className="fixed inset-0 flex flex-col items-center justify-center bg-slate-100 dark:bg-[#181c24] text-gray-900 dark:text-white z-[60]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Modern Animated Monogram Logo */}
        <motion.svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          variants={logoVariants}
          initial="initial"
          animate="animate"
          className="mb-10 drop-shadow-xl"
        >
          {/* Complete outer ring */}
          <circle
            cx="60"
            cy="60"
            r="50"
            fill="none"
            stroke="url(#blueGrad)"
            strokeWidth="6"
          />
          {/* Static initials */}
          <text
            x="50%"
            y="58%"
            textAnchor="middle"
            fill="currentColor"
            fontSize="3.2rem"
            fontWeight="bold"
            fontFamily="'Montserrat', 'Segoe UI', Arial, sans-serif"
            letterSpacing="0.1em"
            style={{ userSelect: "none" }}
            dy=".3em"
          >
            JB
          </text>
          <defs>
            <linearGradient id="blueGrad" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3B82F6" />
              <stop offset="1" stopColor="#1e293b" />
            </linearGradient>
          </defs>
        </motion.svg>
        {/* Signature-style name only */}
        <span className="text-2xl sm:text-3xl font-light tracking-wider select-none">
          Jordan Buckley
        </span>
      </motion.div>
    </>
  );
}

export default Loader;