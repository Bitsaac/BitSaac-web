"use client";

import { useEffect, useRef, useState } from "react";
import { BLOG_NAVS, BlogNavProps } from "@/constants";
import cn from "@/utils/tailwind";
import { useRouter } from "next/navigation";
import { useBlogCtx } from "@/context/BlogContext";

const BlogNav = () => {
	const { activeTab, setActiveTab } = useBlogCtx();
	const router = useRouter();
	const activeTabRef = useRef<HTMLButtonElement | null>(null);

	useEffect(() => {
		setActiveTab("all");
	}, [setActiveTab]);

	useEffect(() => {
		router.push(`/blog?action=${activeTab}`);

		// Scroll to the active tab if it's not in view
	}, [activeTab, router]);

	return (
		<nav className=" overflow-x-scroll w-full select-none">
			<div className="flex gap-x-2 sm:gap-x-4 lg:gap-x-8 w-full justify-between max-[540px]:min-w-[500px] max-[500px]:min-w-[450px] mb-2 px-2">
				{BLOG_NAVS.map((nav: BlogNavProps) => (
					<button
						key={nav.id}
						type="button"
						className={cn(
							"text-[12px] min-[500px]:text-sm font-semibold  p-1 min-[698px]:p-2.5 rounded sm:rounded-lg max-sm:w-fit ",
							nav.action === activeTab
								? "border border-gray-700 text-gray-800"
								: "text-gray-800/90"
						)}
						ref={nav.action === activeTab ? activeTabRef : null}
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
