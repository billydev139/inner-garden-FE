import Images from "@/assets/images";
import Testimonial from "@/components/Testimonial";
import VideoSection from "@/components/VideoSection";
import Button from "@/components/common/Button";
import CardSection from "@/components/common/CardSection";
import HeroSection from "@/components/common/HeroSection";
import WellgorithmCard from "@/components/common/WellgorithmCard";
import styles from "@/styles";
import { cardSectionContent, wellgorithmContent } from "@/utils/helpers/dummyContent";

export default function Home() {
  return (
    <>
      <HeroSection
        imageSrc={Images.banner3}
        heroSecHeading="The Big Bloom"
        heroSecText="Around the world, a new awareness is blooming — that our emotions, like our bodies, are a part of nature, and that we can cultivate them like a garden."
      />
      <div className="bg-blue-gradient py-12">
        <div className="container flex flex-col md:flex-row mb-4 justify-between items-center">
          <div className="my-6">
            <h1 className={`${styles.headingH1} text-white`}>Wellgorithms</h1>
            <h2 className={`${styles.subHeading} text-white lg:w-[60%] py-4`}>
              Start your journey with a Wellgorithm — a gamified journaling
              challenge designed to nurture your (inner)Garden.
            </h2>
          </div>
          <Button
            btnText="View All"
            variant="white"
            className="whitespace-normal"
            ariaLabel="View All"
          />
        </div>
        <div className="container flex flex-wrap justify-center mt-12 mb-8">
          {wellgorithmContent.slice(0, 3).map((content) => (
            <div
              key={content.id}
              className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 p-2 box-border"
            >
              <WellgorithmCard
                imageSrc={content.image}
                title={content.title}
                text={content.text}
                footerText={content.footerText}
              />
            </div>
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
        <Testimonial />
      <div className="w-[60%] mx-auto pb-8">
        <VideoSection />
      </div>
    </>
  );
}
