import Image from "next/image";
import React from "react";
import Logo from "@/assets/Logo.png";
import { ADMIN_NAVS } from "@/constants/admin";
import Link from "next/link";

const AdminNav = () => {
  return (
    <nav className="w-full flex justify-between py-4 lg:py-8 px-8 xl:px-16 2xl:px-24 shadow-lg shadow-black/5">
      <Image
        src={Logo}
        alt="logo"
        priority
        quality={100}
        width={148}
        height={64}
      />
      <div className="hidden gap-x-5 lg:gap-x-8 lg:flex items-center justify-between">
        {ADMIN_NAVS.map((item) => (
          <Link
            className="capitalize font-Inter text-black font-medium text-base hover:text-primary tracking-wide"
            href={item.link}
            key={item.id}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default AdminNav;
