"use client";
import React, { useState } from "react";
import { NavLinks } from "./navItems";
import Logo from "@/assets/Logo.png";
import Iconn from "@/assets/Icon.png";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <div className="flex w-full  flex-col items-center justify-center  cursor-pointer">
      <div className="w-full flex items-center justify-between h-[64px] sm:px-[64px] px-[28px]">
        <Link href="/">
          <Image
            src={Logo}
            alt="logo"
            priority
            quality={100}
            width={148}
            height={64}
          />
        </Link>
        <div className="lg:flex items-center  gap-[64px] sm:hidden max-[650px]:hidden md:hidden ">
          <NavLinks text="About Us" href="/about" />
          <NavLinks text="Services" href="services" />
          <NavLinks text="Contact Us" href="/contact" />
          <NavLinks text="Portfolio" href="portfolio" />
          <button className=" outline-none focus:outline-none"> More </button>
          <button className="  btn sm:hidden max-[650px]:hidden md:hidden">
            Talk to Us
          </button>
        </div>
        <div className="lg:hidden md:flex sm:flex max-[650px]:flex">
          <AiOutlineMenu size={24} />
        </div>
      </div>
      <p className="block w-full sm:hidden border-black border-t-2"></p>
    </div>
  );
};

export default Navbar;
