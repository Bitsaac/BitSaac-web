"use client";

import cn from "@/utils/tailwind";
import Image from "next/image";
import Link from "next/link";

type Props = {
  image: string;
  id: number;
  title: string;
};

const PortfolioThumbnail = ({
  title,

  image,
  id,
}: Props) => {
  return (
    <Link
      href={`/portfolios/${id}`}
      className={cn(
        "flex items-start justify-between flex-col gap-y-4 w-full min-w-[350px] sm:max-w-[500px] lg:max-w-[500px] xl:max-w-[600px] rounded-xl hover:shadow-[0_0_40px_0_rgba(0,0,0,0.2)] xl:hover:shadow-[0_20px_60px_0_rgba(0,0,0,0.3)] transition-all hover:duration-700 duration-300 py-2",
      )}
    >
      <div
        className={cn(
          "w-full max-w-[500px] overflow-hidden  rounded-xl bg-gray-600/25",
        )}
      >
        <Image
          src={image}
          width={570}
          height={500}
          alt="portfolio thumbnail"
          className="w-full h-[270px] hover:scale-125 transition-all hover:duration-1000 duration-300 rounded-xl object-cover"
        />
      </div>
      <div className="w-full p1 max-md:gap-y-2 flex flex-col justify-between  ">
        <h3
          className={cn(
            " font-Inter font-semibold ",
            title.length > 20
              ? "text-sm md:text-[18px]  xl:text-xl "
              : " lg:text-3xl",
          )}
        >
          {title}{" "}
        </h3>
      </div>
    </Link>
  );
};

export default PortfolioThumbnail;
