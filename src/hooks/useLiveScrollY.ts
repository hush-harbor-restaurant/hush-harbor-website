import { useEffect, useState, useRef } from "react";

export function useLiveScrollY(): number {
  const [scrollY, setScrollY] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const update = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(() => {
          const y = window.scrollY;
          sessionStorage.setItem("scrollY", y.toString());
          setScrollY(y);
          ticking.current = false;
        });
      }
    };

    window.addEventListener("scroll", update, { passive: true });
    update();

    return () => window.removeEventListener("scroll", update);
  }, []);

  return scrollY;
}
