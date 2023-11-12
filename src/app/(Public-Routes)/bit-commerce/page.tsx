import Image from "next/image"
import React from "react"
import PlaceholderImg from "/public/bitCommerce.png"
import OnlineStoreImg from "/public/online-store.png"
import EasyPeasyImg from "/public/easy-peasy.png"

const BitCommerce = () => {
  return (
    <section className="py-6 flex gap-[64px] flex-col">
      <Container>
        <div>
          <p className="font-Roboto text-[0.9rem] font-normal">Empower</p>
          <h4 className="font-extrabold text-[#2A2738] font-Raleway text-[1.8rem]">
            Boost your business
          </h4>
        </div>
        <div>
          <p className="font-Roboto font-extralight">
            BitCommerce is a powerful e-commerce platform designed specifically
            for small and medium-sized businesses. With BitCommerce, you can
            easily create and manage your online store, showcase your products
            to a larger audience, and boost your sales.
          </p>
          <span className="mt-[16px] flex items-center gap-[16px] ">
            <button className="rounded-lg border border-[#4D61F4] text-white px-[24px] py-[12px] bg-[#4D61F4]">
              Get started
            </button>
            {/* <button className="rounded-lg border border-[#4D61F4] text-[#4D61F4] px-[24px] py-[12px] ">
              Talk to us
            </button> */}
            <Talktousbutton />
          </span>
        </div>
      </Container>
      <div className="bg-[#e9ebf8] py-7">
        <Container className="gap-8">
          <div className="flex flex-col md:place-self-center gap-4 mb-4">
            <h4 className="font-Raleway font-semibold md:font-bold text-[1.5rem] md:text-[2.2rem] md:leading-[40px] text-[#2A2738]">
              Simplified Setup and Management: Easily create and manage your
              online store
            </h4>
            <p className="font-Inter text-[#2A2738]">
              BitCommerce provides a user-friendly interface that allows users
              with limited technical knowledge to effortlessly set up and manage
              their online stores. With intuitive controls and step-by-step
              guidance, you can showcase your products, customize your store,
              and start selling in no time.
            </p>
          </div>
          <span className="place-self-center md:place-self-end">
            <Image
              src={PlaceholderImg}
              alt="header"
              quality={100}
              priority
              width={600}
              height={640}
              className="flex shrink-0"
            />
          </span>
        </Container>
      </div>
      <Container className="gap-6">
        <span className="place-self-center max-h-[390px] max-w-[390px] md:place-self-start md:order-1 order-2">
          <Image
            src={OnlineStoreImg}
            alt="header"
            quality={100}
            priority
            width={600}
            height={640}
            className="flex aspect-square shrink-0"
          />
        </span>
        <div className="order-1 flex flex-col gap-5 place-self-center md:order-2">
          <h4 className="font-Raleway font-semibold md:font-bold text-[1.5rem] md:text-[2rem] md:leading-[40px] text-[#2A2738]">
            Create Unique and Visually Appealing Online Stores
          </h4>
          <p>
            With BitCommerce, businesses can easily customize their online
            stores with visually appealing templates, creating a unique and
            engaging shopping experience for their customers.
          </p>
          <div className="flex flex-col md:flex-row justify-between gap-2">
            <span>
              <svg
                width="30"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.6">
                  <path
                    d="M44 26V18C44 8 40 4 30 4H18C8 4 4 8 4 18V30C4 40 8 44 18 44H26"
                    stroke="#2A2738"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M44 26V18C44 8 40 4 30 4H18C8 4 4 8 4 18V30C4 40 8 44 18 44H26"
                    stroke="#2A2738"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M44 26V18C44 8 40 4 30 4H18C8 4 4 8 4 18V30C4 40 8 44 18 44H26"
                    stroke="#2A2738"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M32 38.86L35.16 42L42 34"
                    stroke="#2A2738"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 21V27"
                    stroke="#2A2738"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24 21V27"
                    stroke="#2A2738"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M34 21V27"
                    stroke="#2A2738"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
              <p className="font-bold font-Roboto text-[1.125rem]">
                Easy Setup
              </p>
              <small className="w-full">
                Choose from a wide range of customizable templates to showcase
                your products in style.
              </small>
            </span>
            <span>
              <svg
                width="30"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.6">
                  <path
                    d="M13.7598 36.3002V32.1602"
                    stroke="#2A2738"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M24 36.3V28.02"
                    stroke="#2A2738"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M34.2402 36.2999V23.8599"
                    stroke="#2A2738"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M34.2398 11.7002L33.3198 12.7802C28.2198 18.7402 21.3798 22.9602 13.7598 24.8602"
                    stroke="#2A2738"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M28.3799 11.7002H34.2399V17.5402"
                    stroke="#2A2738"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 44H30C40 44 44 40 44 30V18C44 8 40 4 30 4H18C8 4 4 8 4 18V30C4 40 8 44 18 44Z"
                    stroke="#2A2738"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
              <p className="font-bold font-Roboto text-[1.125rem]">
                Boost Sales
              </p>
              <small className="w-full">
                Create visually appealing online stores that attract customers
                and drive sales.
              </small>
            </span>
          </div>
        </div>
      </Container>
      <Container className="gap-8">
        <div className="flex flex-col md:place-self-center gap-4 mb-4">
          <h4 className="font-Raleway font-semibold md:font-bold text-[1.5rem] md:text-[2.2rem] md:leading-[40px] text-[#2A2738]">
            Seamless Integration with Payment Gateways & Logistics Services
          </h4>
          <p className="font-Inter text-[#2A2738]">
            BitCommerce offers seamless integration with a wide range of payment
            gateways and logistics services, making it easy for businesses to
            manage their online transactions and streamline their shipping
            processes.
          </p>
        </div>
        {/* <span className="place-self-center md:place-self-end">
          <Image
            src={EasyPeasyImg}
            alt="header"
            quality={100}
            priority
            width={600}
            height={640}
            className="flex shrink-0"
          />
        </span> */}
        <span className="place-self-center md:place-self-end max-h-[390px] max-w-[390px]">
          <Image
            src={EasyPeasyImg}
            alt="header"
            quality={100}
            priority
            width={600}
            height={640}
            className="flex aspect-square shrink-0"
          />
        </span>
      </Container>
    </section>
  )
}

export default BitCommerce

import cn from "@/utils/tailwind"
import Talktousbutton from "@/components/Talktousbutton"
export const Container = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "my_container grid grid-cols-1 md:grid-cols-2 gap-3 py-8",
        className !== "" ? className : ""
      )}
    >
      {children}
    </div>
  )
}
