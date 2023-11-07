import Image from "next/image";
import React from "react";

type BlogCardProps = {
	tag: string;
	title: string;
	time: string;
	desc: string;
	image: string;
};

const BlogCard = ({ tag, title, time, desc, image }: BlogCardProps) => {
	return (
		<div className="flex flex-col gap-y-4 w-full max-w-[350px] sm:max-w-[500px] lg:max-w-[500px]">
			<div className="w-full ">
				<Image src={image} width={600} height={400} alt="blog image" />
			</div>
			<div className="flex flex-col gap-y-4">
				<p className="flex items-center  gap-x-5 text-gray-950 font-semibold w-full">
					<span className="bg-[#F4F4F4] px-2 py-1">{tag}</span>
					<span>{time}</span>
				</p>
				<h3>{title}</h3>
				<p>{desc}</p>
			</div>
		</div>
	);
};

export default BlogCard;
