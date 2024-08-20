import { PiDotsThreeBold } from "react-icons/pi";
import { VscHeart, VscHeartFilled } from "react-icons/vsc";
import { IoChatbubbleOutline } from "react-icons/io5";
import { BsSend } from "react-icons/bs";
import { GoBookmark } from "react-icons/go";

import { images } from "../../../constants/dummy";
import { ImageSlide } from "../../../components/ui/Slide";
import { useState } from "react";

export const Post = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [animate, setAnimate] = useState<boolean>(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setAnimate(true);
  };

  setTimeout(() => {
    setAnimate(false);
  }, 200);

  return (
    <div className="w-3/5 dark:text-white m-center">
      {/* Header */}
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
        <PiDotsThreeBold size={30} />
      </div>

      {/* Photo Slide */}
      <ImageSlide images={images} />

      {/* Action */}
      <div id="action" className="py-2  flex justify-between">
        <div className="flex space-x-3">
          <button onClick={handleLike}>
            {isLiked ? (
              <VscHeartFilled
                className={`${animate ? "like-animation" : ""}`}
                size={27}
                color="red"
              />
            ) : (
              <VscHeart
                className={`hover:opacity-50 ${animate ? "like-animation" : ""}`}
                size={27}
              />
            )}
          </button>
          <IoChatbubbleOutline className="hover:opacity-50" size={27} />
          <BsSend className="hover:opacity-50" size={25} />
        </div>
        <GoBookmark className="hover:opacity-50" size={27} />
      </div>

      {/* Detail post */}
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
