import Image from "next/image"
import React from "react"
import HeaderImg from "@/assets/header.png"

const Header = () => {
  return (
    <div className="flex sm:flex-row flex-col items-center justify-between px-[16px]  py-[64px] sm:px-[80px] sm:py-[112px]  gap-[64px] sm:gap-[80px]">
      <div className="sm:w-[600px] w-full flex flex-col gap-[24px]">
        <h1>Bringing Ideas to Life Through Tech Innovation</h1>
        <h3>
          BitSaac is an innovative tech agency and community of tech creatives.
          We offer web and mobile app development, UI/UX design, and more.
        </h3>
        <span className="mt-[16px] flex items-center gap-[16px] ">
          <button className="rounded-lg border border-[#4D61F4] text-white px-[24px] py-[12px] bg-[#4D61F4]">
            Talk to us
          </button>
          <button className="rounded-lg border border-[#4D61F4] text-[#4D61F4] px-[24px] py-[12px] ">
            Learn More
          </button>
        </span>
      </div>
      <span>
        <Image
          src={HeaderImg}
          alt="header"
          quality={100}
          priority
          width={600}
          height={640}
          className="flex shrink-0"
        />
      </span>
    </div>
  )
}

export default Header
