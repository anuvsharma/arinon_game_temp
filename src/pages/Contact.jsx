export default function Contact() {
  return (
    <section className="min-h-screen bg-[#0A1B2A] text-white flex flex-col items-center justify-center py-20 px-10">
      <h1 className="text-6xl font-bold text-[#F37C20] mb-6">Contact Us</h1>
      <p className="max-w-2xl text-center text-lg opacity-90 mb-8">
        Have a question, collaboration idea, or press inquiry? We’d love to hear from you.
      </p>
      <a
        href="mailto:contact@arinongames.com"
        className="bg-[#F37C20] text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-all"
      >
        Send an Email
      </a>
    </section>
  );
}
