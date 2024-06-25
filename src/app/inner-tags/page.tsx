import React from "react";
import bgimg from "../../assets/images/everyoneawarrenestbg.png";
import { tagCardData } from "@/utils/helpers/dummyContent";
import TagsCard from "@/components/common/TagsCard";

const InnerTags = () => {
  return (
    <section className="py-10">
      <div
        className="container mx-auto bg-no-repeat h-96 rounded-md pt-6 bg-center bg-black bg-cover  flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(${bgimg.src})`,
        }}
      >
        <h2 className="text-white text-[72px] font-black">
            #Tag Name
        </h2>
      </div>
      <section className="max-w-[750px] mx-auto">
        <div className="-mt-20 relative z-10">
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
      </section>
    </section>
  );
};

export default InnerTags;
