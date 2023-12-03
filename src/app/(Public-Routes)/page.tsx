import Header from "@/app/(Public-Routes)/Home/Header"

import Brand from "./Home/Brand"
import Contact from "./contact/page"
import Faqs from "@/app/(Public-Routes)/faqs/Faqs"
import Banner from "./Home/banner/Banner"
import Services from "./Home/Services"
import CTA from "./Home/CTA"
import BlogsCarousel from "./Home/BlogsCarousel"
import TestimonialsCarousel from "./Home/TestimonialsCarousel"
import dynamic from "next/dynamic"
import LoadingSpinner from "@/components/loaders/LoadingSpinner"

const Carousel = dynamic(() => import("./Home/Carousel"), {
  ssr: false,
  // loading: () => (
  //   <div className="w-full justify-center flex h-[200px] items-center bg-black/20 animate-pulsing">
  //     <LoadingSpinner />
  //   </div>
  // ),
})

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto overflow-x-hidden">
      <Header />

      <Carousel />

      <Brand />
      <Services />
      <CTA />
      <BlogsCarousel />
      <TestimonialsCarousel />
      <Faqs />
      <Contact />
      <Banner />
    </main>
  )
}
