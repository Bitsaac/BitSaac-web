"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";
import logo from "../../../public/Logo.png";

import { navLinks } from "./navbaritems";
import Talktousbutton from "../Talktousbutton";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [toggle]);
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
            <ul className="flex xl:text-[18px] text-base font-Inter text-[#2A2738] font-normal gap-10 xl:gap-16">
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
            } w-full bg-white shadow-2xl  absolute top-[72px] left-0 px-2   min-w-[140px] rounded-xl sidebar `}
          >
            <div
              className="bg-[#1b1b1b2f] absolute top-0 left-0 w-full h-screen"
              onClick={() => setToggle(!toggle)}
            >
              <ul className="list-none flex flex-col w-full bg-white z-[999] py-5">
                {navLinks.map((navLink, index) => {
                  return (
                    <li
                      key={index}
                      className="cursor-pointer py-3 rounded-lg active:bg-[#FAFAFA] w-full px-5 "
                      onClick={() => setToggle(!toggle)}
                    >
                      <Link href={navLink.href}>
                        <h5 className="text-[#2A2738] text-[18px] font-Inter">
                          {navLink.title}
                        </h5>
                      </Link>
                    </li>
                  );
                })}
                <div className="mt-14 mx-5">
                  <Talktousbutton className="px-6 py-3 w-full bg-[#4D61F4] rounded-[8px] font-medium text-[#fff] font-inter" />
                </div>
                {/* {toggle ? <div>yes</div> : <div></div>} */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
