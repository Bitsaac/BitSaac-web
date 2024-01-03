/* eslint-disable react/no-unescaped-entities */
import { BiLinkAlt } from "react-icons/bi"
import { FaLinkedinIn } from "react-icons/fa"
import { RiTwitterXLine } from "react-icons/ri"
import { FaFacebookF } from "react-icons/fa"
import { BLOG_CARDS } from "@/constants"
import React from "react"
import Image from "next/image"

import BlogContent from "@/components/blog/BlogContent"
import cn from "@/utils/tailwind"
import FeaturedBlogs from "@/components/blog/FeaturedBlogs"
import GotoTop from "@/components/GotoTop"

const PostPage = ({ params }: { params: { id: string } }) => {
  const blog = BLOG_CARDS.find((blog) => String(blog.id) === params.id)
  const title = blog?.title ?? ""
  const tag = blog?.tag ?? ""
  console.log(blog)
  return (
    <section className="max-container w-full min-h-screen flex flex-col px-4 lg:px-20 pt-6 sm:pt-10 relative">
      <div className=" w-full  flex flex-col md:flex-row justify-between h-[409px] gap-[48px]">
        <div className="flex flex-col h-full items-start justify-between w-full   ">
          <p className="text-sm font-medium">
            Latest {">"} <span className="capitalize">{blog?.label}</span>
          </p>
          <h1
            className={cn(
              " ",
              title.length > 30
                ? "text-2xl lg:text-4xl xl:text-5xl"
                : "text-3xl lg:text-5xl"
            )}
          >
            {title}
          </h1>
          <div className="flex md:flex-col md:gap-y-5 max-md:w-full max-md:justify-between gap-y-2 mt-5 md:mt-0">
            <div>
              <p>
                By <b>Avi + Chat</b>
              </p>
              <p>
                Oct 10, 2023 • <span>{blog?.time}</span>
              </p>
            </div>
            <div className="flex flex-col md:gap-y-5 gap-y-2">
              <strong>Share this post</strong>
              <div className="flex items-center gap-x-5 cursor-pointer">
                <span className="rounded-full p-2 bg-[#F4F4F4]">
                  <BiLinkAlt />
                </span>
                <span className="rounded-full p-2 bg-[#F4F4F4]">
                  <FaLinkedinIn />
                </span>
                <span className="rounded-full p-2 bg-[#F4F4F4]">
                  <RiTwitterXLine />
                </span>
                <span className="rounded-full p-2 bg-[#F4F4F4]">
                  <FaFacebookF />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex   flex-shrink-0">
          <Image
            src={blog?.image ?? ""}
            alt="blog image"
            width={768}
            height={409}
          />
        </div>
      </div>

      <BlogContent
        title={blog?.title}
        image={blog?.image}
      />
      <FeaturedBlogs
        id={blog?.id}
        tag={tag}
      />

      <GotoTop />
    </section>
  )
}

export default PostPage
