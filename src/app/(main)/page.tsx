import SwiperSlides from "../components/SwiperSlides";
import OverlayText from "../components/OverlayText";
import MoreButton from "../components/MoreButton";
import SlideShow from "../components/slideShow";
import SideText from "../components/SideText";

import "animate.css";

// https://cloudinary.com/tools/jpg-to-webp - use for converting images to webp
export default function Home() {
  return (
    <div className="snap-mandatory snap-y h-screen overflow-y-scroll">
      <section className="h-full flex flex-col snap-start">
        <div className="h-full flex flex-col justify-center items-center border-2 border-blue-900">
          <div className="md:h-[600px] md:w-[700px] h-[400px] w-[320px] relative">
            <OverlayText />
            <SwiperSlides />
            <SideText />
          </div>
          <MoreButton />
        </div>
      </section>
      <section className="h-full snap-start flex items-center">
        {/* <section className="h-full snap-start flex items-end"> */}
        <SlideShow />
      </section>
    </div>
  );
}
