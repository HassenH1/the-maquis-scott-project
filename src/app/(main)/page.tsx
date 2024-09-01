import dynamic from "next/dynamic";
import Box from "../components/box";
import SwiperSlides from "../components/SwiperSlides";
const SlideShow = dynamic(() => import('../components/slideShow'), { ssr: false })

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <section id="top" className="h-screen flex flex-col justify-center">
        <div className="flex-1 flex flex-col justify-center items-center">
          <Box>
            {/* <SwiperSlider */}
            <SwiperSlides />
            <span className="absolute translate-y-1/2 top-1/2 -right-[100px] sm:-right-36 transform -rotate-90 text-[10px] sm:text-sm -z-40">
              <strong>ALL IMAGES</strong> &copy; {year}{" "}
              <strong>MAQUIS SCOTT</strong>
            </span>
          </Box>
        </div>
        <div className="flex-2 container mx-auto">
          <a href="#more" className="transition-all duration-300 ease-in-out no-underline text-sm hover:line-through">MORE</a>
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
