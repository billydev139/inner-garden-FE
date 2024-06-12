import Images from "@/assets";
import Button from "@/components/common/Button";
import Cards from "@/components/common/Cards";
import CategoriesSlider from "@/components/common/CategoriesSlider";
import HeroSection from "@/components/common/HeroSection";
import { cardCenterBadge, cardTopBadge } from "@/utils/helpers/dummyContent";
import React from "react";

const Garden = () => {
  return (
    <section>
    <CategoriesSlider />
      <div className="mb-[140px]">
        <HeroSection
          imageSrc={Images.banner7}
          heroSecHeading="Gardens"
          heroSecText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>

      <div className="container flex flex-wrap justify-center mt-12 mb-10">
        {cardCenterBadge.map((content) => (
          <div
            key={content.id}
            className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 p-2 box-border"
          >
            <Cards
              imageSrc={content.image}
              badgeText={content.badgeText}
              title={content.title}
              borderColor=""
              badgePosition="center"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Garden;
