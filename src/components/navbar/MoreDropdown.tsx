"use client";
import { NavContext } from "@/context/NavContext";
import { moreDropDownItems } from "@/data";
import Link from "next/link";
import { useContext } from "react";
import GetInTouchText from "../GetInTouch";

const MoreDropdown = () => {
  const { more, setMore } = useContext(NavContext)!;

  return (
    <>
      {more && (
        <div className="text-center items-center gap-[4px] text-base w-full justify-center border border-y border-[#E9EBF8] hidden md:block">
          <div className=" items-center justify-between text-center ">
            <div className="flex justify-between gap-3 py-[1.5rem] px-[64px]">
              {moreDropDownItems.map((item, index) => (
                <MoreDropdownItem
                  setMore={setMore}
                  dropdownItem={item}
                  key={index}
                />
              ))}
            </div>
          </div>
          {/* <div> */}
          {/* <p className="font-Inter text-sm text-[#2A2738]  bg-surface/200 py-2 ">
            Looking for new job opportunities?{" "}
            <span className=" underline">Get in Touch </span>
          </p> */}
          <GetInTouchText className="font-Inter text-sm text-[#2A2738]  bg-surface/200 py-2" />
          {/* </div> */}
        </div>
      )}
    </>
  );
};

export default MoreDropdown;

type MoreDropdownItemProps = {
  dropdownItem: {
    title: string;
    path: string;
    desc: string;
  };
  setMore: (value: boolean) => void;
};
const MoreDropdownItem = ({ dropdownItem, setMore }: MoreDropdownItemProps) => {
  return (
    <Link
      href={dropdownItem.path}
      onClick={() => setMore(false)}
      className="lg:flex text-start gap-3 hover:bg-slate-50 hover:rounded-lg p-2 w-80 "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clipPath="url(#clip0_82_546)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.188 6.45747L-0.300781 20.2406V20.2646L15.9231 20.0344C20.2413 19.9723 23.7417 16.1856 23.6988 11.5438V11.4557C23.697 11.4056 23.697 11.3556 23.697 11.3055C23.5833 4.92557 16.3292 1.88578 12.188 6.45747ZM22.697 11.3147C22.697 11.3565 22.697 11.4127 22.6988 11.4724V11.5436L22.6989 11.553C22.7372 15.7031 19.6199 18.9811 15.9088 19.0345L1.96218 19.2324L12.9291 7.12893C14.6964 5.17788 17.0854 4.86415 19.0653 5.69648C21.0512 6.53133 22.6442 8.53348 22.697 11.3147Z"
            fill="#2A2738"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.7084 12.5848L1.96596 22.4905L1.9423 22.4863L4.98634 6.54884C5.79731 2.30704 10.1343 -0.482597 14.6981 0.365635L14.7849 0.380935C14.8339 0.391463 14.8832 0.400157 14.9325 0.40885C21.1958 1.62862 22.9297 9.30037 17.7084 12.5848ZM14.7498 1.39206C14.7087 1.38481 14.6533 1.37499 14.5948 1.36283L14.5247 1.35047L14.5154 1.3488C10.435 0.590414 6.66552 3.09111 5.96855 6.73662L3.35179 20.4369L17.1758 11.7384C19.4041 10.3367 20.1279 8.0385 19.652 5.94415C19.1747 3.84348 17.4796 1.92696 14.7498 1.39206Z"
            fill="#2A2738"
          />
        </g>
        <defs>
          <clipPath id="clip0_82_546">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <div>
        <p>{dropdownItem.title}</p>
        <p className="font-Inter text-sm text-[#2A2738]">{dropdownItem.desc}</p>
      </div>
    </Link>
  );
};
