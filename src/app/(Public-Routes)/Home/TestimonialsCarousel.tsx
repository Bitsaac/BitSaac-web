"use client"
import { CUSTOMER_TESTIMONIALS } from "@/constants"
import React from "react"
import HomeCarousel from "./HomeCarousel"
import Image from "next/image"
import AvatarImage from "/public/avatar-image.svg"
import Stars from "@/components/Stars"
import cn from "@/utils/tailwind"

type TestimonialProps = {
  info: string
  id: number
  rating: number
  userName: string
  position: string
}

const TestimonialsCarousel = ({ className }: { className?: string }) => {
  return (
    <div className={cn("my_container", className !== "" ? className : "")}>
      <HomeCarousel
        data={CUSTOMER_TESTIMONIALS}
        component={TestimonialCardWrapper as React.ComponentType<{}>}
        title="Customer testimonials"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        showMoreLink=""
      />
    </div>
  )
}

export default TestimonialsCarousel

const TestimonialCardWrapper = (props: any) => <TestimonialCard {...props} />

const TestimonialCard = ({
  info,
  id,
  rating,
  userName,
  position,
}: TestimonialProps) => (
  <article className="flex gap-5 md:mr-4 flex-col px-4 py-5 border-[#F8F8F8] rounded-lg bg-white hover:bg-[#E9EBF8] border">
    <Stars count={rating} />
    <p>{info}</p>
    <div className="flex gap-3">
      <Image
        src={AvatarImage}
        alt="Avater Image"
        height={56}
        width={56}
        className="rounded-[50%]"
      />
      <div>
        <p className="text-[#0A0A0A] font-Inter font-medium">{userName}</p>
        <small className="text-[#777] font-Inter">{position}</small>
      </div>
    </div>
  </article>
)
