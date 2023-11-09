"use client";
import { useEffect, useState, RefObject } from "react";

export type UseInView = <T extends Element>(ref: RefObject<T>) => boolean;

const useInView: UseInView = (ref) => {
  const [isViewing, setIsViewing] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entries]) => {
      if (entries && entries) {
        // Check if entries array and first entry exist
        setIsViewing(entries.isIntersecting);
      }
    });
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
      return () => {
        observer.unobserve(currentRef);
      };
    }
  }, [ref]);

  return isViewing;
};

export default useInView;
