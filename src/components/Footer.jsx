export default function Footer() {
  return (
    <footer className="bg-[#0D151F] py-8 text-center text-gray-400">
      <p>© 2025 ArinonGames. All rights reserved.</p>
      <div className="flex justify-center gap-6 mt-4">
        <a
          href="https://www.facebook.com/arinondigital"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          Facebook
        </a>
        <a
          href="https://instagram.com/arinondigital/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          Instagram
        </a>
        <a href="https://www.linkedin.com/company/arinon/" className="hover:text-white">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
