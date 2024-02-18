"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  const isCredits = pathname === "/credits" ? true : false;

  return (
    <footer className="mx-1">
      <Link className="text-xs font-bold" href={isCredits ? "/" : "/credits"}>
        {isCredits ? "Home" : "Credits"}
      </Link>
      <div className="text-center ">
        <p className="text-xs">
          <strong>ALL RIGHTS RESERVED</strong> &copy; 2013 - {year}{" "}
          <strong>STUDIO EXIT LLC</strong>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
