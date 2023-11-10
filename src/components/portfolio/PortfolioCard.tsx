"use client";

import { type PortfolioCardProps } from "@/constants";
import useInView from "@/hooks/useInView";
import cn from "@/utils/tailwind";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { BsArrowRight } from "react-icons/bs";

const PortfolioCard = ({
  label,
  title,

  desc,
  image,
  id,
  affiliated,
}: PortfolioCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef);

  const actualTitle = title + "Not affiliated";
  console.log(actualTitle.length);

  return (
    <div
      ref={cardRef}
      className={cn(
        "flex items-start justify-between flex-col gap-y-4 w-full max-w-[350px] sm:max-w-[500px] min-[1160px]:max-w-[700px] border border-gray-200  rounded-xl hover:shadow-[0_0_40px_0_rgba(0,0,0,0.2)] xl:hover:shadow-[0_20px_60px_0_rgba(0,0,0,0.3)] transition-all hover:duration-700 duration-300",
        isInView
          ? "opacity-100 translate-y-0 delay-300 duration-1000"
          : " opacity-0 translate-y-20",
      )}
    >
      <div
        className={cn(
          "w-full overflow-hidden h-full md:h-fit rounded-xl bg-red-600/25",
        )}
      >
        <Image
          src={image}
          width={700}
          height={400}
          alt="portfolio image"
          className="lg:h-[400px] h-[300px] hover:scale-125 transition-all hover:duration-1000 duration-300 rounded-xl object-cover"
        />
      </div>
      <div className="w-full p1 max-md:gap-y-2 flex flex-col justify-between max-md:h-full  ">
        <div className="flex flex-col gap-y-2 lg:gap-y-4 px-2 items-start md:h-[200px] min-[855px]:h-[170px] min-[961px]:h-full min-[961px]:pb-2 ">
          <h3
            className={cn(
              " font-Inter font-semibold ",
              actualTitle.length > 30
                ? "text-[18px] lg:text-xl xl:text-2xl "
                : " lg:text-3xl",
            )}
          >
            {title}{" "}
            <span
              className={cn(
                "text-[#777] text-lg",
                affiliated ? "inline" : "hidden",
              )}
            >
              (Not affiliated)
            </span>
          </h3>
          <p className=" text-sm sm:text-[16px] text-[#777] font-Inter">
            {desc.length > 100 ? `${desc.slice(0, 100)}...` : desc}
          </p>
          <p className="flex min-[664px]:flex-wrap min-[664px]:gap-1 items-center  gap-x-5 text-gray-950 font-semibold w-full">
            {label.map((tag) => (
              <span
                key={tag}
                className="bg-[#F4F4F4] p-[2px] text-gray-700 font-bold text-sm 2xl:text-xl lg:my-4 font-Roboto"
              >
                {tag}
              </span>
            ))}
          </p>
        </div>
        <Link
          href={`/portfolios/${id}`}
          className="text-[#4D61F4] font-medium text-lg 2xl:text-2xl  font-Roboto flex items-center gap-x-2 pl-2 pb-3"
        >
          <span>View project</span> <BsArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCard;
