"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function IntroductionHero() {
  return (
    <main className="flex-1 flex p-4 justify-center items-center">
      <div className="md:h-[600px] md:w-[700px] h-[400px] w-[400px] relative">
        <Swiper
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          centeredSlides
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="w-full h-full"
          loop
          speed={3000}
        >
          <SwiperSlide>
            <Image
              height={0}
              width={0}
              className="w-full h-full object-cover object-center hover:blur-sm block"
              src="/1.jpg"
              alt="Maquis Scott photography"
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              height={0}
              width={0}
              className="w-full h-full object-cover object-center hover:blur-sm block"
              src="/2.jpg"
              alt="Maquis Scott photography"
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              height={0}
              width={0}
              className="w-full h-full object-cover object-center hover:blur-sm block"
              src="/3.jpg"
              alt="Maquis Scott photography"
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              height={0}
              width={0}
              className="w-full h-full object-cover object-center hover:blur-sm block"
              src="/4.jpg"
              alt="Maquis Scott photography"
              sizes="100vw"
            />
          </SwiperSlide>
        </Swiper>
        {/* <Image
          height={0}
          width={0}
          className="w-full h-full object-cover object-center hover:blur-sm block"
          src={`/${image}.jpg`}
          alt="Maquis Scott photography"
          sizes="100vw"
        /> */}
        <span className="absolute translate-y-1/2 top-1/2 -right-[100px] sm:-right-36 transform -rotate-90 text-[10px] sm:text-sm -z-40">
          <strong>ALL IMAGES</strong> &copy; 2023 <strong>MAQUIS SCOTT</strong>
        </span>
      </div>
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
            className="w-full h-full object-cover object-center hover:blur-sm block"
            src={`/${image}.jpg`}
            alt={""}
            sizes="100vw"
          />
        </div>
      </main> */
}
