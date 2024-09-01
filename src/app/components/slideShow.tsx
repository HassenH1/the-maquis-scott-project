'use client'

import React from 'react'
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { section2Images } from '../../../lib/images';
import Image from "next/image";

function SlideShow() {
  return (
    <Swiper
      loop
      modules={[Autoplay]}
      speed={1500}
      className="w-auto h-[90%]"
      scrollbar={{ draggable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
        }
      }}
    >
      {
        section2Images.map((image, idx) => (
          <SwiperSlide key={idx}>
            <Image
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              sizes="100vw"
              priority
              src={image}
              alt="Maquis Scott photography"
              placeholder="blur"
            />
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default SlideShow