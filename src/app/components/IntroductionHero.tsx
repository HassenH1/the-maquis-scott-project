"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Box from "./box";

function IntroductionHero() {
  const year = new Date().getFullYear();
  return (
    <main className="flex-1 flex p-4 justify-center items-center">
      <Box>
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
            />
          </SwiperSlide>
        </Swiper>
        <span className="absolute translate-y-1/2 top-2/3 -right-[100px] sm:-right-36 transform -rotate-90 text-[10px] sm:text-sm -z-40">
          <strong>ALL IMAGES</strong> &copy; {year}{" "}
          <strong>MAQUIS SCOTT</strong>
        </span>
      </Box>
    </main>
  );
}

export default IntroductionHero;

{
  /* WORKING */
}
{
  /* <main className="flex-1 flex p-4 justify-center items-center">
        <div className="md:h-[600px] md:w-[700px] h-[400px] w-[400px] overflow-hidden">
          <Image
            height={0}
            width={0}
            className="w-full h-full object-cover object-center block"
            src={`/${image}.jpg`}
            alt={""}
            sizes="100vw"
          />
        </div>
      </main> */
}
