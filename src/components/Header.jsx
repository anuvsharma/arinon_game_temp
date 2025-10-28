import { useState } from "react";
import astronautImage from "../assets/astronaut.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#0D151F] shadow-md">
      <div className="flex items-center justify-between w-full py-4 px-4 sm:px-6">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <img
            src={astronautImage}
            alt="Arinon Logo"
            className="h-12 w-12 sm:h-16 sm:w-16"
          />
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            <span className="text-[#F37C20]">Arinon</span>
            <span className="text-white">Games</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 font-semibold text-white md:text-lg">
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
            href="#scroller"
            className="hover:text-[#F37C20] transition-colors"
          >
            Scroller
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white font-semibold text-lg hover:text-[#F37C20] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="w-full flex flex-col items-center gap-3 py-4 bg-[#0A1B2A] text-white font-semibold md:hidden border-t border-[#2A2D32] shadow-inner">
          <a href="#selector" className="hover:text-[#F37C20] transition-colors">
            Characters
          </a>
          <a href="#content" className="hover:text-[#F37C20] transition-colors">
            Content
          </a>
          <a href="#news" className="hover:text-[#F37C20] transition-colors">
            News
          </a>
        </nav>
      )}
    </header>
  );
}
