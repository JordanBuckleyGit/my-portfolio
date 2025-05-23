function ProjectsSection() {
  return (
    <section className="w-full max-w-3xl bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
      <h2 className="text-3xl font-bold text-blue-300 mb-4">Projects</h2>
      <div className="space-y-4 text-blue-100">
        <div>
          <h3 className="font-semibold text-lg">Portfolio Website</h3>
          <p className="text-blue-200">A personal website built with React and Tailwind CSS.</p>
        </div>
        {/* Add more projects here */}
      </div>
    </section>
  );
}

export default ProjectsSection;