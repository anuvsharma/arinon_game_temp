import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[#0D151F]/80 backdrop-blur-md text-white px-6 md:px-10 py-4 z-50 flex justify-between items-center">
      {/* Logo */}
      <a href="/" className="text-2xl font-bold text-[#F37C20]">
        Arinon Games
      </a>

      {/* Desktop */}
      <div className="hidden md:flex gap-6 text-lg">
        <Link to="/" className="hover:text-[#F37C20] transition-all">
          Home
        </Link>
        <Link to="/games" className="hover:text-[#F37C20] transition-all">
          Games
        </Link>
        <Link to="/about" className="hover:text-[#F37C20] transition-all">
          About
        </Link>
        <Link to="/contact" className="hover:text-[#F37C20] transition-all">
          Contact
        </Link>
      </div>

      {/* Hamburger */}
      <button
        className="md:hidden text-3xl focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Mobile */}
      <div
        className={`absolute top-full left-0 w-full bg-[#0D151F] flex flex-col items-center gap-6 py-6 text-lg transition-all duration-300 md:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="hover:text-[#F37C20] transition-all"
        >
          Home
        </Link>

        <Link
          to="/games"
          onClick={() => setOpen(false)}
          className="hover:text-[#F37C20] transition-all"
        >
          Games
        </Link>

        <Link
          to="/about"
          onClick={() => setOpen(false)}
          className="hover:text-[#F37C20] transition-all"
        >
          About
        </Link>

        <Link
          to="/contact"
          onClick={() => setOpen(false)}
          className="hover:text-[#F37C20] transition-all"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
