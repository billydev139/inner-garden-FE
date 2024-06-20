"use client";
import Tabs from "@/components/Tabs";
import CategoriesSlider from "@/components/common/CategoriesSlider";
import React from "react";

const Wellgorithm: React.FC = () => {
  return (
    <>
      <CategoriesSlider />
      <div className="container">
        <Tabs />
      </div>
    </>
  );
};

export default Wellgorithm;
