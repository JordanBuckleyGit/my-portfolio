function ExperienceSection() {
  return (
    <section className="w-full max-w-6xl px-8 py-16 ml-0 mr-auto">
      <h2 className="text-6xl font-bold text-blue-100 mb-12 text-left">Education</h2>
      <div className="space-y-16">
        {/* University College Cork */}
        <div className="flex items-center space-x-8 text-left">
          <img
            src="https://www.ucc.ie/en/media/siteassets/images/logos/UCC-logo.png"
            alt="University College Cork Logo"
            className="w-28 h-28 object-contain rounded-xl shadow-lg bg-blue-950/40"
          />
          <div>
            <h3 className="text-4xl font-semibold text-blue-50 mb-2">University College Cork</h3>
            <p className="text-2xl font-bold text-blue-200 mb-1">
              BSc Computer Science
            </p>
            <p className="text-xl text-blue-300 mb-1">August 2024 – May 2028</p>
            <p className="text-lg text-blue-200 mb-1">Cork, Ireland</p>
            <ul className="list-disc list-inside text-lg text-blue-100 mt-2 space-y-1">
              <li>Academic Class Representative 2024</li>
              <li>Netsoc member</li>
              <li>Datasoc member</li>
              <li>UCC ACM Student Chapter Webmaster</li>
              <li>1.1 - 1st Year Semester 1 — Jinja, SQL and +4 skills</li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-600 my-8" />
        {/* North Monastery Secondary School */}
        <div className="flex items-center space-x-8 text-left">
          <img
            src="https://www.northmonastery.com/wp-content/uploads/2018/09/cropped-north-mon-logo.png"
            alt="North Monastery Secondary School Logo"
            className="w-28 h-28 object-contain rounded-xl shadow-lg bg-blue-950/40"
          />
          <div>
            <h3 className="text-4xl font-semibold text-blue-50 mb-2">North Monastery Secondary School</h3>
            <p className="text-2xl font-bold text-blue-200 mb-1">
              Secondary School
            </p>
            <p className="text-xl text-blue-300 mb-1">September 2017 – May 2023</p>
            <p className="text-lg text-blue-200 mb-1">Cork, Ireland</p>
            <ul className="list-disc list-inside text-lg text-blue-100 mt-2 space-y-1">
              <li>Representative Of Jigsaw Mental Health</li>
              <li>Student Council Member</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;