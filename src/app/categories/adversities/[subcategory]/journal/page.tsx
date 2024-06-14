"use client";
import React from "react";
import Tabs from "@/components/Tabs";
import CategoriesSlider from "@/components/common/CategoriesSlider";
import { usePathname } from "next/navigation";

const Journal: React.FC = () => {
    const pathname = usePathname();
  return (
    <section className={`bg-primary ${
      pathname.includes("/adversities") ? "theme-brown" : "theme-blue"
    }`}>
      <CategoriesSlider />
      <div >
        <Tabs />
      </div>
    </section>
  );
};

export default Journal;
