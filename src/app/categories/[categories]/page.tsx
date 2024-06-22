"use client";
import React from "react";
import CategoriesPageLayout from "@/components/CategoriesPageLayout";
import { usePathname } from "next/navigation";
const Categories: React.FC = () => {
  const pathname = usePathname();
  return (
    <section
      className={`${
        pathname.includes("/activities")
        ? "theme-green"
        : pathname.includes("/adversities")
        ? "theme-brown"
        : "theme-blue"
      }`}
    >
      <CategoriesPageLayout />
    </section>
  );
};

export default Categories;
