import Link from "next/link";
import { ReactNode, useState } from "react";

interface NavLinksProps {
  text: string;
  href?: string;
  icon?: ReactNode;
  iconBeforeText?: boolean;
}

export const NavLinks: React.FC<NavLinksProps> = ({
  text,
  href,
  icon,
  iconBeforeText = true,
}) => {
  return (
    <div className="relative">
      {href ? (
        <Link href={href}>
          <div className="flex items-center">
            {iconBeforeText && icon}
            {text}
            {!iconBeforeText && icon}
          </div>
        </Link>
      ) : (
        <h3 className="flex items-center">
          <div className="flex items-center gap-[12px]">
            {iconBeforeText && icon}
            {text}
            {!iconBeforeText && icon}
          </div>
        </h3>
      )}
    </div>
  );
};
