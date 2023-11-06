"use client"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useEffect, useState } from "react"
import Image from "next/image"
import webflow from "@/assets/webflow.png"
import black from "@/assets/Black.png"

export function Carousel() {
  const [slidesToShow, setSlidesToShow] = useState(6)

  useEffect(() => {
    const calculateSlidesToShow = () => {
      if (window.innerWidth >= 768) {
        setSlidesToShow(6)
      } else {
        setSlidesToShow(2)
      }
    }

    calculateSlidesToShow()

    window.addEventListener("resize", calculateSlidesToShow)

    return () => {
      window.removeEventListener("resize", calculateSlidesToShow)
    }
  }, [])

  const images = [webflow, black]

  // Duplicate each image 4 times
  const repeatedImages = [
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
  ]

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 2,
    autoplay: true,
    speed: 5000,
    arrows: false,
    autoplaySpeed: 5000,
    cssEase: "linear",
  }

  return (
    <div className="w-full bg-[#03236C]  py-[20px] flex flex-col gap-[24px] sm:gap-[28px]">
      <h3 className="w-full text-center text-white font-Roboto">
        Brands that Trust Us
      </h3>
      <Slider {...settings}>
        {repeatedImages.map((image, index) => (
          <div
            key={index}
            className="w-full"
          >
            <Image
              src={image}
              alt={`Image ${index}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}
