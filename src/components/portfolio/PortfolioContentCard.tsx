import { PortfolioContentProps } from "@/constants";
import Image from "next/image";
import React from "react";

const PortfolioContentCard = ({
  title,
  descriptions,
  image,
}: PortfolioContentProps) => {
  return (
    <div className="w-full  flex-col flex ">
      <div className="flex justify-between w-full gap-x-5 lg:gap-x-7 xl:gap-x-8">
        <div className="flex w-1/2">
          <h2 className="text-2xl lg:text-4xl">{title}</h2>
        </div>
        <div className="flex flex-col gap-y-5 w-1/2">
          {descriptions.map((description: string) => (
            <p className="text-gray-600" key={description}>
              {description}
            </p>
          ))}
        </div>
      </div>
      <div className="w-full mt-10 md:mt-20">
        <Image src={image} width={1000} height={500} alt="illustration" />
      </div>
    </div>
  );
};

export default PortfolioContentCard;
