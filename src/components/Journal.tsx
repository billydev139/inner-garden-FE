import React from "react";
import TagsCard from "@/components/common/TagsCard";
import { tagCardData } from "@/utils/helpers/dummyContent";
import Button from "@/components/common/Button";
import banner3 from "@/assets/images/banner3.jpg";
import CTA from "./CTA";
import TagsSection from "./TagsSection";

const Journal: React.FC = () => (
  <>
    <div
      className="container flex flex-col items-center justify-center relative w-full h-[60vh] mt-4 bg-cover bg-center rounded-lg"
      style={{
        backgroundImage: `url(${banner3.src})`,
      }}
    ></div>

    <section className="max-w-[750px] mx-auto">
      <div className="-mt-20 relative z-10">
        {tagCardData.slice(0, 2).map((content) => (
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

    <CTA />

    <TagsSection start={2} end={4} />
    <TagsSection start={4} end={6} />

    <div className="flex py-10 items-center justify-center">
      <Button btnText="Load more" variant="white" ariaLabel="Load more" />
    </div>
  </>
);

export default Journal;
