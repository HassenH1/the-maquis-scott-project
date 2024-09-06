"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { images } from "../../../lib/images";
import Splashscreen from "./splashscreen";

function SwiperSlides() {
  return (
    <Swiper
      centeredSlides
      scrollbar={{ draggable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      speed={1500}
      loop
      modules={[Autoplay]}
      className="w-full h-full relative"
      lazyPreloadPrevNext={2}
    >
      {images.map((image, idx) => {
        return (
          <SwiperSlide key={idx}>
            <Image
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              sizes="100%"
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

export default SwiperSlides;
