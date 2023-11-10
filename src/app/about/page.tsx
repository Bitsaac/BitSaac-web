"use client"
/* eslint-disable react/no-unescaped-entities */
import Button from "@/components/button/Button"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { AllImages, Experience, Innovation, Team } from "./aboutItems"
import { AiFillLinkedin } from "react-icons/ai"
import { RiTwitterXFill } from "react-icons/ri"
import { BiBasketball } from "react-icons/bi"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

const About = () => {
  const [value, setValue] = useState("")
  const handleChange = () => setValue(value)
  return (
    // @gafaradetunji there's max width container class in global.css
    <div className="max-container">
      {/* ABOUT HERO SECTION */}
      <div className={"relative h-[600px]"}>
        <video
          src={"/backvideo.mp4"}
          autoPlay
          loop
          muted
          className="inset-0 z-0 w-full h-full object-cover"
        />
        <div className="font-Roboto z-10 absolute inset-0 text-white py-[4rem] xl:py-[7rem] px-[1.25rem] sm:px-[64px] bg-[rgba(0,0,0,0.5)]">
          <div className={"md:w-[70%] transition-all duration-200 slideUp"}>
            <h2 className="text-[1rem] font-medium mb-[.75rem] slideUp">Innovative</h2>
            <p className="text-[2.5rem] font-semibold mb-[1.25rem]">
              Bringing Ideas to Life
            </p>
            <p className="font-Inter text-[1rem] font-normal mb-[.5rem] md:w-[85%] ">
              BitSaac is an innovative tech agency and community of tech
              creatives, dedicated to bringing ideas to life through product
              design and development.
            </p>
            <div className="py-[1rem] sm:flex sm:gap-[1rem] sm:items-center">
              <input
                type="text"
                className="p-[.75rem] bg-white sm:w-64 rounded-md sm:h-[40px] w-full placeholder:text-[#505050]"
                placeholder="Enter Email here..."
                value={value}
                onChange={handleChange}
              />
              <Button className="bg-primary rounded-md w-full sm:w-32 my-[1rem] ">
                Get Started
              </Button>
            </div>
            <span className="text-[.95rem] lg:text-[1.2rem] font-normal md:w-[85%]">
              By clicking the button, you're confirming that you agree with our
              <span className="font-semibold"> Terms and Conditions.</span>
            </span>
          </div>
        </div>
      </div>

      <div className="lg:relative">
        {/* ABOUT SECTION */}
        <div className="py-[4rem] lg:py-[7rem] lg:pb-[10rem] px-[1.25rem] font-Inter sm:px-[64px] ">
          <div className="lg:flex lg:gap-[3rem]">
            <div className="md:w-[70%] lg:w-[50%]">
              <p className="text-[1.75rem] lg:text-[2rem] xl:text-[3rem] font-Raleway font-bold leading-tight mb-[1.5rem]">
                Innovative Tech Agency Delivering Exceptional Results for
                Clients
              </p>
              <p className="font-normal text-[1rem] lg:text-[1.2rem]">
                BitSaac is an innovative tech agency committed to delivering
                exceptional results for our clients. With a strong focus on
                product design and development, we bring ideas to life and help
                businesses achieve their goals.
              </p>
            </div>
            <div className="py-[2rem] flex items-center justify-between gap-[1rem] overflow-x-auto lg:flex-wrap lg:w-[50%] xl:w-[40%]">
              <Image
                src="/Vector.svg"
                alt=""
                width={200}
                height={200}
                className="w-[9.7rem] bg-black rounded-md"
              />
              {AllImages().map((item) => (
                <Image
                  key={item.id}
                  src={item.img}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="w-[9.7rem]"
                />
              ))}
            </div>
          </div>
        </div>
        <Button className="bg-primary rounded-md text-white my-[1rem] mx-[1.25rem] md:mx-[64px] lg:absolute lg:top-[22%] xl:top-[15%]">
          Talk to us
        </Button>

        {/* PROCESS SECTION */}
        <div className="py-[4rem] lg:py-[7rem] font-Inter px-[1.25rem] bg-[url('/mobileBackImage.png')] md:bg-[url('/backImage.png')] bg-cover bg-center text-white sm:px-[64px]">
          <h2 className="text-center text-[2rem] lg:text-[3rem] md:text-start text-white font-bold tracking-wide capitalize">
            how we work
          </h2>
          <div className="md:flex md:justify-center md:gap-[1rem]">
            {Innovation().map((item) => (
              <div
                key={item.id}
                className={`mt-[3rem] lg:mt-[5rem]`}
              >
                <div className="flex items-start mb-4">
                  <Image
                    src={item.img}
                    width={50}
                    height={50}
                    alt={item.title}
                  />
                  <div className="flex flex-col self-end pt-4 ml-[-10px]">
                    <span className="mb-0 text-[1rem] md:text-[.8rem] lg:text-[1.2rem] lg:font-medium leading-4 font-semibold">
                      {item.span}
                    </span>
                    <h3 className="mt-0 leading-none text-[2rem] md:text-[1.3rem] lg:text-[1.5rem] font-semibold">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <p className="text-[1rem] md:text-[.7rem] lg:text-[1rem] font-normal mb-[1.5rem]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* EXPERIENCE SECTION */}
        <div className="py-[4rem] xl:py-[7rem] font-Inter px-[1.25rem] sm:px-[64px] md:flex md:justify-between md:gap-[1rem] xl:gap-[5rem]">
          <Image
            src="/group.png"
            alt="The team"
            width={200}
            height={200}
            className="w-full md:w-[50%]"
          />
          <div className="mt-[3rem] md:mt-0 md:w-[50%]">
            <h3 className="mb-[1.25rem] text-[2rem] md:text-[1.2rem] lg:text-[2rem] xl:text-[2.5rem] xl:leading-tight font-bold">
              Experience the Power of BitSaac: Tech Experts Dedicated to Your
              Success
            </h3>
            <p className="text-[1rem] md:text-[.8rem] lg:text-[1rem] xl:text-[.9rem] font-normal mb-[1.5rem] md:mb-[.7rem]">
              At BitSaac, we bring together a team of experienced tech creatives
              with diverse skillsets to deliver exceptional results for our
              clients. We are dedicated to your success and strive to bring your
              ideas to life through innovative product design and development.
            </p>
            <div className="md:flex md:gap-[1rem]">
              {Experience().map((item) => (
                <div
                  key={item.id}
                  className="mt-[1.5rem] md:mt-[1rem] py-[.5rem]"
                >
                  <h4 className="text-[1.25rem] md:text-[1rem] lg:text-[1.25rem] xl:text-[1.5rem] font-bold mb-[.75rem]">
                    {item.title}
                  </h4>
                  <p className="text-[1rem] font-normal md:text-[.8rem] lg:text-[1rem] xl:text-[.85rem]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/*INNOVATIVE  SECTION */}
        <div className="py-[4rem] xl:py-[7rem] font-Inter px-[1.25rem] sm:px-[64px] xl:pr-0 md:flex md:items-center md:gap-[1rem] xl:gap-[6rem]">
          <div className="mb-[3rem] md:mb-0 md:w-[50%]">
            <h3 className="text-[2rem] md:text-[1.2rem] lg:text-[2rem] xl:text-[2.5rem] font-bold leading-tight mb-[1.25rem]">
              BitCommerce: Empowering SMEs with Innovative E-commerce Solutions
            </h3>
            <p className="text-[1rem] md:text-[.8rem] lg:text-[1rem] xl:text-[.9rem] font-normal mb-[.5rem]">
              BitCommerce is a specialized e-commerce platform designed and
              developed by BitSaac to cater specifically to SME businesses. With
              a user-friendly interface and powerful features, BitCommerce helps
              SMEs create, manage, and optimize their online stores, driving
              growth and success in the digital marketplace.
            </p>
            <div className="py-[1rem]">
              <Button className="text-btn-secondary border border-btn-secondary rounded-md font-Roboto text-[1rem] md:text-[.8rem] lg:text-[1rem]">
                Get Started
              </Button>
              <Button className="text-btn-secondary font-Roboto text-[1rem] md:text-[.8rem] lg:text-[1rem]">
                Learn More
              </Button>
            </div>
          </div>
          <Image
            src="/Rectangle.png"
            alt="BitCommerce"
            width={200}
            height={200}
            className="w-full md:w-[50%] xl:hidden"
          />
          <Image
            src="/Rectangle3x.png"
            alt="BitCommerce"
            width={200}
            height={200}
            className="w-full md:w-[50%] hidden xl:block"
          />
        </div>
      </div>

      {/* THE TEAM */}

      <div className="py-[4rem] xl:py-[7rem] font-Inter px-[1.25rem] sm:px-[64px]">
        <h4 className="text-[1rem] font-bold mb-[1rem] leading-tight">
          Innovators
        </h4>
        <h2 className="text-[2rem] font-bold mb-[1.5rem] text-[#2A2738]">
          Meet Our Team
        </h2>
        <p className="text-[1rem] font-normal leading-tight">
          Get to know the talented individuals behind BitSaac
        </p>
        <div className="flex gap-[1rem] overflow-x-auto py-4 scrollbar-w-1">
          {Team().map((item) => (
            <div
              key={item.id}
              className="p-[1rem] min-w-[17.5rem] shadow-md"
            >
              <Image
                src={item.img}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-[50%] mb-[1.5rem]"
              />
              <div className="">
                <h3 className="text-[1.25rem] font-semibold">{item.name}</h3>
                <span className="text-[1rem] font-normal text-textGrey leading-tight mb-[1rem]">
                  {item.position}
                </span>
                <p className="text-[1rem] font-normal leading-tight">
                  {item.desc}
                </p>
                <div className="mt-[1.5rem] flex gap-[1rem] items-center">
                  <Link href={item.linkedin}>
                    <AiFillLinkedin />
                  </Link>
                  <Link href={item.twitter}>
                    <RiTwitterXFill />
                  </Link>
                  <Link href={item.peace}>
                    <BiBasketball />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Button>View All</Button>
        <div></div>
      </div>
    </div>
  )
}

export default About
