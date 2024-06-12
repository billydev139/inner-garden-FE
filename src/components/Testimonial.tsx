import styles from "@/styles";
import React from "react";
import Button from "./common/Button";
import testimonialBg from "../assets/images/banner9.png";
import testimonialBg2  from "../assets/images/banner8.png";


const Testimonial: React.FC = () => {
  return (
    <>
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4 my-8">
        <div
          style={{
            backgroundImage: `url(${testimonialBg.src})`,
            height: "100%",
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className=" lg:w-[50%] p-6 lg:p-12 lg:my-4 rounded-lg lg:h-[350px]"
        >
          <h1 className={`${styles.headingH1} text-white w-[80%]`}>
            Journal the peace, blossom inside.
          </h1>
          <h2 className={`${styles.subHeading} text-white py-6 w-[80%]`}>
            Master the new art of “emotional gardening,” and contribute to
            humanity’s Big Bloom.
          </h2>
          <Button btnText="start journaling" variant="white" />
        </div>

        <div style={{
            backgroundImage: `url(${testimonialBg2.src})`,
            height: "100%",
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} className="lg:w-[50%] p-6 lg:p-10 lg:my-4 rounded-lg lg:h-[350px] h-[350px] my-4">
          <span 
         
          className="text-3xl text-white font-black">&quot;</span>

          <h1 className={`${styles.headingH1} text-white py-6`}>
            AI will help us build all kinds of cathedrals of the mind, many of
            which we could not have built before.
          </h1>
          <h2 className={`${styles.subHeading} text-white py-4`}>
            — Reid Hoffman
          </h2>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
