"use client";

import React from "react";
import Link from "next/link";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="md:flex">
      <div className="md:inline-block md:w-2/5 md:text-center border-2">
        <Link className="text-xs font-bold md:mr-32 ml-7" href="/credits">
          credits
        </Link>
      </div>
      <div className="md:inline-block md:text-left text-center md:w-3/5">
        <span className="text-xs">
          <strong>ALL RIGHTS RESERVED</strong> &copy; 2013 - {year}{" "}
          <strong>STUDIO EXIT LLC</strong>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
