"use client"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useEffect, useState } from "react"
import Image from "next/image"

import {
  bitHQ,
  EVUSA,
  plsce,
  Thumbss,
  Projexa,
  Ridgle,
} from "../../../../public"

type BrandImageProps = {
  id: number
  src: string
}
export const brandImages: BrandImageProps[] = [
  { id: 1, src: bitHQ },
  { id: 2, src: EVUSA },
  { id: 3, src: plsce },
  { id: 4, src: Thumbss },
  { id: 5, src: Projexa },
  { id: 6, src: Ridgle },
  { id: 7, src: bitHQ },
  { id: 8, src: EVUSA },
  { id: 9, src: plsce },
  { id: 10, src: Thumbss },
  { id: 11, src: Projexa },
  { id: 12, src: Ridgle },
]

const Carousel = () => {
  const [slidesToShow, setSlidesToShow] = useState(4)

  useEffect(() => {
    const calculateSlidesToShow = () => {
      if (window.innerWidth >= 768) {
        setSlidesToShow(4)
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
    <div className="w-full bg-[#2A2738]  py-[64px] flex flex-col gap-[24px] sm:gap-[28px]">
      <h3 className="w-full text-center text-white font-Roboto text-[48px]">
        Brands that Trust Us
      </h3>
      <Slider {...settings}>
        {brandImages.map((image: BrandImageProps) => (
          <div
            key={image.id}
            className="w-full h-[90px] "
          >
            <Image
              src={image.src}
              alt={`Image ${image.id}`}
              height={90}
              className="  h-[90px]  w-full"
              loading="eager"
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel
