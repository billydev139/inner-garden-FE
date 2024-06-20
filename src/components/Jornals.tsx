import React from "react";
import TagsCard from "@/components/common/TagsCard";
import { tagCardData } from "@/utils/helpers/dummyContent";
import Button from "@/components/common/Button";
import banner3 from "@/assets/images/banner3.jpg";
import CTA from "./CTA";

const Journals = () => {
  
  return (
    <>
      <div
        className="container flex flex-col items-center justify-center relative w-full h-[60vh] mt-4 bg-cover bg-center rounded-lg"
        style={{
          backgroundImage: `url(${banner3.src})`,
        }}
      ></div>
      <div className="max-w-[750px] mx-auto ">
        <div className="-mt-20 relative z-10">
          {tagCardData?.slice(0, 2).map((content) => (
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
      </div>
      <CTA />

      <div className="max-w-[750px] mx-auto ">
        <div className="mt-4">
          {tagCardData?.slice(2, 4).map((content) => (
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
      </div>
      <CTA />

      <div className="max-w-[750px] mx-auto ">
        <div className="mt-4">
          {tagCardData?.slice(2, 4).map((content) => (
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
      </div>
      <CTA />

      <div className="flex py-10 items-center justify-center">
        <Button btnText="Load more" variant="white" />
      </div>

      {/* <div
        className="flex flex-col items-center mt-6 justify-center relative w-full bg-cover h-96 bg-center rounded-lg"
        style={{
          backgroundImage: `url(${bgimg.src})`,
        }}
      >
        <h2 className="lg:text-7xl text-2xl font-black text-white font-montserrat-alternates">
          #Tag Name
        </h2>
      </div>
      <div className="max-w-[750px] mx-auto ">
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
        <div className="flex my-10 items-center justify-center">
        <Button btnText="Load more" variant="white" />
      </div>
       
      </div> */}
    </>
  );
};

export default Journals;
