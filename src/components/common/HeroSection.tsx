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
    <div className="container mt-4 lg:mb-[120px] xl:mb-[140px]">
      <Image
        src={imageSrc}
        alt="banner image"
        className="rounded-xl lg:relative"
      />
      <div className="lg:w-[600px] mx-auto shadow-lg rounded-lg lg:absolute lg:bottom-0 xl:bottom-[20%] lg:left-[30%] xl:left-[35%]">
        <div className="bg-[#564A8D] rounded-t-lg">
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
