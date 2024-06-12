import styles from "@/styles";
import Image from "next/image";
import React from "react";

interface WellgorithmCardProps {
  imageSrc: string | any;
  title: string;
  text: string;
  footerText: string;
}

const WellgorithmCard: React.FC<WellgorithmCardProps> = ({title, footerText, imageSrc}) => {
  return (
    <div className="border-4 border-[#564A8D] bg-white rounded-lg">
      <Image src={imageSrc} alt="image" />
      <h1
        className={`${styles.headingH1} text-[#564A8D] text-center py-4`}
      >{title}</h1>

      <div className="bg-[url('../assets/banner9.png')] bg-cover bg-center flex flex-col pt-[20px]">
        <h1 className={`${styles.subHeading} text-white text-center py-4`}>
          <span className={`${styles.headingH1}`}>20</span>{footerText}
        </h1>
      </div>
    </div>
  );
};

export default WellgorithmCard;
