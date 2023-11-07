import BlogCard from "@/components/blog/BlogCard"
import BlogNav from "@/components/blog/BlogNav"
import React from "react"

const BlogPage = () => {
  return (
    <section className="flex w-full max-w-[1440px] mx-auto   min-h-screen justify-center items-start px-4 lg:px-6 overflow-hidden">
      <div className="w-full flex flex-1 flex-col items-center gap-4 sm:gap-y-8 lg:gap-y-10">
        <div className="flex flex-col justify-center items-center px-2 gap-y-4 md:gap-y-6 xl:gap-y-8">
          <p>Blog</p>
          <h1>Discover the Latest Insights</h1>
          <p>Stay informed with our curated resources.</p>
        </div>
        <BlogNav />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          <BlogCard
            image="/blog-image.png"
            title="The Future of AI in Healthcare"
            tag="Technology"
            time="5 minutes read"
            desc="Discover how AI is revolutionizing the healthcare industry and improving patient care."
          />
        </div>
      </div>
    </section>
  )
}

export default BlogPage
