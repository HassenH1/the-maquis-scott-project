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

function ImageContainer() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const updateIndex = (swiperInstance: SwiperType) => {
    if (swiperInstance === null) return;
    const currentSlide = swiperInstance?.activeIndex;

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
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFade, Pagination]}
          className="mySwiper w-full h-full opacity[0.7]"
        >
          <SwiperSlide>
            <Image
              height={0}
              width={0}
              className="w-full h-full object-cover object-center block"
              src="/ASAL.jpg"
              alt="Maquis Scott photography"
              sizes="100vw"
              priority
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              height={0}
              width={0}
              className="w-full h-full object-cover object-center block"
              src="/ALDRE.jpg"
              alt="Maquis Scott photography"
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              height={0}
              width={0}
              className="w-full h-full object-cover object-center block"
              src="/DANDY.jpg"
              alt="Maquis Scott photography"
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              height={0}
              width={0}
              className="w-full h-full object-cover object-center block"
              src="/DORCAS.jpg"
              alt="Maquis Scott photography"
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              height={0}
              width={0}
              className="w-full h-full object-cover object-center block"
              src="/EPHRATA.jpg"
              alt="Maquis Scott photography"
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              height={0}
              width={0}
              className="w-full h-full object-cover object-center block"
              src="/STOWE.jpg"
              alt="Maquis Scott photography"
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              height={0}
              width={0}
              className="w-full h-full object-cover object-center block"
              src="/ISABELLA.jpg"
              alt="Maquis Scott photography"
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              height={0}
              width={0}
              className="w-full h-full object-cover object-center block"
              src="/JUSTIN.jpg"
              alt="Maquis Scott photography"
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              height={0}
              width={0}
              className="w-full h-full object-cover object-center block"
              src="/LEIAH.jpg"
              alt="Maquis Scott photography"
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              height={0}
              width={0}
              className="w-full h-full object-cover object-center block"
              src="/MIRIHA.jpg"
              alt="Maquis Scott photography"
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              height={0}
              width={0}
              className="w-full h-full object-cover object-center block"
              src="/WALLS.jpg"
              alt="Maquis Scott photography"
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              height={0}
              width={0}
              className="w-full h-full object-cover object-center block"
              src="/STOWE2.jpg"
              alt="Maquis Scott photography"
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              height={0}
              width={0}
              className="w-full h-full object-cover object-center block"
              src="/NANCY.jpg"
              alt="Maquis Scott photography"
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              height={0}
              width={0}
              className="w-full h-full object-cover object-center block"
              src="/PURPLEHURT.jpg"
              alt="Maquis Scott photography"
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              height={0}
              width={0}
              className="w-full h-full object-cover object-center block"
              src="/SAMUEL.jpg"
              alt="Maquis Scott photography"
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              height={0}
              width={0}
              className="w-full h-full object-cover object-center block"
              src="/STEPHENKENN.jpg"
              alt="Maquis Scott photography"
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              height={0}
              width={0}
              className="w-full h-full object-cover object-center block"
              src="/TAHIRY.jpg"
              alt="Maquis Scott photography"
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              height={0}
              width={0}
              className="w-full h-full object-cover object-center block"
              src="/TORIN.jpg"
              alt="Maquis Scott photography"
              sizes="100vw"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <NameList currentIndex={currentIndex} />
    </div>
  );
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const timerId = setInterval(() => {
  //     setCount((count) => count + 1);
  //   }, 5000);

  //   return () => clearInterval(timerId);
  // }, []);

  // const image = imageArray[count % imageArray.length];

  // return (
  //   <div
  //     className="w-full h-full bg-cover bg-center bg-no-repeat"
  //     style={{ backgroundImage: `url(${image})` }}
  //   >
  //     <div className="border-2 border-blue-500 h-auto ml-6 text-[#C0C0C0] pt-[105px]">
  //       <div className="">
  //         <p className="text-[45px] leading-tight font-bold mr-4 inline-block">
  //           ASAL HAZEL
  //         </p>
  //         <span></span>
  //         <p className="text-[45px] leading-tight font-bold inline-block">
  //           ALDRE WILLIAMS
  //         </p>
  //       </div>

  //       <div className="">
  //         <p className="text-[45px] leading-tight font-bold inline-block mr-6">
  //           DANDY DETRIOT
  //         </p>
  //         <span></span>
  //         <p className="text-[45px] leading-tight font-bold inline-block">
  //           DORCAS THETE
  //         </p>
  //       </div>

  //       <div className="">
  //         <p className="text-[45px] leading-tight font-bold inline-block ml-8 mr-6">
  //           EPHRATA
  //         </p>
  //         <span></span>
  //         <p className="text-[45px] leading-tight font-bold inline-block">
  //           FRANK & STOWE
  //         </p>
  //       </div>

  //       <div className="">
  //         <p className="text-[45px] leading-tight font-bold inline-block ml-14">
  //           ISABELLA OLIVEIRA
  //         </p>
  //       </div>

  //       <div className="">
  //         <p className="text-[45px] leading-tight font-bold inline-block ml-8 mr-24">
  //           JUSTIN LEROY
  //         </p>
  //         <span></span>
  //         <p className="text-[45px] leading-tight font-bold inline-block">
  //           LEIAH
  //         </p>
  //       </div>

  //       <div className="">
  //         <p className="text-[45px] leading-tight font-bold ml-8 mx-4 inline-block">
  //           MIRIHA AUSTIN
  //         </p>
  //         <span></span>
  //         <p className="text-[45px] leading-tight font-bold inline-block">
  //           MELINDA WALLS
  //         </p>
  //       </div>

  //       <div className="">
  //         <p className="text-[45px] leading-tight font-bold ml-6 mr-8 inline-block">
  //           MELISSA STOWE
  //         </p>
  //         <span></span>
  //         <p className="text-[45px] leading-tight font-bold inline-block">
  //           NANCI CHIDI
  //         </p>
  //       </div>

  //       <div className="">
  //         <p className="text-[45px] leading-tight font-bold mx-9 inline-block">
  //           PURPLE HURT
  //         </p>
  //         <span></span>
  //         <p className="text-[45px] leading-tight font-bold inline-block">
  //           SAMUEL OMARE
  //         </p>
  //       </div>

  //       <div className="">
  //         <p className="text-[45px] leading-tight font-bold mx-10 inline-block">
  //           STEPHEN KENN
  //         </p>
  //         <span></span>
  //         <p className="text-[45px] leading-tight font-bold inline-block">
  //           TAHIRY BAH
  //         </p>
  //       </div>

  //       <div className="">
  //         <p className="text-[45px] leading-tight font-bold inline-block mr-6">
  //           TORIN THOMAS
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default ImageContainer;
