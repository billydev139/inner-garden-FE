import React from "react";
import bgimg from "../../assets/images/abd.png";
import Image from "next/image";
import Images from "@/assets/images";
import {
  AiOutlineQuestionCircle,
  FaBookOpenReader,
} from "../../assets/Icons/index";
import Button from "@/components/common/Button";
import { wellGoCardData } from "@/utils/helpers/dummyContent";
const Wellgorithm: React.FC = () => {
  return (
    <>
      <div
        className="flex flex-col items-center mt-6 justify-center relative w-full bg-cover h-80 bg-center rounded-lg"
        style={{
          backgroundImage: `url(${bgimg.src})`,
        }}
      >
        <Image
          src={Images.wellgo}
          alt="banner image"
          className="rounded-xl lg:relative"
        />
        <AiOutlineQuestionCircle
          color="white"
          size={22}
          className="absolute right-3 top-2"
        />
        <div className="flex items-center gap-8 mt-6">
          <Button btnText="intention" variant="#564A8D" />
          <Button btnText="action" variant="#564A8D" />
          <Button btnText="reflection" variant="#564A8D" />
        </div>
      </div>
      {wellGoCardData?.map((item: any, index: React.Key | null | undefined) => (
        <div
          key={index}
          className="max-w-[700px] mt-8 flex flex-col items-center justify-center mx-auto"
        >
          <div className="border-[5px] bg-white border-purple-light flex flex-col items-center  rounded-[58px]">
            <Image
              src={item.img}
              alt="banner image"
              className="rounded-xl lg:relative"
            />

            <h2 className="border-[3px] text-white text-2xl -mt-7 z-10 font-semibold font-montserrat-alternates border-white bg-purple-light rounded-[30px] px-8 py-1">
              {item.title}
            </h2>
            <h2 className="font-black text-purple-dark text-[40px] leading-[48px] pt-3 text-center px-24 font-montserrat-alternates">
              {item.heading}
            </h2>
            <p className="text-black text-xl font-semibold font-montserrat-alternates text-center px-20 py-6">
              {item.description}
            </p>
            <div
              className="w-full flex items-center justify-between h-28 bg-cover bg-center rounded-[54px] rounded-t-none"
              style={{
                backgroundImage: `url(${bgimg.src})`,
              }}
            >
              <div></div>
              <h2 className="flex items-center font-black text-[32px] ml-16 text-center text-white font-montserrat-alternates">
                {item.points}
                <span className="text-white font-medium text-[22px]">
                  (entirety)Points
                </span>
              </h2>
              <div className="flex items-center pr-6 gap-2">
                <FaBookOpenReader size={25} color="white" />
                <h2 className="text-white text-[22px] font-bold font-montserrat-alternates">
                  {item.number}
                </h2>
              </div>
            </div>
          </div>
          <Image
            src={Images.wellgosmall}
            alt="banner image"
            className="rounded-xl -mt-10"
          />
        </div>
      ))}
      <div className="flex my-10 items-center justify-center">
        <Button btnText="Load more" variant="white" />
      </div>
    </>
  );
};

export default Wellgorithm;
