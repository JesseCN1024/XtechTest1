import React, { useState, useEffect } from "react";

const images = [
  "https://img.youtube.com/vi/FT3ODSg1GFE/maxresdefault.jpg",
  "https://img.youtube.com/vi/FT3ODSg1GFE/maxresdefault.jpg",
  "https://img.youtube.com/vi/FT3ODSg1GFE/maxresdefault.jpg",
];

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleBulletClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full flex justify-center items-center overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full flex justify-center"
            // style={{ backgroundImage: `url(${image})` }}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-80 object-cover"
            //   style={}
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 flex justify-center w-full space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer `}
            style={{
                backgroundColor: index === currentIndex ? "orange" : "gray",
                border: index === currentIndex ? "2px solid white" : "",
            }}
            onClick={() => handleBulletClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
