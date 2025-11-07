export default function Footer() {
  return (
    <footer className="bg-[#0D151F] text-gray-300 py-16 px-10 border-t border-[#1E2A38]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section - Address */}
        <div>
          <h3 className="text-2xl font-semibold text-[#F37C20] mb-4">
            Arinon Games
          </h3>
          <div className="text-lg leading-relaxed space-y-1">
            <p>INDIA</p>
            <p>N-27, GROUND FLOOR, KALKAJI, NEW DELHI, 110019</p>
            <p>info@arinon.com</p>
            <p>+91 92204 40702</p>
          </div>
        </div>

        <div className="flex justify-around">
          {/* Useful Links */}
          <div className="flex flex-col">
            <h4 className="text-xl font-semibold text-[#F37C20] mb-4">
              Useful Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/"
                  className="hover:text-[#F37C20] transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/games"
                  className="hover:text-[#F37C20] transition-colors duration-200"
                >
                  Games
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-[#F37C20] transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-[#F37C20] transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="flex flex-col">
            <h4 className="text-xl font-semibold text-[#F37C20] mb-4">
              Connect With Us
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.facebook.com/arinondigital"
                  className="hover:text-[#F37C20] transition-colors duration-200"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/arinondigital/?hl=en"
                  className="hover:text-[#F37C20] transition-colors duration-200"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/arinon/"
                  className="hover:text-[#F37C20] transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-12 border-t border-[#1E2A38] pt-6 text-center text-sm opacity-70">
        © 2025 Arinon Games. All rights reserved.
      </div>
    </footer>
  );
}
