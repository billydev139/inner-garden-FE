import React from "react";
import Images from "../../assets/images";
import HeroSection from "@/components/common/HeroSection";
import {
  videoSectionContent,
} from "@/utils/helpers/dummyContent";
import VideoCardSection from "@/components/common/VideoCardSection";

const VideoFeeds: React.FC = () => {
  return (
    <section className="pb-[40px]">
      <HeroSection
        imageSrc={Images.banner3}
        heroSecHeading="Videos"
        heroSecText="See how AI is transforming our understanding of mind and emotions, and making the once impossible, possible."
      />

      {videoSectionContent.map((secContent) => (
        <VideoCardSection
          key={secContent.id} 
          secHeading={secContent.heading}
          secSubHeading={secContent.subHeading}
          bgGradient={secContent.bgGradient}
          borderColor={secContent.borderColor}
          mode="standalone"
        />
      ))}
    </section>
  );
};

export default VideoFeeds;
