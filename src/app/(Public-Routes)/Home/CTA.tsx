import React from "react"
import { Container } from "../bit-commerce/page"

const CTA = () => {
  return (
    <div className="bg-[#03236C]">
      <Container className="max-w-[100%] place-content-start gap-7 py-[70px]">
        <div>
          <h4 className="font-Inter font-semibold md:font-bold text-[1.5rem] md:text-[2.2rem] md:leading-[40px] text-[#fff]">
            Transforming Ideas into Tech Solutions
          </h4>
          <p className="font-Inter mt-1 text-white">
            Contact us today to discuss your tech needs or start selling online
          </p>
        </div>
        <div className="flex gap-2 items-end flex-col w-full">
          <div className="w-full flex gap-2">
            <input
              type="text"
              placeholder="Enter email here..."
              className="w-[80%] placeholder-[#505050] pl-3 h-[45px] rounded-lg font-Inter"
            />
            <button className="bg-[#FFC80B] font-Inter text-[15px] h-[45px] rounded-lg min-w-[90px] max-w-[120px]">
              Submit
            </button>
          </div>
          <p className="self-start text-[13px] text-white">
            By clicking submit you&lsquo;re confirming that you agree with our
            Terms and Conditions.
          </p>
        </div>
      </Container>
    </div>
  )
}

export default CTA
