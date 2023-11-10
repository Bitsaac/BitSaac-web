"use client";

import React, { useRef } from "react";

import Link from "next/link";
import cn from "@/utils/tailwind";
import { PORTFOLIO_CARDS } from "@/constants";
import PortfolioCard from "./PortfolioCard";
import PortfolioThumbnail from "./PortfolioThumbnail";
import useInView from "@/hooks/useInView";

const FeaturedPortfolio = ({ id, tag }: { id?: number; tag?: string }) => {
  const portRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(portRef);

  const featuredPortfolios = PORTFOLIO_CARDS.filter((portfolio) => {
    return portfolio.id !== id;
  });
  return (
    <section
      ref={portRef}
      className={cn(
        "mt-10 md:mt-40 flex w-full flex-1 flex-col gap-y-5 hide-scrollbar",
        isInView
          ? "opacity-100 translate-y-0 delay-300 duration-1000"
          : " opacity-0 translate-y-20",
      )}
    >
      <div className="flex w-full justify-between items-center">
        <h3 className="font-bold text-xl min-[410px]:text-2xl sm:text-3xl lg:text-4xl ">
          See Other Projects
        </h3>
        <Link
          href="/portfolios"
          className="max-[500px]:text-[12px] text-sm  text-primary font-bold border border-primary p-1 rounded "
        >
          View All
        </Link>
      </div>

      <div className={cn("pt-10 flex overflow-x-auto")}>
        <div
          className={cn(
            "flex flex-nowrap w-full gap-x-8 pb-8 lg:pb-16 slideUp",
          )}
        >
          {featuredPortfolios.slice(0, 3).map((card) => (
            <PortfolioThumbnail key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPortfolio;
