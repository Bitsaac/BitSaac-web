import Image from "next/image"
import Header from "@/app/Home/Header"
import { Carousel } from "./Home/Carousel"
import Brand from "./Home/Brand"
import Contact from "./contact/page"
import Faqs from "@/app/faqs/Faqs"
import Banner from "./Home/banner/Banner"

export default function Home() {
  return (
    <div className="">
      <Header />
      <Brand />
      <Carousel />
      <Faqs />
      <Contact />
      <div className="">
        <Banner />
      </div>
    </div>
  )
}
