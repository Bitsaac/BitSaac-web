import Image from "next/image"
import React from "react"

const BitCommerce = () => {
  return (
    // <section className="w-full max-w-[1440px] mx-auto min-h-screen px-4 lg:px-6 overflow-hidden xl:px-8 2xl:px-12 pb-12 lg:pb-16">
    //   bitCommerce
    // </section>
    <section className="px-5 flex flex-col gap-15 sm:px-9 md:px-12 py-6">
      <div className="flex flex-col md:flex-row gap-3 justify-between">
        <div className="w-full">
          <p className="font-Roboto text-[0.9rem] font-normal">Empower</p>
          <h4 className="font-bold font-Roboto text-[1.5rem]">
            Boost your business
          </h4>
        </div>
        <div>
          <p className="font-Roboto font-extralight">
            BitCommerce is a powerful e-commerce platform designed specifically
            for small and medium-sized businesses. With BitCommerce, you can
            easily create and manage your online store, showcase your products
            to a larger audience, and boost your sales.
          </p>
          <span className="mt-[16px] flex items-center gap-[16px] ">
            <button className="rounded-lg border border-[#4D61F4] text-white px-[24px] py-[12px] bg-[#4D61F4]">
              Get started
            </button>
            <button className="rounded-lg border border-[#4D61F4] text-[#4D61F4] px-[24px] py-[12px] ">
              Talk to us
            </button>
          </span>
        </div>
      </div>
      <div className="bg-[#e9ebf8] full__bleed">
        <div>
          <h4></h4>
          <p></p>
        </div>
        <div className="w-full overflow-hidden">
          <Image
            src="/public/placeholder.png"
            width={600}
            height={400}
            alt="blog image"
          />
        </div>
      </div>
    </section>
  )
  //   return <div className="my_container">BitCommerce</div>
}

export default BitCommerce
