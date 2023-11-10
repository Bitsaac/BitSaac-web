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
      <div className="flex flex-col sm:flex-row justify-between w-full gap-x-5 lg:gap-x-7 xl:gap-x-8 gap-y-5">
        <div className="flex w-full sm:w-1/2">
          <h2 className="text-2xl lg:text-4xl max-sm:text-center">{title}</h2>
        </div>
        <div className="flex flex-col gap-y-5 w-full sm:w-1/2">
          {descriptions.map((description: string) => (
            <p className="text-gray-600 max-sm:text-center" key={description}>
              {description}
            </p>
          ))}
        </div>
      </div>
      <div className="w-full my-10 md:my-20">
        <Image src={image} width={1400} height={500} alt="illustration" />
      </div>
    </div>
  );
};

export default PortfolioContentCard;
