import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import uccLogo from '../assets/ucc.png';
import itLogo from '../assets/it.png'

function ExperiencesSection() {
  const experiences = [
    {
      company: "UCC ACM Student Chapter",
      role: "Webmaster",
      period: "September 2024 – Current",
      logo: uccLogo,
      color: "from-yellow-600 to-yellow-800",
      bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
      achievements: [
        "Rebuilt and optimized the chapter website, improving load speeds by 55% and uptime to 99.9%.",
        "Designed and deployed scalable server infrastructure; documented architecture for future scalability.",
        "Managed sponsor visibility for hackathons with F5, Cadence, Keelvar, Insight, and NetApp, increasing engagement by 40%.",
        "Automated deployments via CI/CD, cutting update time by 70%."
      ],
      link: "https://jordanbuckleygit.github.io/ACM-Server/",
      tech: ["Html","JavaScript","CSS"]
    },
    {
      company: "Google, Dublin",
      role: "Google BGN Hackathon Winner",
      period: "October 2025 – October 2025",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",
      color: "from-blue-600 to-blue-800",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
      achievements: [
        "Won 1st place for developing SolarMatch, Ireland's first solar assessment and cooperative platform.",
        "Trained a Gemini chatbot on SEAI data for automated grant eligibility, reducing user research time by 70%.",
        "Engineered financial models in Python/FastAPI with ±5% ROI accuracy and automated cost estimation.",
        "Designed a B2B/B2G revenue model leveraging affiliate links with solar providers and government incentives for referrals.",
        "Built scalable APIs integrating Gemini, SolarAPI, and Google Maps, achieving 30% higher yield accuracy via satellite heatmap modelling."
      ],
      link: "https://github.com/JordanBuckleyGit/SolarMatch",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "FastAPI", "Python", "Docker", "PostgreSQL", "Firebase", "GCP"]
    },
    {
      company: "Cork College Of FET",
      role: "IT/System Administration Intern",
      period: "January 2024 – February 2024",
      logo: itLogo,
      color: "from-green-600 to-green-800",
      bgColor: "bg-green-100 dark:bg-green-900/30",
      achievements: [
        "Diagnosed and resolved hardware issues across 150+ devices, reducing downtime by 40%.",
        "Developed automated scripts for Windows 10 devices to enhance operational efficiency.",
        "Deployed Windows to 100% of campus devices using WDS and MDT, ensuring smooth integration with zero errors.",
        "Developed PowerShell and C# scripts to automate system maintenance, cutting manual tasks by 60%."
      ],
      link: null,
      tech: ["PowerShell", "C#", "WDS", "MDT"]
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      id="experiences"
      className="w-full max-w-7xl mx-auto p-4 sm:p-8 md:p-10 mb-12"
    >
      <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-12 flex items-center gap-3 justify-center">
        <FaBriefcase className="text-blue-500 dark:text-blue-400" /> Experiences
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`${exp.bgColor} rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:scale-[1.02]`}
          >
            {/* Header with gradient */}
            <div className={`bg-gradient-to-r ${exp.color} p-6 flex items-center justify-center`}>
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="w-20 h-20 object-contain bg-white rounded-lg p-2 shadow-md"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {exp.company}
              </h3>
              <p className="text-lg font-semibold text-gray-800 dark:text-blue-300 mb-2">
                {exp.role}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {exp.period}
              </p>

              {/* Achievements */}
              <ul className="space-y-2 mb-4">
                {exp.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="text-sm text-gray-700 dark:text-gray-300 flex items-start"
                  >
                    <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              {exp.tech.length > 0 && (
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-medium bg-blue-200 dark:bg-blue-900 text-blue-900 dark:text-blue-200 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Link */}
              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold text-sm transition"
                >
                  View Project →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default ExperiencesSection;
