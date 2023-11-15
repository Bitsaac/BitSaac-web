// "use client"
// import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
// import { Swiper, SwiperSlide } from "swiper/react"
// import "swiper/css"
// import "swiper/css/navigation"

// type HomeCarouselProps = {
//   title: string
//   desc: string
//   showMoreLink: boolean
//   data: any[]
//   component: React.ComponentType
// }

// const HomeCarousel = ({
//   title,
//   desc,
//   showMoreLink,
//   data,
//   component: Component,
// }: HomeCarouselProps) => {
//   //   useEffect(() => {
//   //     console.log(scrollX)
//   //   }, [scrollX])

//   const settings = {
//     breakpoints: {
//       551: { slidesPerView: 2 },
//       800: { slidesPerView: 3 },
//       1000: { slidesPerView: 4 },
//       1601: { slidesPerView: 5 },
//       2000: { slidesPerView: 8 },
//     },
//     spaceBetween: 450,
//     navigation: {
//       nextEl: ".swiper-button-next", // Define the class for your next button
//       prevEl: ".swiper-button-prev", // Define the class for your prev button
//     },
//   }

//   return (
//     <section>
//       <div>
//         <div>
//           <h4>{title}</h4>
//           <p>{desc}</p>
//         </div>
//         <>{showMoreLink && <button></button>}</>
//       </div>
//       <Swiper {...settings}>
//         {data.map((data) => (
//           <SwiperSlide key={data.id}>
//             <Component {...data} />
//           </SwiperSlide>
//         ))}
//         <div className="flex mt-2 justify-between">
//           <p className="swiper-button-prev"></p>
//           <p className="swiper-button-next"></p>
//         </div>
//       </Swiper>
//       {/* <div className="flex mt-2 justify-between">
//         <p></p>
//         <div className="flex gap-3">
//           <button className="border-[#4d61f4] border h-[35px] w-[35px] grid place-content-center rounded-[50%] swiper-button-prev">
//             <AiOutlineArrowLeft className="text-[#4d61f4] text-[1.2rem]" />
//           </button>
//           <button className="border-[#4d61f4] border h-[35px] w-[35px] grid place-content-center rounded-[50%] swiper-button-next">
//             <AiOutlineArrowRight className="text-[#4d61f4] text-[1.2rem]" />
//           </button>
//         </div>
//       </div> */}
//     </section>
//   )
// }

// export default HomeCarousel

// // const CustomPrevArrow = (props: any) => (
// //   <button
// //     {...props}
// //     className="border-[#4d61f4] border h-[35px] w-[35px] flex items-center justify-center rounded-[50%]"
// //     style={{ display: "flex" }}
// //   >
// //     <AiOutlineArrowLeft className="text-[#4d61f4] text-[1.2rem]" />
// //   </button>
// // )

// // const CustomNextArrow = (props: any) => (
// //   <button
// //     {...props}
// //     className="border-[#4d61f4] border h-[35px] w-[35px] flex items-center justify-center rounded-[50%]"
// //     style={{ display: "flex" }}
// //   >
// //     <AiOutlineArrowRight className="text-[#4d61f4] text-[1.2rem]" />
// //   </button>
// // )
"use client"
import { useEffect, useState } from "react"
import AliceCarousel from "react-alice-carousel"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import "react-alice-carousel/lib/alice-carousel.css"
import Link from "next/link"

type HomeCarouselProps = {
  title: string
  desc: string
  showMoreLink: string
  data: any[]
  component: React.ComponentType
}

const HomeCarousel = ({
  title,
  desc,
  showMoreLink,
  data,
  component: Component,
}: HomeCarouselProps) => {
  const responsive = {
    0: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
  }

  const items: any = []

  data.map((item, index) =>
    items.push(
      <div key={index}>
        <Component {...item} />
      </div>
    )
  )

  return (
    <section className="flex gap-6 flex-col">
      <div className="flex justify-between">
        <div>
          <h4 className="font-Raleway font-semibold md:font-bold text-[1.5rem] md:text-[2.2rem] md:leading-[40px] text-[#2A2738]">
            {title}
          </h4>
          <p className="text-[#0A0A0A] font-Inter text-[1.1rem] mt-3">{desc}</p>
        </div>
        <div className="self-end">
          {showMoreLink !== "" && (
            <Link
              className="rounded-lg border border-[#4D61F4] text-[#4D61F4] px-[24px] h-[40px] grid place-content-center"
              href={showMoreLink}
            >
              View all
            </Link>
          )}
        </div>
      </div>
      <div className="mt-14 flex justify-center items-center w-full sm:gap-4">
        <AliceCarousel
          mouseTracking
          controlsStrategy="alternate"
          items={items}
          responsive={responsive}
          autoPlay
          autoPlayStrategy="default"
          infinite
          autoPlayInterval={2000}
          renderPrevButton={() => (
            <button className="alice-prev-btn border-[#4d61f4] border h-[35px] w-[35px] rounded-[50%] relative mr-1">
              <AiOutlineArrowLeft className="text-[#4d61f4] text-[1.2rem] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
            </button>
          )}
          renderNextButton={() => (
            <button className="alice-next-btn border-[#4d61f4] border h-[35px] w-[35px] rounded-[50%] relative ml-1">
              <AiOutlineArrowRight className="text-[#4d61f4] text-[1.2rem] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
            </button>
          )}
        />
      </div>
    </section>
  )
}

export default HomeCarousel
