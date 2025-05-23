function AchievementsSection() {
  return (
    <section className="w-full max-w-3xl bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
      <h2 className="text-3xl font-bold text-blue-300 mb-4">Achievements</h2>
      <ul className="list-disc list-inside text-blue-100 space-y-2">
        <li>Winner, Hackathon 2023</li>
        <li>Certified AWS Cloud Practitioner</li>
        {/* Add more achievements here */}
      </ul>
    </section>
  );
}

export default AchievementsSection;