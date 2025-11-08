export default function ContactPreview() {
  return (
    <section
      id="contact-preview"
      className="relative bg-[#0A1B2A] text-white py-28 px-8 flex items-center justify-center overflow-hidden"
    >
      {/* Lighting */}
      <div className="absolute inset-0 bg-gradient-radial from-[#F37C20]/15 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center text-center">
        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Get in Touch
        </h2>

        {/* Text */}
        <p className="text-lg text-gray-300 max-w-2xl mb-10 leading-relaxed">
          Have a question, idea, or collaboration in mind?  
          We'd love to hear from you.
        </p>

        {/* Button */}
        <a
          href="/contact"
          className="bg-[#F37C20] hover:bg-[#f59141] text-black font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-[0_0_20px_#F37C20]/50 hover:shadow-[0_0_30px_#F37C20]/70"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
