import { useState } from "react";
import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";
import microsoft from "../assets/microsoft.png";
import acmLogo from "../assets/acmLogo.png";
import team from "../assets/team.jpeg";
import acmTeam from "../assets/acmTeam.jpeg";
import googleWin from "../assets/googleWin.png";
import googleLogo from "../assets/google.png";

function Modal({ open, onClose, imgSrc, imgAlt }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="bg-gray-900 rounded-2xl shadow-2xl p-3 sm:p-4 relative flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-gray-800 shadow-lg flex items-center justify-center text-white text-2xl font-bold hover:text-yellow-400"
          aria-label="Close"
        >
          ×
        </button>
        <img src={imgSrc} alt={imgAlt} className="max-w-full max-h-[80vh] object-contain rounded-lg" />
      </div>
    </div>
  );
}

function AchievementsSection() {
  const [modal, setModal] = useState({ open: false, imgSrc: "", imgAlt: "" });

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      id="achievements"
      className="w-full"
    >
      <h2 className="section-title">
        <FaTrophy className="text-yellow-500 dark:text-yellow-400" /> Achievements
      </h2>
      <Modal
        open={modal.open}
        onClose={() => setModal({ open: false, imgSrc: "", imgAlt: "" })}
        imgSrc={modal.imgSrc}
        imgAlt={modal.imgAlt}
      />
      <div className="grid md:grid-cols-3 items-end gap-6 lg:gap-8 pt-8 max-w-md md:max-w-none mx-auto">
        {/* 2nd Place - Microsoft Hackathon */}
        <div className="w-full h-full flex transition-transform duration-300 hover:-translate-y-1">
          <div
            className="bg-blue-200 dark:bg-blue-950/60 rounded-2xl shadow-lg flex flex-col items-center px-6 py-8 w-full"
          >
            <img
              src={microsoft}
              alt="Microsoft Hackathon"
              className="w-20 h-20 mb-3 object-contain"
            />
            <span className="text-3xl font-bold text-gray-800 dark:text-blue-200 mb-1">2</span>
            <h3 className="text-lg font-bold text-gray-900 dark:text-blue-100 mb-1 text-center">Microsoft Hackathon</h3>
            <p className="text-gray-800 dark:text-blue-200 text-center text-base break-words mb-4">
              Placed at a Microsoft Hackathon for innovative project work and teamwork.
            </p>
            <button
              onClick={() => setModal({ open: true, imgSrc: team, imgAlt: "Microsoft Hackathon" })}
              className="btn mt-auto"
            >
              View
            </button>
          </div>
        </div>
        {/* 1st Place - Google Hackathon */}
        <div className="order-first md:order-none w-full h-full flex transition-transform duration-300 hover:-translate-y-1">
          <div
            className="bg-blue-300 dark:bg-blue-950/80 rounded-2xl shadow-2xl flex flex-col items-center px-6 pt-12 pb-8 md:pb-12 border-4 border-yellow-400 relative w-full"
          >
            <img
              src={googleLogo}
              alt="Google"
              className="w-20 h-20 mb-3 object-contain"
            />
            <span className="text-4xl font-extrabold text-yellow-500 dark:text-yellow-400 mb-1 drop-shadow">1</span>
            <h3 className="text-xl font-bold text-gray-900 dark:text-blue-100 mb-1 text-center">Google Hackathon</h3>
            <p className="text-gray-800 dark:text-blue-200 text-center text-lg break-words mb-4">
              Won 1st place at Google Hackathon for innovative project work and teamwork.
            </p>
            <button
              onClick={() => setModal({ open: true, imgSrc: googleWin, imgAlt: "Google Hackathon" })}
              className="btn mt-auto"
            >
              View
            </button>
            <FaTrophy className="absolute -top-8 left-1/2 -translate-x-1/2 text-yellow-400 text-5xl drop-shadow-lg" />
          </div>
        </div>
        {/* 3rd Place - ACM Hackathon */}
        <div className="w-full h-full flex transition-transform duration-300 hover:-translate-y-1">
          <div
            className="bg-blue-200 dark:bg-blue-950/60 rounded-2xl shadow-lg flex flex-col items-center px-6 py-8 w-full"
          >
            <img
              src={acmLogo}
              alt="ACM Hackathon"
              className="w-20 h-20 mb-3 object-contain"
            />
            <span className="text-3xl font-bold text-gray-800 dark:text-blue-200 mb-1">3</span>
            <h3 className="text-lg font-bold text-gray-900 dark:text-blue-100 mb-1 text-center">ACM Hackathon</h3>
            <p className="text-gray-800 dark:text-blue-200 text-center text-base break-words mb-4">
              Participated in the ACM Hackathon, collaborating and building creative solutions.
            </p>
            <button
              onClick={() => setModal({ open: true, imgSrc: acmTeam, imgAlt: "ACM Hackathon" })}
              className="btn mt-auto"
            >
              View
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default AchievementsSection;