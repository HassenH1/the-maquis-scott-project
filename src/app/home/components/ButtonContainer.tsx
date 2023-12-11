"use client";
import React from "react";
import { useRouter } from "next/navigation";

const ButtonContainer = () => {
  const route = useRouter();
  const routeProfile = () => route.push("/profile");
  const routeFullPage = () => route.push("fullpage");
  return (
    <div className="flex justify-center">
      <div className="text-center">
        <button
          className="m-3 items-center rounded border-0 box-border cursor-pointer inline-flex h-12 justify-center leading-none overflow-hidden px-16 relative text-left bg-slate-500 text-lg text-white"
          onClick={routeFullPage}
        >
          FULL SCREEN
        </button>
        <button
          className="m-3 items-center rounded border-0 box-border cursor-pointer inline-flex h-12 justify-center leading-none overflow-hidden px-16 relative text-left bg-slate-500 text-lg text-white"
          onClick={routeProfile}
        >
          PRO SCREEN
        </button>
      </div>
    </div>
  );
};

export default ButtonContainer;
