export default function ContactPage() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#0A1B2A] text-white flex items-center justify-center py-24 px-10"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Title */}
        <div className="space-y-6">
          <h2 className="text-5xl font-bold text-[#F37C20] mb-6">
            Get in Touch
          </h2>
          <p className="text-lg leading-relaxed text-gray-300">
            Have questions, ideas, or collaboration opportunities?<br/> 
            Reach out to us! We’d love to hear from you.
          </p>
        </div>

        {/* Contact Form */}
        <div>
          <form className="bg-[#0D151F] p-8 rounded-2xl shadow-lg border border-[#F37C20]/20 space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-[#0A1B2A] border border-[#1E2A38] focus:border-[#F37C20] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-[#0A1B2A] border border-[#1E2A38] focus:border-[#F37C20] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Your Message..."
                className="w-full p-3 rounded-lg bg-[#0A1B2A] border border-[#1E2A38] focus:border-[#F37C20] outline-none resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#F37C20] hover:bg-[#ff8f33] text-white py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
