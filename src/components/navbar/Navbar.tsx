import React from "react";
import { NavLinks } from "./navItems";
import Logo from "@/assets/Logo.png";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar: React.FC = () => {
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
        <div className="lg:flex items-center  gap-[64px] hidden">
          <NavLinks text="About Us" href="/about" />
          <NavLinks text="Services" href="services" />
          <NavLinks text="Contact Us" href="/contact" />
          <NavLinks text="Portfolio" href="portfolio" />
          <NavLinks
            text="More"
            icon={<RiArrowDropDownLine size={24} />}
            iconBeforeText={false}
          />
        </div>
        <button className="btn hidden sm:block">button</button>
        <div className="block sm:hidden">
          <AiOutlineMenu size={24} />
        </div>
      </div>
      <p className="block w-full sm:hidden border-black border-t-2"></p>
      <div className="sm:flex hidden items-center gap-[4px] text-base bg-surface/200 w-full justify-center py-[16px] px-[64px] border border-y border-[#E9EBF8]">
        <p>Looking for new job opportunities?</p>
        <p className="underline">Get In Touch</p>
      </div>
    </div>
  );
};

export default Navbar;
