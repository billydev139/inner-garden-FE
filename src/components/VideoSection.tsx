import Images from "@/assets/images";
import styles from "@/styles";
import Image from "next/image";
import React from "react";
import videoImage from "../assets/images/innerVedio.png";

const VideoSection: React.FC = () => {
  return (
    <div
      className="container p-10 w-[50%] h-[400px] pb-8 rounded-lg flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${videoImage.src})`,
        height: "100%",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center">
        <Image src={Images.play} alt="banner image" className="rounded-xl" />
        <h1 className={`${styles.headingH1} text-white text-center mt-4`}>
          See how AI is transforming our understanding of mind and emotions,<br /> and
          making the once impossible, possible.
        </h1>
      </div>
    </div>
  );
};

export default VideoSection;
