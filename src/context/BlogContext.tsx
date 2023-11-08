"use client";

import { ActionTypes } from "@/constants";
import { useRouter } from "next/navigation";
import React, { createContext, useEffect, useMemo, useState } from "react";

type BlogCtxProps = ActionTypes;

interface BlogContextProps {
  activeTab: BlogCtxProps;
  setActiveTab: React.Dispatch<ActionTypes>;
}

export const BlogContext = createContext<BlogContextProps>(
  {} as BlogContextProps,
);

const BlogCtxProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeTab, setActiveTab] = useState<ActionTypes>("" as ActionTypes);
  const router = useRouter();

  useEffect(() => {
    if ("activeTab" in localStorage) {
      setActiveTab(localStorage.getItem("activeTab") as ActionTypes);
    }
  }, []);

  useEffect(() => {
    if (!activeTab) return;
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  const value = useMemo(() => ({ activeTab, setActiveTab }), [activeTab]);

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};

export const useBlogCtx = () => {
  const ctx = React.useContext(BlogContext);

  if (!ctx) throw new Error("useBlogCtx must be used within a BlogCtxProvider");

  return ctx;
};

export default BlogCtxProvider;
