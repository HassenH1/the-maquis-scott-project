/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import NameList from "./names";

const ALT = "Maquis Scott photography";

function ImageContainer() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const updateIndex = (swiperInstance: SwiperType) => {
    if (swiperInstance === null) return;
    const currentSlide = swiperInstance?.realIndex;

    setCurrentIndex(currentSlide);
  };

  return (
    <div className="relative h-full w-full">
      <div className="absolute w-full h-full">
        <Swiper
          initialSlide={currentIndex}
          onActiveIndexChange={updateIndex}
          effect={"fade"}
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
          }}
          loop
          speed={500}
          modules={[Autoplay, EffectFade, Pagination]}
          className="mySwiper w-full h-full opacity[0.7]"
        >
          <SwiperSlide>
            <img
              className="w-full h-full object-cover object-center block"
              src="/ASAL.jpg"
              alt={ALT}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-cover object-center block"
              src="/ALDRE.jpg"
              alt={ALT}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-cover object-center block"
              src="/DANDY.jpg"
              alt={ALT}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-cover object-center block"
              src="/DORCAS.jpg"
              alt={ALT}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-cover object-center block"
              src="/EPHRATA.jpg"
              alt={ALT}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-cover object-center block"
              src="/FRANK_STOWE.jpg"
              alt={ALT}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-cover object-center block"
              src="/ISABELLA.jpg"
              alt={ALT}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-cover object-center block"
              src="/JUSTIN.jpg"
              alt={ALT}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-cover object-center block"
              src="/LEIAH.jpg"
              alt={ALT}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-cover object-center block"
              src="/MIRIHA.jpg"
              alt={ALT}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-cover object-center block"
              src="/WALLS.jpg"
              alt={ALT}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-cover object-center block"
              src="/STOWE2.jpg"
              alt={ALT}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-cover object-center block"
              src="/NANCY.jpg"
              alt={ALT}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-cover object-center block"
              src="/PURPLEHURT.jpg"
              alt={ALT}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-cover object-center block"
              src="/SAMUEL.jpg"
              alt={ALT}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-cover object-center block"
              src="/STEPHENKENN.jpg"
              alt={ALT}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-cover object-center block"
              src="/TAHIRY.jpg"
              alt={ALT}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-cover object-center block"
              src="/TORIN.jpg"
              alt={ALT}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <NameList currentIndex={currentIndex} />
    </div>
  );
}

export default ImageContainer;
