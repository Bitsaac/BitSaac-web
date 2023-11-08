"use client";
import { useState, useEffect } from "react";
const useWindowHeight = () => {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			if (typeof window !== "undefined") {
				setScrollY(window.scrollY);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return scrollY;
};

export default useWindowHeight;
