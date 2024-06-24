"use client";
import React from "react";
import Button from "./Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cardContent } from "@/utils/helpers/dummyContent";
import styles from "@/styles";
import Cards from "./Cards";

interface CardSectionProps {
  bgGradient: string;
  borderColor: string;
  secHeading: string;
  secSubHeading?: string;
  mode: "standalone" | "slider";
}

const CardSection: React.FC<CardSectionProps> = ({
  bgGradient,
  borderColor,
  secHeading,
  secSubHeading,
  mode = "standalone",
}) => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <button className="slick-prev" aria-label="volume control">Previous</button>,
    nextArrow: <button className="slick-next" aria-label="volume control" >Next</button>,
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
    <section style={{ background: bgGradient }} className="py-[40px]" >
      <div className="container flex flex-col xl:flex-row mb-8 justify-between items-center">
        <div className="my-6">
          {secHeading && (
            <h1 className={`${styles.headingH1} text-white`}>{secHeading}</h1>
          )}
          {secSubHeading && (
            <h2 className={`${styles.subHeading} text-white lg:w-[80%] py-4`}>
              {secSubHeading}
            </h2>
          )}
        </div>
        <Button btnText="View All" variant="white" ariaLabel='View All Button' />
      </div>

      {mode === "slider" ? (
        <div className="container">
          <Slider {...sliderSettings}>
            {cardContent.map((content) => (
              <Cards
                key={content.id}
                imageSrc={content.image}
                badgeText={content.badgeText}
                title={content.title}
                badgePosition="top"
                className='mx-2 my-4'
              />
            ))}
          </Slider>
        </div>
      ) : (
        <div className="container grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {cardContent.slice(0, 3).map((content) => (
            <Cards
              key={content.id}
              imageSrc={content.image} 
              badgeText={content.badgeText}
              badgeBgColor= {content.badgeBgColor}
              title={content.title}
              borderColor={borderColor}
              badgePosition="top"
            />
          ))} 
        </div>
      )}
    </section>
  );
};

export default CardSection;
