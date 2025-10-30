import React from "react";

function SideText() {
  const year = new Date().getFullYear();

  return (
    <span className="absolute translate-y-1/2 top-1/2 -right-[100px] sm:-right-36 transform -rotate-90 text-[10px] sm:text-sm -z-40">
      <span className="font-bold">ALL IMAGES</span> &copy; {year}{" "}
      <span className="font-bold">MAQUIS SCOTT</span>
    </span>
  );
}

export default SideText;
