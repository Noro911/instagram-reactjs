import { useState } from "react";

import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

interface IProps {
  images: string[];
}

export const ImageSlide: React.FC<IProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState(false);

  const goToNextImage = () => {
    setCurrentIndex((pre: number) =>
      pre != images.length - 1 ? pre + 1 : pre,
    );
  };

  const backToPreviousImage = () => {
    setCurrentIndex((pre: number) => (pre != 0 ? pre - 1 : pre));
  };
  return (
    <div
      className="w-full h-[450px] overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute top-3 right-2 w-[65px] text-black bg-white py-2 rounded-3xl text-center opacity-80 z-50 ${isHovered ? "" : "hidden"}`}
      >
        {currentIndex + 1}/{images.length}
      </div>
      <button
        className={`absolute top-1/2 left-2 opacity-80 z-50 ${isHovered && currentIndex != 0 ? "" : "hidden"}`}
        onClick={backToPreviousImage}
      >
        <IoIosArrowDropleftCircle size={30} />
      </button>
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            className="w-full h-auto object-cover flex-shrink-0"
            src={currentIndex == i ? img : ""}
            alt=""
          />
        ))}
      </div>
      <div className="flex space-x-1 absolute bottom-4 left-1/2">
        {images.map((_, i) => (
          <div
            className={`w-[6px] h-[6px] rounded-full bg-white ${currentIndex == i ? "" : "opacity-50"}`}
          ></div>
        ))}
      </div>
      <button
        className={`absolute top-1/2 right-2 opacity-80 z-50 ${isHovered && currentIndex != images.length - 1 ? "" : "hidden"}`}
        onClick={goToNextImage}
      >
        <IoIosArrowDroprightCircle size={30} />
      </button>
    </div>
  );
};
