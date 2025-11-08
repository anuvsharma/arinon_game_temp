import { useState } from "react";

const games = [
  {
    id: 1,
    name: "Eclipse Protocol",
    desc: "A tactical sci-fi RPG where every decision reshapes the galaxy.",
    image:
      "https://wutheringwaves.kurogames.com/website-preface/assets/jiabeilina-4c54ecf5.webp",
  },
  {
    id: 2,
    name: "Crimson Vale",
    desc: "An open-world adventure blending myth, mystery, and magic.",
    image:
      "https://wutheringwaves.kurogames.com/website-preface/assets/qiuyuan-19c4bd9a.webp",
  },
  {
    id: 3,
    name: "Ashfall Reborn",
    desc: "Survive in a post-cataclysmic world of steel and fire.",
    image:
      "https://wutheringwaves.kurogames.com/website-preface/assets/lupa-936ced5f.webp",
  },
];

export default function FeaturedGames() {
  const [selected, setSelected] = useState(games[0]);

  return (
    <section
      id="featured"
      className="min-h-screen bg-[#0A1B2A] text-white flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Lighting */}
      <div className="absolute inset-0 bg-gradient-radial from-[#F37C20]/10 via-transparent to-transparent pointer-events-none"></div>

      {/* Main Container */}
      <div className="featured-container relative w-full max-w-7xl flex flex-col items-center justify-center text-center">
        {/* Text Container */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[#F37C20] tracking-wide">
            Featured Games
          </h2>
          <hr className="my-4 border-t-2 border-gray-500" />
          <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
            Discover our latest creations. Worlds crafted to with a blend of art
            and gameplay to reach new heights.
          </p>
        </div>

        {/* Showcase Container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-16">
          {/* Main Game */}
          <div className="relative flex flex-col items-center justify-center w-full md:w-3/4">
            {/* Lighting */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[70%] h-[70%] bg-[#F37C20]/20 blur-3xl rounded-full"></div>
            </div>

            {/* Main Image */}
            <img
              src={selected.image}
              alt={selected.name}
              className="relative z-10 object-cover rounded-2xl max-h-[750px] w-full md:w-[95%] border border-[#F37C20]/40 shadow-[0_0_50px_#00000090] transition-all duration-700"
            />

            {/* Description */}
            <h3 className="text-3xl font-semibold mt-8 text-[#F37C20] drop-shadow-[0_0_10px_#F37C20]/50">
              {selected.name}
            </h3>
            <p className="text-lg opacity-90 mt-3 max-w-2xl mx-auto px-4">
              {selected.desc}
            </p>
          </div>

          {/* Thumbnails */}
          <div className="flex md:flex-col gap-6 justify-center items-center">
            {games.map((game) => (
              <button
                key={game.id}
                onClick={() => setSelected(game)}
                className={`relative h-24 w-44 rounded-xl overflow-hidden border transition-all duration-500
                  ${
                    selected.id === game.id
                      ? "border-[#F37C20] shadow-[0_0_20px_#F37C20] scale-110"
                      : "border-[#1E2A38] hover:border-[#F37C20]/70 hover:scale-105"
                  }`}
              >
                <img
                  src={game.image}
                  alt={game.name}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                />
                {/* Overlay Tint */}
                <div
                  className={`absolute inset-0 transition-all duration-500 ${
                    selected.id === game.id
                      ? "bg-transparent"
                      : "bg-black/60 hover:bg-transparent"
                  }`}
                ></div>
                <span className="absolute bottom-2 left-3 text-sm text-white font-semibold tracking-wide drop-shadow-[0_0_8px_#000000]">
                  {game.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* View All Games Button */}
        <div className="mt-20">
          <a
            href="/games"
            className="px-8 py-4 bg-[#F37C20] text-white text-lg font-semibold rounded-full shadow-[0_0_20px_#F37C20]/50 hover:bg-[#ff8f3f] transition-all duration-300"
          >
            View All Games
          </a>
        </div>
      </div>
    </section>
  );
}
