"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";
import logo from "../../../public/Logo.png";

import { navLinks } from "./navbaritems";
import Talktousbutton from "../Talktousbutton";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="">
        <div className="px-4 xl:px-16 2xl:px-0 h-[72px]  flex justify-between items-center border-b-[1px] border-b-[#77777] ">
          <div className="">
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                className="w-[148px] sm:w-[156px] h-[25px] sm:h-[30px] object-contain"
              />
            </Link>
          </div>
          <nav className="sm:flex hidden">
            <ul className="flex text-[18px] font-Inter text-[#2A2738] font-normal gap-16">
              {navLinks.map((navLink, index) => {
                return (
                  <li key={index} className="cursor-pointer">
                    <Link href={navLink.href}>{navLink.title}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <Talktousbutton className="hidden sm:flex px-6 py-3 bg-[#4D61F4] rounded-[8px] font-medium text-[#fff] font-inter" />
          <div className="sm:hidden flex" onClick={() => setToggle(!toggle)}>
            {toggle ? (
              <IoClose className="text-black text-[25px]" />
            ) : (
              <IoMenu className="text-black text-[25px]" />
            )}
          </div>
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-10`}
          >
            <ul className="list-none flex flex-col  justify-end items-center flex-1">
              {navLinks.map((navLink, index) => {
                return (
                  <li key={index} className="cursor-pointer">
                    <Link href={navLink.href}>{navLink.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
