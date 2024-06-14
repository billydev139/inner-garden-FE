import React from "react";
import Button from "./common/Button";
import styles from "@/styles";
import banner11 from "../assets/images/banner11.png";

const CTA: React.FC = () => {
  return (
    <div
      className="container py-24 rounded-lg"
      style={{
        backgroundImage: `url(${banner11.src})`,
        height: "100%",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className={`${styles.headingH1} text-white text-center`}>
        Nurture Your Emotional Landscape
      </h1>
      <h2 className={`${styles.subHeading} text-white text-center py-6 `}>
        Explore Emotional Watering and Composting
      </h2>
      <div className="text-center">
        <Button btnText="Visit now" />
      </div>
    </div>
  );
};

export default CTA;
