"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "./Button";
import { subMenucategories } from "@/utils/helpers/headerContent";

const CategoriesSlider: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 9, // Display 8 items in a row
    slidesToScroll: 1,
    prevArrow: <button className="slick-prev">Previous</button>, // Customizing previous arrow
    nextArrow: <button className="slick-next">Next</button>, // Customizing next arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6, // Adjust the number of items shown at different screen sizes
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4, // Adjust the number of items shown at different screen sizes
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2, // Adjust the number of items shown at different screen sizes
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container py-8">
      <Slider {...settings}>
        {subMenucategories.map((category) => (
          <div key={category.id}>
            <button className="bg-white px-4 w-[120px] py-2 rounded-xl">{category.title}</button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategoriesSlider;
