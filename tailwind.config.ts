import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        shimmer: "shimmer 1.5s infinite",
        slideUp: "slideUp 1s 0.2s ease forwards",
        loadspin: "loadspin 1.5s linear infinite",
      },
      keyframes: {
        loadspin: {
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        slideUp: {
          "70%": {
            opacity: "0.7",
            transform: "translateY(50)",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        fadeOut: {
          "50%": {
            opacity: "0.7",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      colors: {
        "surface/200": "#FAFAFA",
        primary: "#4D61F4",
        secondary: "#03236C",
        "btn-secondary": "#4D61F4",
        textGrey: "#777",
      },
      backgroundImage: {
        banner: "/banner.png",
        mobileBackground: "/mobileBackImage.png",
        aboutBackground: "/backImage.png",
      },
      fontFamily: {
        Roboto: ["var(--font-roboto)"],
        Inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};

export default config;
