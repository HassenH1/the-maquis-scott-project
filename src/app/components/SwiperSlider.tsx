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
        // delay: 1000,
        delay: 2500,
        disableOnInteraction: false,
      }}
      // speed={2500}
      speed={1500}
      // speed={1000}
      loop
      modules={[Autoplay]}
      className="w-full h-full"
      lazyPreloadPrevNext={2}
    >
      {images.map((image, idx) => {
        return (
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
        );
      })}
    </Swiper>
  );
}

export default SwiperSlider;
