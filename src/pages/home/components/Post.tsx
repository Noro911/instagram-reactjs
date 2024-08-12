import { PiDotsThreeBold } from "react-icons/pi";
import { VscHeart } from "react-icons/vsc";
import { IoChatbubbleOutline } from "react-icons/io5";
import { BsSend } from "react-icons/bs";
import { GoBookmark } from "react-icons/go";

export const Post = () => {
  return (
    <div className="w-3/5 dark:text-white" style={{ margin: "0px auto" }}>
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
      <div className="w-full h-[500px] overflow-hidden">
        <img
          className="w-full h-auto object-cover"
          src="https://preview.redd.it/230704-cha-eunwoo-instagram-update-v0-muu3lwl5yy9b1.jpg?width=1080&crop=smart&auto=webp&s=4da51587784e2a9106d288daca9832ee36fca2bd"
          alt=""
        />
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
