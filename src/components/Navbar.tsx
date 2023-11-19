import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/Logo.png";

const Navbar = () => {
  return (
    <div className="">
      <div className="px-16 h-[72px]  flex justify-between items-center border-b-[1px] border-b-[#77777] ">
        <div className="">
          <Link href="/">
            <Image src={logo} alt="logo" width={156} height={30} />
          </Link>
        </div>
        <nav>
          <ul className="flex text-[18px] font-Inter text-[#2A2738] font-normal gap-16">
            <li>About Us</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Portfolio</li>
            <li>More</li>
          </ul>
        </nav>
        <button className="px-6 py-3 bg-[#4D61F4] rounded-[8px] font-medium text-[#fff] font-inter">
          Talk To Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
