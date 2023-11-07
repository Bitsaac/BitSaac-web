"use client";

import { useEffect, useState } from "react";
import { BLOG_NAVS } from "@/constants";
import cn from "@/utils/tailwind";
import { useRouter } from "next/navigation";
import { useBlogCtx } from "@/context/BlogContext";

const BlogNav = () => {
	const { activeTab, setActiveTab } = useBlogCtx();
	const router = useRouter();

	useEffect(() => {
		setActiveTab("all");
	}, [setActiveTab]);
	useEffect(() => {
		router.push(`/blog?action=${activeTab}`);
	}, [activeTab, router]);

	return (
		<nav className=" overflow-x-scroll max-sm:w-full">
			<div className="flex gap-x-2 sm:gap-x-6 lg:gap-x-8 w-fit max-sm:min-w-[500px] mb-2 justify-center">
				{BLOG_NAVS.map((nav: any) => (
					<button
						key={nav.id}
						type="button"
						className={cn(
							"text-[12px] sm:text-base font-semibold  p-1 sm:p-2.5 rounded sm:rounded-lg max-sm:w-fit ",
							nav.action === activeTab
								? "border border-gray-700 text-gray-800"
								: "text-gray-800/90"
						)}
						onClick={() => setActiveTab(nav.action)}
					>
						{nav.label}
					</button>
				))}
			</div>
		</nav>
	);
};

export default BlogNav;
