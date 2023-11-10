import Image from "next/image";
import styles from "./navbar.module.css";
import { Linkscontainer, NavToggle } from "./NavToggleLinkscontainer";
import Logo from "@/assets/Logo.png";
import Link from "next/link";
// import Search from "../Search/Search";
import MoreDropdown from "./MoreDropdown";

const Navbar = () => {
  const {
    nav__container,
    left,
    links,
    links__container,
    show__container,
    toggle__btn,
    full__bleed,
    nav,
    nav__icon,
  } = styles;

  return (
    <>
      <nav className={nav}>
        <div className={`my_container ${nav__container}`}>
          <div className={left}>
            <Link href="/">
              <Image
                src={Logo}
                alt="logo"
                priority
                quality={100}
                width={148}
                height={64}
              />
            </Link>
          </div>
          <Linkscontainer
            links__container={links__container}
            full__bleed={full__bleed}
            show__container={show__container}
            links={links}
            nav__icon={nav__icon}
          />
          <button className="rounded-lg border hidden md:flex border-[#4D61F4] text-white px-[24px] py-[12px] bg-[#4D61F4]">
            Talk to us
          </button>
          <NavToggle toggle__btn={toggle__btn} />
        </div>
      </nav>
      <MoreDropdown />
    </>
  );
};

export default Navbar;
