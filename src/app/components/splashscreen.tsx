'use client'

import React, { useEffect, useRef } from 'react'
import localFont from 'next/font/local'

const myFont = localFont({
  src: '../fonts/Narifah.woff2',
})
function Splashscreen() {
  const splashRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (splashRef && splashRef.current) {
        splashRef.current.style.display = 'none';
      }
    }, 4000);
  }, []);

  return (
    <main className="w-full h-full fixed z-50 bg-white" ref={splashRef} id="logo" style={{ animation: "fadeOut 5s ease-out", animationDelay: "2s" }}>
      <div className="w-full md:w-2/4 mx-auto h-full">
        <div className="flex justify-center h-full flex-col font-extrabold ml-10 md:ml-0">
          <p className="text-[10px] ml-32">VISUAL LANGUAGE BY</p>
          <br />
          <br />
          <br />
          <div className="text-5xl flex flex-col  tracking-wide">
            <span>MA<span className={myFont.className}>Q</span>UIS</span>
            <span className="ml-6">
              SCOTT<sup className="text-[20px] relative align-baseline -top-6">&reg;</sup>
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Splashscreen