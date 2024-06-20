import React from "react";

import { gardenAwarrenestCaterpillar } from "@/utils/helpers/dummyContent";
import GardenCards from "./common/GardenCards";
const Gardens: React.FC = () => {

  return (
    <>
      <section className="mt-10">
        {/* {gardenAwarrenestCaterpillar?.map((item, index) => (
          <div key={index} className={`${item.backgroundClass} py-14`}>
            <div className="container mx-auto ">
              <div className="flex items-center justify-between">
                <h2 className="font-black text-3xl font-montserrat-alternates text-white">
                  {item.title}
                </h2>
                <h2 className="bg-primary px-3 py-2 font-bold text-2xl text-[#241945] rounded-3xl">
                  {item.count}
                </h2>{" "}
              </div>
              <Slider {...sliderSettings}>
                {item?.sliderCardsData?.map((subitem, subindex) => (
                  <Cards
                    key={subitem.id}
                    imageSrc={subitem.image}
                    badgeText={subitem.badgeText}
                    title={subitem.title}
                    username={subitem.username}
                    otheruser={subitem.otherusers}
                    profileimg={subitem.profileimg}
                    subheading={subitem.subheading}
                    // borderColor={borderColor}
                    badgePosition="center"
                    className="mx-2 my-4"
                  />
                ))}
              </Slider>
            </div>
          </div>
        ))} */}
        {gardenAwarrenestCaterpillar?.map((item) => (
          <GardenCards
            backgroundClass={item.backgroundClass}
            title={item.title}
            count={item.count}
          />
        ))}
      </section>
    </>
  );
};

export default Gardens;
