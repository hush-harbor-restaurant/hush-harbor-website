import { useState } from "react";
import { useLiveScrollY } from "../hooks/useLiveScrollY";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollY = useLiveScrollY();

  const isSticky = scrollY > 10;

  const navLinks = [
    { name: "Menu", href: "#menu" },
    { name: "Events", href: "#events" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 text-stone-100 transition-all duration-300
    max-md:bottom-0 max-md:bg-leafy-foreground
    ${isSticky ? "md:top-0" : "md:bottom-0"} md:flex md:justify-between`}
    >
      <div className="flex justify-between items-center max-mod:px-4 max-md:py-3">
        <div
          className={`text-xl font-bold text-stone-300 md:bg-leafy-foreground px-5 py-2 ${
            isSticky ? "md:rounded-br-md" : "md:rounded-tr-md"
          }`}
        >
          Hush Harbor
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden block cursor-pointer px-4"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6 text-stone-100"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex md:flex-row md:space-x-6 px-5 py-1 max-md:pb-2 bg-leafy-foreground flex-col md:flex md:items-center ${
          isSticky ? "md:rounded-bl-md" : "md:rounded-tl-md"
        }`}
      >
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="block text-stone-100 max-md:py-3 hover:text-amber-500 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
