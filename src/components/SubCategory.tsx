import React from "react";
import Cards from "./common/Cards";
import { subCategories } from "@/utils/helpers/dummyContent";
import CTA from "./CTA";
import CategoriesSlider from "./common/CategoriesSlider";
import Button from "./common/Button";

const SubCategories: React.FC = () => {
  return (
    <>
      <CategoriesSlider />
      <section className="container">
        <div className=" flex flex-wrap justify-center py-10">
          {subCategories?.map((content) => (
            <div
              key={content.id}
              className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-2 box-border"
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

        <CTA />

        <div className=" flex flex-wrap justify-center py-12">
          {subCategories?.map((content) => (
            <div
              key={content.id}
              className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-2 box-border"
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
        <CTA />

        <div className="text-center py-12">
          <Button btnText="load more" variant="white" ariaLabel='Load More button'/>
        </div>
      </section>
    </>
  );
};

export default SubCategories;
