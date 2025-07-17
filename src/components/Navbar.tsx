import { useState, useEffect } from "react";
import { useLiveScrollY } from "../hooks/useLiveScrollY";
import { useActiveSection } from "../hooks/useActiveSection";
import clsx from "clsx";

const sectionBgClasses: Record<string, string> = {
  home: "bg-leafy-foreground",
  info: "bg-leafy-foreground",
  menu: "bg-tree-bark",
  events: "bg-leafy-foreground",
};

const navLinks = [
  { name: "Info", href: "#info" },
  { name: "Menu", href: "#menu" },
  { name: "Events", href: "/events" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pathname, setPathname] = useState("/");

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  // Hooks must be used unconditionally
  const scrollY = useLiveScrollY();
  const activeSection = useActiveSection(["home", "info", "menu"]) ?? "home";

  const isHome = pathname === "/";
  const isOnTop = !isHome || (isHome && scrollY > 10);

  const resolvedSection = isHome ? activeSection : "events";
  const backgroundClass = sectionBgClasses[resolvedSection];

  return (
    <nav
      className={clsx(
        `text-2xl fixed w-full z-50 text-stone-100 transition-colors duration-200 max-md:bottom-0 md:flex md:justify-between`,
        backgroundClass,
        {
          "md:top-0": isOnTop,
          "md:bottom-0": !isOnTop,
          "md:bg-transparent": isHome && !isOnTop,
        },
      )}
    >
      <div className="flex justify-between items-center max-md:px-4 max-md:py-3">
        <div
          className={clsx(
            "text-2xl font-bold text-stone-300 px-5 md:px-8 py-2",
            {
              "bg-leafy-foreground md:rounded-tr-md": !isOnTop,
              "md:rounded-br-md": isOnTop,
            },
            `md:${backgroundClass}`,
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
            "md:rounded-bl-md": isOnTop,
            "md:rounded-tl-md": !isOnTop,
          },
          "md:flex md:flex-row md:space-x-6 px-5 md:px-8 py-1 max-md:pb-2 flex-col md:items-center transition-colors duration-200",
          backgroundClass,
        )}
      >
        {navLinks.map((link) => {
          const isHashLink = link.href.startsWith("#");
          const isEventsLink = link.href === "/events";

          const isActive = isEventsLink
            ? pathname === "/events"
            : isHome && activeSection === link.href.slice(1);

          const resolvedHref = isHashLink ? `/${link.href}` : link.href;

          return (
            <li key={link.name}>
              <a
                href={resolvedHref}
                className={clsx(
                  "block max-md:py-3 hover:text-amber-500 transition-colors duration-200",
                  {
                    "font-bold text-amber-500": isActive,
                  },
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
            className="block max-md:py-3 hover:text-amber-500 transition-colors duration-200"
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
