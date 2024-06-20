"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiUsers } from "@/assets/Icons";
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
    <header className={`bg-tertiary py-4 ${themeClass}`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between flex-wrap">
          <div className="flex items-center justify-between w-full lg:w-auto">
            <Link href="/">
              <Image
                src={logoImage}
                alt="logo"
                width={150}
                height={150}
                className="px-4"
              />
            </Link>

            <div className="lg:flex flex-col lg:flex-row lg:items-center lg:space-x-6 gap-4 lg:gap-0 hidden">
              <div className="flex items-center bg-white px-2 py-2 rounded-xl lg:order-1">
                <HiUsers className="text-xl text-tertiary" />
                <IoMdArrowDropdown className="text-xl text-tertiary" />
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-4 bg-white px-2 py-2 rounded-full lg:order-2">
                {mainCategories.map((link, index) => (
                  <Link key={index} href={link.link}>
                    <span
                      className={`text-tertiary font-medium ${
                        pathname === link.link ? "bg-secondary text-white px-2 py-2 rounded-full" : ""
                      }`}
                    >
                      {link.title}
                    </span>
                  </Link>
                ))}
              </div>

              <div className="flex items-center bg-white px-2 py-2 rounded-xl lg:order-3">
                <BsThreeDots className="text-xl text-tertiary" />
              </div>
            </div>
            <button
              className="text-white text-2xl lg:hidden"
              aria-label='Toggle menu button'
              onClick={toggleMenu}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } w-full lg:flex lg:items-center lg:w-auto pt-4 lg:mt-0`}
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

              <div className="flex items-center bg-white px-2 py-2 rounded-xl lg:order-3">
                <BsThreeDots className="text-xl text-primary" />
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
                <Button
                  btnText="join us"
                  ariaLabel="join us"
                  variant="white"
                  className="text-tertiary"
                />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
