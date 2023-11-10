import React from "react";
import { NavLinks } from "./navItems";
import Logo from "@/assets/Logo.png";
import Iconn from "@/assets/Icon.png";
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
        <div className="lg:flex items-center  gap-[64px] sm:hidden max-[650px]:hidden md:hidden ">
          <NavLinks text="About Us" href="/about" />
          <NavLinks text="Services" href="services" />
          <NavLinks text="Contact Us" href="/contact" />
          <NavLinks text="Portfolio" href="portfolio" />
          <button className=" outline-none focus:outline-none"> More </button>
        </div>
        <button className="  btn sm:hidden max-[650px]:hidden md:hidden">
          Talk to Us
        </button>
        <div className="lg:hidden md:flex sm:flex max-[650px]:flex">
          <AiOutlineMenu size={24} />
        </div>
      </div>
      <p className="block w-full sm:hidden border-black border-t-2"></p>
      <div className=" text-center  items-center gap-[4px] text-base w-full justify-center  border border-y border-[#E9EBF8] max-[600px]:hidden">
        <div className=" items-center justify-between text-center ">
          <div className=" flex justify-between gap-3 py-[16px] px-[64px] min-[750px]:hidden">
            <div className="lg:flex text-start gap-3 w-80 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_82_546)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.188 6.45747L-0.300781 20.2406V20.2646L15.9231 20.0344C20.2413 19.9723 23.7417 16.1856 23.6988 11.5438V11.4557C23.697 11.4056 23.697 11.3556 23.697 11.3055C23.5833 4.92557 16.3292 1.88578 12.188 6.45747ZM22.697 11.3147C22.697 11.3565 22.697 11.4127 22.6988 11.4724V11.5436L22.6989 11.553C22.7372 15.7031 19.6199 18.9811 15.9088 19.0345L1.96218 19.2324L12.9291 7.12893C14.6964 5.17788 17.0854 4.86415 19.0653 5.69648C21.0512 6.53133 22.6442 8.53348 22.697 11.3147Z"
                    fill="#2A2738"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.7084 12.5848L1.96596 22.4905L1.9423 22.4863L4.98634 6.54884C5.79731 2.30704 10.1343 -0.482597 14.6981 0.365635L14.7849 0.380935C14.8339 0.391463 14.8832 0.400157 14.9325 0.40885C21.1958 1.62862 22.9297 9.30037 17.7084 12.5848ZM14.7498 1.39206C14.7087 1.38481 14.6533 1.37499 14.5948 1.36283L14.5247 1.35047L14.5154 1.3488C10.435 0.590414 6.66552 3.09111 5.96855 6.73662L3.35179 20.4369L17.1758 11.7384C19.4041 10.3367 20.1279 8.0385 19.652 5.94415C19.1747 3.84348 17.4796 1.92696 14.7498 1.39206Z"
                    fill="#2A2738"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_82_546">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div>
                <Link href="">Agency</Link>
                <p className="font-Inter text-sm text-[#2A2738]">
                  Learn more about our company and services
                </p>
              </div>
            </div>
            <div className="flex text-start gap-3 w-80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_82_546)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.188 6.45747L-0.300781 20.2406V20.2646L15.9231 20.0344C20.2413 19.9723 23.7417 16.1856 23.6988 11.5438V11.4557C23.697 11.4056 23.697 11.3556 23.697 11.3055C23.5833 4.92557 16.3292 1.88578 12.188 6.45747ZM22.697 11.3147C22.697 11.3565 22.697 11.4127 22.6988 11.4724V11.5436L22.6989 11.553C22.7372 15.7031 19.6199 18.9811 15.9088 19.0345L1.96218 19.2324L12.9291 7.12893C14.6964 5.17788 17.0854 4.86415 19.0653 5.69648C21.0512 6.53133 22.6442 8.53348 22.697 11.3147Z"
                    fill="#2A2738"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.7084 12.5848L1.96596 22.4905L1.9423 22.4863L4.98634 6.54884C5.79731 2.30704 10.1343 -0.482597 14.6981 0.365635L14.7849 0.380935C14.8339 0.391463 14.8832 0.400157 14.9325 0.40885C21.1958 1.62862 22.9297 9.30037 17.7084 12.5848ZM14.7498 1.39206C14.7087 1.38481 14.6533 1.37499 14.5948 1.36283L14.5247 1.35047L14.5154 1.3488C10.435 0.590414 6.66552 3.09111 5.96855 6.73662L3.35179 20.4369L17.1758 11.7384C19.4041 10.3367 20.1279 8.0385 19.652 5.94415C19.1747 3.84348 17.4796 1.92696 14.7498 1.39206Z"
                    fill="#2A2738"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_82_546">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div>
                <Link href="">BitCommerce</Link>
                <p className="font-Inter text-sm text-[#2A2738]">
                  Explore our portfolio and client testimonials
                </p>
              </div>
            </div>
            <div className="flex text-start gap-3 w-80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_82_546)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.188 6.45747L-0.300781 20.2406V20.2646L15.9231 20.0344C20.2413 19.9723 23.7417 16.1856 23.6988 11.5438V11.4557C23.697 11.4056 23.697 11.3556 23.697 11.3055C23.5833 4.92557 16.3292 1.88578 12.188 6.45747ZM22.697 11.3147C22.697 11.3565 22.697 11.4127 22.6988 11.4724V11.5436L22.6989 11.553C22.7372 15.7031 19.6199 18.9811 15.9088 19.0345L1.96218 19.2324L12.9291 7.12893C14.6964 5.17788 17.0854 4.86415 19.0653 5.69648C21.0512 6.53133 22.6442 8.53348 22.697 11.3147Z"
                    fill="#2A2738"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.7084 12.5848L1.96596 22.4905L1.9423 22.4863L4.98634 6.54884C5.79731 2.30704 10.1343 -0.482597 14.6981 0.365635L14.7849 0.380935C14.8339 0.391463 14.8832 0.400157 14.9325 0.40885C21.1958 1.62862 22.9297 9.30037 17.7084 12.5848ZM14.7498 1.39206C14.7087 1.38481 14.6533 1.37499 14.5948 1.36283L14.5247 1.35047L14.5154 1.3488C10.435 0.590414 6.66552 3.09111 5.96855 6.73662L3.35179 20.4369L17.1758 11.7384C19.4041 10.3367 20.1279 8.0385 19.652 5.94415C19.1747 3.84348 17.4796 1.92696 14.7498 1.39206Z"
                    fill="#2A2738"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_82_546">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div>
                <Link href="">Consultation</Link>
                <p className="font-Inter text-sm text-[#2A2738]">
                  Find answers to frequently asked questions
                </p>
              </div>
            </div>
            <div className="flex text-start gap-3 w-80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_82_546)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.188 6.45747L-0.300781 20.2406V20.2646L15.9231 20.0344C20.2413 19.9723 23.7417 16.1856 23.6988 11.5438V11.4557C23.697 11.4056 23.697 11.3556 23.697 11.3055C23.5833 4.92557 16.3292 1.88578 12.188 6.45747ZM22.697 11.3147C22.697 11.3565 22.697 11.4127 22.6988 11.4724V11.5436L22.6989 11.553C22.7372 15.7031 19.6199 18.9811 15.9088 19.0345L1.96218 19.2324L12.9291 7.12893C14.6964 5.17788 17.0854 4.86415 19.0653 5.69648C21.0512 6.53133 22.6442 8.53348 22.697 11.3147Z"
                    fill="#2A2738"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.7084 12.5848L1.96596 22.4905L1.9423 22.4863L4.98634 6.54884C5.79731 2.30704 10.1343 -0.482597 14.6981 0.365635L14.7849 0.380935C14.8339 0.391463 14.8832 0.400157 14.9325 0.40885C21.1958 1.62862 22.9297 9.30037 17.7084 12.5848ZM14.7498 1.39206C14.7087 1.38481 14.6533 1.37499 14.5948 1.36283L14.5247 1.35047L14.5154 1.3488C10.435 0.590414 6.66552 3.09111 5.96855 6.73662L3.35179 20.4369L17.1758 11.7384C19.4041 10.3367 20.1279 8.0385 19.652 5.94415C19.1747 3.84348 17.4796 1.92696 14.7498 1.39206Z"
                    fill="#2A2738"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_82_546">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div>
                <Link href="">Recruitment</Link>
                <p className="font-Inter text-sm text-[#2A2738]">
                  Join our team and grow your career
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className=" font-Inter text-sm text-[#2A2738]  bg-surface/200 py-2 ">
          Looking for new job opportunities?{" "}
          <span className=" underline">Get in Touch </span>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
