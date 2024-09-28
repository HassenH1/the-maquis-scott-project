'use client'

import React from 'react'

function MoreButton() {
  const onClick = () => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: 'smooth',
    });
  }
  return (
    <div className="flex container mx-auto pb-9 sm:h-28 md:h-0 lg:h-0">
      <button className="transition-all duration-300 ease-in-out no-underline text-xs lg:text-sm hover:line-through ml-4" onClick={onClick}>MORE</button>
      {/* <a href="#more" className="transition-all duration-300 ease-in-out no-underline text-xs lg:text-sm hover:line-through ml-4">MORE</a> */}
    </div>
  )
}

export default MoreButton