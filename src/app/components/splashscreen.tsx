'use client'

import React, { useEffect, useRef } from 'react'

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
    <main className="w-full h-full fixed z-50 bg-white" ref={splashRef} id="logo" style={{ animation: "fadeOut 4s ease-out", animationDelay: "2s" }}>
      <div className="w-full md:w-2/4 mx-auto h-full">
        <div className="flex justify-center h-full flex-col font-extrabold ml-10 md:ml-0">
          <p className="text-[10px] ml-32">VISUAL RESEARCH OF</p>
          <br />
          <br />
          <br />
          <div className="text-5xl flex flex-col">
            <span>MAQUIS</span>
            <span className="ml-2">
              SCOTT<sup className="text-[20px]">&reg;</sup>
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Splashscreen