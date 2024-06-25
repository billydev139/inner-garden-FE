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
    <section className="container py-4 lg:mb-[60px]">
      <Image
        src={imageSrc}
        alt="banner image"
        className="rounded-xl "
      />
      <div className="lg:w-[800px] mx-auto shadow-lg relative rounded-lg z-50 -mt-16">
        <div className="bg-gradient-to-t from-tertiary via-tertiary to-quartary rounded-t-lg z-10">
          <h1 className={`${styles.headingH1} text-white text-center py-4 leading-[53.64px]`}>
            {heroSecHeading}
          </h1>
        </div> 

        <div className="bg-white py-4 rounded-b-lg">
          <p className="text-[27px] font-semibold leading-[48.6px] my-4 text-center px-8">
            {heroSecText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
