import React from "react";
import Image from "next/image";
import styles from "@/styles";

interface HeroSectionProps {
  imageSrc: string | any;
  heroSecHeading: string;
  heroSecText: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  imageSrc,
  heroSecHeading,
  heroSecText,
}) => {
  return (
    <div className="container py-4 lg:mb-[60px]">
      <Image
        src={imageSrc}
        alt="banner image"
        className="rounded-xl "
      />
      <div className="lg:w-[600px] mx-auto shadow-lg relative rounded-lg z-50 -mt-16">
        <div className="bg-tertiary  rounded-t-lg z-10">
          <h1 className={`${styles.headingH1} text-white text-center py-4`}>
            {heroSecHeading}
          </h1>
        </div>

        <div className="bg-white py-4 rounded-b-lg">
          <p className="text-16 font-semibold my-4 text-center px-8">
            {heroSecText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
