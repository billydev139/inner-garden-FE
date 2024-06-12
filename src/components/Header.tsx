"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {HiUsers} from '@/assets/Icons'
import { IoMdArrowDropdown } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";
import { loginLinks, mainCategories } from "@/utils/helpers/headerContent";
import Images from "@/assets/images";
import List from "./common/List";
import Button from "./common/Button";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  let themeClass = ""; // Initialize an empty string for the theme class

  // Set the theme class based on the current pathname
  if (pathname.includes("/garden")) {
    themeClass = "theme-blue";
  } else if (pathname.includes("/adversities")) {
    themeClass = "theme-brown";
  } else if (pathname.includes("/activities")) {
    themeClass = "theme-green";
  }

  return (
    <header className={`bg-tertiary py-4 ${themeClass}`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between flex-wrap">
          <div className="flex items-center justify-between w-full lg:w-auto">
            <Link href="/">
              <Image
                src={Images.inner}
                alt="logo"
                width={150}
                height={150}
                className="px-4"
              />
            </Link> 

            <div className="lg:flex flex-col lg:flex-row lg:items-center lg:space-x-6 gap-4 lg:gap-0 hidden">
              <div className="flex items-center bg-white px-2 py-2 rounded-xl lg:order-1">
                <HiUsers className="text-xl text-tertiary"  />
                <IoMdArrowDropdown className="text-xl text-tertiary" />
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-4 bg-white px-2 py-2 rounded-xl lg:order-2">
                {mainCategories.map((link, index) => (
                  <Link key={index} href={link.link}>
                    <span className="text-tertiary font-medium">
                      {link.title}
                    </span>
                  </Link>
                ))}
              </div>

              <div className="flex items-center bg-white px-2 py-2 rounded-xl lg:order-3">
                <BsThreeDots className="text-xl text-tertiary" />
              </div>
            </div>
            {/* // use button component// */}
            <button
              className="text-white text-2xl lg:hidden"
              onClick={toggleMenu}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } w-full lg:flex lg:items-center lg:w-auto mt-4 lg:mt-0`}
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 gap-4 lg:gap-0 lg:hidden">
              <div className="flex items-center bg-white px-2 py-2 rounded-xl lg:order-1">
                <HiUsers className="text-xl text-primary" />
                <IoMdArrowDropdown className="text-xl text-primary" />
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-4 bg-white px-2 py-2 rounded-xl lg:order-2">
                {mainCategories.map((link, index) => (
                  <Link key={link.id} href={link.link}>
                    <span className="text-tertiary font-medium">
                      {link.title}
                    </span>
                  </Link>
                ))}
              </div>

              <div className="flex items-center bg-white px-2 py-2 rounded-xl lg:order-3">
                <BsThreeDots className="text-xl text-primary"  />
              </div>
            </div>

            <ul className="flex flex-col lg:flex-row justify-center items-center lg:space-x-4 mt-4 lg:mt-0 lg:order-4 ">
              <li>
                <IoSearch className="text-[20px] text-secondary" />
              </li>

              {loginLinks.map((linkContent) => (
                <List
                  key={linkContent.id}
                  toLink={linkContent.link}
                  label={linkContent.title}
                  className="text-secondary"
                />
              ))}

              <li>
                <Button btnText="join us" variant="white" className="text-tertiary"  />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
