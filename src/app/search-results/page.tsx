import React from "react";
import bgimg from "../../assets/images/searchresultbg.png";
import Button from "@/components/common/Button";
import TagsCard from "@/components/common/TagsCard";
import { searchResultData } from "@/utils/helpers/dummyContent";
import Input from "@/components/common/Input";

const checkboxes = [
  { label: "All", ariaLabel: "select categories" },
  { label: "Wellgorithms", ariaLabel: "select categories" },
  { label: "Trails", ariaLabel: "select categories" },
];

const SearchResults: React.FC = () => {
  return (
    <section>
      <div className="container mx-auto pt-10 pb-5">
        <div className="flex lg:flex-row flex-wrap lg:items-center lg:justify-center  gap-5 ">
          <h2 className="font-medium text-lg font-montserrat">
            Advance Search:
          </h2>
          {checkboxes.map((checkbox, index) => (
            <Input
              key={index}
              type="checkbox"
              label={checkbox.label}
              ariaLabel={checkbox.ariaLabel}
            />
          ))}

          <div className="bg-white px-5 py-[1.15px] flex items-center gap-2 rounded-[10px]">
            <select
              className="p-2 outline-none"
              aria-label="select a garden option"
            >
              <option value="" selected disabled>
                Garden
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div className="bg-white px-5 py-[1.15px] flex items-center gap-2 rounded-[10px]">
            <select
              className="p-2 outline-none"
              aria-label="select an adversities option"
            >
              <option value="" selected disabled>
                Adversities
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div className="bg-white px-5 py-[1.15px] flex items-center gap-2 rounded-[10px]">
            <select
              className="p-2 outline-none"
              aria-label="select an activities option"
            >
              <option value="" selected disabled>
                Activities
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>
      </div>
      <div className="max-w-[1060px] mx-auto">
        <h2 className="text-[22px] font-medium font-montserrat-alternates">
          Search results <span className="font-bold">6</span>
        </h2>
      </div>
      <div className="max-w-[750px] mx-auto ">
        <div className="mt-10">
          {searchResultData?.map((content) => (
            <TagsCard
              key={content.id}
              imageSrc={content.image}
              title={content.title}
              badgeHeading={content.badgeHeading}
              badgeDescription={content.badgeDescription}
              userPicSrc={content.userimage}
              userName={content.userName}
              points={content.points}
              tagName={content.tagName}
            />
          ))}
        </div>
        <div className="flex py-10 items-center justify-center">
          <Button btnText="Load more" variant="white" ariaLabel="Load More" />
        </div>
      </div>
    </section>
  );
};

export default SearchResults;

{
  /* <div
        className="container mx-auto flex items-center mt-6 justify-end relative bg-cover lg:h-[480px] h-[300px] bg-center rounded-lg"
        style={{
          backgroundImage: `url(${bgimg.src})`,
        }}
      >
        <div className="bg-white bg-opacity-85 lg:py-7 py-4 lg:px-8 px-5 rounded-[48px] flex items-center gap-4">
          <CiSearch size={25} />
          <input
            type="text"
            placeholder="Peace"
            className="outline-none bg-transparent bg-opacity-90"
          />
          <Button btnText="search" variant="gradient" />
        </div>
      </div> */
}
