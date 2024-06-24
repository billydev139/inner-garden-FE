import React from "react";
import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";
import { RxCross1 } from "../../assets/Icons/index";
interface SocialImage {
  socialimg: StaticImageData; 
}
interface CardProps {
  imageSrc?: string | any;
  videoSrc?: string | any;
  profileimg?: string | any;
  title: string;
  badgeText: string;
  textSize?:string;
  badgeBgColor?: string;
  otheruser?: string;
  username?: string;
  subheading?: string;
  borderColor?: string;
  className?: string;
  crossIcon?: boolean;
  badgePosition?: "top" | "center";
  socialImages?: SocialImage[];
}

const Cards: React.FC<CardProps> = ({
  imageSrc,
  title,
  profileimg,
  badgeText,
  textSize,
  borderColor,
  subheading,
  badgeBgColor = "bg-secondary",
  socialImages,
  badgePosition = "top",
  className,
  username,
  crossIcon,
  otheruser,
}) => {
  return (
    <section
      className={`rounded-xl overflow-visible shadow-lg relative bg-white border-2 border-solid ${className}`}
      style={{
        borderColor: borderColor,
      }}
    >
       {crossIcon && (
        <div className="rounded-full bg-white z-10 absolute top-2 right-2 p-2">
          <RxCross1 color="tertiary" />
        </div>
      )}
      <div className="relative pb-4">
        {imageSrc && (
          <Image
            className="w-full h-[180px] bg-cover rounded-t-lg"
            src={imageSrc}
            alt="Card image cap"
            width={200}
            height={100}
          />
        )}

        {badgePosition === "top" ? (
          <span className={`absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${badgeBgColor} border-2 border-white text-white ${textSize} rounded-full z-30 text-base font-bold custom-button px-12`}>
            {badgeText}
          </span>
        ) : (
          <div className="relative flex justify-center items-center -mt-2 mb-4">
            <span  className={`custom-button bg-secondary text-white px-6`}>
              {badgeText}
            </span>
          </div>
        )}
       
      </div>
      <div className="px-6 pb-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <h2 className="font-montserrat-alternates font-semibold text-base pt-5 pb-3">
          {subheading}
        </h2>
      </div>
      {/* profile section */}
      {profileimg && username && otheruser && (
        <div className="flex items-center gap-3 px-6 pb-4">
          <Image
            src={profileimg}
            alt="profile"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h2 className="font-semibold text-tertiary text-sm  font-montserrat">
            {username} and <span>{otheruser} other</span>
          </h2>
        </div>
      )}
      {/* {social icon} */}
      {socialImages && socialImages.length > 0 && (
      <div className="flex items-center justify-center gap-2 pb-2">
        {socialImages && socialImages?.map((item, index) =>(
          <Image src={item?.socialimg} alt="social" key={index} />
        ))}
      </div>
        )}
    </section>
  );
};

export default Cards;
