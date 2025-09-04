interface Props {
  images: string[];
  speed: number;
  imageWidth: number;
  imageHeight: number;
  gap: number;
  full: boolean; // l'immagine riempie la cella
}

const InfiniteCarousel = ({
  images,
  speed,
  imageWidth,
  imageHeight,
  gap,
  full,
}: Props) => {
  const duplicatedImages = [...images, ...images];

  const totalWidth = images.length * (imageWidth + gap);

  return (
    <div className='w-[calc(100%+4rem)] overflow-hidden -mx-8 my-5'>
      <div
        className='flex'
        style={{
          animation: `scroll ${speed}s linear infinite`,
          width: `${totalWidth * 2}px`,
          gap: `${gap}px`,
        }}
      >
        {duplicatedImages.map((src, index) => (
          <div
            key={index}
            className={`flex justify-center items-center bg-background-lighter border border-gray-500 flex-shrink-0 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 select-none ${
              full ? 'p-0' : 'p-3'
            }`}
            style={{
              width: `${imageWidth}px`,
              height: `${imageHeight}px`,
            }}
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className={`pointer-events-none select-none block ${
                full ? 'w-full h-full' : 'w-3/4'
              }`}
              loading='lazy'
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${totalWidth}px);
          }
        }
      `}</style>
    </div>
  );
};

export default InfiniteCarousel;
