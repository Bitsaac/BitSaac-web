import React from "react"
import Image from "next/image"
import ourwork from "../../../../public/ourwork.png"
import brand from "../../../../public/branding.png"
function Services() {
  return (
    <div className="sm:px-16 2xl:px-0 sm:py-28 px-4 pt-8">
      <h4 className="sm:text-[18px] text-base font-medium ">Collectively</h4>
      <h3 className="font-bold sm:text-[48px] text-[36px] leading-[43px]">
        Services we provide for you
      </h3>
      <p className="sm:w-[586px] w-full leading-6 text-[#000] mt-6">
        At BitSaac, we offer comprehensive product design and development
        solutions to bring your ideas to life
      </p>
      <div className="grid gap-8 sm:grid-cols-2 grid-cols-1 mt-10 sm:mt-20">
        <div className="w-full bg-white shadow-[0_7px_15px_0px_rgba(154,154,154,0.10)] sm:px-6 2xl:px-0 sm:pt-12">
          <div className="flex flex-1 flex-col ">
            <h4 className="text-[18px] sm:font-medium font-semibold ">
              Services
            </h4>
            <h3 className="font-bold sm:text-[48px] text-[24px]">
              Web & Mobile Development
            </h3>
            <p className="sm:w-[586px] w-full leading-6 text-[#000]">
              Seamless frontend, backend, DevOps, and DBMS engineering for
              impactful digital experiences.
            </p>
            <p className="py-4">Read More</p>
            <Image
              src={ourwork}
              alt="ourwork"
            />
          </div>
        </div>
        <div className="w-full">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
            <div className="w-full shadow-[0_7px_15px_0px_rgba(154,154,154,0.10)] sm:p-6 p-4">
              <Image
                src={brand}
                alt="brand"
              />
              <div className="">
                <h3 className="sm:text-[24px] text-[18px] font-bold sm:mt-10 mt-6">
                  Branding
                </h3>
                <h5 className="mt-2 text-sm w-[256px] leading-[21px]">
                  Craft a compelling brand identity that captivates your
                  audience.
                </h5>
                <h5 className="sm:mt-[92px] mt-4">Read More</h5>
              </div>
            </div>
            <div className="w-full shadow-[0_7px_15px_0px_rgba(154,154,154,0.10)] sm:p-6 p-4">
              <Image
                src={brand}
                alt="brand"
              />
              <div className="">
                <h3 className="sm:text-[24px] text-[18px] font-bold sm:mt-10 mt-6">
                  Branding
                </h3>
                <h5 className="mt-2 text-sm w-[256px] leading-[21px]">
                  Craft a compelling brand identity that captivates your
                  audience.
                </h5>
                <h5 className="sm:mt-[92px] mt-4">Read More</h5>
              </div>
            </div>
            <div className="w-full shadow-[0_7px_15px_0px_rgba(154,154,154,0.10)] sm:p-6 p-4">
              <Image
                src={brand}
                alt="brand"
              />
              <div className="">
                <h3 className="sm:text-[24px] text-[18px] font-bold sm:mt-10 mt-6">
                  Branding
                </h3>
                <h5 className="mt-2 text-sm w-[256px] leading-[21px]">
                  Craft a compelling brand identity that captivates your
                  audience.
                </h5>
                <h5 className="sm:mt-[92px] mt-4">Read More</h5>
              </div>
            </div>
            <div className="w-full shadow-[0_7px_15px_0px_rgba(154,154,154,0.10)] sm:p-6 p-4">
              <Image
                src={brand}
                alt="brand"
              />
              <div className="">
                <h3 className="sm:text-[24px] text-[18px] font-bold sm:mt-10 mt-6">
                  Branding
                </h3>
                <h5 className="mt-2 text-sm w-[256px] leading-[21px]">
                  Craft a compelling brand identity that captivates your
                  audience.
                </h5>
                <h5 className="sm:mt-[92px] mt-4">Read More</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
