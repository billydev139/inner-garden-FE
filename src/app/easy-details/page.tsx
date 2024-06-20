import React from "react";
import bgimg from "../../assets/images/journaltagbg.png";
import Images from "@/assets/images";
import Image from "next/image";
import { CiCircleInfo, IoMdSend } from "@/assets/Icons";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

const EasyDetails: React.FC = () => {
  const propertiesCard = [
    {
      name: "Envision",
      desc: "future blossoms",
    },
    {
      name: "Prepare",
      desc: "The Soil",
    },
    {
      name: "Plant",
      desc: "Seeds of Hope",
    },
    {
      name: "Foster",
      desc: "Resillent Growth",
    },
  ];

  const sunflowerPoints = [
    {
      title: "Plant Resilience Seeds: ",
      description:
        " Start with the intention to grow stranger through adversity.",
    },
    {
      title: "Nourish with Persistence: ",
      description:
        "  Feed your resolve with continuous effort and determination.",
    },
    {
      title: "Embrace the Elements:  ",
      description: "Accept and adapt to the changing circumstances around you.",
    },
    {
      title: "Flourish in Adversity:  ",
      description:
        " Thrive and prosper, drawing strength from challenges faced.",
    },
  ];
  const exploredCard = [
    {
      badgetext: "(thankful)Nest",
      posttitle: "Write a thank-you note to yourself",
      description:
        "Acknowledge your efforts and accomplishments of the day in a self-directed thank-you note.",
      points: "20 pts",
    },
    {
      badgetext: "(thankful)Nest",
      posttitle: "Write a thank-you note to yourself",
      description:
        "Acknowledge your efforts and accomplishments of the day in a self-directed thank-you note.",
      points: "20 pts",
    },
  ];
  const reviewsData = [
    {
      name: "Doris Edwards",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      profileImg: Images.testimonial,
      img: Images.snell,
    },
    {
      name: "Doris Edwards",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      profileImg: Images.testimonial,
      img: Images.snell,
    },
    {
      name: "Doris Edwards",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      profileImg: Images.testimonial,
      img: Images.snell,
    },
  ];
  return (
    <>
      <div
        className="container mx-auto flex flex-col justify-end  relative pt-10 w-full bg-cover h-[550px] bg-center rounded-lg"
        style={{
          backgroundImage: `url(${bgimg.src})`,
        }}
      >
        <div className="flex justify-between pb-10 items-end">
          <div className="bg-tertiary px-4 py-2 rounded-[45px]">
            <Image src={Images.cloudy1} alt="cloudy" aria-label="Cloudy weather icon" />
          </div>
          <div className="bg-tertiary px-4 py-2 rounded-[45px]">
            <h2 className="font-black text-2xl font-montserrat-alternates text-white">
              20 <span className="font-semibold text-[20px]">pts</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-4 grid lg:grid-cols-[1fr_2fr_1fr] gap-4">
        <div>
          <div className="bg-white bg-opacity-50 rounded-2xl py-5 px-3">
            <div className="flex flex-col items-center justify-center">
              <Image src={Images.wellgobrain} alt="cloudy" aria-label="Cloudy weather icon" />
              <div className="flex items-center gap-2 pt-4 pb-6">
                <h2 className="text-black font-bold text-xl">Wellgorithms</h2>
                <CiCircleInfo size={22} />
              </div>
            </div>
            {propertiesCard?.map((item, index) => (
              <div
                className="bg-secondary p-4 mb-3 rounded-xl flex items-start gap-3"
                key={index}
              >
                <Image src={Images.checkstep} alt="cloudy" aria-label="Cloudy weather icon" />
                <div>
                  <h2 className="text-xl capitalize text-white font-bold">
                    {item.name}
                  </h2>
                  <p className="capitalize text-sm text-white">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#4F81E5] my-4 rounded-2xl p-4">
            <div className="flex items-center gap-3">
              <Image src={Images.cognitionwhite} alt="congition" aria-label="congition icon" />
              <h2 className="text-white font-bold text-base">AI Meter</h2>
            </div>
            <div className="w-full bg-gray-300 mt-5 rounded-full h-6">
              <div className="flex h-full">
                <div
                  className="bg-[#D8A03D] h-full  rounded-l-full w-[30%]"
                ></div>

                <div
                  className="bg-green-600 h-full rounded-r-full w-[70%]"
                >
                </div>
              </div>
            </div>
            <div className="flex items-center mt-3 justify-between">
              <h2 className="text-white font-bold text-xs">AI %</h2>
              <h2 className="text-white font-bold text-xs">Human %</h2>
            </div>
          </div>
        </div>
        <div>
          <div className="border-[5px] border-white -mt-[274px] z-10 relative rounded-[32px]">
            <h2 className="bg-tertiary text-white text-center font-black lg:text-[44px] rounded-[32px] py-5 rounded-b-none">
              (serenitty)Sunflowers
            </h2>
            <h2 className="bg-white bg-opacity-80  text-center font-semibold font-montserrat-alternates lg:text-[24px]  py-5 ">
              People are recognizing that they already possess untold riches in
              the form of (inner) peace, joy, and wonder for the world.
            </h2>
            <div className="bg-white bg-opacity-80 rounded-2xl rounded-t-none h-auto px-1">
              <p className=" p-6 text-xl font-montserrat font-medium">
                {` People are recognizing that they already possess untold riches
                in the form of (inner) peace, joy, and wonder for the world.
                Amid a planet teeming with life and an era bursting with
                discoveries, there’s never been a more auspicious time to be
                alive and cultivate our (inner)Garden. Our movement isn't merely
                about individual well-being or societal betterment. It’s about a
                civilizational shift toward recognizing and cultivating our
                emotions as a boundless sanctuary. Within each of us exists a
                universe of potential waiting to be discovered and nourished.
                The 'Big Bloom' is our collective initiation into this universe
                within, offering not just new landscapes of mind and heart, but
                also new frontiers of human potential that we are just beginning
                to explore.The 'Big Bloom' takes the aspirational spirit of
                exploration that propelled humanity to the moon and turns it
                inward, setting us on a course to explore our (inner)Cosmos.
                It's an invitation to become not just astronauts but
                "intronauts," embarking on a journey through the vast Cosmos
                within each of us. This (inner) Cosmos is far from a vacuous
                void; it's a vibrant expanse teeming with life, waiting to be
                nurtured, explored, and expanded. As we each cultivate our
                (inner)Garden, we contribute to a billion others, creating a
                veritable 'Big Bloom' of (inner) universes that together offer
                unprecedented resources for empathy, creativity, and
                transformation.`}
              </p>
              <div className="bg-secondary rounded-[20px] px-10 py-8 mt-4">
                {sunflowerPoints?.map((item, index) => (
                  <div className="mb-5" key={index}>
                    <h2 className="font-montserrat font-bold text-lg ">
                      {item.title}
                      <span className="font-medium">{item.description}</span>
                    </h2>
                  </div>
                ))}
              </div>
              <div className="mt-14 mx-8  bg-primary rounded-2xl flex items-center">
                <Image src={Images.ladyprofile} alt="profile" aria-label="lady profile" />
                <div className="py-6 px-6">
                  <h2 className="font-montserrat-alternates font-bold text-tertiary text-2xl">
                    Kathleen Velasco
                  </h2>
                  <p className="text-sm font-normal leading-6 font-montserrat-alternates">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-8 pb-14 items-center justify-center">
                <h2 className="font-semibold font-montserrat-alternates text-base">
                  Put in my Nest
                </h2>
                <div className="flex items-center gap-2">
                  <Image src={Images.snell} alt="snell" aria-label="snell" />
                  <Image src={Images.fly} alt="fly" aria-label="fly" />
                  <Image src={Images.cocoon} alt="cocoon" aria-label="cocoon" />
                </div>
                <div className="flex items-center mt-6 gap-4">
                  {/* /button maps/ */}
                  <Button variant="purple" btnText="tag name 1" ariaLabel="tag"/>
                  <Button variant="purple" btnText="tag name 1" ariaLabel="tag"/>
                  <Button variant="purple" btnText="tag name 1" ariaLabel="tag"/>

                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-7">
                 {/* /button maps/ */}
            <Button variant="white" btnText="Journal title" ariaLabel="Journal title"/>
            <Button variant="white" btnText="Journal title" ariaLabel="Journal title"/>
          </div>
          <div className="border-b-[2px] pb-2 my-10  border-tertiary">
            <h2 className="text-tertiary font-black text-3xl">
              People also explored
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-3">
            {exploredCard?.map((item, index) => (
              <div
                key={index}
                className="border-[5px] border-white rounded-[32px]"
              >
                <Image
                  className="rounded-[32px] rounded-b-none"
                  src={Images.butterflies}
                  alt="buterflies"
                />

                <h2 className="bg-secondary z-10 relative -mt-36 border-2 border-white mx-14 text-center text-white text-xs font-semibold px-2 py-1 rounded-full ">
                  {item.badgetext}
                </h2>

                <div className="border-b-[1px] bg-white mt-28 py-8">
                  <h2 className="text-tertiary font-montserrat-alternates font-black text-3xl text-center">
                    {item.posttitle}
                  </h2>
                  <p className="font-medium text-xl px-3 text-center py-2 font-montserrat">
                    {item.description}
                  </p>
                </div>
                <div className="bg-white flex flex-col items-center justify-center py-4  rounded-[32px] rounded-t-none">
                  <Image src={Images.wellgosmall} alt="wellgo" aria-label="wellgorithm" />
                  <div className="flex items-center gap-2 mt-6">
                    <Button variant="white" btnText={item.points} ariaLabel="points" />
                    <Button variant="white" btnText="Read" ariaLabel="Read" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="border-b-[2px] pb-2 my-10  border-tertiary">
            <h2 className=" font-semibold  text-2xl">Reflections 17</h2>
          </div>
          <div className="flex items-center gap-4">
            <Image src={Images.addcomment} alt="add" aria-label="add" />
            <p className="font-montserrat-alternates font-medium text-xl ">
              Share your thoughts
            </p>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <Image src={Images.addcomment} alt="add" aria-label="add" />
            <p className="font-montserrat-alternates font-medium text-xl ">
              Share your thoughts
            </p>
            <Button variant="gradient" btnText="sign up" ariaLabel="sign up" />
            <p className="font-montserrat-alternates text-tertiary font-semibold text-2xl ">
              log(in)
            </p>
          </div>
          <div className="border-b-[2px] border-tertiary mb-8 pb-10">
            <div className="bg-white rounded-2xl p-4 mt-5 flex items-center justify-between">
              <Input
                type="text"
                aria-label="your response"
                placeholder="Write your response here..."
                className="outline-none bg-transparent"
              />
              <IoMdSend />
            </div>
          </div>
          {reviewsData?.map((item, index) => (
            <div key={index} className="bg-white rounded-[20px] mb-4 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image src={item.profileImg} alt="profilepic" aria-label="profile" />
                  <h2 className="text-base font-bold">{item.name}</h2>
                </div>
                <Image src={item.img} alt="snell" aria-label="snell" />
              </div>
              <p className="text-[20px] font-montserrat font-medium py-3">
                {item.comment}
              </p>
            </div>
          ))}
        </div>

        <div>
          <div className="bg-[#4F81E5] rounded-2xl py-6 px-2 flex flex-col gap-3 items-center justify-center">
            <Image src={Images.profile2} alt="profile" aria-label="profile" className="w-28" />
            <h2 className="text-white font-black text-[44px]">XBT</h2>
            <h2 className="text-white font-semibold px-10 text-center text-base">
              Expanded Behavioral Therapy
            </h2>
            <Button btnText="Journal in 3d" variant="white" ariaLabel="Journal in 3d" />
          </div>
          <div className="mt-4 shadow-lg">
            <h2 className="bg-[#4F81E5] text-center rounded-2xl rounded-b-none py-2 text-white text-xl font-medium font-montserrat-alternates">
              proximity
            </h2>
            <h2 className=" text-center rounded-2xl py-2  text-tertiary text-xl font-medium font-montserrat-alternates">
              anxiety, creativity
            </h2>
            <p className="bg-white text-black p-3 text-sm rounded-2xl rounded-t-none">
              {`Our movement isn't merely about individual well-being or societal
              betterment.`}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EasyDetails;
