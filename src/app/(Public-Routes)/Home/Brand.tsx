import Image from "next/image"
import React from "react"
import services from "../../../../public/services.png"

const Brand: React.FC = () => {
  return (

    <div className="">
      <div className="flex sm:flex-row flex-col items-center justify-end xl:pl-16 2xl:px-0 mt-[5%] ">
        <div className=" flex-1 flex flex-col px-4 2xl:px-0">
          {/* <h4 className="text-[18px] font-medium">Our Services</h4> */}
          <h3 className="font-bold sm:text-[48px] font-Raleway  text-[32px]">
            Our Expertise
          </h3>
          <p className="sm:w-[586px] w-full leading-6 text-[#000]">
            At BitSaac, we offer comprehensive product design and development
            solutions to bring your ideas to life
          </p>
          <div className="flex justify-between sm:flex-row flex-col sm:gap-10 gap-6 mt-8">
            <div className="flex flex-col flex-1">
              <h5 className="sm:text-[20px] text-[18px] font-bold  text-[#000] sm:font-semibold">
                Our Agency
              </h5>
              <p className="leading-[24px]">
                Enhance your websites visibility on search engines and attract
                organic traffic with our proven SEO strategies. We optimize your
                sites structure, content, and meta tags to improve rankings and
                drive qualified leads to your business.
              </p>
              <div className="mt-5">
                <h5 className="text-[18px] text-[#4D61F4] font-medium ">
                  Learn more
                </h5>
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <h5 className="sm:text-[20px] text-[18px] font-bold text-[#000] sm:font-semibold">
                Our Agency
              </h5>
              <p className="leading-[24px]">
                Enhance your websites visibility on search engines and attract
                organic traffic with our proven SEO strategies. We optimize your
                sites structure, content, and meta tags to improve rankings and
                drive qualified leads to your business.
              </p>
              <div className="mt-5">
                <h5 className="text-[18px] text-[#4D61F4] font-medium ">
                  Learn more
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-end sm:mt-0 mt-16">
          <Image
            src={services}
            alt="services"
            className=" w-[100%] rounded-2xl"
          />
        </div>
      </div>
    </div>
  )
}

export default Brand
