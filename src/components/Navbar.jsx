import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#0D151F]/80 backdrop-blur-md text-white flex justify-between items-center px-10 py-4 z-50">
      <h1 className="text-2xl font-bold text-[#F37C20]">Arinon Games</h1>
      <div className="flex gap-6 text-lg">
        <Link to="/" className="hover:text-[#F37C20] transition-all">Home</Link>
        <Link to="/games" className="hover:text-[#F37C20] transition-all">Games</Link>
        <Link to="/about" className="hover:text-[#F37C20] transition-all">About</Link>
        <Link to="/contact" className="hover:text-[#F37C20] transition-all">Contact</Link>
      </div>
    </nav>
  );
}
