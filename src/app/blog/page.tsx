"use client"

import BlogCard from "@/components/blog/BlogCard"
import BlogNav from "@/components/blog/BlogNav"
import LoadingSpinner from "@/components/loaders/LoadingSpinner"
import { BLOG_CARDS } from "@/constants"
import { useBlogCtx } from "@/context/BlogContext"
import cn from "@/utils/tailwind"
import React from "react"

const BlogPage = () => {
  const { activeTab } = useBlogCtx()
  const filteredBlogs = BLOG_CARDS.filter((blog) => {
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
          <h3 className="font-medium text-xl">Blog</h3>
          <h1 className="max-[380px]:text-xl text-2xl sm:text-4xl lg:text-5xl xl:text-6xl">
            Discover the Latest Insights
          </h1>
          <p>Stay informed with our curated resources.</p>
        </div>

        <BlogNav />

        <div
          className={cn(
            " grid grid-cols-1 sm:grid-cols-2  gap-4 sm:gap-8 lg:gap-12 w-full max-sm:place-items-center slideUp ",
            filteredBlogs.length > 2 ? "md:grid-cols-3" : "md:grid-cols-2"
          )}
        >
          {filteredBlogs.map((card) => (
            <BlogCard
              key={card.id}
              {...card}
            />
          ))}
        </div>
        {filteredBlogs.length === 0 && (
          <div className=" h-full w-full text-center sm:text-2xl">
            {activeTab === "all" ? (
              <LoadingSpinner />
            ) : (
              <p>
                <b className="uppercase text-primary">{activeTab}</b> blogs
                Coming Soon!
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default BlogPage
