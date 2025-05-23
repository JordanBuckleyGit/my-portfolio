import { FaHandsHelping, FaCode, FaGlobe, FaNetworkWired, FaDatabase } from "react-icons/fa";

function VolunteeringSection() {
  return (
    <section className="w-full max-w-none mx-auto bg-gradient-to-br from-blue-900 via-gray-900 to-gray-800 rounded-2xl shadow-2xl p-10 mb-12 border border-blue-700">
      <h2 className="text-3xl font-extrabold text-white mb-12 flex items-center gap-3 justify-center">
        <FaHandsHelping className="text-yellow-400" /> Volunteering & Societies
      </h2>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 relative w-full">
        {/* Timeline line */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-700 via-blue-400 to-yellow-400 opacity-40 z-0" style={{ transform: "translateY(-50%)" }} />
        {/* Timeline items */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 w-full z-10">
          {/* 1 */}
          <div className="flex flex-col items-center md:w-1/4 relative">
            <div className="bg-blue-950/70 rounded-xl p-5 shadow hover:shadow-lg border-t-4 md:border-t-0 md:border-l-4 border-blue-400 transition w-full">
              <FaCode className="text-blue-400 text-3xl mb-2 mx-auto" />
              <span className="text-blue-100 text-lg font-semibold flex items-center gap-2 justify-center">
                Academic Class Representative
                <span className="bg-blue-700 text-xs px-2 py-0.5 rounded-full ml-2">Leader</span>
              </span>
              <div className="text-blue-300 text-sm mt-1 text-center">Computer Science 1st Year</div>
            </div>
            {/* Timeline dot */}
            <div className="hidden md:block w-5 h-5 bg-blue-400 rounded-full border-4 border-blue-950 absolute -bottom-3 left-1/2 -translate-x-1/2 z-20" />
          </div>
          {/* 2 */}
          <div className="flex flex-col items-center md:w-1/4 relative">
            <div className="bg-blue-950/70 rounded-xl p-5 shadow hover:shadow-lg border-t-4 md:border-t-0 md:border-l-4 border-green-400 transition w-full">
              <FaGlobe className="text-green-400 text-3xl mb-2 mx-auto" />
              <span className="text-blue-100 text-lg font-semibold flex items-center gap-2 justify-center">
                ACM Student Chapter Webmaster
                <span className="bg-green-700 text-xs px-2 py-0.5 rounded-full ml-2">Webmaster</span>
              </span>
              <div className="text-blue-300 text-sm mt-1 text-center">Managed and updated the ACM chapter website.</div>
            </div>
            <div className="hidden md:block w-5 h-5 bg-green-400 rounded-full border-4 border-blue-950 absolute -bottom-3 left-1/2 -translate-x-1/2 z-20" />
          </div>
          {/* 3 */}
          <div className="flex flex-col items-center md:w-1/4 relative">
            <div className="bg-blue-950/70 rounded-xl p-5 shadow hover:shadow-lg border-t-4 md:border-t-0 md:border-l-4 border-purple-400 transition w-full">
              <FaNetworkWired className="text-purple-400 text-3xl mb-2 mx-auto" />
              <span className="text-blue-100 text-lg font-semibold flex items-center gap-2 justify-center">
                NetSoc
                <span className="bg-purple-700 text-xs px-2 py-0.5 rounded-full ml-2">Member</span>
              </span>
              <div className="text-blue-300 text-sm mt-1 text-center">Participated in networking events and workshops.</div>
            </div>
            <div className="hidden md:block w-5 h-5 bg-purple-400 rounded-full border-4 border-blue-950 absolute -bottom-3 left-1/2 -translate-x-1/2 z-20" />
          </div>
          {/* 4 */}
          <div className="flex flex-col items-center md:w-1/4 relative">
            <div className="bg-blue-950/70 rounded-xl p-5 shadow hover:shadow-lg border-t-4 md:border-t-0 md:border-l-4 border-yellow-400 transition w-full">
              <FaDatabase className="text-yellow-400 text-3xl mb-2 mx-auto" />
              <span className="text-blue-100 text-lg font-semibold flex items-center gap-2 justify-center">
                DataSoc
                <span className="bg-yellow-700 text-xs px-2 py-0.5 rounded-full ml-2">Member</span>
              </span>
              <div className="text-blue-300 text-sm mt-1 text-center">Attended data science talks.</div>
            </div>
            <div className="hidden md:block w-5 h-5 bg-yellow-400 rounded-full border-4 border-blue-950 absolute -bottom-3 left-1/2 -translate-x-1/2 z-20" />
          </div>
          {/* 5 */}
          <div className="flex flex-col items-center md:w-1/4 relative">
            <div className="bg-blue-950/70 rounded-xl p-5 shadow hover:shadow-lg border-t-4 md:border-t-0 md:border-l-4 border-pink-400 transition w-full">
              <FaDatabase className="text-pink-400 text-3xl mb-2 mx-auto" />
              <span className="text-blue-100 text-lg font-semibold flex items-center gap-2 justify-center">
                CompSci Society
                <span className="bg-pink-700 text-xs px-2 py-0.5 rounded-full ml-2">Member</span>
              </span>
              <div className="text-blue-300 text-sm mt-1 text-center">Member of society</div>
            </div>
            <div className="hidden md:block w-5 h-5 bg-pink-400 rounded-full border-4 border-blue-950 absolute -bottom-3 left-1/2 -translate-x-1/2 z-20" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default VolunteeringSection;