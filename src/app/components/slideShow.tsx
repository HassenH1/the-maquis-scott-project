'use client'

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { section2Images } from '../../../lib/images';
import Image from "next/image";

function SlideShow() {

  return (
    <Swiper
      loop
      className="w-auto h-full"
      // className="w-auto h-[90%]"
      scrollbar={{ draggable: true }}
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
      lazyPreloadPrevNext={4}
    >
      {
        section2Images.map((image, idx) => (
          <SwiperSlide key={idx}>
            <Image
              className='w-auto h-full object-cover'
              height={748}
              width={323}
              src={image}
              alt="Maquis Scott photography"
              placeholder="blur"
              sizes="50.3vw"
              // sizes="33.3vw" // this is recommended
              priority
            />
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default SlideShow