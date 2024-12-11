"use client";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/utils/cn.util";
import SocialButtons from "@/components/socialButtons";
import { PersonsData } from "../page";
import { personsSocialsData } from "@/data/social.data";
import ScrollAnimationWrapper from "@/components/scrollAnimationWrapper";

export default function PersonCard({
  eachPersonData,
}: {
  eachPersonData: PersonsData;
}) {
  const [showSocials, setShowSocials] = useState(false);
  const mouseOverHandler = () => setShowSocials(true);
  const mouseEndHandler = () => setShowSocials(false);
  return (
    <div className="relative flex aspect-3/4 w-full flex-col gap-5 px-3 pb-2">
      <div
        onMouseOver={mouseOverHandler}
        onMouseLeave={mouseEndHandler}
        className="relative h-4/5 w-full transition-all duration-500 hover:cursor-pointer"
      >
        <ScrollAnimationWrapper
          initialClassName="opacity-0"
          animationClassName="animate-fade-left"
        >
          <Image
            className="rounded-md"
            src={`${eachPersonData.image}`}
            alt="text"
            fill
          />
        </ScrollAnimationWrapper>
        <div
          className={cn(
            `absolute z-10 h-full w-full items-center justify-center gap-3 rounded-md bg-white bg-opacity-80 backdrop-blur ${showSocials ? "duration-400 flex animate-fade-up" : "hidden"}`,
          )}
        >
          <SocialButtons
            socialData={personsSocialsData[eachPersonData.id]}
            iconStyle="size-5"
            className="h-12 w-12 p-1 transition-none duration-0"
          />
        </div>
      </div>
      <span className="mx-3 space-y-1">
        <ScrollAnimationWrapper
          initialClassName="opacity-0"
          animationClassName="animate-fade-down"
        >
          <h1 className="text-base-text-dark text-2xl tracking-normal">
            {eachPersonData.name}
          </h1>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper
          initialClassName="opacity-0"
          animationClassName="animate-fade-up"
        >
          <p className="text-base-text-dark">{eachPersonData.position}</p>
        </ScrollAnimationWrapper>
      </span>
    </div>
  );
}
