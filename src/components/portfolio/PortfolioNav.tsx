"use client";

import { useEffect, useRef, useState } from "react";
import { BLOG_NAVS, BlogNavProps } from "@/constants";
import cn from "@/utils/tailwind";
import { useRouter } from "next/navigation";
import { useContentCtx } from "@/context/ContentContext";

const PortfolioNav = () => {
  const { activeTab, setActiveTab } = useContentCtx();
  const router = useRouter();
  const activeTabRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setActiveTab("all");
  }, [setActiveTab]);

  useEffect(() => {
    router.push(`/portfolios?action=${activeTab}`);

    // Scroll to the active tab if it's not in view
  }, [activeTab, router]);

  return (
    <nav className=" overflow-x-scroll w-full select-none sticky top-0 py-2 z-10 bg-white/70 backdrop-blur-xl left-0 mb-2">
      <div className="flex gap-x-2 sm:gap-x-4 lg:gap-x-8 w-full justify-center   max-[600px]:min-w-[500px]  px-2">
        {BLOG_NAVS.map((nav: BlogNavProps) => (
          <button
            key={nav.id}
            type="button"
            className={cn(
              "text-[12px] min-[500px]:text-sm font-semibold  p-1 min-[698px]:p-2 rounded sm:rounded-lg  w-full max-[624px]:min-w-[100px] max-[500px]:min-w-fit sm:w-fit ",
              nav.action === activeTab
                ? "border border-primary text-primary"
                : "text-gray-800/90",
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

export default PortfolioNav;
