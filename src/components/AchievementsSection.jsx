import { useState } from "react";
import { FaTrophy } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import microsoft from "../assets/microsoft.png";
import acmLogo from "../assets/acmLogo.png";
import team from "../assets/team.jpeg";
import acmTeam from "../assets/acmTeam.jpeg";

function Modal({ open, onClose, imgSrc, imgAlt }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-gray-900 rounded-xl shadow-2xl p-6 relative flex flex-col items-center">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-yellow-400"
          aria-label="Close"
        >
          ×
        </button>
        <img src={imgSrc} alt={imgAlt} className="max-w-[80vw] max-h-[70vh] rounded-lg" />
      </div>
    </div>
  );
}

function AchievementsSection() {
  const [modal, setModal] = useState({ open: false, imgSrc: "", imgAlt: "" });

  return (
    <section className="w-full max-w-[120rem] mx-auto p-4 sm:p-8 md:p-10 mb-12">
      <h2 className="text-4xl font-extrabold text-white mb-12 flex items-center gap-3 justify-center">
        <FaTrophy className="text-yellow-400" /> Achievements
      </h2>
      <Modal
        open={modal.open}
        onClose={() => setModal({ open: false, imgSrc: "", imgAlt: "" })}
        imgSrc={modal.imgSrc}
        imgAlt={modal.imgAlt}
      />
      <div className="flex items-end justify-center gap-6 w-full flex-wrap">
        {/* 2nd Place - ACM Hackathon */}
        <div className="flex flex-col items-center justify-end group flex-shrink min-w-0 w-full sm:w-1/3 md:w-1/3 max-w-[420px] transition-transform duration-300 group-hover:scale-105 group-focus:scale-105">
          <div
            className="bg-blue-950/60 rounded-xl shadow-lg flex flex-col items-center px-8 py-10 w-full h-[340px] cursor-pointer"
            tabIndex={0}
          >
            <img
              src={acmLogo}
              alt="ACM Hackathon"
              className="w-20 h-20 mb-3 object-contain"
            />
            <span className="text-3xl font-bold text-blue-200 mb-1">2</span>
            <h3 className="text-lg font-bold text-blue-100 mb-1 text-center">ACM Hackathon</h3>
            <p className="text-blue-200 text-center text-base break-words mb-4">
              Participated in the ACM Hackathon, collaborating and building creative solutions.
            </p>
            <button
              onClick={() => setModal({ open: true, imgSrc: acmTeam, imgAlt: "ACM Hackathon" })}
              className="bg-blue-700 hover:bg-blue-500 text-white font-semibold py-2 px-6 rounded transition"
            >
              View
            </button>
          </div>
        </div>
        {/* 1st Place - Microsoft Hackathon */}
        <div className="flex flex-col items-center justify-end group flex-shrink min-w-0 w-full sm:w-1/3 md:w-1/3 max-w-[420px] transition-transform duration-300 group-hover:scale-105 group-focus:scale-105">
          <div
            className="bg-blue-950/80 rounded-xl shadow-2xl flex flex-col items-center px-8 py-10 border-4 border-yellow-400 relative w-full h-[340px] cursor-pointer"
            tabIndex={0}
          >
            <img
              src={microsoft}
              alt="Microsoft Hackathon"
              className="w-20 h-20 mb-3 object-contain"
            />
            <span className="text-4xl font-extrabold text-yellow-400 mb-1 drop-shadow">1</span>
            <h3 className="text-xl font-bold text-blue-100 mb-1 text-center">Microsoft Hackathon</h3>
            <p className="text-blue-200 text-center text-lg break-words mb-4">
              Placed at a Microsoft Hackathon for innovative project work and teamwork.
            </p>
            <button
              onClick={() => setModal({ open: true, imgSrc: team, imgAlt: "Microsoft Hackathon" })}
              className="bg-blue-700 hover:bg-blue-500 text-white font-semibold py-2 px-6 rounded transition"
            >
              View
            </button>
            <FaTrophy className="absolute -top-8 left-1/2 -translate-x-1/2 text-yellow-400 text-5xl drop-shadow-lg" />
          </div>
        </div>
        {/* 3rd Place - LeetCode */}
        <div className="flex flex-col items-center justify-end group flex-shrink min-w-0 w-full sm:w-1/3 md:w-1/3 max-w-[420px] transition-transform duration-300 group-hover:scale-105 group-focus:scale-105">
          <div
            className="bg-blue-950/60 rounded-xl shadow-lg flex flex-col items-center px-8 py-10 w-full h-[340px] cursor-pointer"
            tabIndex={0}
          >
            <SiLeetcode className="text-5xl text-yellow-300 mb-3" />
            <span className="text-3xl font-bold text-blue-200 mb-1">3</span>
            <h3 className="text-lg font-bold text-blue-100 mb-1 text-center">LeetCode</h3>
            <p className="text-blue-200 text-center text-base break-words mb-4">
              Active LeetCode problem solver, consistently improving algorithmic skills.
            </p>
            <button
              onClick={() =>
                setModal({
                  open: true,
                  imgSrc: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
                  imgAlt: "LeetCode",
                })
              }
              className="bg-blue-700 hover:bg-blue-500 text-white font-semibold py-2 px-6 rounded transition"
            >
              View
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AchievementsSection;