import React from 'react';
import { motion } from "framer-motion";
import { FaHandsHelping, FaCode, FaGlobe, FaNetworkWired, FaDatabase } from "react-icons/fa";

function VolunteeringSection() {
  return (
    <motion.section
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      id="volunteering"
      className="w-full max-w-screen-xl mx-auto p-4 sm:p-8 md:p-10 mb-12"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-12 flex items-center gap-3 justify-center text-center">
        <FaHandsHelping className="text-yellow-500 dark:text-yellow-400" /> Volunteering & Societies
      </h2>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-y-8 md:gap-y-10 relative w-full items-start">
        {[
          { icon: FaCode, color: "blue-400", label: "Academic Class Representative", tag: "Leader", text: "Computer Science 1st Year", bgColor: "blue-700", cardBg: "bg-blue-200 dark:bg-blue-900/70" },
          { icon: FaGlobe, color: "green-400", label: "ACM Student Chapter Webmaster", tag: "Webmaster", text: "Managed and updated the ACM chapter website.", bgColor: "green-700", cardBg: "bg-green-200 dark:bg-green-900/70" },
          { icon: FaNetworkWired, color: "purple-400", label: "NetSoc", tag: "Member", text: "Participated in networking events and workshops.", bgColor: "purple-700", cardBg: "bg-purple-200 dark:bg-purple-900/70" },
          { icon: FaDatabase, color: "yellow-400", label: "DataSoc", tag: "Member", text: "Attended data science talks.", bgColor: "yellow-700", cardBg: "bg-yellow-200 dark:bg-yellow-900/70" },
          { icon: FaDatabase, color: "pink-400", label: "CompSci Society", tag: "Member", text: "Member of society", bgColor: "pink-700", cardBg: "bg-pink-200 dark:bg-pink-900/70" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center relative
                       w-full sm:w-[calc(50%-0.75rem)]
                       md:w-full
                       max-w-sm mx-auto"
          >
            <div className={`
                ${item.cardBg} rounded-xl p-5 shadow hover:shadow-lg
                border-t-4 md:border-t-0 md:border-l-4 border-${item.color}
                transition w-full h-full flex flex-col justify-center items-center
              `}>
              {React.createElement(item.icon, { className: `text-${item.color} text-3xl mb-2 mx-auto` })}
              <span className="text-gray-900 dark:text-blue-100 text-lg font-semibold flex items-center gap-2 justify-center text-center">
                {item.label}
                <span className={`bg-${item.bgColor} text-white text-xs px-2 py-0.5 rounded-full ml-2`}>
                  {item.tag}
                </span>
              </span>
              <div className="text-gray-800 dark:text-blue-300 text-sm mt-1 text-center">{item.text}</div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default VolunteeringSection;