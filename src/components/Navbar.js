"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import logo from "../../public/Logo.png";
import { IconContext } from "react-icons/lib";
const Navbar = () => {
  return (
    <div>
      <div className="">
        <div className="px-4 xl:px-16 h-[72px]  flex justify-between items-center border-b-[1px] border-b-[#77777] ">
          <div className="">
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                w
                className="w-[148px] sm:w-[156px] h-[25px] sm:h-[30px] object-contain"
              />
            </Link>
          </div>
          <nav className="sm:flex hidden">
            <ul className="flex text-[18px] font-Inter text-[#2A2738] font-normal gap-16">
              <li>About Us</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Portfolio</li>
              <li>More</li>
            </ul>
          </nav>
          <button className="hidden sm:flex px-6 py-3 bg-[#4D61F4] rounded-[8px] font-medium text-[#fff] font-inter">
            Talk To Us
          </button>
          <div className="sm:hidden flex">
            <IconContext.Provider value={{ size: "25px" }}>
              <IoMenu />
            </IconContext.Provider>
          </div>
        </div>
        <div className="sm:flex hidden py-4  justify-center  items-center gap-2 ">
          <h5 className="font-inter text-[#2A2738]">
            Looking for a new career?
          </h5>
          <h5 className="underline capitalize">
            <a href="/">Get in touch</a>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
