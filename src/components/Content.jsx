import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const circles = [
  { id: 1, name: "CIRCLE 1", desc: "This is the first circle" },
  { id: 2, name: "CIRCLE 2", desc: "This is the second circle" },
  { id: 3, name: "CIRCLE 3", desc: "This is the third circle" },
];

export default function CircleSection() {
  const [active, setActive] = useState(null);

  useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".content-box", {
    opacity: 1,
    y: 0,
    duration: 3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".content-box",
      start: "top 50%",
      toggleActions: "play none none none",
    },
  });
}, []);


  return (
    <section
      id="content"
      className="min-h-screen bg-[#0D151F] flex flex-col items-center justify-center text-[#ffffff]"
    >
      {/* Big Box */}
      <div className="content-box bg-[#0A1B2A] rounded-xl shadow-lg p-24 w-11/12 h-[85vh] flex flex-col items-center text-center opacity-0">
        <h2 className="text-6xl sm:text-6xl font-bold mb-16 text-[#ffffff]">
          New Content
        </h2>

        {/* Circles */}
        <div className="flex gap-16 flex-wrap justify-center">
          {circles.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c)}
              className="w-44 h-44 flex items-center justify-center rounded-full 
                         bg-[#F37C20] text-[#ffffff] font-bold text-lg 
                         shadow-lg hover:scale-110 transition-transform duration-700"
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {active && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#000000] bg-opacity-60 z-50">
          <div className="relative bg-[#2a2d32] rounded-lg shadow-xl p-6 w-96 text-[#ffffff]">
            {/* Close button (X in top-right) */}
            <button
              onClick={() => setActive(null)}
              className="absolute top-3 right-3 text-[#ffffff] hover:text-[#F37C20] text-xl font-bold"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-2">{active.name}</h3>
            <p className="text-[#ffffff] opacity-80">{active.desc}</p>
          </div>
        </div>
      )}
    </section>
  );
}
