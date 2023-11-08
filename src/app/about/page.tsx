/* eslint-disable react/no-unescaped-entities */
import Button from "@/components/button/Button"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { AllImages, Experience, Innovation } from "./aboutItems"

const About = () => {
  return (
    // @gafaradetunji there's max width container class in global.css
    <div className="max-container">
      {/* ABOUT HERO SECTION */}
      <div className="font-Roboto text-white px-[1.25rem] py-[4rem] bg-[rgba(0,0,0,.5)] sm:px-[64px] ">
        <div className="md:w-[70%]">
          <h2 className="text-[1rem] font-medium mb-[.75rem]">Innovative</h2>
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

      <div className="">
        {/* ABOUT SECTION */}
        <div className="py-[4rem] px-[1.25rem] font-Inter sm:px-[64px] ">
          <h3 className="font-Inter text-[1rem] lg:text-[1.5rem] font-semibold mb-[1rem] text-center">
            About Us
          </h3>
          <div className="lg:flex lg:gap-[3rem]">
            <div className="md:w-[70%] lg:w-[50%]">
              <p className="text-[1.75rem] lg:text-[2rem] font-Roboto font-bold leading-tight mb-[1.5rem]">
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
            <div className="py-[2rem] flex items-center justify-between gap-[1rem] overflow-x-auto lg:flex-wrap lg:w-[50%]">
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
        <Button className="bg-primary rounded-md text-white my-[1rem] mx-[1.25rem] md:mx-[64px]">
          Talk to us
        </Button>

        {/* PROCESS SECTION */}
        <div className="py-[4rem] font-Inter px-[1.25rem] bg-secondary text-white sm:px-[64px] md:flex md:justify-center md:gap-[1rem] ">
          {Innovation().map((item) => (
            <div
              key={item.id}
              className="mt-[3rem]"
            >
              <h3 className="mb-[1rem] text-[1.25rem] md:text-[.8rem] lg:text-[1.25rem] font-semibold">
                {item.title}
              </h3>
              <p className="text-[.97rem] md:text-[.7rem] lg:text-[1rem] font-normal mb-[1.5rem]">
                {item.desc}
              </p>
              <Link
                href={`/`}
                className="text-[1rem] md:text-[.8rem] lg:text-[1.2rem] font-medium text-[#FFC80B]"
              >
                Talk To Us{" "}
                <span className="material-symbols-outlined">
                  arrow_forward_ios
                </span>
              </Link>
            </div>
          ))}
        </div>

        {/* EXPERIENCE SECTION */}
        <div className="py-[4rem] font-Inter px-[1.25rem] sm:px-[64px] md:flex md:justify-between md:gap-[1rem] ">
          <Image
            src="/people.png"
            alt="The team"
            width={200}
            height={200}
            className="w-full md:w-[50%]"
          />
          <div className="mt-[3rem] md:mt-0 md:w-[50%]">
            <h3 className="mb-[1.25rem] text-[2rem] md:text-[1.2rem] lg:text-[2rem] font-bold">
              Experience the Power of BitSaac: Tech Experts Dedicated to Your
              Success
            </h3>
            <p className="text-[1rem] md:text-[.8rem] lg:text-[1rem] font-normal mb-[1.5rem] md:mb-[.7rem]">
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
                  <h4 className="text-[1.25rem] md:text-[1rem] lg:text-[1.25rem] font-bold mb-[.75rem]">
                    {item.title}
                  </h4>
                  <p className="text-[1rem] font-normal md:text-[.8rem] lg:text-[1rem]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/*INNOVATIVE  SECTION */}
        <div className="py-[4rem] font-Inter px-[1.25rem] sm:px-[64px] md:flex md:gap-[1rem] ">
          <div className="mb-[3rem] md:mb-0 md:w-[50%]">
            <h3 className="text-[2rem] md:text-[1.2rem] lg:text-[2rem] font-bold leading-tight mb-[1.25rem]">
              BitCommerce: Empowering SMEs with Innovative E-commerce Solutions
            </h3>
            <p className="text-[1rem] md:text-[.8rem] lg:text-[1rem] font-normal mb-[.5rem]">
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
            className="w-full md:w-[50%]"
          />
        </div>
      </div>
    </div>
  )
}

export default About
