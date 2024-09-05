import React from 'react'
import localFont from 'next/font/local'

const myFont = localFont({
  src: '../fonts/Narifah.woff2',
})

function Splashscreen() {
  return (
    <main className="w-full h-full absolute z-50 mix-blend-difference text-white">
      <div className="w-full md:w-3/4 h-full">
        <div className="flex justify-center h-full flex-col font-extrabold md:ml-10 ml-0">
          <p className="text-base ml-32">visual language by...</p>
          <br />
          <br />
          <br />
          <div className="text-4xl md:text-5xl flex flex-col  tracking-wide">
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