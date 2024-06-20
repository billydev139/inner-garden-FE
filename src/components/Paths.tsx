import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { cardContent, innerTrailFeed } from "@/utils/helpers/dummyContent";
import Cards from "@/components/common/Cards";

const Paths = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <button className="slick-prev">Previous</button>,
    nextArrow: <button className="slick-next">Next</button>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      {innerTrailFeed?.map((item, index) => (
        <div key={index} className="bg-white rounded-[30px] p-10 mt-10">
          <h2 className="rounded-[55px] py-3 text-white text-center font-black text-[32px] bg-tertiary">
            {item.title}
          </h2>
          <div className="container mt-5">
            <Slider {...sliderSettings}>
              {item?.CardsData?.map((subitem) => (
                <Cards
                  key={subitem.id}
                  imageSrc={subitem.image}
                  badgeText={subitem.badgeText}
                  title={subitem.title}
                  // borderColor={subitem.borderColor}
                  badgePosition="top"
                  className="mx-2 my-4"
                />
              ))}
            </Slider>
          </div>
        </div>
      ))}
    </>
  );
};

export default Paths;
