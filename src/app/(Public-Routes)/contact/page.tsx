import React, { ReactNode } from "react"
import Form from "./Form"
import { AiOutlineMail } from "react-icons/ai"
import { IoCallOutline } from "react-icons/io5"
import { HiOutlineLocationMarker } from "react-icons/hi"

const Page = () => {
  return (
    <div className="flex xl:flex-row flex-col items-left xl:items-start justify-between px-[16px] sm:px-[64px] py-[48px] sm:py-[64px] xl:gap-0 gap-[32px]">
      <div className="">
        <h3>Get in Touch</h3>
        <h1 className="mt-[16px] mb-[24px] text-[48px] font-Raleway text-[#2A2738]">
          Contact Us
        </h1>
        <h3 className="font-Inter">{`Have any questions or inquiries? We're here to help!`}</h3>
        <div className="mt-[16px] flex flex-col gap-[40px] items-start py-[6px]">
          <TextIcon
            text="admin@bitsaac.com"
            icon={<AiOutlineMail />}
          />
          <TextIcon
            text="+234 703 054 6907"
            icon={<IoCallOutline />}
          />
          <TextIcon
            text="123 Main Street, Anytown, USA"
            icon={<HiOutlineLocationMarker />}
          />
        </div>
      </div>
      <Form />
    </div>
  )
}

export default Page

interface ContactProps {
  text: string
  icon?: ReactNode
}

export const TextIcon: React.FC<ContactProps> = ({ text, icon }) => {
  return (
    <div className="flex items-center gap-[16px]">
      <p className="text-[24px]">{icon}</p>
      <p>{text}</p>
    </div>
  )
}
