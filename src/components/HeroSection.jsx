export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col justify-center bg-[#0D151F] text-white px-20"
    >
      {/* Main Title */}
      <h1 className="hero-title text-8xl font-bold leading-tight mb-10 text-left">
        Crafting Worlds, <br /> Forging Memories.
      </h1>

      {/* Centered Text */}
      <div className="hero-content flex flex-col items-center text-center">
        <p className="text-xl max-w-2xl mb-10 opacity-90">
          We bring imagination to life by creating immersive experiences that
          stay with players long after the game ends.
        </p>

        <div className="flex gap-6">
          <a href="/games" className="px-8 py-3 bg-[#F37C20] rounded-xl font-semibold hover:scale-105 transition-transform duration-300">
            Explore Our Games
          </a>
          <a href="/about" className="px-8 py-3 border border-white rounded-xl font-semibold hover:bg-white hover:text-[#1d3962] transition-colors duration-300">
            Learn About Us
          </a>
        </div>
      </div>
    </section>
  );
}
