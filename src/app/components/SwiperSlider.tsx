"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { images } from "../../../lib/images";

function SwiperSlider() {
  return (
    <Swiper
      centeredSlides
      scrollbar={{ draggable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      speed={1000}
      loop
      modules={[Autoplay]}
      className="w-full h-full"
    >
      {images.map((image, idx) => {
        return (
          <SwiperSlide key={idx}>
            <Image
              quality={50}
              height={0}
              width={0}
              sizes="100vw"
              priority
              className="w-full h-full object-cover object-center block"
              src={image}
              alt="Maquis Scott photography"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default SwiperSlider;
