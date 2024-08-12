import { useEffect, useRef, useState } from "react";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

export const StoriesBar = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -100,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 100,
        behavior: "smooth",
      });
    }
  };

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  return (
    <div className="w-full py-5 flex items-center relative">
      <button
        onClick={scrollLeft}
        className={`absolute left-4 z-50 ${canScrollLeft ? "" : "hidden"}`}
      >
        <IoIosArrowDropleftCircle size={30} color="white" />
      </button>
      <div
        ref={scrollContainerRef}
        onScroll={checkScrollPosition}
        className="flex overflow-x-auto space-x-4 scrollbar-hide"
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
          <div
            key={i}
            className="flex-none flex flex-col items-center space-y-2"
          >
            <div className="w-[70px] h-[70px] rounded-full instagram-gradient relative">
              <img
                className="inline-block h-[61px] w-[61px] rounded-full ring-2 ring-white dark:ring-dark-950 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                src="https://favim.com/pd/s11/orig/7/782/7826/78264/korean-actor-asian-Favim.com-7826451.jpg"
                alt=""
              />
            </div>
            <span className="dark:text-white text-sm">eunwo.o_c</span>
          </div>
        ))}
      </div>
      <button
        onClick={scrollRight}
        className={`absolute right-4 z-50 ${canScrollRight ? "" : "hidden"}`}
      >
        <IoIosArrowDroprightCircle size={30} color="white" />
      </button>
    </div>
  );
};
