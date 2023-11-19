"use client"
import React from "react"
import HomeCarousel from "./HomeCarousel"
import { BLOG_CARDS } from "@/constants"
import { BlogCardProps } from "@/components/blog/BlogCard"

const BlogsCarousel = () => {
  return (
    <div className="my_container py-[70px]">
      <HomeCarousel
        data={BLOG_CARDS}
        component={BlogCardWrapper as React.ComponentType<{}>}
        title="Stay Updated in Tech"
        desc="Read the latest articles on BitSaac, BitCommerce, and the tech industry"
        showMoreLink="/blog"
      />
    </div>
  )
}

export default BlogsCarousel

const BlogCardWrapper: React.FC<BlogCardProps> = (props) => {
  return <HomeBlogCard {...props} />
}

// import useInView from "@/hooks/useInView"
import Image from "next/image"
// import { useRef } from "react"
import Link from "next/link"
const HomeBlogCard = ({
  label,
  title,
  time,
  desc,
  image,
  id,
  isFeatured,
}: BlogCardProps) => {
  //   const cardRef = useRef<HTMLDivElement>(null)
  //   const isInView = useInView(cardRef)

  return (
    // bg-[#F8F8F8]
    <div className="p-4 flex flex-col gap-2 mr-3 bg-[#F8F8F8] rounded-xl h-fit min-h-[472px]">
      <div className="max-w-[371.62] overflow-hidden max-h-[280]">
        <Image
          src={image}
          alt="header"
          quality={100}
          priority
          width={600}
          height={640}
          className="flex max-w-[371.62] max-h-[280] shrink-0 hover:scale-125 transition-all object-cover hover:duration-1000 duration-300"
        />
      </div>
      <div className="flex flex-col gap-y-2 items-start">
        <div className="flex items-center gap-x-5 text-gray-950 font-semibold w-full">
          <div className="bg-[#F4F4F4] px-2 py-1 rounded-lg capitalize">
            {label}
          </div>
          <div className="text-[#777] text-[0.875rem]">{time}</div>
        </div>
        <h3 className="font-Inter font-semibold text-[1.4rem]">{title}</h3>
        {isFeatured ? (
          <p className="text-[#0A0A0A] font-Inter">
            {desc.length > 70 ? `${desc.slice(0, 70)}...` : desc}
          </p>
        ) : (
          <p className="text-[#0A0A0A] font-Inter">
            {desc.length > 100 ? `${desc.slice(0, 100)}...` : desc}
          </p>
        )}
        <Link
          href={`/blog/${id}`}
          className="mt-3 text-[#4D61F4]"
        >
          Read more
        </Link>
      </div>
    </div>
  )
}
