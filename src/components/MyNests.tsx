import React from "react";
import Image from "next/image";
import {
  gardenAwarrenestCaterpillar,
  nestsImageData,
} from "@/utils/helpers/dummyContent";
import bgimg from "../../src/assets/images/everyoneawarrenestbg.png";
import GardenCards from "./common/GardenCards";
const MyNests: React.FC = () => {
  return (
    <>
      <section
        className="container mx-auto mb-10 bg-no-repeat h-80 rounded-md mt-6 bg-center bg-black   flex flex-col justify-center items-center"
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

      {gardenAwarrenestCaterpillar?.map((item, index) => (
        <GardenCards
          key={index}
          backgroundClass={item.backgroundClass}
          title={item.title}
          count={item.count}
          crossicon={true}
        />
      ))}
    </>
  );
};

export default MyNests;
