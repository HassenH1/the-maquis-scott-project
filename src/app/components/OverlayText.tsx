import React from "react";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../fonts/Narifah.woff2",
});

function OverlayText() {
  return (
    <main className="w-full h-full absolute z-50 mix-blend-difference text-white animate__animated animate__fadeInDown animate__slow animate__delay-2s">
      <div className="w-full md:w-3/4 h-full">
        <div className="flex justify-center h-full flex-col font-extrabold md:ml-10 ml-3">
          <p className="text-[15px]">visual language by</p>
          <br />
          <br />
          <div className="text-4xl md:text-5xl flex flex-col tracking-wide">
            <span>
              MA<span className={myFont.className}>Q</span>UIS
            </span>
            <span className="ml-8 md:ml-12">
              SCOTT
              <sup className="text-[20px] relative align-baseline -top-6">
                &reg;
              </sup>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default OverlayText;
