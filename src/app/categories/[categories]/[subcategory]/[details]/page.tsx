"use client";
import React from "react";
import Tabs from "@/components/Tabs";
import CategoriesSlider from "@/components/common/CategoriesSlider";
import { useParams, usePathname } from "next/navigation";

const Details: React.FC = () => {
    const pathname = usePathname();
    const params = useParams();
    console.log("🚀 ~Details params:", params)
  return (
    <section className={`bg-primary ${
      pathname.includes("/activities")
      ? "theme-green"
      : pathname.includes("/adversities")
      ? "theme-brown"
      : "theme-blue"
    }`}>
      <CategoriesSlider />
      <div >
        <Tabs />
      </div>
    </section>
  );
};

export default Details;
