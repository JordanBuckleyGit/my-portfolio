import React from 'react';
import { motion } from "framer-motion";
import { FaHandsHelping, FaCode, FaGlobe, FaNetworkWired, FaDatabase } from "react-icons/fa";

function VolunteeringSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      id="volunteering"
      className="w-full"
    >
      <h2 className="section-title">
        <FaHandsHelping className="text-yellow-500 dark:text-yellow-400" /> Volunteering & Societies
      </h2>

      <div className="flex flex-wrap justify-center gap-6 w-full">
        {[
          { icon: FaCode, color: "border-blue-400 text-blue-400", label: "Academic Class Representative", tag: "Leader", text: "Computer Science 1st Year", bgColor: "bg-blue-700", cardBg: "bg-blue-200 dark:bg-blue-900/70" },
          { icon: FaGlobe, color: "border-green-400 text-green-400", label: "ACM Student Chapter Webmaster", tag: "Webmaster", text: "Managed and updated the ACM chapter website.", bgColor: "bg-green-700", cardBg: "bg-green-200 dark:bg-green-900/70" },
          { icon: FaNetworkWired, color: "border-purple-400 text-purple-400", label: "NetSoc", tag: "Member", text: "Participated in networking events and workshops.", bgColor: "bg-purple-700", cardBg: "bg-purple-200 dark:bg-purple-900/70" },
          { icon: FaDatabase, color: "border-yellow-400 text-yellow-400", label: "DataSoc", tag: "Member", text: "Attended data science talks.", bgColor: "bg-yellow-700", cardBg: "bg-yellow-200 dark:bg-yellow-900/70" },
          { icon: FaDatabase, color: "border-pink-400 text-pink-400", label: "CompSci Society", tag: "Member", text: "Member of society", bgColor: "bg-pink-700", cardBg: "bg-pink-200 dark:bg-pink-900/70" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
          >
            <div className={`
                ${item.cardBg} rounded-2xl p-8 min-h-[13rem] shadow-sm hover:shadow-lg hover:-translate-y-1
                border-t-4 ${item.color}
                transition w-full h-full flex flex-col justify-center items-center
              `}>
              {React.createElement(item.icon, { className: "text-4xl mb-4" })}
              <span className="text-gray-900 dark:text-blue-100 text-lg sm:text-xl font-semibold flex flex-wrap items-center gap-2 justify-center text-center">
                {item.label}
                <span className={`${item.bgColor} text-white text-xs px-2 py-0.5 rounded-full`}>
                  {item.tag}
                </span>
              </span>
              <div className="text-gray-800 dark:text-blue-300 text-sm sm:text-base mt-2 text-center">{item.text}</div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default VolunteeringSection;