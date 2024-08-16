import { useState } from "react";

import { PiDotsThreeBold } from "react-icons/pi";
import { VscHeart } from "react-icons/vsc";
import { IoChatbubbleOutline } from "react-icons/io5";
import { BsSend } from "react-icons/bs";
import { GoBookmark } from "react-icons/go";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

import { images } from "../../../constants/dummy";

export const Post = () => {
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
    <div className="w-3/5 dark:text-white m-center">
      <div className="flex justify-between w-full items-center mb-3">
        <div className="flex items-center">
          <div className="w-[50px] h-[50px] rounded-full instagram-gradient relative">
            <img
              className="inline-block h-[41px] w-[41px] rounded-full ring-2 ring-white dark:ring-dark-950 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              src="https://favim.com/pd/s11/orig/7/782/7826/78264/korean-actor-asian-Favim.com-7826451.jpg"
              alt=""
            />
          </div>
          <span className=" font-bold text-base mx-2">eunwo.o_c</span>
          <span className=" opacity-50">• 4d</span>
        </div>
        <PiDotsThreeBold className="" size={30} />
      </div>
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
      <div id="action" className="py-2  flex justify-between">
        <div className="flex space-x-3">
          <VscHeart size={27} />
          <IoChatbubbleOutline size={27} className="" />
          <BsSend size={25} />
        </div>
        <GoBookmark size={27} />
      </div>
      <div>
        <p>
          Liked by <span className="font-bold">hnuyenlan.02</span> and{" "}
          <span className="font-bold">others</span>
        </p>
      </div>
      <div>
        <p>
          <span className="font-bold">eunwo.o_c</span> Three little cats
        </p>
      </div>
      <p className="opacity-50">View all 17 comments</p>
      <p className="opacity-50">Add a comment...</p>
      <hr className="opacity-40" />
    </div>
  );
};
