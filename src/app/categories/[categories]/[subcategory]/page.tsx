"use client";
import React from "react";
import Tabs from "@/components/Tabs";
import CategoriesSlider from "@/components/common/CategoriesSlider";
import { usePathname } from "next/navigation";

const SubCategory: React.FC = () => {
  const pathname = usePathname();

  return (
    <section className={`bg-primary ${
      pathname.includes("/activities")
        ? "theme-green"
        : pathname.includes("/adversities")
        ? "theme-brown"
        : "theme-blue"
    }`}>
      <CategoriesSlider />
      <div className="container">
        <Tabs />
      </div>
    </section>
  );
};

export default SubCategory;
