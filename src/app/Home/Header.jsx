import Image from "next/image"
import React from "react"
import HeaderImg from "@/assets/header.png"

const Header = () => {
  return (
    <div className="flex sm:flex-row flex-col items-center justify-between gap-10 px-36 py-10">
      <div className="sm:w-[600px] w-full flex flex-col gap-[24px]">
        <h1 className=" text-5xl">Bringing Ideas to Life <br /> Through Tech <br/>Innovation </h1>
        <h3>
          BitSaac is an innovative tech agency and community of tech <br /> creatives.
          We offer web and mobile app development, <br /> UI/UX design, and more.
        </h3>
        <span className="mt-[16px] block items-center gap-[16px] md:flex lg:flex">
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
          width={400}
          height={540}
          className="flex shrink-0"
        />
      </span>
    </div>
  )
}

export default Header
