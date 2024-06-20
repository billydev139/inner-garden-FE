"use client";
import CategoriesPageLayout from "@/components/CategoriesPageLayout";
import Button from "@/components/common/Button";
import React from "react";

const SpecialityTradeMark: React.FC = () => {
  return (
    <>
      <CategoriesPageLayout />
      <div className="text-center py-8">
        <Button btnText="load more" variant="white" ariaLabel='Load More' />
      </div>
    </>
  );
};

export default SpecialityTradeMark;
