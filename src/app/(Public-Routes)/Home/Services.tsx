import React from "react"
import Image from "next/image"
import Flow from "@/assets/image 1.png"
import Tablike from "@/assets/Vector1.png"
import { services } from "@/data"
import { Container } from "../bit-commerce/page"

const Services = () => {
  return (
    <>
      {/* <div className=" py-20 px-6 lg:px-20 xl:px-20 md:px-12 justify-center items-center">
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
          <div className="bg-[#FAFAFA] rounded-xl w-[340px] lg:w-[480px] xl:w-[480px]">
            <div className=" py-5 px-12 ">
              <p className=" font-Inter text-[15px]">Services</p>
              <h1 className="text-[18px] pb-2 md:text-[26px] md:pb-2 xl:text-[26px] xl:pb-2 lg:text-[26px] lg:pb-2">
                Web & Mobile Development
              </h1>
              <p className=" font-Inter text-[12px]">
                Seamless frontend, backend, DevOps, and DBMS engineering for
                impactful digital experiences.
              </p>
              <p className=" font-Inter font-medium py-3 pt-5">
                Read more &gt;
              </p>
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
          <div className="grid grid-cols-1 sm:grid-cols-auto-fit sm:grid-cols-minmax-15rem">
            {services.map((service, index) => (
              <Service />
            ))}
          </div>
          </div>
        </div>
      </div> */}
      <section>
        <Container className="max-w-[100%]">
          <div>
            <h6 className="font-Inter font-bold text-sm">What we offer</h6>
            <h1 className="font-Inter text-4xl py-2">
              Services We Provide For You
            </h1>
            <p>
              We have created a system that allows us to easily monitor our
              user’s issues while keeping efficiency with the analysis of the
              data usage.
            </p>
          </div>
        </Container>
        <Container className="max-w-[1050px] gap-5">
          <div className="bg-[#FAFAFA] px-6 place-self-center h-fit max-w-[500px] rounded-xl">
            <div className="py-5">
              <p className=" font-Inter text-[15px]">Services</p>
              <h1 className="text-[18px] pb-2 md:text-[26px] md:pb-2 xl:text-[26px] xl:pb-2 lg:text-[26px] lg:pb-2">
                Web & Mobile Development
              </h1>
              <p className=" font-Inter text-[12px]">
                Seamless frontend, backend, DevOps, and DBMS engineering for
                impactful digital experiences.
              </p>
              <p className=" font-Inter font-medium py-3 pt-5">
                Read more &gt;
              </p>
              {/* <span> */}
              <Image
                className="py-8"
                src={Flow}
                alt="this is a flow chat "
                width={370}
                height={370}
              />
              {/* </span> */}
              {/* <div className="relative px-4 h-[350px] w-[100%]">
                <Image
                  src={Flow}
                  alt="header"
                  quality={100}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="h-[100%] w-[100%] object-cover"
                />
              </div> */}
            </div>
          </div>
          <div className="w-full gap-[2rem] responsive_grid">
            {services.map((service, index) => (
              <Service
                service={service}
                key={index}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}

export default Services

type ServiceProps = {
  service: {
    title: string
    desc: string
  }
}
const Service = ({ service }: ServiceProps) => {
  return (
    <div className="py-4 hover:bg-[#FAFAFA] border px-4 rounded-xl">
      <Image
        className=" py-4"
        src={Tablike}
        alt="this is a flow chat "
        width={30}
        height={10}
      />
      <h3 className=" font-Inter font-semibolds py-2 ">{service.title}</h3>
      <p className=" font-Inter text-[10px] pb-4">{service.desc}</p>
      <p className=" font-Inter pb-4"> Read more </p>
    </div>
  )
}
