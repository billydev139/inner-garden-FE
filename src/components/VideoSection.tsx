import Images from "@/assets";
import styles from "@/styles";
import Image from "next/image";
import React from "react";

const VideoSection: React.FC = () => {
  return (
    <div className="container bg-[url('../assets/innerVedio.png')] bg-cover bg-center p-10 w-[60%] h-[400px] mb-8 rounded-lg flex flex-col justify-center items-center">
      <div className="flex flex-col items-center">
        <Image
          src={Images.play}
          alt="banner image"
          className="rounded-xl"
        />
        <h1 className={`${styles.headingH1} text-white text-center mt-4`}>
          See how AI is transforming our understanding of mind and emotions, and
          making the once impossible, possible.
        </h1>
      </div>
    </div>
  );
};

export default VideoSection;
