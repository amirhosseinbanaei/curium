"use client";
import LottieAnimation from "@/components/lottieAnimation";
import React from "react";
import brain from "@/lotties/brain.json";
import light from "@/lotties/light.json";
export default function IntroMotion() {
  return (
    <div className="flex gap-10 justify-evenly items-center">
      <LottieAnimation
        animationData={brain}
        play
        className="aspect-square h-52 w-52 -scale-x-100"
      />
      <ArrowRight />
      <div className="w-72 h-72 border border-dashed rounded-md border-white"></div>
      <ArrowRight />
      <LottieAnimation
        animationData={light}
        play
        className="aspect-square h-52 w-52 -scale-x-100"
      />
    </div>
  );
}

function ArrowRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="text-base-text-light w-40 animate-move-left"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
      />
    </svg>
  );
}
