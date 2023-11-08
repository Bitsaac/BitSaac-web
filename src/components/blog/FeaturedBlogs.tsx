import { BLOG_CARDS } from "@/constants";
import React from "react";
import BlogCard from "./BlogCard";

const FeaturedBlogs = ({ id }: { id?: number }) => {
	const featuredBlogs = BLOG_CARDS.filter((blog) => blog.id !== id);
	return (
		<section className="mt-10 md:mt-40 flex w-full flex-1 flex-col gap-y-5">
			<div className="flex flex-col gap-y-5">
				<p className="font-bold">Latest</p>
				<h3 className="font-bold text-2xl lg:text-4xl">
					Featured Resources List
				</h3>

				<p>Explore our curated collection of valuable resources.</p>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-3  gap-4 sm:gap-8 lg:gap-12 w-full slideUp">
				{featuredBlogs.map((card) => (
					<BlogCard icon key={card.id} {...card} />
				))}
			</div>
		</section>
	);
};

export default FeaturedBlogs;
