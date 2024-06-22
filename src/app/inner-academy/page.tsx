import React from "react";
import bgimg from "../../assets/images/Fireflyblackmuscleinneracadmy.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialBg from "../../assets/images/banner9.png";
import testimonialBg2 from "../../assets/images/banner8.png";
import {
  generalCertifications,
  innerAcademy,
  specialCertifications,
} from "@/utils/helpers/dummyContent";
import Cards from "../../components/common/Cards";
import Slider, { Settings } from "react-slick";

import Image from "next/image";
import Images from "@/assets/images";
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
      style={{ ...style, display: "block", top: "-20px", left: "1160px",    }}
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
const InnerAcademy = () => {
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
    <section className="pt-6">
      <div
        className="container mx-auto w-full pt-4 h-96 bg-center rounded-lg flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(${bgimg.src})`,
        }}
      >
        <h2 className="text-[44px] font-black font-montserrat-alternates text-white">
          (inner)Academy
        </h2>
        <h2 className="text-[32px] font-black font-montserrat-alternates text-white">
          {`become the master gardener of your psyche`}
        </h2>
      </div>
      <div className="bg-white rounded-[30px] py-12 px-20 max-w-[800px] mb-16 -mt-12 z-10 relative mx-auto">
        <h2 className="text-center text-[27px] font-semibold text-penta">
          AwareNest is a new kind of social bookmarking system, offering a
          unique way to reflect and share key moments in your personal growth
          journey.
        </h2>
      </div>
      {innerAcademy?.map((item, index) => (
        <div key={index} className={`${item.backgroundClass} py-14`}>
          <div className="container mx-auto ">
            <div className="flex items-center justify-between">
              <h2 className="font-black text-3xl font-montserrat-alternates text-white">
                {item.title}
              </h2>
            </div>
            <p className="text-white text-xl font-bold pb-6 pt-3 pr-20">
              {item.description}
            </p>
            {/* <Slider {...sliderSettings}> */}
            <div className="grid grid-cols-3 gap-4">
              {item?.sliderCardsData?.map((subitem, subindex) => (
                <Cards
                  key={subitem.id}
                  imageSrc={subitem.image}
                  badgeText={subitem.badgeText}
                  title={subitem.title}
                  textSize="text-lg"
                  badgeBgColor={subitem.badgebgcolor}
                  badgePosition="top"
                  className="mx-2 my-4"
                />
              ))}
              {/* </Slider> */}
            </div>
          </div>
         </div>
      ))}
      <div className="container mx-auto mt-10 mb-6 grid lg:grid-cols-2 gap-5">
        <div
          style={{
            backgroundImage: `url(${testimonialBg.src})`,
          }}
          className=" flex flex-col items-start justify-center p-6 lg:p-12 lg:my-4 rounded-lg lg:h-[350px] w-full h-full bg-cover bg-center"
        >
          <h1
            className={`text-[32px] font-black font-montserrat-alternates  text-white`}
          >
            general certifications
          </h1>

          <ul className="mt-4">
            {generalCertifications?.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 py-2 text-white font-bold "
              >
                <Image src={Images.checkvector} alt="checkvector" />

                {item.text}
              </li>
            ))}
          </ul>
        </div>
        <div
          style={{
            backgroundImage: `url(${testimonialBg2.src})`,
          }}
          className=" flex flex-col items-start justify-center p-6 lg:p-12 lg:my-4 rounded-lg lg:h-[350px] w-full h-full bg-cover bg-center"
        >
          <h1
            className={`text-[32px] font-black font-montserrat-alternates  text-white`}
          >
            general certifications
          </h1>

          <ul className="mt-4">
            {specialCertifications?.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 py-2 text-white font-bold "
              >
                <Image src={Images.checkvector2} alt="checkvector" />

                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <button className="bg-[#FFAC01] rounded-[32px] py-2 px-10 text-white text-xl font-bold">
          Enroll
        </button>
        <h2 className="text-[44px] font-black text-tertiary">
          first cohort:<span className="text-secondary"> GRADUATED</span>
        </h2>
      </div>
    </section>
  );
};

export default InnerAcademy;
