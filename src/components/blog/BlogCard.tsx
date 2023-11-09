"use client";

import useInView from "@/hooks/useInView";
import cn from "@/utils/tailwind";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { PiCubeFill } from "react-icons/pi";

type BlogCardProps = {
  label: string;
  title: string;
  time: string;
  desc: string;
  image: string;
  id: number;
  isFeatured?: boolean;
};

const BlogCard = ({
  label,
  title,
  time,
  desc,
  image,
  id,
  isFeatured,
}: BlogCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef);
  return (
    <div
      ref={cardRef}
      className={cn(
        "flex items-start justify-between flex-col gap-y-4 w-full max-w-[350px] sm:max-w-[500px] lg:max-w-[500px] border border-gray-200 lg:p-1 rounded-xl hover:shadow-[0_0_40px_0_rgba(0,0,0,0.2)] xl:hover:shadow-[0_20px_60px_0_rgba(0,0,0,0.3)] transition-all hover:duration-700 duration-300",
        isInView
          ? "opacity-100 translate-y-0 delay-300 duration-1000"
          : " opacity-0 translate-y-20",
      )}
    >
      <div
        className={cn(
          "w-full overflow-hidden  max-h-[150px] lg:max-h-[300px] 2xl:h-full p-4",
          isFeatured ? "" : "md:max-h-[200px]",
        )}
      >
        <Image
          src={image}
          width={600}
          height={400}
          alt="blog image"
          className="hover:scale-125 transition-all hover:duration-1000 duration-300 rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-y-2 lg:gap-y-4 px-2 items-start">
        <p className="flex items-center  gap-x-5 text-gray-950 font-semibold w-full">
          <span className="bg-[#F4F4F4] px-2 py-1 capitalize">{label}</span>
          <span>{time}</span>
        </p>
        <h3
          className={cn(
            " font-Inter font-semibold ",
            title.length > 20 ? "text-[18px]  lg:text-2xl " : " lg:text-5xl",
            isFeatured ? "" : "md:text-2xl ",
          )}
        >
          {title}
        </h3>
        <p className="text-gray-700 text-sm sm:text-[16px] lg:text-lg font-Inter">
          {desc.length > 100 ? `${desc.slice(0, 100)}...` : desc}
        </p>
      </div>
      <Link
        href={`/blog/${id}`}
        className="text-[#4D61F4] font-medium text-lg 2xl:text-2xl lg:my-4 font-Roboto flex items-center gap-x-2 pl-2 pb-1"
      >
        <span>Read more</span>
      </Link>
    </div>
  );
};

export default BlogCard;
