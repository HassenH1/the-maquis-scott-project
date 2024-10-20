"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { images } from "../../../lib/images";

function SwiperSlides() {
  return (
    <>
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
        className="relative h-full w-full"
        lazyPreloadPrevNext={2}
      >
        {images.map((image, idx) => {
          return (
            <SwiperSlide key={idx}>
              <Image
                loading="lazy"
                height={624}
                width={700}
                src={image}
                alt="Maquis Scott photography"
                className="w-full h-full object-cover swiper-lazy"
              // sizes="(min-width: 800px) 700px, 320px"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default SwiperSlides;
