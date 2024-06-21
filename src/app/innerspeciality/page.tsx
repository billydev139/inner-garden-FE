import Images from "@/assets/images";
import Button from "@/components/common/Button";
import Cards from "@/components/common/Cards";
import CategoriesSlider from "@/components/common/CategoriesSlider";
import HeroSection from "@/components/common/HeroSection";
import { cardCenterBadge } from "@/utils/helpers/dummyContent";
import React from "react";

const InnerSpeciality: React.FC = () => {
  return (
    <>
      <CategoriesSlider />
      <div>
        <HeroSection
          imageSrc={Images.banner7}
          heroSecHeading="Specialty"
          heroSecText="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi sunt explicabo."
        />
      </div>

      <div className="container flex flex-wrap justify-center mt-12 mb-8">
        {cardCenterBadge?.map((content) => (
          <div
            key={content.id}
            className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 p-2 box-border"
          >
            <Cards
              imageSrc={content.image}
              badgeText={content.badgeText}
              title={content.title}
              badgePosition="center"
            />
          </div>
        ))}
      </div>
      <div className="text-center pb-8">
        <Button btnText="load more" variant="white" ariaLabel="load more" />
      </div>
    </>
  );
};

export default InnerSpeciality;
