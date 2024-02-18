import Image from "next/image";
import React from "react";

function SplashScreen() {
  return (
    <div className="w-full h-full">
      <Image
        src="/LANDING LOGO.jpg"
        height={0}
        width={0}
        className="w-full h-full object-cover object-center block"
        alt="Maquis Scott photography"
        sizes="100vw"
        priority
      />
    </div>
  );
}

export default SplashScreen;
