import Images from "@/assets/images";
import Button from "@/components/common/Button";
import CardSection from "@/components/common/CardSection";
import HeroSection from "@/components/common/HeroSection";
import React from "react";

const VideoFeeds: React.FC = () => {
  return (
    <>
      <HeroSection
        imageSrc={Images.banner3}
        heroSecHeading="Videos"
        heroSecText="See how AI is transforming our understanding of mind and emotions, and making the once impossible, possible."
      />
      <CardSection
        secHeading="Wellgorithms"
        secSubHeading="Start your journey with a Wellgorithm — 
a gamified challenge designed to nurture your (inner)Garden."
        bgGradient="linear-gradient(to right, rgba(79, 129, 229, 0.3), rgba(79, 129, 229, 1))"
        borderColor="#B76EF9"
        mode="slider"
      />

      <CardSection
        secHeading="Cultivational Psychology"
        secSubHeading="Start your journey with a Wellgorithm — 
a gamified challenge designed to nurture your (inner)Garden."
        bgGradient="linear-gradient(to right, rgba(86, 74, 141, 1), rgba(86, 74, 141, 1))"
        borderColor="#B76EF9"
        mode="slider"
      />
      <CardSection
        secHeading="Cultivational Psychology"
        secSubHeading="Start your journey with a Wellgorithm — 
a gamified challenge designed to nurture your (inner)Garden."
        bgGradient="linear-gradient(to right, rgba(183, 110, 249, 0.4), rgba(183, 110, 249, 1))"
        borderColor="#B76EF9"
        mode="slider"
      />
      <CardSection
        secHeading="Cultivational Psychology"
        secSubHeading="Start your journey with a Wellgorithm — 
a gamified challenge designed to nurture your (inner)Garden."
        bgGradient="linear-gradient(to right, rgba(36, 25, 69, 1), rgba(36, 25, 69, 1))"
        borderColor="#B76EF9"
        mode="slider"
      />

      <div className="text-center my-8">
        <Button btnText="load more" variant="white" />
      </div>
    </>
  );
};

export default VideoFeeds;
