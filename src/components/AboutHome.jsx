import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-[70vh] bg-[#0A1B2A] text-white flex items-center justify-center py-20 px-10"
    >
      <div className="about-container max-w-6xl flex flex-col md:flex-row items-center gap-16">
        {/* Left Side - Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-5xl font-bold text-[#F37C20] mb-6">
            About Our Studio
          </h2>
          <p className="text-lg leading-relaxed opacity-90 mb-4">
            At{" "}
            <span className="text-[#F37C20] font-semibold">Arinon Games</span>,
            we’re a small but passionate team of developers, and artists with
            the goal to make games that blend art and gameplay into memorable
            experiences.
          </p>

          {/* Button */}
          <a
            href="/about"
            className="inline-block mt-4 bg-[#F37C20] hover:bg-[#f59141] text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-[0_0_20px_#F37C20]/50 hover:shadow-[0_0_30px_#F37C20]/70"
          >
            Learn More
          </a>
        </div>

        {/* Right Side - Visual Placeholder */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-[380px] h-[380px] rounded-2xl overflow-hidden shadow-lg border border-[#F37C20]/40">
            <div className="absolute inset-0 bg-[#F37C20]/20 blur-2xl"></div>
            <div className="relative w-full h-full bg-[#1C2733] flex items-center justify-center text-[#ffffff80] font-semibold text-lg">
              [ Astronaught Image Here ]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
