import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import AchievementsSection from './components/AchievementsSection';
import VolunteeringSection from './components/VolunteeringSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Loader from './components/Loader';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

function App() {
  const [loading, setLoading] = useState(true);
  const [showTop, setShowTop] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);

      // Show navbar when scrolling up, hide when scrolling down
      if (window.scrollY < 50) {
        setShowNavbar(true);
      } else if (window.scrollY > lastScrollY.current) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) return <Loader />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col bg-gradient-to-b from-blue-900 via-gray-900 to-gray-800"
    >
      {/* Navbar with show/hide on scroll */}
      <div
        style={{
          transition: "transform 0.3s",
          transform: showNavbar ? "translateY(0)" : "translateY(-100%)",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <Navbar />
      </div>
      <main className="flex-1 flex flex-col items-center px-4 py-12 space-y-16">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <HeroSection />
        </motion.div>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SkillsSection />
        </motion.div>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="self-start w-full"
        >
          <ExperienceSection />
        </motion.div>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <AchievementsSection />
        </motion.div>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <VolunteeringSection />
        </motion.div>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <ProjectsSection />
        </motion.div>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="self-start w-full"
        >
          <ContactSection />
        </motion.div>
      </main>
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-blue-700 hover:bg-blue-500 text-white p-3 rounded-full shadow-lg transition-all duration-200"
          aria-label="Back to top"
        >
          <FaArrowUp className="text-2xl" />
        </button>
      )}
    </motion.div>
  );
}

export default App;