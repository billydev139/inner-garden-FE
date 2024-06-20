import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
  imageSrc?: string | any;
  videoSrc?: string | any;
  title: string;
  badgeText: string;
  borderColor?: string;
  className?: string;
  badgePosition?: "top" | "center";
}

const Cards: React.FC<CardProps> = ({
  imageSrc,
  title,
  badgeText,
  borderColor,
  badgePosition = "top",
  className,
  videoSrc,
}) => {
  return (
    <section
      className={`rounded-xl overflow-visible shadow-lg relative bg-white border-2 border-solid ${className}`}
      style={{
        borderColor: borderColor,
      }}
    >
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
              <Link
                href={videoSrc}
                target="_blank"
              >
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
      </div>
    </section>
  );
};

export default Cards;
