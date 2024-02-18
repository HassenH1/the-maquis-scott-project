import SwiperSlider from "./components/SwiperSlider";
import Box from "./components/box";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main className="flex-1 flex p-4 justify-center items-center">
      <Box>
        <SwiperSlider />
        <span className="absolute translate-y-1/2 top-1/2 -right-[100px] sm:-right-36 transform -rotate-90 text-[10px] sm:text-sm -z-40">
          <strong>ALL IMAGES</strong> &copy; {year}{" "}
          <strong>MAQUIS SCOTT</strong>
        </span>
      </Box>
    </main>
  );
}
