import React from "react";

function NameList({ currentIndex }: { currentIndex: number }) {
  return (
    <div className="absolute w-full h-full z-30 text-[#C0C0C0] md:pt-[105px] pt-36 border-2 border-blue-800 pl-5">
      <div className="">
        <p
          className={`md:text-[45px] text-lg leading-tight font-bold mr-4 inline-block ${
            currentIndex === 0
              ? "text-black opacity-100 stroke-white"
              : "opacity-[0.3]"
          }`}
        >
          ASAL HAZEL
        </p>
        <span></span>
        <p
          className={`md:text-[45px] text-lg leading-tight font-bold inline-block ${
            currentIndex === 1 ? "text-black opacity-100" : "opacity-[0.3]"
          }`}
        >
          ALDRE WILLIAMS
        </p>
      </div>

      <div className="">
        <p
          className={`md:text-[45px] text-lg leading-tight font-bold inline-block mr-6 ${
            currentIndex === 2 ? "text-black opacity-100" : "opacity-[0.3]"
          }`}
        >
          DANDY DETRIOT
        </p>
        <span></span>
        <p
          className={`md:text-[45px] text-lg leading-tight font-bold inline-block ${
            currentIndex === 3 ? "text-black opacity-100" : "opacity-[0.3]"
          }`}
        >
          DORCAS THETE
        </p>
      </div>

      <div className="">
        <p
          className={`md:text-[45px] text-lg leading-tight font-bold inline-block md:ml-8 ml-3 mr-6 ${
            currentIndex === 4 ? "text-black opacity-100" : "opacity-[0.3]"
          }`}
        >
          EPHRATA
        </p>
        <span></span>
        <p
          className={`md:text-[45px] text-lg leading-tight font-bold inline-block ${
            currentIndex === 5 ? "text-black opacity-100" : "opacity-[0.3]"
          }`}
        >
          FRANK & STOWE
        </p>
      </div>

      <div className="">
        <p
          className={`md:text-[45px] text-lg leading-tight font-bold inline-block md:ml-14 ml-5 ${
            currentIndex === 6 ? "text-black opacity-100" : "opacity-[0.3]"
          }`}
        >
          ISABELLA OLIVEIRA
        </p>
      </div>

      <div className="">
        <p
          className={`md:text-[45px] text-lg leading-tight font-bold inline-block md:ml-8 ml-4 md:mr-24 mr-7 ${
            currentIndex === 7 ? "text-black opacity-100" : "opacity-[0.3]"
          }`}
        >
          JUSTIN LEROY
        </p>
        <span></span>
        <p
          className={`md:text-[45px] text-lg leading-tight font-bold inline-block ${
            currentIndex === 8 ? "text-black opacity-100" : "opacity-[0.3]"
          }`}
        >
          LEIAH
        </p>
      </div>

      <div className="">
        <p
          className={`md:text-[45px] text-lg leading-tight font-bold md:ml-8 ml-4 mx-4 inline-block ${
            currentIndex === 9 ? "text-black opacity-100" : "opacity-[0.3]"
          }`}
        >
          MIRIHA AUSTIN
        </p>
        <span></span>
        <p
          className={`md:text-[45px] text-lg leading-tight font-bold inline-block ${
            currentIndex === 10 ? "text-black opacity-100" : "opacity-[0.3]"
          }`}
        >
          MELINDA WALLS
        </p>
      </div>

      <div className="">
        <p
          className={`md:text-[45px] text-lg leading-tight font-bold md:ml-6 ml-3 mr-8 inline-block ${
            currentIndex === 11 ? "text-black opacity-100" : "opacity-[0.3]"
          }`}
        >
          MELISSA STOWE
        </p>
        <span></span>
        <p
          className={`md:text-[45px] text-lg leading-tight font-bold inline-block ${
            currentIndex === 12 ? "text-black opacity-100" : "opacity-[0.3]"
          }`}
        >
          NANCI CHIDI
        </p>
      </div>

      <div className="">
        <p
          className={`md:text-[45px] text-lg leading-tight font-bold md:mx-9 mx-3 inline-block ${
            currentIndex === 13 ? "text-black opacity-100" : "opacity-[0.3]"
          }`}
        >
          PURPLE HURT
        </p>
        <span></span>
        <p
          className={`md:text-[45px] text-lg leading-tight font-bold inline-block ${
            currentIndex === 14 ? "text-black opacity-100" : "opacity-[0.3]"
          }`}
        >
          SAMUEL OMARE
        </p>
      </div>

      <div className="">
        <p
          className={`md:text-[45px] text-lg leading-tight font-bold md:mx-10 mx-5 inline-block ${
            currentIndex === 15 ? "text-black opacity-100" : "opacity-[0.3]"
          }`}
        >
          STEPHEN KENN
        </p>
        <span></span>
        <p
          className={`md:text-[45px] text-lg leading-tight font-bold inline-block ${
            currentIndex === 16 ? "text-black opacity-100" : "opacity-[0.3]"
          }`}
        >
          TAHIRY BAH
        </p>
      </div>

      <div className="">
        <p
          className={`md:text-[45px] text-lg leading-tight font-bold inline-block mr-6 ${
            currentIndex === 17 ? "text-black opacity-100" : "opacity-[0.3]"
          }`}
        >
          TORIN THOMAS
        </p>
      </div>
    </div>
  );
}

export default NameList;
