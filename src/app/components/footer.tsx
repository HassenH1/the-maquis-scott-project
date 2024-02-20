"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Footer() {
  const pathname = usePathname();
  const isCreditsPath = pathname === "/credits" ? true : false;
  const year = new Date().getFullYear();

  return (
    <footer className="grid grid-cols-1	md:grid-cols-4">
      <div className="md:text-center md:mx-auto mx-12">
        <Link
          className="text-xs font-bold"
          href={isCreditsPath ? "/" : "/credits"}
        >
          {isCreditsPath ? "home" : "credits"}
        </Link>
      </div>
      <div className="text-center col-span-2">
        <span className="text-xs">
          <strong>ALL RIGHTS RESERVED</strong> &copy; 2013 - {year}{" "}
          <strong>STUDIO EXIT LLC</strong>
        </span>
      </div>
    </footer>
  );
}

export default Footer;

// <footer className="md:flex">
// <div className="md:inline-block md:w-2/5 md:text-center">
//   <Link
//     className="text-xs font-bold md:mr-32 ml-7"
//     href={isCreditsPath ? "/" : "/credits"}
//   >
//     {isCreditsPath ? "home" : "credits"}
//   </Link>
// </div>
// <div className="md:inline-block md:text-left text-center md:w-3/5">
//   <span className="text-xs">
//     <strong>ALL RIGHTS RESERVED</strong> &copy; 2013 - {year}{" "}
//     <strong>STUDIO EXIT LLC</strong>
//   </span>
// </div>
// </footer>
