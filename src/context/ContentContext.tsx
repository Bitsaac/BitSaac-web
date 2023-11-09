"use client";

import { ActionTypes } from "@/constants";
import { useRouter } from "next/navigation";
import React, { createContext, useEffect, useMemo, useState } from "react";

type BlogCtxProps = ActionTypes;

interface BlogContextProps {
  activeTab: BlogCtxProps;
  portfolioTab: BlogCtxProps;
  setPortfolioTab: React.Dispatch<ActionTypes>;
  setActiveTab: React.Dispatch<ActionTypes>;
}

export const BlogContext = createContext<BlogContextProps>(
  {} as BlogContextProps,
);

const ContentCtxProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeTab, setActiveTab] = useState<ActionTypes>("" as ActionTypes);

  const [portfolioTab, setPortfolioTab] = useState<ActionTypes>(
    "" as ActionTypes,
  );
  const router = useRouter();

  useEffect(() => {
    if ("activeTab" in localStorage) {
      setActiveTab(localStorage.getItem("activeTab") as ActionTypes);
    }

    if ("portfolioTab" in localStorage) {
      setActiveTab(localStorage.getItem("activeTab") as ActionTypes);
    }
  }, []);

  useEffect(() => {
    if (!activeTab) return;
    if (!portfolioTab) return;
    localStorage.setItem("activeTab", activeTab);
    localStorage.setItem("portfolioTab", activeTab);
  }, [activeTab, portfolioTab]);

  const value = useMemo(
    () => ({ activeTab, setActiveTab, portfolioTab, setPortfolioTab }),
    [activeTab, portfolioTab],
  );

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};

export const useContentCtx = () => {
  const ctx = React.useContext(BlogContext);

  if (!ctx)
    throw new Error("useContentCtx must be used within a ContentCtxProvider");

  return ctx;
};

export default ContentCtxProvider;
