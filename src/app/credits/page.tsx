import React from "react";
import Box from "../components/box";
import ImageContainer from "./components/ImageContainer";

function Credits() {
  const year = new Date().getFullYear();

  return (
    <main className="flex-1 flex p-4 justify-center items-center">
      <Box>
        <ImageContainer />
        <span className="absolute translate-y-1/2 top-1/2 -right-[100px] sm:-right-36 transform -rotate-90 text-[10px] sm:text-sm -z-40">
          <strong>ALL IMAGES</strong> &copy; {year}{" "}
          <strong>MAQUIS SCOTT</strong>
        </span>
      </Box>
    </main>
  );
}

export default Credits;
