import Image from "next/image"
import Header from "@/app/Home/Header"
import { Carousel } from "./Home/Carousel"
import Brand from "./Home/Brand"
import Contact from "./contact/page"
import Faqs from "@/app/faqs/Faqs"
import Banner from "./Home/banner/Banner"
import Services from "./Home/Services"

export default function Home() {
  return (
    <main className="max-container">
      <Header />
      <Carousel />
      <Brand />
      <Services />
      <Faqs />
      <Contact />
      <div className="">
        <Banner />
      </div>
    </main>
  )
}
