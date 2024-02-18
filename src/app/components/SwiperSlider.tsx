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
        delay: 1000,
        disableOnInteraction: false,
      }}
      speed={3000}
      loop
      modules={[Autoplay]}
      className="w-full h-full"
    >
      <SwiperSlide>
        <Image
          height={0}
          width={0}
          className="w-full h-full object-cover object-center block"
          src="/1.jpg"
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
          src="/2.jpg"
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
          src="/3.jpg"
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
          src="/4.jpg"
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
          src="/5.jpg"
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
          src="/6.jpg"
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
          src="/7.jpg"
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
          src="/8.jpg"
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
          src="/9.jpg"
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
          src="/10.jpg"
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
          src="/11.jpg"
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
          src="/12.jpg"
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
          src="/13.jpg"
          alt="Maquis Scott photography"
          sizes="100vw"
          priority
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperSlider;
