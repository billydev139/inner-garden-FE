import React from "react";
import Images from "@/assets/images";
import Image from "next/image";
import { gardenAwarrenestCaterpillar } from "@/utils/helpers/dummyContent";
import bgimg from "../../src/assets/images/everyoneawarenestbg.png";
import GardenCards from "./common/GardenCards";
const MyNests: React.FC = () => {
  return (
    <>
      <section
        className="container mx-auto bg-no-repeat h-80 rounded-md mt-6 bg-center bg-black   flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(${bgimg.src})`,
        }}
      >
        <div className="flex items-center gap-3 pt-20">
          <Image src={Images.snell} alt="snell" />
          <Image src={Images.fly} alt="snell" />
          <Image src={Images.cocoon} alt="snell" />
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
