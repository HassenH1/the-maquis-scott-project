"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { images } from "../../../lib/images";

import "swiper/css";

function SwiperSlides() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      speed={1500}
      loop
      modules={[Autoplay]}
      className="mySwiper w-full h-full animate__animated animate__fadeInUp animate__slow animate__delay-2s rounded"
      lazyPreloadPrevNext={2}
    >
      {images.map((image, idx) => {
        return (
          <SwiperSlide key={idx}>
            <Image
              height={624}
              width={700}
              src={image}
              alt="Maquis Scott photography"
              className="w-full h-full object-cover"
              sizes="(max-width: 768px) 25vw, (max-width: 1200px) 35vw, 20vw"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default SwiperSlides;
