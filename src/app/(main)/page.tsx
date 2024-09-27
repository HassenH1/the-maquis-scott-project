import dynamic from "next/dynamic";
import SwiperSlides from "../components/SwiperSlides";
import Splashscreen from "../components/splashscreen";
const SlideShow = dynamic(() => import('../components/slideShow'))

// https://cloudinary.com/tools/jpg-to-webp - for converting images to webp
export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <section id="top" className="h-screen flex flex-col justify-center">
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="md:h-[600px] md:w-[700px] h-[400px] w-[320px] relative">
            <Splashscreen />
            <SwiperSlides />
            <span className="absolute translate-y-1/2 top-1/2 -right-[100px] sm:-right-36 transform -rotate-90 text-[10px] sm:text-sm -z-40">
              <strong>ALL IMAGES</strong> &copy; {year}{" "}
              <strong>MAQUIS SCOTT</strong>
            </span>
          </div>
        </div>
        <div className="flex container mx-auto pb-9 sm:h-28 md:h-0">
          {/* <div className="flex container mx-auto pb-9 h-24"> */}
          <a href="#more" className="transition-all duration-300 ease-in-out no-underline text-xs lg:text-sm hover:line-through ml-4">MORE</a>
        </div>
      </section>
      <section id="more" className="h-screen">
        <div className="h-full container-sm mx-auto">
          <SlideShow />
        </div>
      </section>
    </>
  );
}
