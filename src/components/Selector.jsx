import { useState } from "react";

const characters = [
  { id: 1, name: "Box 1", desc: "Character 1" },
  { id: 2, name: "Box 2", desc: "Character 2" },
  { id: 3, name: "Box 3", desc: "Character 3" },
];

export default function Selector() {
  const [selected, setSelected] = useState(characters[0]);

  return (
    <section id="selector" className="bg-white px-8 sm:px-16 py-16 min-h-screen">
      {/* Section Header */}
      <h2 className="text-5xl font-bold text-center text-[#1d3962] mb-12">
        Character Selector
      </h2>

      {/* Main content container */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-8">
        {/* Main Box */}
        <div className="flex-1 flex flex-col items-center justify-center border-4 border-[#F37C20] rounded-xl p-8 bg-[#1d3962] text-white min-h-[400px] md:min-h-[600px]">
          <h3 className="text-4xl font-bold mb-4">{selected.name}</h3>
          <p className="text-[#F37C20] text-xl">{selected.desc}</p>
        </div>

        {/* Right Side Scroller */}
        <div className="w-56 flex flex-col gap-4 overflow-y-auto">
          {characters.map((char) => (
            <button
              key={char.id}
              onClick={() => setSelected(char)}
              className={`h-28 py-6 rounded-lg border-2 font-bold text-center transition-colors
                ${
                  selected.id === char.id
                    ? "border-[#F37C20] bg-[#1d3962] text-white"
                    : "border-[#1d3962] bg-white text-[#1d3962] hover:border-[#F37C20] hover:text-[#F37C20]"
                }`}
            >
              {char.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
