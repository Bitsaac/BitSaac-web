import Button from "@/components/button/Button"
import Image from "next/image"
import Link from "next/link"
import { whatWeDo } from "./serviceItem"

const Services = () => {
    return(
        <main className="max-container px-[1.25rem] sm:px-[64px]">
            <div className="my-[4rem] md:w-[80%]">
                <h4 
                  className="font-Roboto font-medium text-[1rem]"
                >
                    Innovative
                </h4>
                <h2 
                  className="font-Raleway font-extrabold text-[3.1rem] mb-[1.25rem] capitalize"
                >
                    Exceptional Tech Solutions
                </h2>
                <p className="font-Inter text-[1rem] font-normal">Discover our wide range of services and let us help you achieve your goals.</p>
                <div className="flex gap-[.5rem] font-medium text-[1rem] leading-tight mt-[1rem]">
                    <Button className="text-white bg-primary rounded-md">Talk To Us</Button>
                    <Button className="text-primary border-[1px] border-primary rounded-md">Learn More</Button>
                </div>
            </div>
            <div className="py-[4rem]">
                <div className="mb-[3rem]">
                    <div className="md:flex items-center justify-center gap-[1rem]">
                        <div>
                            <h4 className="font-Roboto text-[1rem] font-normal font-medium">Simplified</h4>
                            <h2 className="font-Inter text-[2rem] md:text-[1.5rem] font-bold capitalize leading-tight">BitCommerce: Empowering SMEs with Powerful E-commerce Solutions</h2>
                        </div>
                        <p className="mt-[1.5rem] text-[1rem] font-normal leading-tight">BitCommerce is a specialized e-commerce platform designed and developed by BitSaac. It provides SMEs with a user-friendly and cost-effective solution to create, manage, and optimize their online stores.</p>
                    </div>
                </div>
                <div className="md:flex gap-[1rem]">
                    {whatWeDo().map(item => (
                        <div 
                          key={item.id} 
                          className="p-[1rem] shadow-md hover:shadow-2xl mb-[1.25rem]"
                        >
                            <Image 
                              src={item.img} 
                              alt={item.title} 
                              width={100} 
                              height={100} 
                              className="w-[30px] h-[30px] mb-[1.5rem]"
                            />
                            <h3 
                              className="font-Inter font-bold text-[1.5rem] leading-tight mb-[1rem] md:text-[1rem] lg:text-[1.5rem]"
                            >
                                {item.title}
                            </h3>
                            <p 
                              className="text-[1rem] font-normal font-Inter leading-tight mb-[3rem] md:text-[.8rem]"
                            >
                                {item.desc}
                            </p>
                            <Link 
                              href="#" 
                              className="text-[1rem] text-primary py-2 px-4"
                            >
                                Get Started
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div 
              className="py-[4rem] md:flex md:gap-[1rem]"
            >
                <div>
                    <h2 
                    className="text-[1.5rem] font-Inter font-bold leading-tight mb-[1.25rem]"
                    >
                        Seamless Integration with Payment Gateways & Logistics Services
                    </h2>
                    <p 
                    className="text-[1.1rem] md:text-[.9rem] font-normal font-Inter leading-tight mb-[3rem]"
                    >
                        BitCommerce offers seamless integration with a wide range of payment gateways and logistics services, making it easy for businesses to manage their online transactions and streamline their shipping processes.
                    </p>
                </div>
                <Image 
                  src="/seamless.png" 
                  alt="" 
                  width={200} 
                  height={200} 
                  className="w-full rounded-md"
                />
            </div>
            <div 
              className="py-[4rem] md:flex md:gap-[1rem] md:items-center"
            >
                <div 
                  className="mb-[3rem] md:w-[50%]"
                >
                    <Image 
                      src="/idea.svg" 
                      alt="" 
                      width={64} 
                      height={64} 
                      className=""
                    />
                    <h2 
                      className="text-[1.5rem] font-Inter font-bold leading-tight"
                    >
                        Why Choose BitSaac for Your Tech Needs?
                    </h2>
                    <p 
                      className="text-[1rem] md:text-[.8rem] font-normal font-Inter leading-tight mb-[2rem]"
                    >
                        At BitSaac, we pride ourselves on our experienced team, cutting-edge technology, and customized solutions for each client. With our expertise and dedication, we deliver exceptional results that help our clients achieve their goals.
                    </p>
                    <Button 
                      className="bg-primary mt-[1rem] font-medium rounded-md font-Inter text-white"
                    >
                        Talk To Us
                    </Button>
                </div>
                <div>
                    <Image 
                      src='/cart.png' 
                      alt="" 
                      width={200} 
                      height={200} 
                      className="w-full rounded-md md:hidden"
                    />
                    <Image 
                      src='/bigCart.png' 
                      alt="" 
                      width={200} 
                      height={200} 
                      className="w-full rounded-md hidden md:block"
                    />
                </div>
            </div>
        </main>
    )
}

export default Services
