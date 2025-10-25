"use client";

import React from "react";

function MoreButton() {
  const onClick = () => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="ml-4 pb-8 ">
      <button
        className="cursor-pointer transition-all duration-300 ease-in-out no-underline text-xs lg:text-sm hover:line-through"
        onClick={onClick}
      >
        MORE
      </button>
    </div>
  );
}

export default MoreButton;
