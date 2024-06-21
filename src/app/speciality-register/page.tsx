import React from "react";
import CategoriesPageLayout from "@/components/CategoriesPageLayout";
import Button from "@/components/common/Button";

const SpecialityRegister: React.FC = () => {
  return (
    <section>
      <CategoriesPageLayout />
      <div className="text-center py-8">
        <Button btnText="load more" variant="white" ariaLabel="Load More" />
      </div>
    </section>
  );
};

export default SpecialityRegister;
