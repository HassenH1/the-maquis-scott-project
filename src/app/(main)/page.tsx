"use client";

import SwiperSlider from "../components/SwiperSlider";
import Box from "../components/box";
import useFade from "../hooks/useFade";
import { useEffect } from "react";

export default function Home() {
  const [isVisible, setVisible, fadeProps] = useFade();
  const year = new Date().getFullYear();

  useEffect(() => {
    if (document.readyState === "complete") {
      setTimeout(() => {
        setVisible(true);
      }, 2500);
    }
  }, []);

  return (
    <>
      {isVisible ? (
        <main
          className="flex-1 flex p-4 justify-center items-center"
          style={{ animation: "fadeIn 3s ease-in" }}
        >
          <Box>
            <SwiperSlider />
            <span className="absolute translate-y-1/2 top-1/2 -right-[100px] sm:-right-36 transform -rotate-90 text-[10px] sm:text-sm -z-40">
              <strong>ALL IMAGES</strong> &copy; {year}{" "}
              <strong>MAQUIS SCOTT</strong>
            </span>
          </Box>
        </main>
      ) : (
        <main className="w-full h-full">
          <div className="w-full md:w-2/4 mx-auto h-full" {...fadeProps}>
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
      )}
    </>
  );
}
