"use client"

import CategoriesPageLayout from "@/components/CategoriesPageLayout";
import { usePathname } from "next/navigation";
import React from "react";

const Adversities: React.FC = () => {
  const pathname = usePathname();

  return (
    <div
      className={`${
        pathname.includes("/adversities") ? "theme-brown" : "theme-blue"
      }`}
    >
      <CategoriesPageLayout />
    </div>
  );
};

export default Adversities;
