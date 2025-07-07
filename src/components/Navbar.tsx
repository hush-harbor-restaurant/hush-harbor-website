import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Menu", href: "#menu" },
    { name: "Events", href: "#events" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-white border-b border-gray-200 px-4 py-4 md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center">
        <a href="/" className="text-xl font-bold">
          Hush Harbor
        </a>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="md:hidden block cursor-pointer"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
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
        className={`mt-4 md:mt-0 md:flex md:space-x-6 ${
          isOpen ? "block" : "hidden"
        } md:block`}
      >
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="block py-2 md:py-0 text-gray-700 hover:text-blue-600"
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

export default Nav;
