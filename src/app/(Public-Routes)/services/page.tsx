import Button from "@/components/button/Button"
import Image from "next/image"
import Link from "next/link"
import { services } from "./serviceItem"
import Howwework from "@/components/about/howwework"
import Contact from "../contact/page"
import Banner from "../Home/banner/Banner"
import Talktousbutton from "@/components/Talktousbutton"
import CTA from "../Home/CTA"
import TestimonialsCarousel from "../Home/TestimonialsCarousel"

const Services = () => {
  return (
    <main className="max-container mx-auto">
      <div className="my-[4rem] md:w-[80%] px-[1.25rem] md:px-[32px] xl:px-[64px]">
        <h4 className="font-Raleway font-medium text-[1rem]">Innovative</h4>
        <h2 className="font-Raleway font-extrabold text-deepBlue text-[3.1rem] mb-[1.25rem] capitalize">
          Exceptional Tech Solutions
        </h2>
        <p className="font-Inter text-[1rem] font-normal">
          Discover our wide range of services and let us help you achieve your
          goals.
        </p>
        <div className="flex gap-[.5rem] md:gap-[1rem] items-center font-medium text-[1rem] leading-tight mt-[1rem]">
          <Talktousbutton className="bg-primary rounded-md text-white my-[1rem]" />
          <Button className="text-primary h-[45px] font-Inter border-[1px] border-primary rounded-md">
            Learn More
          </Button>
        </div>
      </div>
      <div className="py-[4rem] px-[1.25rem] md:px-[32px] xl:px-[64px]">
        <div className="mb-[3rem]">
          <div className="md:flex md:items-center md:justify-center md:gap-[1.5rem] lg:gap-[3rem] xl:gap-[5rem]">
            <h2 className="font-Inter text-[2rem] text-deepBlue xl:text-[3rem] font-bold capitalize leading-tight md:flex-1">
              Streamlined Process for Client Satisfaction
            </h2>
            <p className="mt-[1.5rem] text-[1rem] font-normal leading-tight md:flex-1">
              At BitSaac, we believe in delivering exceptional results and
              ensuring client satisfaction. Our process begins with an initial
              consultation where we understand your requirements and goals. We
              then proceed to design and develop your project, keeping you
              involved at every step. We prioritize open communication and
              collaboration to ensure that the final product meets your
              expectations. Our team of tech experts is dedicated to providing
              you with a seamless experience and delivering a solution that
              exceeds your expectations.
            </p>
          </div>
        </div>
        <div className="md:flex md:gap-[1.5rem] lg:gap-[3rem]">
          {services().map((item) => (
            <Link
              href="#"
              key={item.id}
              className="p-[1rem] shadow-md hover:shadow-2xl mb-[1.25rem] md:w-[30%]"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={100}
                height={100}
                className="w-[30px] h-[30px] mb-[1.5rem]"
              />
              <h3 className="font-Inter font-bold text-[1.5rem] leading-tight mb-[1rem] md:text-[1rem] lg:text-[1.5rem]">
                {item.title}
              </h3>
              <p className="text-[1rem] font-normal font-Inter leading-tight mb-[3rem] md:text-[.8rem]">
                {item.desc}
              </p>
              <Link
                href="#"
                className="text-[1rem] text-primary py-2 px-4"
              >
                Get Started
              </Link>
            </Link>
          ))}
        </div>
      </div>
      <div className="py-[4rem] md:flex md:flex-row-reverse md:gap-[1.5rem] lg:gap-[3rem] xl:gap-[5rem] md:items-center md:justify-between px-[1.25rem] md:px-[32px] xl:px-[64px]">
        <div className="md:flex-1">
          <h4 className="text-[1rem] font-semibold font-Raleway">Empower</h4>
          <h2 className="text-[1.5rem] lg:text-[2.5rem] font-Inter text-deepBlue font-extrabold leading-tight mb-[1.25rem]">
            BitCommerce: Empowering SMEs with Innovative E-commerce Solutions
          </h2>
          <p className="text-[1.1rem] md:text-[.9rem] lg:text-[1.2rem] font-normal font-Inter leading-tight mb-[3rem]">
            BitCommerce is a specialized e-commerce platform designed and
            developed by BitSaac to cater specifically to SME businesses. With a
            user-friendly interface and powerful features, BitCommerce helps
            SMEs create, manage, and optimize their online stores, driving
            growth and success in the digital marketplace.
          </p>
        </div>
        <Image
          src="/seamless.png"
          alt=""
          width={200}
          height={200}
          className="w-full rounded-md md:flex-1"
        />
      </div>

      <Howwework />

      <div className="py-[4rem] md:flex md:gap-[1rem] lg:gap-[3rem] xl:gap-[5rem] md:items-center md:justify-center md:pl-[32px] xl:pl-[64px]">
        <div className="mb-[3rem] md:w-[50%] md:flex-1">
          <Image
            src="/idea.svg"
            alt=""
            width={64}
            height={64}
            className=""
          />
          <h2 className="text-[1.5rem] lg:text-[2.5rem] xl:text-[3rem] font-Inter font-bold leading-tight mb-[1.5rem]">
            Why Choose BitSaac for Your Tech Needs?
          </h2>
          <p className="text-[1rem] md:text-[.8rem] lg:text-[1rem] xl:text-[1.25rem] font-normal font-Inter leading-tight mb-[1.5rem]">
            At BitSaac, we pride ourselves on our experienced team, cutting-edge
            technology, and customized solutions for each client. With our
            expertise and dedication, we deliver exceptional results that help
            our clients achieve their goals.
          </p>
          <Talktousbutton className="bg-primary rounded-md text-white my-[1rem]" />
        </div>
        <div className="md:flex-1">
          <Image
            src="/cart.png"
            alt=""
            width={200}
            height={200}
            className="w-full rounded-md md:hidden"
          />
          <Image
            src="/bigCart.png"
            alt=""
            width={200}
            height={200}
            className="w-full rounded-md hidden md:block"
          />
        </div>
      </div>

      <Contact />
      <Banner />
    </main>
  )
}

export default Services
