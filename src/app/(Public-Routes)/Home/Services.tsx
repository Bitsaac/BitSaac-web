import React from "react"
import Image from "next/image"
import ourwork from "../../../../public/ourwork.png"
import brand from "../../../../public/branding.svg"
import design from "../../../../public/product design.svg"
import product from "../../../../public/product management.svg"
import sales from "../../../../public/saless.svg"
function Services() {
  return (
    <div className="xl:px-16 2xl:px-0 sm:py-28 px-4 pt-8">
      {/* <h4 className="sm:text-[18px] text-base font-medium ">Collectively</h4> */}
      <h3 className="font-bold sm:text-[48px] font-Raleway  text-[32px] leading-[43px]">
        Services we provide for you
      </h3>
      <p className="sm:w-[586px] w-full leading-6 text-[#000] mt-6">
        At BitSaac, we offer comprehensive product design and development
        solutions to bring your ideas to life
      </p>
      <div className="grid gap-8 sm:grid-cols-2 grid-cols-1 mt-10 ">
        <div className="w-full bg-[#FAFAFA] shadow-[0_7px_15px_0px_rgba(154,154,154,0.10)] xl:px-6 2xl:px-0 md:p-4 xl:pt-12">
          <div className="flex flex-1 justify-between flex-col ">
            <div>
              {/* <h4 className="text-[18px] sm:font-medium font-semibold ">
              Services
            </h4> */}
              <h3 className="font-bold xl:text-[40px] md:text-[32px]  text-[24px]">
                Web & Mobile Development
              </h3>
              <p className="xl:w-[586px] w-full leading-6 text-[#000]">
                Seamless frontend, backend, DevOps, and DBMS engineering for
                impactful digital experiences.
              </p>
              <p className="py-4">Read More</p>
            </div>
            <div className="flex justify-end items-end">
              <Image
                src={ourwork}
                alt="ourwork"
                className=""
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
            <div className="w-full hover:bg-[#FAFAFA] border-[1px] border-[#F8F8F8] rounded-lg shadow-[0_7px_15px_0px_rgba(154,154,154,0.10)] xl:p-6 p-4">
              <Image
                src={brand}
                alt="brand"
              />
              <div className="">
                <h3 className="xl:text-[24px] md:text-[20px] text-[18px] font-bold xl:mt-5 mt-6">
                  Branding
                </h3>
                <h5 className="mt-2 text-sm xl:w-[256px] leading-[21px]">
                  Craft a compelling brand identity that captivates your
                  audience.
                </h5>
                <h5 className="xl:mt-[92px] mt-4">Read More</h5>
              </div>
            </div>
            <div className="w-full hover:bg-[#FAFAFA] border-[1px] border-[#F8F8F8] rounded-lg shadow-[0_7px_15px_0px_rgba(154,154,154,0.10)] xl:p-6 p-4">
              <Image
                src={design}
                alt="brand"
              />
              <div className="">
                <h3 className="xl:text-[24px] md:text-[20px] text-[18px] font-bold xl:mt-5 mt-6">
                  Product Design
                </h3>
                <h5 className="mt-2 text-sm xl:w-[256px] leading-[21px]">
                  From idea to reality, we create intuitive and visually
                  stunning products.
                </h5>
                <h5 className="xl:mt-[92px] mt-4">Read More</h5>
              </div>
            </div>
            <div className="w-full hover:bg-[#FAFAFA] border-[1px] border-[#F8F8F8] rounded-lg shadow-[0_7px_15px_0px_rgba(154,154,154,0.10)] xl:p-6 p-4">
              <Image
                src={sales}
                alt="brand"
              />
              <div className="">
                <h3 className="xl:text-[24px] md:text-[20px] text-[18px] font-bold xl:mt-5 mt-6">
                  Sales & Marketing Strategies
                </h3>
                <h5 className="mt-2 text-sm xl:w-[256px] leading-[21px]">
                  Maximize your reach and impact with winning strategies.
                </h5>
                <h5 className="xl:mt-[92px] mt-4">Read More</h5>
              </div>
            </div>
            <div className="w-full hover:bg-[#FAFAFA] border-[1px] border-[#F8F8F8] rounded-lg shadow-[0_7px_15px_0px_rgba(154,154,154,0.10)] xl:p-6 p-4">
              <Image
                src={product}
                alt="brand"
              />
              <div className="">
                <h3 className="xl:text-[24px] md:text-[20px] text-[18px] font-bold xl:mt-5 mt-6">
                  Product Management
                </h3>
                <h5 className="mt-2 text-sm xl:w-[256px] leading-[21px]">
                  Gain a competitive edge with expert guidance and optimization.
                </h5>
                <h5 className="xl:mt-[92px] mt-4">Read More</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
