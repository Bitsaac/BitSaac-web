"use client";
import { useState, useEffect } from "react";
const useWindowHeight = () => {
  const [scrollY, setScrollY] = useState(0);
  console.log(scrollY);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollY;
};

export default useWindowHeight;
