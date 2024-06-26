import React from "react";
import Cards from "./common/Cards";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Images from "@/assets/images";
import {
  everyoneAwarrenestCaterpillar,
  socialImages,
} from "@/utils/helpers/dummyContent";

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
    style={{ ...style, display: "block", top: "-20px", left: "96%",    }}
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

const AwarrenestEveryoneNest: React.FC = () => {
  const sliderSettings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
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
      <div className="flex items-center justify-center gap-2 my-7">
        <Image src={Images.snell} alt="snell" />
        <Image src={Images.fly} alt="fly" />
        <Image src={Images.cocoon} alt="snell" />
      </div>
      {everyoneAwarrenestCaterpillar?.map((item, index) => (
        <div key={index} className={`${item.backgroundClass} py-14`}>
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <h2 className="font-black text-3xl font-montserrat-alternates text-white">
                {item.title}
              </h2>
              <h2 className="bg-primary px-3 py-2 font-bold text-2xl text-[#241945] rounded-3xl">
                {item.count}
              </h2>
            </div>
            <p className="text-white text-xl font-bold pb-6 pt-3 pr-20">
              {item.description}
            </p>
            <Slider {...sliderSettings}>
              {item?.sliderCardsData?.map((subitem) => (
                <Cards
                  key={subitem.id}
                  imageSrc={subitem.image}
                  badgeText={subitem.badgeText}
                  title={subitem.title}
                  textSize="text-lg"
                  badgeBgColor={subitem.badgebgcolor}
                  badgePosition="top"
                  className="mx-2 my-4"
                  socialImages={socialImages}
                />
              ))}
            </Slider>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AwarrenestEveryoneNest;
