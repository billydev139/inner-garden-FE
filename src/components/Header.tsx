"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiUsers } from "@/assets/Icons";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";
import { mainCategories } from "@/utils/helpers/headerContent";
import Images from "@/assets/images";
import { usePathname } from "next/navigation";
import "../app/globals.css";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  let themeClass = "";
  let logoImage = Images.inner;

  if (pathname.includes("/garden")) {
    themeClass = "theme-blue";
    logoImage = Images.inner;
  } else if (pathname.includes("/adversities")) {
    themeClass = "theme-brown";
    logoImage = Images.innerBrown;
  } else if (pathname.includes("/activities")) {
    themeClass = "theme-green";
    logoImage = Images.innerGreen;
  }

  return (
    <header className={`bg-black py-4 ${themeClass}`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between flex-wrap">
          <div className="flex items-center justify-between w-full lg:w-auto">
            <Link href="/">
              <Image
                src={Images.newLogo}
                alt="logo"
                width={150}
                height={150}
                className="px-4"
              />
            </Link>

            <Image
              src={Images.userProfileImage}
              alt="user-profile-image"
              width={50}
              height={50}
              className="pr-4"
            />

            <div className="lg:flex flex-col lg:flex-row lg:items-center lg:space-x-6 gap-4 lg:gap-0 hidden">
              <div className="flex flex-col lg:flex-row items-center gap-4 px-2 py-2 rounded-full lg:order-2">
                {mainCategories.map((link, index) => {
                  const isActive = pathname === link.link;
                  return (
                    <Link
                      key={index}
                      href={link.link}
                      className={isActive ? "custom-button text-white bg-secondary px-6" : "text-white"}
                    >
                      {link.title}
                    </Link>
                  );
                })}
              </div>
            </div>
            <BsThreeDots className="text-white" />

            <Image
              src={Images.wellgorithmsIcon}
              alt="wellgorithms"
              width={60}
              height={60}
              className="px-4"
            />

            <Link href="/" className="text-white">
              wellgorithms
            </Link>

            <button
              className="text-white text-2xl lg:hidden"
              aria-label="Toggle menu button"
              onClick={toggleMenu}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } w-full lg:flex lg:items-center lg:w-auto lg:mt-0`}
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 gap-4 lg:gap-0 lg:hidden">
              <div className="flex items-center bg-white px-2 py-2 rounded-xl lg:order-1">
                <HiUsers className="text-xl text-primary" />
                <IoMdArrowDropdown className="text-xl text-primary" />
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-4 bg-white px-2 py-2 rounded-xl lg:order-2">
                {mainCategories.map((link, index) => (
                  <Link key={index} href={link.link}>
                    <span
                      className={`text-tertiary font-medium ${
                        pathname === link.link ? "bg-blue-500 text-white" : ""
                      }`}
                    >
                      {link.title}
                    </span>
                  </Link>
                ))}
              </div>

              <BsThreeDots className="text-white" />
            </div>

            <ul className="flex flex-col lg:flex-row justify-center items-center lg:space-x-4 mt-4 lg:mt-0 lg:order-4 ">
              <li>
                <Image
                  src={Images.newHeaderButterfly}
                  alt="butterfly"
                  aria-label="butterfly"
                  height={40}
                  width={40}
                />
              </li>
              <li>
                <IoSearch className="text-[30px] text-secondary" />
              </li>
              <li>
                <button className="custom-button text-white bg-secondary px-10">journal with us</button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
