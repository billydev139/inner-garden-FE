'use client'
import React from "react";
import Button from "./common/Button";
import Image from "next/image";
import Link from "next/link";
import Images from "@/assets/images";
import styles from "@/styles";
import Input from "./common/Input";
import innerFooter from "../assets/images/footer-inner.png";
import { usePathname } from "next/navigation";

const Footer: React.FC = () => {
  const pathname = usePathname(); 

  let themeClass = ""; 
  
  if (pathname.includes("/garden")) {
    themeClass = "theme-blue";
  } else if (pathname.includes("/adversities")) {
    themeClass = "theme-brown";
  } else if (pathname.includes("/activities")) {
    themeClass = "theme-green";
  }
  return (
    <div
    className={`${themeClass} flex flex-col pt-[20px]`}
      style={{
        backgroundImage: `url(${innerFooter.src})`,
        height: "100%",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className={`${styles.headingH1} text-white text-center`}>
        subscribe to Wellgorithms Weekly
      </h1>

      <h2 className={`${styles.subHeading} text-white text-center my-2 px-4`}>
        a weekly dose of Wellgorithms to warm your heart, <br />
        invigorate your mind, and inspire resilience in adversity.
      </h2>

      <form className="flex justify-center py-5 px-36 mb-[42px]">
        <div className="flex items-center bg-white rounded-full border-4 border-secondary md:w-[40%] max-w-3xl">
          <Input
            type="email"
            placeholder="Email"
            className="rounded-full w-full px-5 py-2 text-lg border-none focus:ring-0"
          />

          <Button btnText="Subscribe" btnType="submit" className="py-2" />
        </div>
      </form>
      <div className="flex flex-wrap my-4 justify-around items-start">
        <div className="flex flex-col items-center ">
          <Button btnText="about " btnType="button" />
          <p className="text-16 font-semibold text-white text-center w-[280px] pt-2 ">
             (inner) was started by a Bronx teacher and her partner, a software
            architect and graphic designer.
          </p>
        </div>

        <Image
          src={Images.inner}
          alt="logo"
          width={300}
          height={300}
          className="px-4"
        />
        <Button btnText="donate Now" btnType="button" />
      </div> 

      <div className="flex flex-wrap justify-center items-center">
        <div className="lg:bg-tertiary rounded-full flex flex-col md:flex-row flex-wrap justify-around items-center md:w-[40%] p-2 my-4">
          <Link href="" className="text-white">
            writers in residence
          </Link>
          <Link href="" className="text-white my-4">
            (inner)Academy
          </Link>
          <Link href="" className="text-white">
            (inner)TV
          </Link>
        </div>
      </div>

      <div className="flex justify-center gap-4 pb-2">
        <Link href="" className="text-white">
          policies
        </Link>
        <Link href="" className="text-white">
          contact
        </Link>
      </div>

      <h2 className="text-center text-white">
        © copyright 2024 by (inner). All rights reserved
      </h2>
    </div>
  );
};

export default Footer;
