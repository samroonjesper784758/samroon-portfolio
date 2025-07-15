"use client";

import { assetsImage } from "@/assets/images";
import { useAutoType } from "@/hooks/useAutoType";
import Image from "next/image";
import React from "react";

export default function Intro() {
  // hook
  const displayText = useAutoType([
    "React Developer",
    "React Native Developer",
  ]);

  return (
    <div className="flex flex-col items-center gap-5 mt-[5rem]">
      <div className="max-h-[12rem] max-w-[12rem] bg-primaryColor rounded-full shadow-md flex items-center justify-center overflow-hidden">
        <img className="w-full h-auto object-cover" src={assetsImage.Profile.src} alt="profile"/>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="sm:text-2xl text-xl font-semibold text-center">
          I'm <span className="text-primaryColor">Samroon Jesper</span>
        </div>
        <div className="sm:text-2xl text-xl text-center text-headingColor">and I'm a {displayText}|</div>
      </div>
    </div>
  );
}
