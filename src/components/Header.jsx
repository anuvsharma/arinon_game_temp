import { useState } from "react";
import astronautImage from "../assets/astronaut.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#1d3962] shadow-lg">
      <div className="flex items-center w-full py-4 px-4 sm:px-6">
        {/* Logo + text */}
        <div className="flex items-center gap-2 sm:gap-3">
          <img
            src={astronautImage}
            alt="Arinon Logo"
            className="h-12 w-12 sm:h-16 sm:w-16"
          />
          <h1 className="text-3xl sm:text-5xl font-bold">
            <span className="text-white">Arinon</span>
            <span className="text-[#F37C20]">Games</span>
          </h1>
        </div>

        {/* Navigation for desktop */}
        <nav className="hidden md:flex mx-auto gap-6 font-bold text-white md:text-lg">
          <a
            href="#selector"
            className="hover:text-[#F37C20] transition-colors"
          >
            Characters
          </a>
          <a
            href="#content"
            className="hover:text-[#F37C20] transition-colors"
          >
            Content
          </a>
          <a href="#scroller" className="hover:text-[#F37C20] transition-colors">
            Scroller
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex-shrink-0">
          <button
            className="text-white font-bold text-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            Menu
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <nav className="w-full flex flex-col gap-2 mt-4 md:hidden font-bold text-white">
            <a
              href="#selector"
              className="hover:text-[#F37C20] transition-colors"
            >
              Characters
            </a>
            <a
              href="#content"
              className="hover:text-[#F37C20] transition-colors"
            >
              Content
            </a>
            <a
              href="#news"
              className="hover:text-[#F37C20] transition-colors"
            >
              News
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
