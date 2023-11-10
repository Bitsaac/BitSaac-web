import Image from "next/image";
import Link from "next/link";
import React from "react";
import PortfolioContentCard from "./PortfolioContentCard";
import { PORTFOLIO_CONTENTS } from "@/constants";
import { BsArrowRight } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

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
        <div className="flex flex-col sm:flex-row w-full   sm:justify-between gap-x-6">
          <div className="flex w-full sm:w-1/2">
            <p className="text-2xl font-bold lg:text-3xl">
              See the live website
            </p>
          </div>
          <div className="flex flex-col w-full sm:w-1/2 gap-y-6">
            <p className="font-medium">
              Once they fully launch, you can join Ridgles by downloading their
              app or view their live project with the button below
            </p>
            <Link href="#" className="flex gap-x-3 items-center">
              <span className="text-[#2C6FEF]">
                Experience this project live
              </span>
              <BsArrowRight />
            </Link>
            <p className="font-medium">
              Click on tag below to{" "}
              <span className="text-btn-secondary">Download the app</span>
            </p>
            <div className="flex gap-x-4">
              <Image src="/google.png" width={100} height={50} alt="google" />
              <Image src="/apple.png" width={100} height={50} alt="apple" />
            </div>
          </div>
        </div>

        <div className="flex w-full items-center flex-col mt-10 lg:mt-20 gap-y-5 xl:mt-32 lg:gap-y-8">
          <h3 className="font-bold text-xl sm:text-2xl lg:text-4xl">
            Feedback From Client
          </h3>
          <div className="flex justify-center gap-x-1 text-btn-secondary">
            {[1, 2, 3, 4, 5].map((star) => (
              <AiFillStar key={star} />
            ))}
          </div>
          <div className="justify-center flex w-full max-w-[768px] text-center ">
            <p className="font-bold sm:text-lg lg:text-xl">
              The team at BitSaac delivered exceptional results for our project.
              Their expertise and dedication were evident throughout the entire
              process.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="flex items-center gap-x-4">
              <Image src="/team4.png" width={60} height={60} alt="CEO" />
              <div className="flex flex-col">
                <p className="font-bold">Avi Ridgle</p>
                <p className="font-medium">CEO, Ridgle</p>
              </div>
              <div className="w-[1px] h-20 bg-gray-400" />
              <div className="flex items-center">
                <Image src="/ridgle-car.svg" width={50} height={50} alt="car" />
                <span className="text-[#6E4BCA] font-medium text-5xl tracking-tighter">
                  RIDGLE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioContent;
