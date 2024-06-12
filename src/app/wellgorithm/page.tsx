"use client";

import Images from "@/assets";
import CategoriesSlider from "@/components/common/CategoriesSlider";
import Image from "next/image";
import React from "react";
import Tabs from "./Tabs";

const Wellgorithm = () => {
  return (
    <>
      <CategoriesSlider />
      <div className="container">
        <Tabs />

        <Image
          src={Images.banner1}
          alt="banner image"
          className="rounded-xl lg:relative"
        />
      </div>
    </>
  );
};

export default Wellgorithm;
