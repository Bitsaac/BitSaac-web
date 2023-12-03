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
    <div className="max-w-[1440px] mx-auto flex flex-col xl:py-[80px] xl:px-[60px] py-[48px] px-[16px]  gap-[80px] ">
      <div className="flex xl:flex-row flex-col xl:items-center items-start gap-[164px]">
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
        </div>
        <div className=" flex xl:flex-row flex-col items-start xl:items-center justify-between w-full ">
          <div className="w-[201px] flex flex-col gap-[16px] cursor-pointer ">
            <p className="font-bold ">Bitsaac</p>
            <NavLinks text="About Us" href="/about" />
            <NavLinks text="Bitcommerce" href="/bitcommerce" />
            <NavLinks text="Projexa" href="/" />
            <NavLinks text="Bit Solar" href="/" />
          </div>
          <div className="w-[201px] flex flex-col gap-[16px] cursor-pointer">
            <p className="font-bold ">Quick Links</p>
            <NavLinks text="Services" href="/services" />
            <NavLinks text="Contact Us" href="/contact" />
            <NavLinks text="Portfolio" href="/portfolio" />
            <NavLinks text="Blogs" href="/blog" />
          </div>
          <div className="w-[201px] flex flex-col gap-[16px] cursor-pointer">
            <p className="font-bold ">Follow us</p>
            <NavLinks
              text="Facebook"
              icon={
                <FaFacebookF size={24} href="https://facebook.com/bitsaac" />
              }
            />
            <NavLinks
              text="Instagram"
              icon={
                <AiOutlineInstagram
                  size={24}
                  href="https://instagram.com/bitsaac"
                />
              }
            />
            <NavLinks
              text="Twitter"
              icon={<AiOutlineTwitter size={24} href="https://x.com/bitsaac" />}
            />
            <NavLinks
              text="LinkedIn"
              icon={
                <AiFillLinkedin
                  size={24}
                  href="https://linkedin.com/in/bitsaac"
                />
              }
            />
          </div>
        </div>
      </div>
      <div className="flex xl:flex-row flex-col-reverse items-center gap-[32px]  justify-between w-full pt-8 border-t border-black">
        <p>© 2024 BitSaac Inc. All rights reserved.</p>
        <div className="footer-foot-links flex  xl:gap-[24px] gap-[16px] items-center cursor-pointer">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
