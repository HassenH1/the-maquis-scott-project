import React from "react";
import Link from "next/link";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-1">
      <Link className="text-xs font-bold" href="/credits">
        Credits
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
