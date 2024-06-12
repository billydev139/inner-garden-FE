import Images from "@/assets";
import Button from "@/components/common/Button";
import CardSection from "@/components/common/CardSection";
import HeroSection from "@/components/common/HeroSection";
import WellgorithmCard from "@/components/common/WellgorithmCard";
import styles from "@/styles";
import { cardTopBadge, wellgorithmContent } from "@/utils/helpers/dummyContent";
import React from "react";

const Feed = () => {
  return (
    <>
      <HeroSection
        imageSrc={Images.banner3}
        heroSecHeading="The Big Bloom"
        heroSecText="Around the world, a new awareness is blooming — that our emotions, like our bodies, are a part of nature, and that we can cultivate them like a garden."
      />

      <div className="bg-[#4F81E5] py-12">
        <div className="container flex flex-col md:flex-row mb-4 justify-between items-center">
          <div className="my-6">
            <h1 className={`${styles.headingH1} text-white`}>Wellgorithms</h1>
          </div>
          <Button btnText="View All" variant="white" />
        </div>
        <div className="container flex justify-between items-center gap-4">
          {wellgorithmContent.slice(0, 3).map((content) => (
            <WellgorithmCard
              key={content.id}
              imageSrc={content.image}
              title={content.title}
              text={content.text}
              footerText={content.footerText}
            />
          ))}
        </div>
      </div>

      <CardSection
        secHeading="Cultivational Psychology"
        bgGradient="linear-gradient(to right, rgba(86, 74, 141, 1), rgba(86, 74, 141, 1))"
        borderColor="#B76EF9"
        mode="slider"
      />
      <CardSection
        secHeading="Cultivational Psychology"
        bgGradient="linear-gradient(to right, rgba(183, 110, 249, 0.4), rgba(183, 110, 249, 1))"
        borderColor="#B76EF9"
        mode="slider"
      />
      <CardSection
        secHeading="Cultivational Psychology"
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

export default Feed;
