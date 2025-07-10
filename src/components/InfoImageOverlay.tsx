import { useLiveScrollY } from "../hooks/useLiveScrollY";
import artwork from "../images/painting.png";
import frontOfBar from "../images/front_of_bar.jpg";
import { useState, useEffect, useRef, type RefObject } from "react";

const REVEAL_DISTANCE = 150;

function computeOverlayOpacity(ref: RefObject<HTMLDivElement | null>): number {
  const startOpacityTransition =
    window.innerHeight -
    (ref?.current?.getBoundingClientRect()?.bottom ?? 0) -
    25;
  if (startOpacityTransition <= 0) return 0;
  if (startOpacityTransition >= REVEAL_DISTANCE) return 1;
  return startOpacityTransition / REVEAL_DISTANCE;
}

const InfoImageOverlay = () => {
  const scrollY = useLiveScrollY();
  const ref = useRef<HTMLDivElement | null>(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(computeOverlayOpacity(ref));
  }, [scrollY]);

  return (
    <div ref={ref} className="relative w-full max-w-[600px] aspect-square">
      <img
        src={artwork.src}
        alt="Hush Harbor artwork of a bauyu"
        className="absolute inset-0 w-full h-full object-cover rounded-lg z-0"
      />
      <img
        src={frontOfBar.src}
        alt="Front of the bar"
        className="absolute inset-0 w-full h-full object-cover rounded-lg z-10 transition-opacity duration-300"
        style={{ opacity }}
      />
    </div>
  );
};

export default InfoImageOverlay;
