import Image from "next/image"
import React from "react"
import background from "../../../../public/background.png"
import Talktousbutton from "@/components/Talktousbutton"

const Header = () => {
  return (
    <div className="flex sm:flex-row flex-col items-center  xl:px-16 px-4  2xl:px-0 sm:py-0 py-16 sm:h-[85vh] sm:mb-0 mb-10 h-screen ">
      <div className=" flex-1 flex flex-col ">
        <h1 className="sm:text-[56px] text-[40px] font-black leading-[48px] sm:leading-[67px] font-Raleway ">
          Bringing Ideas to Life
          <br className="sm:flex hidden" /> Through Tech{" "}
          <br className="sm:flex hidden" /> Innovation
        </h1>
        <p className="sm:text-[18px] text-base font-normal sm:w-[600px] pt-6 leading-[24px] w-full sm:leading-[27px]">
          BitSaac is an innovative tech agency and community of tech creatives.
          We offer web and mobile app development, UI/UX design, and more.
        </p>
        <div className="flex gap-4 mt-6">
          <Talktousbutton className=" px-6 py-3 bg-[#4D61F4] rounded-[8px] font-medium text-[#fff] font-inter" />
          <button className=" px-6 py-3 border-[1px] border-[#4D61F4] rounded-[8px] font-medium text-[#4D61F4] font-inter">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex flex-1 justify-end sm:mt-0 mt-5">
        <Image
          src={background}
          alt="background"
          className="sm:w-[80%] w-[100%] rounded-2xl"
        />
      </div>
    </div>
  )
}

export default Header
