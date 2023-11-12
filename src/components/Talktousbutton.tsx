"use client";
import cn from "@/utils/tailwind";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import PeopleHoldingHandsImg from "/public/people-holding-hands.png";

const Talktousbutton = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 950);
    };

    const handleCloseModal = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    if (isOpen) {
      document.addEventListener("mousedown", handleCloseModal);
    }

    return () => {
      window.removeEventListener("resize", handleResize);

      if (isOpen) {
        document.removeEventListener("mousedown", handleCloseModal);
      }
    };
  }, [isOpen]);

  const handleClick = () => {
    if (isSmallScreen) {
      router.push("talk-to-us");
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={cn(
          "rounded-lg border border-[#4D61F4] text-[#4D61F4] px-[24px] py-[12px]",
          className !== "" ? className : "",
        )}
      >
        Talk to us na
      </button>
      <>
        {isOpen && (
          <div
            className={cn(
              "fixed top-0 left-0 overflow-hidden w-full h-full bg-[rgba(0,0,0,0.8)] flex flex-col items-center justify-center transition-[var(--transition)] invisible z-[-10] backdrop-blur-[1rem]",
              isOpen ? "visible z-19" : "",
            )}
          >
            <div
              ref={modalRef}
              className="bg-white max-w-[970px] px-7 py-7 rounded-xl grid gap-4 grid-cols-2 justify-between max-h-[650px] my_container"
            >
              <div className="flex flex-col gap-2">
                <p className="uppercase font-Inter font-semibold text-[1.1rem]">
                  Let us work
                </p>
                <h4 className="uppercase font-Raleway font-bold text-[2.6rem] leading-10">
                  Together
                </h4>
                <p className="text-[#777]">
                  At Bitsaac, we believe in the power of collaboration. We
                  understand that together, we can achieve more, innovate
                  better, and create lasting impact.
                </p>
                <div className="relative h-[200px] rounded-lg w-[100%]">
                  <Image
                    src={PeopleHoldingHandsImg}
                    alt="header"
                    quality={100}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="h-[100%] w-[100%] rounded-lg object-cover"
                  />
                </div>
                <p className="font-Inter flex gap-2 items-center text-[1.1rem] font-light">
                  Fill the following form and lets get talking{" "}
                  <svg
                    width="40"
                    height="16"
                    viewBox="0 0 40 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M39.7071 8.44734C40.0976 8.05682 40.0976 7.42365 39.7071 7.03313L33.3431 0.669167C32.9526 0.278642 32.3195 0.278642 31.9289 0.669167C31.5384 1.05969 31.5384 1.69286 31.9289 2.08338L37.5858 7.74023L31.9289 13.3971C31.5384 13.7876 31.5384 14.4208 31.9289 14.8113C32.3195 15.2018 32.9526 15.2018 33.3431 14.8113L39.7071 8.44734ZM0 8.74023H39V6.74023H0V8.74023Z"
                      fill="#4D61F4"
                    />
                  </svg>
                </p>
              </div>
              <div className="bg-[#E9EBF8] shadow-md hover:shadow-lg rounded-lg flex flex-col gap-3 py-5 px-5">
                <div className="flex flex-col  gap-1 group">
                  <label
                    className="font-medium text-[#777] group-focus-within:text-black font-Inter"
                    htmlFor="name"
                  >
                    Name :
                  </label>
                  <input
                    type="text"
                    className="h-[45px] rounded-md pl-3 outline-none focus-within:border-[1.5px] border-[#D1D2D8]"
                    id="name"
                  />
                </div>
                <div className="flex flex-col gap-1 group">
                  <label
                    className="font-medium text-[#777] group-focus-within:text-black font-Inter"
                    htmlFor="company"
                  >
                    Company&rsquo;s Name :
                  </label>
                  <input
                    type="text"
                    className="h-[45px] rounded-md pl-3 outline-none focus-within:border-[1.5px] border-[#D1D2D8]"
                    id="company"
                  />
                </div>
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex w-full flex-col gap-1 group">
                    <label
                      className="font-medium text-[#777] group-focus-within:text-black font-Inter"
                      htmlFor="email"
                    >
                      Email :
                    </label>
                    <input
                      type="text"
                      className="h-[45px] rounded-md pl-3 outline-none focus-within:border-[1.5px] border-[#D1D2D8]"
                      id="email"
                    />
                  </div>
                  <div className="flex w-full flex-col gap-1 group">
                    <label
                      className="font-medium text-[#777] group-focus-within:text-black font-Inter"
                      htmlFor="number"
                    >
                      Contact Number :
                    </label>
                    <input
                      type="text"
                      className="h-[45px] rounded-md pl-3 outline-none focus-within:border-[1.5px] border-[#D1D2D8]"
                      id="number"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1 group">
                  <label
                    className="font-medium text-[#777] group-focus-within:text-black font-Inter"
                    htmlFor="message"
                  >
                    Leave a message :
                  </label>
                  <textarea
                    name=""
                    id="message"
                    placeholder="Type it all here..."
                    className="h-[90px] resize-none pt-1 rounded-md pl-3 outline-none focus-within:border-[1.5px] border-[#D1D2D8]"
                  ></textarea>
                </div>
                <p className="text-[0.875rem] font-Inter">
                  Clicking{" "}
                  <span className="text-[#4D61F4] font-medium">Submit</span>{" "}
                  means you agree to be contacted
                </p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="h-[45px] bg-[#4D61F4] rounded-md text-white font-medium"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default Talktousbutton;
