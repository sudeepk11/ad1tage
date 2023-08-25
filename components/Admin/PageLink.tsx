"use client";

import Link, { LinkProps } from "next/link";
import { josefin } from "../../utils/utilsFonts";
import { usePathname } from "next/navigation";

export default function PageLink({
  href,
  children,
}: LinkProps & { children: string }) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`${
        josefin.className
      } max-md:px-2 md:px-5 md:mx-4 max-md:mx-2 h-full flex items-center rounded-sm transition-all ${
        href === pathname ? "text-primary font-semibold" : ""
      }`}
    >
      {children}
    </Link>
  );
}
