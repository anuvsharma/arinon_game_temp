import { useState } from "react";

const characters = [
  {
    id: 1,
    name: "Box 1",
    desc: "Character 1",
    image:
      "https://wutheringwaves.kurogames.com/website-preface/assets/jiabeilina-4c54ecf5.webp",
  },
  {
    id: 2,
    name: "Box 2",
    desc: "Character 2",
    image:
      "https://wutheringwaves.kurogames.com/website-preface/assets/qiuyuan-19c4bd9a.webp",
  },
  {
    id: 3,
    name: "Box 3",
    desc: "Character 3",
    image:
      "https://wutheringwaves.kurogames.com/website-preface/assets/lupa-936ced5f.webp",
  },
];

export default function Selector() {
  const [selected, setSelected] = useState(characters[0]);

  return (
    <section
      id="selector"
      className="min-h-screen bg-[#F37C20] flex flex-col items-center justify-center"
    >
      {/* Main Box */}
      <div className="relative border-[#F37C20] bg-[#1d3962] text-white min-h-[700px] w-full flex flex-col items-center justify-evenly py-10">
        
        {/* Title now inside the blue box */}
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          Character Selector
        </h2>

        {/* Main Content */}
        <div className="flex items-center justify-center w-full relative">
          {/* Main Image */}
          <div className="flex flex-col items-center justify-center">
            <img
              src={selected.image}
              alt={selected.name}
              className="object-cover transition-all duration-700 rounded-lg max-h-[400px]"
            />
          </div>

          {/* Boxes Inside (to the right) */}
          <div className="absolute top-0 right-8 flex flex-col gap-7 mt-8">
            {characters.map((char) => (
              <button
                key={char.id}
                onClick={() => setSelected(char)}
                className={`relative h-20 w-40 rounded-lg border-2 overflow-hidden transition-all duration-700
                  ${
                    selected.id === char.id
                      ? "border-[#F37C20] scale-125"
                      : "border-[#1d3962] hover:border-[#F37C20] hover:scale-125"
                  }`}
              >
                <img
                  src={char.image}
                  alt={char.name}
                  className="h-full w-full object-cover"
                />
                <div
                  className={`absolute inset-0 transition-all duration-700 ${
                    selected.id === char.id
                      ? "bg-transparent"
                      : "bg-gray-600/50 hover:bg-transparent"
                  }`}
                ></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
