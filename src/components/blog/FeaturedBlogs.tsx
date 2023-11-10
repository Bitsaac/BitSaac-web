"use client";

import { BLOG_CARDS } from "@/constants";
import React, { useRef } from "react";
import BlogCard from "./BlogCard";
import Link from "next/link";
import cn from "@/utils/tailwind";
import useInView from "@/hooks/useInView";

const FeaturedBlogs = ({ id, tag }: { id?: number; tag?: string }) => {
  const featuredRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(featuredRef);

  const featuredBlogs = BLOG_CARDS.filter((blog) => {
    return blog.tag === tag && blog.id !== id;
  });
  return (
    <section
      ref={featuredRef}
      className={cn(
        "mt-10 md:mt-40 lg:pb-20 flex w-full flex-1 flex-col gap-y-5",
        isInView
          ? "opacity-100 translate-y-0 delay-300 duration-1000"
          : " opacity-0 translate-y-20",
      )}
    >
      <div className="flex flex-col gap-y-5">
        <p className="font-bold">Latest</p>
        <div className="flex w-full justify-between">
          <h3 className="font-bold text-xl min-[410px]:text-2xl sm:text-3xl lg:text-4xl ">
            Featured Resources List
          </h3>
          <Link
            href="/blog"
            className="max-[500px]:text-[12px] text-sm  text-primary font-bold border border-primary p-1 rounded sm:hidden block"
          >
            View All
          </Link>
        </div>

        <div className="flex w-full justify-between">
          <p>Explore our curated collection of valuable resources.</p>
          <Link
            href="/blog"
            className="text-primary font-bold border border-primary px-2 py-1 rounded hidden sm:block"
          >
            View All
          </Link>
        </div>
      </div>

      <div className={cn("pt-10 flex overflow-x-auto overflow-y-hidden")}>
        <div
          className={cn(
            "flex justify-start items-start flex-nowrap gap-x-8 w-full  pb-8 slideUp",
          )}
        >
          {featuredBlogs.slice(0, 3).map((card) => (
            <BlogCard isFeatured key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;
