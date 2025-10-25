import SwiperSlides from "../components/SwiperSlides";
import OverlayText from "../components/OverlayText";
import MoreButton from "../components/MoreButton";
import SlideShow from "../components/slideShow";

import "animate.css";

// https://cloudinary.com/tools/jpg-to-webp - use for converting images to webp
export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <section className="h-dvh flex flex-col">
        <div className="h-full flex flex-col justify-center items-center">
          <div className="md:h-[600px] md:w-[700px] h-[400px] w-[320px] relative">
            <OverlayText />
            <SwiperSlides />
            <span className="absolute translate-y-1/2 top-1/2 -right-[100px] sm:-right-36 transform -rotate-90 text-[10px] sm:text-sm -z-40">
              <span className="font-bold">ALL IMAGES</span> &copy; {year}{" "}
              <span className="font-bold">MAQUIS SCOTT</span>
            </span>
          </div>
        </div>
        <MoreButton />
      </section>
      <section className="h-[100dvh]">
        <SlideShow />
      </section>
    </>
  );
}
