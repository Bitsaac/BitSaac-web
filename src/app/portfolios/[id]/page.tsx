/* eslint-disable react/no-unescaped-entities */

import React from "react"

import GotoTop from "@/components/GotoTop"
import { PORTFOLIO_CARDS } from "@/constants"
import PortfolioContent from "@/components/portfolio/PortfolioContent"
import FeaturedPortfolio from "@/components/portfolio/FeaturedPortfolio"

const PostPage = ({ params }: { params: { id: string } }) => {
  const portfolio = PORTFOLIO_CARDS.find(
    (portfolio) => String(portfolio.id) === params.id
  )
  const title = portfolio?.title ?? ""
  const tags = portfolio?.label ?? []
  console.log(portfolio)
  return (
    <section className="max-container w-full min-h-screen flex flex-col px-4 lg:px-8 pt-6 sm:pt-10 relative ">
      <div className="flex flex-col items-center gap-y-4">
        <h1 className="text-xl text-center sm:text-2xl lg:text-3xl">{title}</h1>
        <h2 className="text-lg text-center sm:text-xl lg:text-2xl text-gray-700">
          Connects you with ride buddies
        </h2>
        <div className="flex flex-col items-center">
          <p>Experience a whole new way of commuting with Ridgle. </p>
          <div className="flex gap-x-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-[#F4F4F4] p-[2px] text-gray-700 font-semibold text-sm 2xl:text-xl lg:my-4 font-Roboto"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <PortfolioContent />
      <FeaturedPortfolio id={portfolio?.id} />

      <GotoTop />
    </section>
  )
}

export default PostPage
