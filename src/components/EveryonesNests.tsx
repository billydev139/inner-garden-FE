import React from "react";
import Image from "next/image";
import bgimg from "../../src/assets/images/everyoneawarrenestbg.png";
import AwarrenestCaterpillarSubTabs from "./AwarrenestCaterpillarSubTabs";
import { nestsImageData } from "@/utils/helpers/dummyContent";
const EveryonesNests: React.FC = () => {
  return (
    <>
      <section
        className="container mx-auto bg-no-repeat h-80 rounded-md mt-6 bg-center bg-black bg-cover  flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(${bgimg.src})`,
        }}
      >
        <div className="flex items-center gap-3 pt-20">
          {nestsImageData.map((image, index) => (
            <Image key={index} src={image.src} alt={image.alt} />
          ))}
        </div>
        <h2 className="text-[44px] font-black font-montserrat-alternates text-white">
          Caterpillar
        </h2>
      </section>
      <AwarrenestCaterpillarSubTabs />
    </>
  );
};

export default EveryonesNests;
