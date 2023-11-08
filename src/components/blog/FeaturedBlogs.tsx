import { BLOG_CARDS } from "@/constants";
import React from "react";
import BlogCard from "./BlogCard";
import Link from "next/link";
import cn from "@/utils/tailwind";

const FeaturedBlogs = ({ id, tag }: { id?: number; tag?: string }) => {
  const featuredBlogs = BLOG_CARDS.filter((blog) => {
    return blog.tag === tag && blog.id !== id;
  });
  return (
    <section className="mt-10 md:mt-40 flex w-full flex-1 flex-col gap-y-5">
      <div className="flex flex-col gap-y-5">
        <p className="font-bold">Latest</p>
        <div className="flex w-full justify-between">
          <h3 className="font-bold text-2xl sm:text-3xl lg:text-4xl ">
            Featured Resources List
          </h3>
          <Link
            href="/blog"
            className="text-primary font-bold border border-primary px-2 py-1 rounded sm:hidden block"
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
      <div
        className={cn(
          "pt-10 grid grid-cols-1 sm:grid-cols-2  gap-4 sm:gap-8 lg:gap-12 w-full max-sm:place-items-center slideUp ",
          featuredBlogs.length > 2 ? "md:grid-cols-3" : "md:grid-cols-2",
        )}
      >
        {featuredBlogs.map((card) => (
          <BlogCard icon key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedBlogs;
