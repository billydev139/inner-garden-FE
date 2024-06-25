import React from "react";
import { gardenAwarrenestCaterpillar } from "@/utils/helpers/dummyContent";
import GardenCards from "./common/GardenCards";
const Gardens: React.FC = () => {
  return (
    <section className="mt-10">
      {gardenAwarrenestCaterpillar?.map((item, index) => (
        <GardenCards
          key={index}
          backgroundClass={item.backgroundClass}
          title={item.title}
          count={item.count}
        />
      ))}
    </section>
  );
};

export default Gardens;
