function ContactSection() {
  return (
    <section className="w-full max-w-3xl bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
      <h2 className="text-3xl font-bold text-blue-300 mb-4">Contact Me</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 rounded bg-gray-700 text-blue-100 placeholder-blue-300"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 rounded bg-gray-700 text-blue-100 placeholder-blue-300"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 rounded bg-gray-700 text-blue-100 placeholder-blue-300"
          rows={4}
        />
        <button
          type="submit"
          className="bg-blue-400 hover:bg-blue-500 text-black font-bold py-2 px-6 rounded transition"
        >
          Send
        </button>
      </form>
    </section>
  );
}

export default ContactSection;