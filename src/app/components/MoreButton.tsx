"use client";

import React from "react";

function MoreButton() {
  const onClick = () => {
    const nextSection = document.querySelector(
      "section.snap-start:nth-of-type(2)"
    );
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="w-full pl-6 pt-12">
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
