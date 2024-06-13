import React from "react";
import bgimg from "@/assets/images/butterflies.png";
import TagsCard from "@/components/common/TagsCard";
import { tagCardData } from "@/utils/helpers/dummyContent";
import Button from "@/components/common/Button";
const Journals = () => {
  
  return (
    <>
      <div
        className="flex flex-col -z-10 items-center mt-6 justify-center relative w-full bg-cover h-96 bg-center rounded-lg"
        style={{
          backgroundImage: `url(${bgimg.src})`,
        }}
      >
        <h2 className="lg:text-7xl text-2xl font-black text-white font-montserrat-alternates">
          #Tag Name
        </h2>
      </div>
      <div className="max-w-[700px] mx-auto ">
        <div className="-mt-20 z-10">
        {tagCardData?.map((content) => (
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
        <div className="flex my-10 items-center justify-center">
        <Button btnText="Load more" variant="white" />
      </div>
       
      </div>
    </>
  );
};

export default Journals;