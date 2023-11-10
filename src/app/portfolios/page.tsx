"use client"

import LoadingSpinner from "@/components/loaders/LoadingSpinner"
import PortfolioCard from "@/components/portfolio/PortfolioCard"
import PortfolioNav from "@/components/portfolio/PortfolioNav"
import { PORTFOLIO_CARDS } from "@/constants"
import { useContentCtx } from "@/context/ContentContext"
import cn from "@/utils/tailwind"
import React from "react"

const PorfolioPage = () => {
  const { activeTab } = useContentCtx()
  const filteredPortfolios = PORTFOLIO_CARDS.filter((blog) => {
    if (activeTab === "all") {
      return blog
    } else {
      return blog.tag === activeTab
    }
  })

  return (
    <section className="flex w-full max-w-[1440px] mx-auto    justify-center items-start px-4 lg:px-6  xl:px-8 2xl:px-12 pb-12 lg:pb-16 relative">
      <div className="w-full flex flex-1 flex-col items-center gap-4 sm:gap-y-7 2xl:gap-y-10 ">
        <div className="flex flex-col justify-center items-center px-2 gap-y-4  2xl:gap-y-8">
          <h3 className="font-medium text-xl lg:text-2xl">Portfolio</h3>
          <h1 className="max-[380px]:text-xl text-2xl sm:text-4xl lg:text-5xl xl:text-6xl">
            Discover the Latest Insights
          </h1>
          <p className="lg:text-xl">
            Stay informed with our curated resources.
          </p>
        </div>

        <PortfolioNav />

        <div
          className={cn(
            " grid grid-cols-1  md:grid-cols-2  gap-4 sm:gap-8 w-full  max-md:place-items-center lg:gap-8 slideUp "
          )}
        >
          {filteredPortfolios.map((card) => (
            <PortfolioCard
              key={card.id}
              {...card}
            />
          ))}
        </div>
        {filteredPortfolios.length === 0 && (
          <div className=" h-full w-full text-center sm:text-2xl">
            {activeTab === "all" ? (
              <LoadingSpinner />
            ) : (
              <p>
                <b className="uppercase text-primary">{activeTab}</b> Portfolios
                Coming Soon!
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default PorfolioPage
