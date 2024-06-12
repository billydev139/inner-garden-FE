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
    <div className="border-4 border-tertiary bg-white rounded-lg">
      <Image src={imageSrc} alt="image" />
      <h1 className={`${styles.headingH1} text-tertiary text-center py-4`}>
        {title}
      </h1>

      <div
        style={{
          backgroundImage: `url(${wellgorithmBg.src})`,
          height: "100%",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="flex flex-col pt-[20px]"
      >
        <h1 className={`${styles.subHeading} text-white text-center py-4`}>
          <span className={`${styles.headingH1}`}>20</span>
          {footerText}
        </h1>
      </div>
    </div>
  );
};

export default WellgorithmCard;
