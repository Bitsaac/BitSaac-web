import Image from "next/image"
import React from "react"
import HeaderImg from "@/assets/header.png"

const Header = () => {
  return (
    <div className="flex sm:flex-row flex-col items-center justify-between px-6 xl:px-32 lg:px-32 md:px-10 gap-10 py-10">
      <div className="sm:w-[600px] w-full flex flex-col gap-[24px]">
        <h1 className=" lg:text-5xl xl:text-6xl md:text-5xl sm:text-3xl max-sm:text-4xl w-[72]">
          Bringing Ideas to Life Through Tech Innovation{" "}
        </h1>
        <h3 className="w-30">
          BitSaac is an innovative tech agency and community of tech creatives.
          We offer web and mobile app development, UI/UX design, and more.
        </h3>
        <span className="mt-[16px] flex items-center md:flex lg:flex gap-6">
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
