"use client";

import useWindowHeight from "@/hooks/useDimension";
import React from "react";

const GotoTop = () => {
  const scrollY = useWindowHeight();

  console.log(scrollY);

  return <div className="text-4xl text-black"></div>;
};

export default GotoTop;
