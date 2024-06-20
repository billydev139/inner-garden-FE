"use client";

import CategoriesPageLayout from "@/components/CategoriesPageLayout";
import { useParams, usePathname } from "next/navigation";
import React from "react";

const Categories: React.FC = () => {
  const pathname = usePathname();
  const params = useParams();

  return (
    <div
      className={`${
        pathname.includes("/activities")
        ? "theme-green"
        : pathname.includes("/adversities")
        ? "theme-brown"
        : "theme-blue"
      }`}
    >
      <CategoriesPageLayout />
    </div>
  );
};

export default Categories;
