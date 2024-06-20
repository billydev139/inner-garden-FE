import React from "react";
import Images from "@/assets/images";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "@/components/common/Cards";
interface CardProps {
    imageSrc?: string | any;
    videoSrc?: string | any;
    title: string;
    badgeText: string;
    borderColor?: string;
    className?: string;
    badgePosition?: "top" | "center";
  }

const InnerTrial: React.FC<CardProps> = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <button className="slick-prev" aria-label="volume control">Previous</button>,
    nextArrow: <button className="slick-next" aria-label="volume control">Next</button>,
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
  const SingleFeedCardsData = [
    {
      id: "0",
      badgeText: "peace",
      title: "(serenitty)Sunflowers",
      image: Images.innertraidfeed,
    },
    {
      id: "1",
      badgeText: "peace",
      title: "(serenitty)Sunflowers",
      image: Images.innerfeedimg2,
    },
    {
      id: "3",
      badgeText: "peace",
      title: "(serenitty)Sunflowers",
      image: Images.banner1,
    },
    {
      id: "4",
      badgeText: "peace",
      title: "(serenitty)Sunflowers",
      image: Images.banner1,
    },
  ];
  return (
    <>
      <div className="container mx-auto bg-white rounded-[20px] py-10 px-8">
        <h2 className="rounded-[55px] py-3 text-white text-center font-black text-[32px] bg-tertiary">
          Journey to the (peace)Garden
        </h2>
        <div className="grid lg:grid-cols-2 gap-6 mt-7">
          <div className="relative">
            <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary border-2 border-white text-white text-xs px-5 py-2 rounded-full z-30 text-[32px] font-black">
              peace
            </span>
            <Image src={Images.singlefeedimg} alt="butterfly" aria-label="butterfly" />
          </div>
          <div className="pt-4">
            <h2 className="text-3xl font-montserrat-alternates font-black text-tertiary">
              (serenitty)Sunflowers
            </h2>
            <p className="font-montserrat text-[20px] font-medium pt-4">
              {`The 'Big Bloom' takes the aspirational spirit of exploration that
              propelled humanity to the moon and turns it inward, setting us on
              a course to explore our (inner)Cosmos. It's an invitation to
              become not just astronauts but 'intronauts,' embarking on a
              journey through the vast Cosmos within each of us. Read more`}
            </p>
            <div className="flex items-center gap-4 mt-3">
              <Image src={Images.userpic} alt="profile" aria-label="User Picture" />
              <h2 className="text-sm font-montserrat font-semibold">
                Kathleen Velasco
              </h2>
            </div>
          </div>
        </div>
        <div className="container grid lg:grid-cols-4 mt-8">
          {/* <Slider {...sliderSettings}> */}
          {SingleFeedCardsData?.map((content) => (
            <Cards
              key={content.id}
              imageSrc={content.image}
              badgeText={content.badgeText}
              title={content.title}
              badgePosition="top"
              className="mx-2 my-4"
            />
          ))}
          {/* </Slider> */}
        </div>
      </div>
    </>
  );
};

export default InnerTrial;
