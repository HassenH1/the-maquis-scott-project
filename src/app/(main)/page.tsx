import dynamic from "next/dynamic";
import SwiperSlides from "../components/SwiperSlides";
import Splashscreen from "../components/splashscreen";
import MoreButton from "../components/MoreButton";
const SlideShow = dynamic(() => import('../components/slideShow'))

// https://cloudinary.com/tools/jpg-to-webp - for converting images to webp
export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <section className="h-dvh flex flex-col">
        <div className="h-full flex flex-col justify-center items-center">
          <div className="md:h-[600px] md:w-[700px] h-[400px] w-[320px] relative">
            <Splashscreen />
            <SwiperSlides />
            <span className="absolute translate-y-1/2 top-1/2 -right-[100px] sm:-right-36 transform -rotate-90 text-[10px] sm:text-sm -z-40">
              <strong>ALL IMAGES</strong> &copy; {year}{" "}
              <strong>MAQUIS SCOTT</strong>
            </span>
          </div>
        </div>
        <MoreButton />
      </section>
      <section className="h-dvh">
        {/* <section className="h-screen"> */}
        <div className="h-full mx-auto">
          {/* <div className="h-full container-sm mx-auto"> */}
          <SlideShow />
        </div>
      </section>
    </>
  );
}
