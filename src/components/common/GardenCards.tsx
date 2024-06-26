"use client";
import React from "react";
import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GardenCardsData } from "@/utils/helpers/dummyContent";
import Cards from "./Cards";

interface GardenCardsProp {
  backgroundClass: string;
  title: string;
  count: string;
  crossicon?: boolean

}
interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const CustomPrevArrow: React.FC<ArrowProps> = ({
  className,
  style,
  onClick,
}) => (
  <button
    className={className}
    style={{ ...style, display: "block", top: "-20px", left: "96%",}}
    onClick={onClick}
  >
    Previous
  </button>
);

const CustomNextArrow: React.FC<ArrowProps> = ({
  className,
  style,
  onClick,
}) => (
  <button
    className={className}
    style={{ ...style, display: "block", right: "-25px", top: "-20px", }}
    onClick={onClick}
  >
    Next
  </button>
);
const GardenCards: React.FC<GardenCardsProp> = ({ backgroundClass, title, count, crossicon }) => {
  const sliderSettings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow className="mr-60" />,
    nextArrow: <CustomNextArrow />,
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
    <section>
      <div className={`${backgroundClass} py-14`}>
        <div className="container mx-auto ">
          <div className="flex items-center justify-between">
            <h2 className="font-black text-3xl font-montserrat-alternates text-white">
              {title}
            </h2>
            <h2 className="bg-primary px-3 py-2 mr-20 font-bold text-2xl text-[#241945] rounded-3xl">
              {count}
            </h2>{" "}
          </div>
          <Slider {...sliderSettings}>
            {GardenCardsData?.map((subitem) => (
              <Cards
                key={subitem.id}
                imageSrc={subitem.image}
                badgeText={subitem.badgeText}
                title={subitem.title}
                username={subitem.username}
                otheruser={subitem.otherusers}
                profileimg={subitem.profileimg}
                crossIcon={crossicon}
                subheading={subitem.subheading}
                badgePosition="center"
                className="mx-2 my-4"
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default GardenCards;
