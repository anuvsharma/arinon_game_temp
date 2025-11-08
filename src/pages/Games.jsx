export default function GamesPage() {
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
    {
      id: 4,
      name: "Verdant Eclipse",
      desc: "Uncover ancient secrets in a forgotten land reclaimed by nature.",
      image:
        "https://wutheringwaves.kurogames.com/website-preface/assets/zanni-83b70f6d.webp",
    },
    {
      id: 5,
      name: "Neon Vanguard",
      desc: "A cyberpunk action shooter set in a city on the brink of collapse.",
      image:
        "https://wutheringwaves.kurogames.com/website-preface/assets/sanhua-3acab802.png",
    },
    {
      id: 6,
      name: "Echoes of Solara",
      desc: "A fantasy RPG where light and shadow battle for the world’s soul.",
      image:
        "https://wutheringwaves.kurogames.com/website-preface/assets/motefei-35fa56e5.png",
    },
  ];

  return (
    <section
      id="games-page"
      className="min-h-screen bg-[#0A1B2A] text-white flex flex-col items-center justify-center py-24 px-10"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold text-[#F37C20]">
          Our Games
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Explore our collection of immersive titles crafted with passion and
          creativity.
        </p>
      </div>

      {/*Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl w-full">
        {games.map((game) => (
          <div
            key={game.id}
            className="relative group bg-[#13283E] rounded-2xl overflow-hidden shadow-lg border border-[#F37C20]/20 hover:border-[#F37C20]/60 transition-all duration-500"
          >
            {/* Image */}
            <img
              src={game.image}
              alt={game.name}
              className="h-72 w-full object-cover group-hover:scale-110 transition-transform duration-700"
            />

            {/* OverlayTint */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all duration-500"></div>

            {/* Game Desc */}
            <div className="absolute bottom-0 p-6 text-left">
              <h3 className="text-2xl font-semibold text-[#F37C20] drop-shadow-[0_0_8px_#000000]">
                {game.name}
              </h3>
              <p className="text-gray-300 text-sm mt-2 max-w-sm">{game.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/*Home Button */}
      <div className="mt-16">
        <a
          href="/"
          className="inline-block bg-[#F37C20] hover:bg-[#ff8f33] text-white py-3 px-8 rounded-lg font-semibold transition-all duration-300"
        >
          Back to Home
        </a>
      </div>
    </section>
  );
}
