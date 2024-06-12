import React from "react";
import bgimg from "../../assets/images/Profile_Public_Bg.png";
import Image from "next/image";
import Images from "@/assets/images";
import { AiOutlineQuestionCircle } from "../../assets/Icons/index";

const Wellgorithm: React.FC = () => {
  return (
    <>
      <div
        className="flex items-center justify-center relative w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgimg.src})`,
         
          
         
        }}
      >
        <Image
          src={Images.wellgo}
          alt="banner image"
          className="rounded-xl lg:relative"
        />
        <AiOutlineQuestionCircle color="white" className="absolute right-0 top-0" />
      </div>
    </>
  );
};

export default Wellgorithm;
