import Header from "@/app/(Public-Routes)/Home/Header"
import { Carousel } from "./Home/Carousel"
import Brand from "./Home/Brand"
import Contact from "./contact/page"
import Faqs from "@/app/(Public-Routes)/faqs/Faqs"
import Banner from "./Home/banner/Banner"
import Services from "./Home/Services"
import CTA from "./Home/CTA"

export default function Home() {
  return (
    <main className="max-container overflow-x-hidden">
      <Header />
      <Carousel />
      <Brand />
      <Services />
      <CTA />
      <Faqs />
      <Contact />
      <div className="">
        <Banner />
      </div>
    </main>
  )
}
