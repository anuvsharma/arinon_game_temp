export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col justify-center bg-[#0D151F] text-white px-6 md:px-20"
    >
      {/* Title */}
      <h1 className="hero-title text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 md:mb-10 text-left md:text-left">
        Crafting Worlds, <br /> Forging Memories.
      </h1>

      {/* Text */}
      <div className="hero-content flex flex-col items-center text-center md:items-start md:text-left md:max-w-xl">
        <p className="text-base sm:text-lg md:text-xl max-w-md sm:max-w-xl mb-8 opacity-90">
          We bring imagination to life by creating immersive experiences that
          stay with players long after the game ends.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <a
            href="/games"
            className="px-6 sm:px-8 py-3 bg-[#F37C20] rounded-xl font-semibold hover:scale-105 transition-transform duration-300 text-center"
          >
            Explore Our Games
          </a>

          <a
            href="/about"
            className="px-6 sm:px-8 py-3 border border-white rounded-xl font-semibold hover:bg-white hover:text-[#1d3962] transition-colors duration-300 text-center"
          >
            Learn About Us
          </a>
        </div>
      </div>
    </section>
  );
}
