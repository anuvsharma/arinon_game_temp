import astronaut2 from "../assets/astronaut2.png";
import team from "../assets/team.jpg";

export default function AboutPage() {
  return (
    <section
      id="about-page"
      className="min-h-screen bg-[#0A1B2A] text-white flex flex-col items-center justify-center py-24 px-10"
    >
      {/* Container */}
      <div className="max-w-6xl w-full flex flex-col gap-20">
        {/* Intro Section */}
        <div className="text-center space-y-6 mt-8">
          <h2 className="text-5xl md:text-6xl font-bold text-[#F37C20]">
            About Us
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-300 leading-relaxed">
            At{" "}
            <span className="text-[#F37C20] font-semibold">Arinon Games</span>,
            we believe in the power of imagination and design. Our mission is to
            craft gaming experiences filled with emotion, challenge, and wonder.
          </p>
        </div>

        {/* Philosophy Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-semibold text-[#F37C20] mb-4">
              Our Philosophy
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              We focus on gameplay depth, artistic design, and storytelling that
              resonates. Each project represents our passion to connect with
              players through meaningful experiences.
            </p>
          </div>

          <div className="flex justify-center">
            <img src={astronaut2} />
          </div>
        </div>

        {/* Team Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center order-2 md:order-1">
            <img src={team} />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-semibold text-[#F37C20] mb-4">
              Meet Our Team
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our team is made up of developers, artists, and storytellers. We
              thrive on creativity, collaboration, and pushing the boundaries of
              gaming. Together, we make ideas that leave a mark.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-10">
          <h3 className="text-2xl font-semibold mb-4 text-[#F37C20]">
            Want to learn more about our work?
          </h3>
          <a
            href="/games"
            className="inline-block bg-[#F37C20] hover:bg-[#ff8f33] text-white py-3 px-8 rounded-lg font-semibold transition-all duration-300"
          >
            View Our Games
          </a>
        </div>
      </div>
    </section>
  );
}
