import { useLiveScrollY } from "../hooks/useLiveScrollY";
import artwork from "../images/painting.png";
import frontOfBar from "../images/front_of_bar.jpg";
import { useState, useEffect, useRef, type RefObject } from "react";

function computeOverlayOpacity(ref: RefObject<HTMLDivElement | null>): number {
  if (!ref.current) return 0;

  const bottom = ref.current.getBoundingClientRect().bottom;
  const top = ref.current.getBoundingClientRect().top;

  const startOpacityTransition = window.innerHeight - bottom - 50;
  const endOpacityTransition = top;

  if (startOpacityTransition <= 0) return 0;
  if (startOpacityTransition >= endOpacityTransition) return 1;

  return startOpacityTransition / endOpacityTransition;
}

const InfoImageOverlay = () => {
  const scrollY = useLiveScrollY();
  const ref = useRef<HTMLDivElement | null>(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(computeOverlayOpacity(ref));
  }, [scrollY]);

  return (
    <div className="w-full flex justify-center">
      <div ref={ref} className="relative w-full max-w-[400px] aspect-square">
        <img
          src={artwork.src}
          alt="Hush Harbor artwork of a bauyu"
          className="absolute inset-0 w-full h-full object-cover rounded-lg z-0"
        />
        <img
          src={frontOfBar.src}
          alt="Front of the bar"
          className="absolute inset-0 w-full h-full object-cover rounded-lg z-10"
          style={{ opacity }}
        />
      </div>
    </div>
  );
};

export default InfoImageOverlay;
