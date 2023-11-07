"use client"

import BlogCard from "@/components/blog/BlogCard"
import BlogNav from "@/components/blog/BlogNav"
import { BLOG_CARDS } from "@/constants"
import { useBlogCtx } from "@/context/BlogContext"
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
    <section className="flex w-full max-w-[1440px] mx-auto   min-h-screen justify-center items-start px-4 lg:px-6 overflow-hidden xl:px-8 2xl:px-12 pb-12 lg:pb-16">
      <div className="w-full flex flex-1 flex-col items-center gap-4 sm:gap-y-8 lg:gap-y-10">
        <div className="flex flex-col justify-center items-center px-2 gap-y-4 md:gap-y-6 xl:gap-y-8">
          <p>Blog</p>
          <h1>Discover the Latest Insights</h1>
          <p>Stay informed with our curated resources.</p>
        </div>
        <BlogNav />
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-8 lg:gap-12 w-full slideUp">
          {filteredBlogs.map((card) => (
            <BlogCard
              key={card.id}
              {...card}
            />
          ))}
        </div>
        <div className=" h-full w-full text-center sm:text-2xl">
          <p>
            <b className="uppercase text-primary">{activeTab}</b> blogs Coming
            Soon!
          </p>
        </div>
      </div>
    </section>
  )
}

export default BlogPage
