"use client";

import Image from "next/image";
import SwiperSlider from "./components/SwiperSlider";
import Box from "./components/box";
import Footer from "./components/footer";
import useFade from "./hooks/useFade";
import { useEffect } from "react";

export default function Home() {
  const [isVisible, setVisible, fadeProps] = useFade();
  const year = new Date().getFullYear();

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 2000);
  }, []);

  return (
    <>
      {isVisible ? (
        <>
          <header className="p-4" />
          <main className="flex-1 flex p-4 justify-center items-center">
            <Box>
              <SwiperSlider />
              <span className="absolute translate-y-1/2 top-1/2 -right-[100px] sm:-right-36 transform -rotate-90 text-[10px] sm:text-sm -z-40">
                <strong>ALL IMAGES</strong> &copy; {year}{" "}
                <strong>MAQUIS SCOTT</strong>
              </span>
            </Box>
          </main>
          <Footer />
        </>
      ) : (
        <div className="w-full h-full" {...fadeProps}>
          <Image
            src="/LANDING LOGO.jpg"
            height={0}
            width={0}
            className="w-full h-full object-cover object-center block"
            alt="Maquis Scott photography"
            sizes="100vw"
            priority
          />
        </div>
      )}
    </>
  );
}
