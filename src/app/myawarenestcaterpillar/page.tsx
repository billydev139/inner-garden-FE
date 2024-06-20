"use client";

import React from "react";
import bgimg from "../../assets/images/Fireflyblackmuscle.png";
import MyAwarenestCaterpillarTabs from "@/components/MyAwarenestCaterpillarTabs";
const MyAwarenestCaterpillar = () => {
  return (
    <>
      <section
        className="h-96 container mx-auto bg-center bg-cover pt-10 flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(${bgimg.src})`,
        }}
      >
        <h2 className="text-[64px] font-black font-montserrat-alternates text-white">
          AwareNest
        </h2>
        <h2 className="text-[32px] font-black font-montserrat-alternates text-white">
          "Awaken through awareness."
        </h2>
        <h2 className="text-[20px] font-semibold font-montserrat-alternates text-white">
          Lao Tzu
        </h2>
      </section>
      <section className="bg-white rounded-[30px] py-12 px-20 max-w-[800px] -mt-12 z-10 relative mx-auto">
        <h2 className="text-center text-[27px] font-semibold text-penta">
          AwareNest is a new kind of social bookmarking system, offering a
          unique way to reflect and share key moments in your personal growth
          journey.
        </h2>
      </section>
      <MyAwarenestCaterpillarTabs />
    </>
  );
};

export default MyAwarenestCaterpillar;
