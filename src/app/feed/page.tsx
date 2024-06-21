import React from "react";
import Images from "@/assets/images";
import CTA from "@/components/CTA";
import Button from "@/components/common/Button";
import CardSection from "@/components/common/CardSection";
import HeroSection from "@/components/common/HeroSection";
import WellgorithmCard from "@/components/common/WellgorithmCard";
import styles from "@/styles";
import { cardSectionContent, wellgorithmContent } from "@/utils/helpers/dummyContent";

const Feed: React.FC = () => {
  return (
    <React.Fragment>
      <HeroSection
        imageSrc={Images.banner3}
        heroSecHeading="The Big Bloom"
        heroSecText="Around the world, a new awareness is blooming — that our emotions, like our bodies, are a part of nature, and that we can cultivate them like a garden."
      />

      <div className="bg-[#4F81E5] py-12">
        <div className="container flex flex-col md:flex-row mb-4 justify-between items-center">
          <div className="py-6">
            <h1 className={`${styles.headingH1} text-white`}>Wellgorithms</h1>
          </div>
          <Button btnText="View All" variant="white" ariaLabel="View All Button" />
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

      {cardSectionContent.map((secContent) => (
        <CardSection
          key={secContent.id} 
          secHeading={secContent.heading}
          bgGradient={secContent.bgGradient}
          borderColor={secContent.borderColor}
          mode="slider"
        />
      ))}

      <div className="text-center py-8">
        <Button btnText="load more" variant="white" ariaLabel="Load more" />
      </div>
      <CTA />
    </React.Fragment>
  );
};

export default Feed;
