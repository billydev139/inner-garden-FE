import React from "react";
import Images from "@/assets/images";
import styles from "@/styles";
import Image from "next/image";
import videoImage from "../assets/images/innerVedio.png";

const VideoSection: React.FC = () => {
  return (
    <section
      className="container p-10 py-[160px] pb-8 rounded-lg flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${videoImage.src})`
      }}
    >
      <div className="flex flex-col items-center w-full h-full bg-cover bg-center">
        <Image src={Images.play} alt="banner image" className="rounded-xl" aria-label="banner image" />
        <h1 className={`${styles.headingH1} text-white text-center mt-4`}>
          See how AI is transforming our understanding of mind and emotions, and
          making the once impossible, possible.
        </h1>
      </div>
    </section>
  );
};

export default VideoSection;
