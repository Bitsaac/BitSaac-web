import React from "react"
import Image from "next/image"
import Flow from "@/assets/image 1.png"
import Tablike from "@/assets/Vector1.png"

const Services = () => {
  return (
    <div className=" py-20 px-6 lg:px-20 xl:px-20 md:px-12 justify-center items-center">
      <div className=" xl:w-[650px]">
        <h6 className=" font-Inter font-bold text-sm">What we offer</h6>
        <h1 className=" font-Inter text-4xl py-2">
          Services We Provide For You{" "}
        </h1>
        <p>
          We have created a system that allows us to easily monitor our user’s
          issues while keeping efficiency with the analysis of the data usage.
        </p>
      </div>
      <div className="  py-8 xl:flex block md:flex gap-12  lg:w-[1600px] xl:w-[1600px] w-80 mx-auto ">
        <div className="bg-[#FAFAFA] rounded-xl w-[340px] lg:w-[480px] xl:w-[480px] md:w-[480px]">
          <div className=" py-5 px-12 ">
            <p className=" font-Inter text-[15px]">Services</p>
            <h1 className="text-[18px] pb-2 md:text-[26px] md:pb-2 xl:text-[26px] xl:pb-2 lg:text-[26px] lg:pb-2">
              Web & Mobile Development
            </h1>
            <p className=" font-Inter text-[12px]">
              Seamless frontend, backend, DevOps, and DBMS engineering for
              impactful digital experiences.
            </p>
            <p className=" font-Inter font-medium py-3 pt-5">Read more &gt;</p>
            <Image
              className=" py-8"
              src={Flow}
              alt="this is a flow chat "
              width={350}
              height={350}
            />
          </div>
        </div>
        <div className="block  pt-5 pl-5 items-center justify-center ml-3">
          <div className=" xl:flex lg:flex sm:block max-[615]:block gap-6 space-x-1 items-center ">
            <div className=" w-64 py-4 bg-[#FAFAFA] px-4 rounded-xl mb-8 justify-center items-center ">
              <Image
                className=" py-4"
                src={Tablike}
                alt="this is a flow chat "
                width={30}
                height={10}
              />
              <h3 className=" font-Inter font-semibolds py-2 ">Branding</h3>
              <p className=" font-Inter text-[10px] pb-4">
                Craft a compelling brand identity that captivates your audience.
              </p>
              <p className=" font-Inter pb-4"> Read more </p>
            </div>
            <div className=" w-64 py-4 hover:bg-[#FAFAFA] border px-4 rounded-xl ">
              <Image
                className=" py-4"
                src={Tablike}
                alt="this is a flow chat "
                width={30}
                height={10}
              />
              <h3 className=" font-Inter font-semibolds py-2 ">
                Product Design
              </h3>
              <p className=" font-Inter text-[10px] pb-4">
                Craft a compelling brand identity that captivates your audience.
              </p>
              <p className=" font-Inter pb-4"> Read more </p>
            </div>
          </div>
          <div className=" lg:flex xl:flex block gap-6 pt-8">
            <div className=" w-64 py-4 hover:bg-[#FAFAFA] border px-4 rounded-xl mb-6 ">
              <Image
                className=" py-4"
                src={Tablike}
                alt="this is a flow chat "
                width={30}
                height={10}
              />
              <h3 className=" font-Inter font-semibolds py-2 ">
                Product Managment
              </h3>
              <p className=" font-Inter text-[10px] pb-4">
                Craft a compelling brand identity that captivates your audience.
              </p>
              <p className=" font-Inter pb-4"> Read more </p>
            </div>
            <div className="  w-64 py-4 hover:bg-[#FAFAFA] border px-4 rounded-xl ">
              <Image
                className=" py-4"
                src={Tablike}
                alt="this is a flow chat "
                width={30}
                height={10}
              />
              <h3 className=" font-Inter font-semibolds py-2 ">
                Sales & Markering Strategies
              </h3>
              <p className=" font-Inter text-[10px] pb-4">
                Craft a compelling brand identity that captivates your audience.
              </p>
              <p className=" font-Inter pb-4"> Read more </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
