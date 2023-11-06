import React from "react"
import banner from "@/assets/banner.png"
import Image from "next/image"

const Banner: React.FC = () => {
  return (
    <div className=" px-[16px] my-[64px] sm:px-[64px] sm:my-[112px] flex items-center justify-center relative  w-full">
      <div className=" relative sm:h-[417px] h-[520px]  shrink-0">
        <Image
          src={banner}
          alt="banner"
          objectFit="contain"
          // layout="responsive"
          priority
          quality={100}
          className="z-[-1] sm:h-auto h-[520px]  "
        />
      </div>
      <div className=" px-4  absolute z-[999] lg:w-[768px] w-full font-Inter sm:text-center text-left text-white ">
        <h2 className="font-Inter">Subscribe to Our Newsletter Today</h2>
        <h3 className="mt-[24px]">
          Stay updated with the latest tech and e-commerce insights
        </h3>
        <span className="flex sm:flex-row flex-col items-center gap-[16px] mt-[24px] py-[16px]  w-full justify-center">
          <input
            type="text"
            placeholder="Enter Email here ..."
            className="p-3 rounded-lg outline-0 w-full sm:w-[372px]  text-black"
          />
          <button className="px-[24px] py-[12px] bg-[#FFC80B] rounded-lg w-full sm:w-auto ">
            Submit
          </button>
        </span>
        <p className="text-xs">
          {` By clicking submit you're confirming that you agree with our Terms and
          Conditions.`}
        </p>
      </div>
    </div>
  )
}

export default Banner
