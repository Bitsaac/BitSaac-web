"use client";
import { NavContext } from "@/context/NavContext";
import { moreDropDownItems, routes } from "../../data";
import Link from "next/link";
import { useEffect, useContext, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { LiaBarsSolid } from "react-icons/lia";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import Talktousbutton from "../Talktousbutton";
import GetInTouchText from "../GetInTouch";

type NavToggleProps = {
  toggle__btn: string;
};
type LinkscontainerProps = {
  links__container: string;
  full__bleed: string;
  show__container: string;
  links: string;
  nav__icon: string;
};

export const NavToggle = ({ toggle__btn }: NavToggleProps) => {
  const { isNavShowing, handleToggleNav } = useContext(NavContext)!;

  return (
    <div className={toggle__btn} onClick={handleToggleNav}>
      <button>{isNavShowing ? <FaTimes /> : <LiaBarsSolid />}</button>
    </div>
  );
};

export const Linkscontainer = ({
  links__container,
  full__bleed,
  show__container,
  links,
}: LinkscontainerProps) => {
  const [isResizing, setIsResizing] = useState(false);
  const { isNavShowing, setIsNavShowing, more, setMore } =
    useContext(NavContext)!;
  useEffect(() => {
    if (isNavShowing === true && window.innerWidth <= 721) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isNavShowing]);

  const closeNav = () => {
    if (window.innerHeight > 721) {
      setIsNavShowing(false);
      setMore(false);
      return;
    } else {
      setIsNavShowing(!isNavShowing);
    }
  };

  useEffect(() => {
    let resizeTimer: any;

    const handleResize = () => {
      document.body.classList.add("resize-animation-stopper");
      setIsResizing(true);
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
        setIsResizing(false);
      }, 400);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`${links__container} ${full__bleed} ${
        isNavShowing && show__container
      }`}
    >
      <ul className={`${links}`}>
        {routes.map((route, index) => {
          return (
            <li onClick={closeNav} key={index}>
              <Link href={route.url}>
                <span>{route.title}</span>
              </Link>
            </li>
          );
        })}
        <div
          onClick={() => setMore(!more)}
          className="flex items-center cursor-pointer w-full md:w-auto justify-between"
        >
          <p>More</p>
          {more ? (
            <AiOutlineUp className="text-[1.4rem]" />
          ) : (
            <AiOutlineDown className="text-[1.4rem]" />
          )}
        </div>
        <ul>
          {more &&
            moreDropDownItems.map((link, index) => (
              <li
                key={index}
                className="pl-5 flex bg-black gap-1 items-center md:hidden"
                onClick={closeNav}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_82_667)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.188 6.45747L-0.300781 20.2406V20.2646L15.9231 20.0344C20.2413 19.9723 23.7417 16.1856 23.6988 11.5438V11.4557C23.697 11.4056 23.697 11.3556 23.697 11.3055C23.5833 4.92557 16.3292 1.88578 12.188 6.45747ZM22.697 11.3147C22.697 11.3565 22.697 11.4127 22.6988 11.4724V11.5436L22.6989 11.553C22.7372 15.7031 19.6199 18.9811 15.9088 19.0345L1.96218 19.2324L12.9291 7.12893C14.6964 5.17788 17.0854 4.86415 19.0653 5.69648C21.0512 6.53133 22.6442 8.53348 22.697 11.3147Z"
                      fill="#2A2738"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.7084 12.5848L1.96596 22.4905L1.9423 22.4863L4.98634 6.54884C5.79731 2.30704 10.1343 -0.482597 14.6981 0.365635L14.7849 0.380935C14.8339 0.391463 14.8832 0.400157 14.9325 0.40885C21.1958 1.62862 22.9297 9.30037 17.7084 12.5848ZM14.7498 1.39206C14.7087 1.38481 14.6533 1.37499 14.5948 1.36283L14.5247 1.35047L14.5154 1.3488C10.435 0.590414 6.66552 3.09111 5.96855 6.73662L3.35179 20.4369L17.1758 11.7384C19.4041 10.3367 20.1279 8.0385 19.652 5.94415C19.1747 3.84348 17.4796 1.92696 14.7498 1.39206Z"
                      fill="#2A2738"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_82_667">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <Link className="block w-full" href={link.path}>
                  <span>{link.title}</span>
                </Link>
              </li>
            ))}
        </ul>
        <div>
          <GetInTouchText className="md:hidden" />
          <Talktousbutton className="rounded-lg border flex md:hidden border-[#4D61F4] text-white px-[24px] py-[12px] bg-[#4D61F4] mt-2" />
        </div>
      </ul>
    </div>
  );
};
