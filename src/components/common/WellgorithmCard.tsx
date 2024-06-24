import styles from "@/styles";
import Image from "next/image";
import React from "react";
import wellgorithmBg from "../../assets/images/banner9.png";

interface WellgorithmCardProps {
  imageSrc: string | any;
  title: string;
  text: string;
  footerText: string;
}

const WellgorithmCard: React.FC<WellgorithmCardProps> = ({
  title,
  footerText,
  imageSrc,
}) => {
  return (
    <section className="border-4 border-tertiary bg-white rounded-lg">
      <Image src={imageSrc} alt="wellgorithm image" aria-label="wellgorithm image" />
      <h1 className={`${styles.headingH1} text-tertiary text-center py-4`}>
        {title}
      </h1>

      <div
        style={{
          backgroundImage: `url(${wellgorithmBg.src})`,
        }}
        className="flex flex-col pt-[20px] w-full h-full bg-cover bg-center"
      >
        <h1 className={`${styles.subHeading} text-white text-center py-4 flex justify-center items-center gap-2`}>
          <span className={`${styles.headingH1}`}>20</span>
          {footerText}
        </h1>
      </div>
    </section>
  );
};

export default WellgorithmCard;
