import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RxCross1 } from "../../assets/Icons/index";
import { socialImages } from "@/utils/helpers/dummyContent";

interface CardProps {
  imageSrc?: string | any;
  videoSrc?: string | any;
  profileimg?: string | any;
  title: string;
  badgeText: string;
  otheruser?: string;
  username?: string;
  subheading?: string;
  borderColor?: string;
  className?: string;
  crossIcon?: boolean;
  badgePosition?: "top" | "center";
  socialImages?: Array<{ socialimg: string }>;
}

const Cards: React.FC<CardProps> = ({
  imageSrc,
  title,
  profileimg,
  badgeText,
  borderColor,
  subheading,
  socialImages,
  badgePosition = "top",
  className,
  videoSrc,
  username,
  crossIcon,
  otheruser,
}) => {
  return (
    <div
      className={`rounded-xl overflow-visible shadow-lg relative bg-white ${className}`}
      style={{
        borderColor: borderColor,
        borderWidth: "2px",
        borderStyle: "solid",
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
        {videoSrc && (
          <video
            id="my-video"
            className="video-js"
            controls
            preload="auto"
            width="640"
            height="264"
            poster="MY_VIDEO_POSTER.jpg"
            data-setup="{}"
          >
            <source src="MY_VIDEO.mp4" type="video/mp4" />
            <source src="MY_VIDEO.webm" type="video/webm" />
            <p className="vjs-no-js">
              To view this video please enable JavaScript, and consider
              upgrading to a web browser that
              <Link href={videoSrc} target="_blank">
                supports HTML5 video
              </Link>
            </p>
          </video>
        )}
        {badgePosition === "top" ? (
          <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary border-2 border-white text-white text-xs px-5 py-2 rounded-full z-30 text-[32px] font-black">
            {badgeText}
          </span>
        ) : (
          <div className="relative flex justify-center items-center -mt-2 mb-4">
            <span className="bg-secondary border-2 border-white text-white text-xs font-semibold px-2 py-1 rounded-full z-30">
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
        {socialImages && socialImages?.map((item) =>(
          <Image src={item?.socialimg} alt="social" />
        ))}
      </div>
        )}
    </div>
  );
};

export default Cards;
