import { useState, useEffect } from "react";
import { useLiveScrollY } from "../hooks/useLiveScrollY";
import { useActiveSection } from "../hooks/useActiveSection";
import clsx from "clsx";

const sectionBgClasses: Record<string, string> = {
  home: "bg-leafy-foreground",
  info: "bg-leafy-foreground",
  menu: "bg-tree-bark",
  events: "bg-leafy-foreground",
  "sign-up": "bg-sky",
};

const navLinks = [
  { name: "Info", href: "#info" },
  { name: "Menu", href: "#menu" },
  { name: "Sign Up", href: "#sign-up" },
  { name: "Events", href: "/events" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pathname, setPathname] = useState("/");

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  const scrollY = useLiveScrollY();
  const activeSection =
    useActiveSection(["home", "info", "menu", "sign-up"]) ?? "home";

  const isHome = pathname === "/";
  const isOnTop = !isHome || (isHome && scrollY > 10);

  const resolvedSection = isHome ? activeSection : "events";
  const backgroundClass = sectionBgClasses[resolvedSection];

  return (
    <nav
      className={clsx(
        `text-2xl fixed w-full z-50 text-stone-300 transition-colors duration-200 max-lg:bottom-0 lg:flex lg:justify-between`,
        backgroundClass,
        {
          "lg:top-0": isOnTop,
          "lg:bottom-0": !isOnTop,
          "lg:bg-transparent": isHome && !isOnTop,
          "text-stone-800": activeSection === "sign-up",
        },
      )}
    >
      <div className="flex justify-between items-center max-lg:px-4 max-lg:py-3">
        <div
          className={clsx(
            "text-2xl font-bold px-1 lg:px-8 py-2",
            {
              "bg-leafy-foreground lg:rounded-tr-md": !isOnTop,
              "lg:rounded-br-md": isOnTop,
            },
            `lg:${backgroundClass}`,
          )}
        >
          Hush Harbor
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden block cursor-pointer px-4"
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
        className={clsx(
          {
            block: isOpen,
            hidden: !isOpen,
            "lg:rounded-bl-md": isOnTop,
            "lg:rounded-tl-md": !isOnTop,
          },
          "lg:flex lg:flex-row lg:space-x-6 px-5 lg:px-8 py-1 max-lg:pb-2 flex-col lg:items-center transition-colors duration-200",
          backgroundClass,
        )}
      >
        {navLinks.map((link) => {
          const isHashLink = link.href.startsWith("#");
          const isEventsLink = link.href === "/events";

          const isActive = isEventsLink
            ? pathname.startsWith("/events")
            : isHome && activeSection === link.href.slice(1);

          const resolvedHref = isHashLink ? `/${link.href}` : link.href;

          return (
            <li key={link.name}>
              <a
                href={resolvedHref}
                className={clsx(
                  "block max-lg:py-3 transition-colors duration-200",
                  {
                    "font-bold": isActive,
                    "text-amber-500": isActive && activeSection !== "sign-up",
                    "text-amber-800": isActive && activeSection === "sign-up",
                  },
                  activeSection === "sign-up"
                    ? "hover:text-amber-800"
                    : "hover:text-amber-500",
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </li>
          );
        })}
        <li>
          <a
            href="https://www.exploretock.com/hill-prince-washington"
            target="_blank"
            rel="noopener noreferrer"
            className="block max-lg:py-3 hover:text-amber-500 transition-colors duration-200"
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
