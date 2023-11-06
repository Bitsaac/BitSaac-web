import React from "react";
import Logo from "@/assets/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "../navbar/navItems";
import {
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="w-full flex flex-col xl:py-[80px] xl:px-[60px] py-[48px] px-[16px]  gap-[80px] cursor-pointer">
      <div className="flex xl:flex-row flex-col xl:items-center items-start justify-between gap-[48px]">
        <div className="flex xl:flex-row flex-col items-start gap-[24px] flex-wrap xl:w-[500px] w-full">
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
          <p>
            Stay up to date on the latest features and releases by joining our
            newsletter.
          </p>
          <div className="flex xl:flex-row flex-col items-center gap-[16px] w-full">
            <input
              type="text"
              placeholder="Enter your mail "
              className="outline-none p-[12px] rounded border-2 border-black w-full"
            />
            <button className="call-btn w-full">Request a call back</button>
          </div>
          <p className="text-sm">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from our company.
          </p>
        </div>
        <div className=" flex xl:flex-row flex-col items-start xl:items-center gap-[40px] ">
          <div className="w-[201px] flex flex-col gap-[16px]">
            <p className="font-bold ">Bitsaac</p>
            <NavLinks text="About Us" />
            <NavLinks text="Templates" />
            <NavLinks text="For SMEs" />
            <NavLinks text="Bit Solar" />
            <NavLinks text="Our Products" />
          </div>
          <div className="w-[201px] flex flex-col gap-[16px]">
            <p className="font-bold ">Quick Links</p>
            <NavLinks text="Services" />
            <NavLinks text="Contact Us" />
            <NavLinks text="Portfolio" />
            <NavLinks text="Our Technologies" />
            <NavLinks text="Communities" />
          </div>
          <div className="w-[201px] flex flex-col gap-[16px]">
            <p className="font-bold ">Follow us</p>
            <NavLinks text="Facebook" icon={<FaFacebookF size={24} />} />
            <NavLinks
              text="Templates"
              icon={<AiOutlineInstagram size={24} />}
            />
            <NavLinks text="Twitter" icon={<AiOutlineTwitter size={24} />} />
            <NavLinks text="LinkedIn" icon={<AiFillLinkedin size={24} />} />
            <NavLinks text="Youtube" icon={<AiFillYoutube size={24} />} />
          </div>
        </div>
      </div>
      <div className="flex xl:flex-row flex-col-reverse items-center gap-[32px]  justify-between w-full pt-8 border-t border-black">
        <p>© 2024 BitSaac Inc. All rights reserved.</p>
        <div className="footer-foot-links flex  xl:gap-[24px] gap-[16px] items-center ">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
