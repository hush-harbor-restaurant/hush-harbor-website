import { useEffect, useState } from "react";

export function useLiveScrollY(): number {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      sessionStorage.setItem("scrollY", y.toString());
      setScrollY(y);
    };

    window.addEventListener("scroll", update, { passive: true });
    update();

    return () => window.removeEventListener("scroll", update);
  }, []);

  return scrollY;
}
