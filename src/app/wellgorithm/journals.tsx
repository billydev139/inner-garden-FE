import React from "react";
import Images from "@/assets/images";
import Image from "next/image";
import bgimg from "../../assets/images/butterflies.png";
import TagsCard from "@/components/common/TagsCard";

const Journals = () => {
  return (
    <>
      <div
        className="flex flex-col items-center mt-6 justify-center relative w-full bg-cover h-96 bg-center rounded-lg"
        style={{
          backgroundImage: `url(${bgimg.src})`,
        }}
      >
        <h2 className="text-7xl font-black text-white font-montserrat-alternates">
          #Tag Name
        </h2>
      </div>
      <div className="max-w-[700px] mx-auto">
      <TagsCard />

      </div>
    </>
  );
};

export default Journals;
