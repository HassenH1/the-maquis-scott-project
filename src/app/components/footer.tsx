import React from "react";
import SphereImage from '../../../public/sphere-wireframe.jpg'
import Image from "next/image";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-fit fixed bottom-0 z-50 left-1/2 -translate-x-1/2 text-nowrap">
      <div className="md:text-center md:mx-auto mx-12" />
      <div className="text-center col-span-2 ">
        <div className="flex flex-col items-center">
          <Image src={SphereImage} height={50} width={50} alt="maquis scott" />
        </div>
        <span className="text-xs font-medium">
          &copy; {currentYear} COPYRIGHTS by <strong>STUDIO EXIT LLC&trade;</strong>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
