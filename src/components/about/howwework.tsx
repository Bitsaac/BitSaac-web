import { Innovation } from "@/app/(Public-Routes)/about/aboutItems";
import Image from "next/image";
import React from "react";

const Howwework = () => {
  return (
    <div className="py-[4rem] lg:py-[7rem] font-Inter px-[1.25rem] bg-[url('/mobileBackImage.png')] md:bg-[url('/backImage.png')] bg-cover bg-center text-white md:px-[32px] xl:px-[64px]">
      <h2 className="text-center text-[2rem] lg:text-[3rem] md:text-start text-white font-bold tracking-wide capitalize">
        how we work
      </h2>
      <div className="md:flex md:justify-center md:gap-[1rem]">
        {Innovation().map((item) => (
          <div key={item.id} className={`mt-[3rem] lg:mt-[5rem]`}>
            <div className="flex items-start mb-4">
              <Image src={item.img} width={50} height={50} alt={item.title} />
              <div className="flex flex-col self-end pt-4 ml-[-10px]">
                <span className="mb-0 text-[1rem] md:text-[.8rem] lg:text-[1.2rem] lg:font-medium leading-4 font-semibold">
                  {item.span}
                </span>
                <h3 className="mt-0 leading-none text-[2rem] md:text-[1.3rem] lg:text-[1.5rem] font-semibold">
                  {item.title}
                </h3>
              </div>
            </div>
            <p className="text-[1rem] md:text-[.7rem] lg:text-[1rem] font-normal mb-[1.5rem]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Howwework;
