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
      className="bg-[#0D151F] flex flex-col items-center justify-center text-white"
    >
      {/* Main Box */}
      <div className="relative bg-[#0A1B2A] w-full min-h-[700px] flex flex-col items-center justify-evenly py-10 m-9">
        {/* Title */}
        <h2 className="text-6xl font-bold text-center text-[#ffffff] mb-8">
          CHARACTER SELECTOR
        </h2>

        {/* Main Content */}
        <div className="flex items-center justify-center w-full relative">
          {/* Main Image */}
          <div className="flex flex-col items-center justify-center">
            <img
              src={selected.image}
              alt={selected.name}
              className="object-cover transition-all duration-700 rounded-lg max-h-[400px] border-4 border-[#F37C20] shadow-[0_0_20px_#00000070]"
            />
            {/* <p className="mt-4 text-lg font-semibold text-[#F37C20]">
              {selected.desc}
            </p> */}
          </div>

          {/* Boxes on the Right */}
          <div className="absolute top-0 right-8 flex flex-col gap-7 mt-8">
            {characters.map((char) => (
              <button
                key={char.id}
                onClick={() => setSelected(char)}
                className={`relative h-20 w-40 rounded-lg border-2 overflow-hidden transition-all duration-500
                  ${
                    selected.id === char.id
                      ? "border-[#F37C20] scale-110 shadow-[0_0_20px_#F37C20]"
                      : "border-[#2A2D32] hover:border-[#F37C20] hover:scale-105"
                  }`}
              >
                <img
                  src={char.image}
                  alt={char.name}
                  className="h-full w-full object-cover"
                />
                <div
                  className={`absolute inset-0 transition-all duration-500 ${
                    selected.id === char.id
                      ? "bg-black/30"
                      : "bg-[#0D151F]/70 hover:bg-[#0D151F]/40"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
