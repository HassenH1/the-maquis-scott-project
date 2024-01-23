"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

function IntroductionHero() {
  const [image, setImage] = useState(1);

  useEffect(() => {
    const timerId = setInterval(() => {
      setImage((prev) => {
        if (prev === 6) {
          return 1;
        }
        return prev + 1;
      });
    }, 4000);

    return function cleanup() {
      console.log(`Clearing ${timerId}`);
      clearInterval(timerId);
    };
  }, []);

  return (
    <main className="flex-1 flex p-4 justify-center items-center">
      <div className="md:h-[600px] md:w-[700px] h-[400px] w-[400px] relative">
        <Image
          height={0}
          width={0}
          className="w-full h-full object-cover object-center hover:blur-sm block"
          src={`/${image}.jpg`}
          alt="Maquis Scott photography"
          sizes="100vw"
        />
        <span className="absolute translate-y-1/2 top-1/2 -right-[115px] sm:-right-36 transform -rotate-90 text-xs sm:text-sm -z-40">
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
