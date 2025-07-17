import { useState } from "react";
import { useLiveScrollY } from "../hooks/useLiveScrollY";
import clsx from "clsx";
import { useActiveSection } from "../hooks/useActiveSection";

const sectionBgClasses: Record<string, string> = {
  home: "bg-leafy-foreground",
  info: "bg-leafy-foreground",
  menu: "bg-tree-bark",
  events: "bg-leafy-dark",
};

const navLinks = [
  { name: "Info", href: "#info" },
  { name: "Menu", href: "#menu" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollY = useLiveScrollY();
  const activeSection = useActiveSection(["home", "info", "menu"]) ?? "home";

  const isSticky = scrollY > 10;

  return (
    <nav
      className={clsx(
        "text-xl fixed w-full z-50 text-stone-100 transition-colors duration-200",
        "max-md:bottom-0",
        {
          "md:top-0": isSticky,
          "md:bottom-0": !isSticky,
          "md:flex md:justify-between": true,
          [sectionBgClasses[activeSection]]: true,
          "md:bg-transparent": !isSticky,
        },
      )}
    >
      <div
        className={`flex justify-between items-center max-mod:px-4 max-md:py-3 max-md:${sectionBgClasses[activeSection]}`}
      >
        <div
          className={clsx(
            "text-xl font-bold text-stone-300",
            {
              "bg-leafy-foreground md:rounded-tr-md": !isSticky,
              "md:rounded-br-md": isSticky,
            },
            "px-5 md:px-8 py-2",
            `md:${sectionBgClasses[activeSection]}`,
          )}
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
        className={clsx(
          {
            block: isOpen,
            hidden: !isOpen,
            "md:rounded-bl-md": isSticky,
            "md:rounded-tl-md": !isSticky,
          },
          "md:flex md:flex-row md:space-x-6",
          "px-5 md:px-8 py-1 max-md:pb-2",
          "flex-col md:items-center",
          "transition-colors duration-200",
          sectionBgClasses[activeSection],
        )}
      >
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className={`block max-md:py-3 hover:text-amber-500 ${
                activeSection === link.href.substring(1)
                  ? "font-bold text-amber-500"
                  : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          </li>
        ))}
        <li>
          <a
            href="https://resy.com"
            target="_blank"
            rel="noopener noreferrer"
            className={
              "block max-md:py-3 hover:text-amber-500 transition-colors duration-200"
            }
            onClick={() => setIsOpen(false)}
          >
            Make a Reservation
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
