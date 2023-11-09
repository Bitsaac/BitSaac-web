import Image from "next/image";
import Link from "next/link";
import React from "react";
import PortfolioContentCard from "./PortfolioContentCard";
import { PORTFOLIO_CONTENTS } from "@/constants";
import { BsArrowRight } from "react-icons/bs";

const PortfolioContent = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="w-full relative flex justify-center items-end bg-portfolio rounded-xl pt-8 lg:pt-16 overflow-hidden sm:mt-10 lg:mt-20 animate-slideUp opacity-0 translate-y-24">
        <Image
          src="/portfolio-phone.png"
          width={400}
          height={600}
          alt="phone"
          className=" object-contain -mr-10 sm:-mr-[10rem]"
        />
        <Image
          src="/portfolio-phone-2.png"
          width={400}
          height={600}
          alt="phone"
          className=" object-contain -mb-5"
        />
      </div>
      <div className="flex flex-col mt-10 lg:mt-20 gap-y-8 lg:gap-y-12 ">
        {PORTFOLIO_CONTENTS.map((content) => (
          <PortfolioContentCard key={content.id} {...content} />
        ))}
      </div>

      <div className="flex flex-col w-full">
        <div className="w-full flex justify-center mt-10">
          <Image src="/ridgle.png" width={1000} height={300} alt="ridgle" />
        </div>
        <div className="flex w-full justify-between gap-x-6">
          <div className="flex w-1/2">
            <p>See the live website</p>
          </div>
          <div className="flex flex-col w-1/2 gap-y-6">
            <p>
              Once they fully launch, you can join Ridgle’s by downloading their
              app or view their live project with the button below
            </p>
            <Link href="#" className="flex gap-x-3 items-center">
              <span>Experience this project live</span>
              <BsArrowRight />
            </Link>
            <p>
              Click on tag below to <span>Download the app</span>
            </p>
            <div className="flex gap-x-4">
              <Image src="/google.png" width={100} height={50} alt="google" />
              <Image src="/apple.png" width={100} height={50} alt="apple" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioContent;
