"use client"

import React, { useState } from "react"
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri"
import { faqData } from "./FaqsItems"

const Faqs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const toggleAnswer = (index: number) => {
    if (index === activeIndex) {
      setActiveIndex(null)
    } else {
      setActiveIndex(index)
    }
  }

  return (
    <div className="py-[64px] sm:py-[112px] px-[16px] sm:px-[64px] flex flex-col gap-[80px]">
      <span className="flex flex-col items-start font-Roboto gap-[24px]">
        <h2 className="font-Raleway font-semibold md:font-bold text-[1.5rem] md:text-[2.2rem] md:leading-[40px] text-[#2A2738]">
          Frequently Asked Questions
        </h2>
        <h3>Find answers to common questions about BitSaac and BitCommerce.</h3>
      </span>
      <div className="w-full flex flex-col ">
        {faqData.map((item, index) => (
          <li
            key={index}
            className={`flex flex-col border-t ${
              index === faqData.length - 1 ? "" : "border-t"
            } border-black ${activeIndex === index ? " " : " "}`}
          >
            <button
              className="w-full flex items-center justify-between  py-2 "
              onClick={() => toggleAnswer(index)}
            >
              <p className=" ">{item.question}</p>
              {activeIndex === index ? (
                <RiArrowDropUpLine size={35} />
              ) : (
                <RiArrowDropDownLine size={35} />
              )}
            </button>
            {activeIndex === index && (
              <p className="mb-[18px]">{item.answer}</p>
            )}
          </li>
        ))}
      </div>
      <div>
        <h2>Still have Questions?</h2>
        <p className="mt-[16px] mb-[24px]">
          Contact our support team for assistance
        </p>
        <button className="rounded-lg px-[24px] py-[12px] border border-[#4D61F4] text-[#4D61F4]">
          Ask us here
        </button>
      </div>
    </div>
  )
}

export default Faqs
