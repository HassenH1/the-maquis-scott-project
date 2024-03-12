/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function SwiperSlider() {
  return (
    <Swiper
      centeredSlides
      scrollbar={{ draggable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      speed={800}
      loop
      modules={[Autoplay]}
      className="w-full h-full"
    >
      <SwiperSlide>
        <Image
          quality={50}
          height={0}
          width={0}
          sizes="100vw"
          priority
          className="w-full h-full object-cover object-center block"
          src="/1.jpg"
          alt="Maquis Scott photography"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          quality={50}
          height={0}
          width={0}
          sizes="100vw"
          priority
          className="w-full h-full object-cover object-center block"
          src="/2.jpg"
          alt="Maquis Scott photography"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          quality={50}
          height={0}
          width={0}
          sizes="100vw"
          priority
          className="w-full h-full object-cover object-center block"
          src="/3.jpg"
          alt="Maquis Scott photography"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          quality={50}
          height={0}
          width={0}
          sizes="100vw"
          priority
          className="w-full h-full object-cover object-center block"
          src="/4.jpg"
          alt="Maquis Scott photography"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          quality={50}
          height={0}
          width={0}
          sizes="100vw"
          priority
          className="w-full h-full object-cover object-center block"
          src="/5.jpg"
          alt="Maquis Scott photography"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          quality={50}
          height={0}
          width={0}
          sizes="100vw"
          priority
          className="w-full h-full object-cover object-center block"
          src="/6.jpg"
          alt="Maquis Scott photography"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          quality={50}
          height={0}
          width={0}
          sizes="100vw"
          priority
          className="w-full h-full object-cover object-center block"
          src="/7.jpg"
          alt="Maquis Scott photography"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          quality={50}
          height={0}
          width={0}
          sizes="100vw"
          priority
          className="w-full h-full object-cover object-center block"
          src="/8.jpg"
          alt="Maquis Scott photography"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          quality={50}
          height={0}
          width={0}
          sizes="100vw"
          priority
          className="w-full h-full object-cover object-center block"
          src="/9.jpg"
          alt="Maquis Scott photography"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          quality={50}
          height={0}
          width={0}
          sizes="100vw"
          priority
          className="w-full h-full object-cover object-center block"
          src="/11.jpg"
          alt="Maquis Scott photography"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          quality={50}
          height={0}
          width={0}
          sizes="100vw"
          priority
          className="w-full h-full object-cover object-center block"
          src="/12.jpg"
          alt="Maquis Scott photography"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          quality={50}
          height={0}
          width={0}
          sizes="100vw"
          priority
          className="w-full h-full object-cover object-center block"
          src="/13.jpg"
          alt="Maquis Scott photography"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperSlider;
