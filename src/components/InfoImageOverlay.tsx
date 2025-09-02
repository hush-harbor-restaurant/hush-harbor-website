import artwork from "../images/painting.png";

const InfoImageOverlay = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="relative w-full max-w-[400px] aspect-square">
        <img
          src={artwork.src}
          alt="Hush Harbor artwork of a bauyu"
          className="absolute inset-0 w-full h-full object-cover rounded-lg z-0"
        />
      </div>
    </div>
  );
};

export default InfoImageOverlay;
