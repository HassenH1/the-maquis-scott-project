"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { section2Images } from "../../../lib/images";
import { Autoplay } from "swiper/modules";

import "swiper/css";

function SlideShow() {
  return (
    <Swiper
      centeredSlides
      spaceBetween={0}
      breakpoints={{
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        "@1.00": {
          slidesPerView: 2.5,
          spaceBetween: 0,
        },
        "@1.50": {
          slidesPerView: 3,
          spaceBetween: 0,
        },
      }}
      loop
      scrollbar={{ draggable: false }}
      freeMode
      modules={[Autoplay]}
      speed={5000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      onSwiper={(swiper) => {
        if (swiper) {
          swiper.wrapperEl.style.transitionTimingFunction = "linear";
        }
      }}
      className="mySwiper h-full w-full"
      // className="mySwiper max-h-5/6 w-full"
    >
      {section2Images.map((image, idx) => (
        <SwiperSlide
          key={idx}
          className="h-full flex items-center justify-center"
        >
          <Image
            alt="Maquis Scott photography"
            src={image}
            className="h-full w-auto object-cover"
            height={1080}
            width={720}
            // className="aspect-9/16 object-bottom"
            // sizes="(max-width: 1200px) 35vw, (max-width: 768px) 33vw, 28vw"
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SlideShow;

// <Swiper
//   loop
//   scrollbar={{ draggable: true }}
//   // slidesPerView={1}
//   spaceBetween={0}
//   // breakpoints={{
//   //   768: {
//   //     slidesPerView: 2,
//   //     spaceBetween: 0,
//   //   },
//   //   1024: {
//   //     slidesPerView: 2.3,
//   //     spaceBetween: 0,
//   //   },
//   //   1440: {
//   //     slidesPerView: 2.5,
//   //     spaceBetween: 0,
//   //   },
//   //   2560: {
//   //     slidesPerView: 2.8,
//   //     spaceBetween: 0,
//   //   }
//   // }}
//   allowTouchMove={false}
//   lazyPreloadPrevNext={2}
//   slidesPerView="auto"
//   freeMode
//   modules={[Autoplay]}
//   speed={6500}
//   autoplay={{
//     delay: 0,
//     disableOnInteraction: false
//   }}
//   breakpoints={{
//     500: { slidesPerView: 2 },
//     1200: { slidesPerView: 2.7 },
//   }}
//   onSwiper={(swiper) => {
//     if (swiper) {
//       swiper.wrapperEl.style.transitionTimingFunction = "linear";
//     }
//   }}
//   className='h-full'
// >
//   {
//     section2Images.map((image, idx) => (
//       <SwiperSlide key={idx}>
//         <Image
//           className='w-full h-full object-cover swiper-lazy'
//           // className='w-full h-[90vh] object-cover swiper-lazy'
//           height={748}
//           width={323}
//           src={image}
//           alt="Maquis Scott photography"
//           placeholder="blur"
//           sizes="80.3vw"
//           // sizes="33.3vw" // this is recommended
//           // priority
//           loading='lazy'
//         />
//       </SwiperSlide>
//     ))
//   }
// </Swiper>
