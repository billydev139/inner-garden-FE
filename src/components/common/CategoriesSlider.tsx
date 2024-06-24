"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { subMenucategories } from "@/utils/helpers/headerContent";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const CategoriesSlider: React.FC = () => {
  const pathname = usePathname();
  const params = useParams();
  const {categories, details} = params;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    prevArrow: <button className="slick-prev" aria-label="volume control">Previous</button>,
    nextArrow: <button className="slick-next" aria-label="volume control">Next</button>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="container py-8">
      <Slider {...settings}>
        {subMenucategories.map((category) => {
          const isSelected = pathname.includes(category.link); 
          const categoryClass = isSelected ? "bg-secondary text-white" : "bg-white";
          return (
            <div className={`${categoryClass} py-2 text-center m-2 custom-button text-secondary font-black`} key={category.id}>
              <Link href={`/categories/${categories}/${category.link}/${details || 'journal'}`}>{category.title}</Link>
            </div>
          );
        })} 
      </Slider>
    </section>
  );
};

export default CategoriesSlider;
