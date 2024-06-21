import Images from "../../assets/images";
import Button from "@/components/common/Button";
import CardSection from "@/components/common/CardSection";
import HeroSection from "@/components/common/HeroSection";
import WellgorithmCard from "@/components/common/WellgorithmCard";
import styles from "@/styles";
import {
  cardSectionContent,
  wellgorithmContent,
} from "@/utils/helpers/dummyContent";
import React from "react";

const VideoFeeds: React.FC = () => {
  return (
    <section>
      <HeroSection
        imageSrc={Images.banner3}
        heroSecHeading="Videos"
        heroSecText="See how AI is transforming our understanding of mind and emotions, and making the once impossible, possible."
      />

      <div className="bg-[#4F81E5] py-12">
        <div className="container flex flex-col md:flex-row mb-4 justify-between items-center">
          <div className="py-6">
            <h1 className={`${styles.headingH1} text-white`}>Wellgorithms</h1>
          </div>
          <Button btnText="View All" variant="white" ariaLabel='View All Button' />
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
          secSubHeading={secContent.subHeading}
          bgGradient={secContent.bgGradient}
          borderColor={secContent.borderColor}
          mode="standalone"
        />
      ))}

      <div className="text-center py-8">
        <Button btnText="load more" variant="white" ariaLabel='Load More' />
      </div>
    </section>
  );
};

export default VideoFeeds;
