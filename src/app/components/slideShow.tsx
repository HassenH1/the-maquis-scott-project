'use client'

import React from 'react'
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { section2Images } from '../../../lib/images';
import "swiper/css";
import { Autoplay } from 'swiper/modules'

function SlideShow() {

  return (
    <Swiper
      loop
      scrollbar={{ draggable: true }}
      // slidesPerView={1}
      spaceBetween={0}
      // breakpoints={{
      //   768: {
      //     slidesPerView: 2,
      //     spaceBetween: 0,
      //   },
      //   1024: {
      //     slidesPerView: 2.3,
      //     spaceBetween: 0,
      //   },
      //   1440: {
      //     slidesPerView: 2.5,
      //     spaceBetween: 0,
      //   },
      //   2560: {
      //     slidesPerView: 2.8,
      //     spaceBetween: 0,
      //   }
      // }}
      allowTouchMove={false}
      lazyPreloadPrevNext={2}
      slidesPerView="auto"
      freeMode
      modules={[Autoplay]}
      speed={6500}
      autoplay={{
        delay: 0,
        disableOnInteraction: false
      }}
      breakpoints={{
        500: { slidesPerView: 2 },
        1200: { slidesPerView: 2.7 },
      }}
      onSwiper={(swiper) => {
        if (swiper) {
          swiper.wrapperEl.style.transitionTimingFunction = "linear";
        }
      }}
      className='h-full'
    >
      {
        section2Images.map((image, idx) => (
          <SwiperSlide key={idx}>
            <Image
              className='w-full h-full object-cover swiper-lazy'
              // className='w-full h-[90vh] object-cover swiper-lazy'
              height={748}
              width={323}
              src={image}
              alt="Maquis Scott photography"
              placeholder="blur"
              sizes="80.3vw"
              // sizes="33.3vw" // this is recommended
              // priority
              loading='lazy'
            />
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default SlideShow