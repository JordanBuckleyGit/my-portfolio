import React from 'react'; // IMPORTANT: This import is crucial for React JSX to work
import { FaHandsHelping, FaCode, FaGlobe, FaNetworkWired, FaDatabase } from "react-icons/fa";

function VolunteeringSection() {
  return (
    <section
      id="volunteering"
      // Ensure max-width for the section and responsive padding
      className="w-full max-w-screen-xl mx-auto p-4 sm:p-8 md:p-10 mb-12"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-12 flex items-center gap-3 justify-center text-center">
        <FaHandsHelping className="text-yellow-400" /> Volunteering & Societies
      </h2>

      {/* Main container for the timeline items */}
      {/* flex-wrap & justify-center for responsive layout */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-y-8 md:gap-y-10 relative w-full items-start">

        {/* Removed Timeline line/dots for a primarily vertical layout */}

        {/* Individual Timeline items */}
        {[
          { icon: FaCode, color: "blue-400", label: "Academic Class Representative", tag: "Leader", text: "Computer Science 1st Year", bgColor: "blue-700" }, // Added explicit bgColor
          { icon: FaGlobe, color: "green-400", label: "ACM Student Chapter Webmaster", tag: "Webmaster", text: "Managed and updated the ACM chapter website.", bgColor: "green-700" }, // Added explicit bgColor
          { icon: FaNetworkWired, color: "purple-400", label: "NetSoc", tag: "Member", text: "Participated in networking events and workshops.", bgColor: "purple-700" }, // Added explicit bgColor
          { icon: FaDatabase, color: "yellow-400", label: "DataSoc", tag: "Member", text: "Attended data science talks.", bgColor: "yellow-700" }, // Added explicit bgColor
          { icon: FaDatabase, color: "pink-400", label: "CompSci Society", tag: "Member", text: "Member of society", bgColor: "pink-700" }, // Added explicit bgColor
        ].map((item, index) => (
          <div
            key={index}
            // Responsive width classes:
            // w-full: Default (stacked vertically on smallest screens).
            // sm:w-[calc(50%-0.75rem)]: At 640px+, 2 items per row (accounting for gap-6).
            // md:w-full: At 768px+ (just after 750px), force back to full width to be vertical (as requested).
            // max-w-sm mx-auto: Center the card and cap its max width when it's w-full.
            className="flex flex-col items-center relative
                       w-full sm:w-[calc(50%-0.75rem)] /* 2 columns on small/tablet landscape */
                       md:w-full /* Forces vertical stack on md (768px) and up */
                       max-w-sm mx-auto /* Caps max width and centers the card */
                       "
          >
            <div className={`bg-blue-950/70 rounded-xl p-5 shadow hover:shadow-lg
                             border-t-4 md:border-t-0 md:border-l-4 /* Responsive border styling */
                             border-${item.color} transition w-full h-full flex flex-col justify-center items-center`}>
              {/* Use item.color directly for text color */}
              {React.createElement(item.icon, { className: `text-${item.color} text-3xl mb-2 mx-auto` })}
              <span className="text-blue-100 text-lg font-semibold flex items-center gap-2 justify-center text-center">
                {item.label}
                {/* Use the new explicit bgColor property to avoid dynamic string generation in this spot */}
                <span className={`bg-${item.bgColor} text-xs px-2 py-0.5 rounded-full ml-2`}>
                  {item.tag}
                </span>
              </span>
              <div className="text-blue-300 text-sm mt-1 text-center">{item.text}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default VolunteeringSection;