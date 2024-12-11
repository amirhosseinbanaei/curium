import ScrollAnimationWrapper from "@/components/scrollAnimationWrapper";
import SideSpaceWrapper from "@/components/sideSpaceWrapper";
import Image from "next/image";
import React from "react";

export default function LeftRightContent({
  reverse,
  className,
  t,
  keyword,
  image,
}: {
  reverse?: boolean;
  className?: string;
  t: Function;
  keyword: string;
  image: string;
}) {
  return (
    <div
      className={`flex w-full flex-col-reverse gap-10 py-24 xl:space-y-0 ${className} ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}
    >
      <div className="h-full w-full px-4 md:px-side-space lg:w-1/2 lg:px-0">
        <div className={`relative aspect-video w-full`}>
          <ScrollAnimationWrapper
            initialClassName="opacity-0"
            animationClassName="animate-scale-down duration-700"
          >
            <Image
              fill
              alt="Content Section Image."
              src={`${image}`}
              loading="lazy"
              className="rounded-md"
            />
          </ScrollAnimationWrapper>
        </div>
      </div>
      <div className="h-full w-full lg:w-1/2">
        <SideSpaceWrapper>
          <div
            className={`mx-auto flex w-full flex-col justify-center lg:w-8/12`}
          >
            <ScrollAnimationWrapper
              initialClassName="opacity-0"
              animationClassName="animate-fade-down duration-500"
            >
              <h2
                className={`text-4xl text-black-primary fa:text-right md:text-5xl`}
              >
                {t(`${keyword}.title`)}
              </h2>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper
              initialClassName="opacity-0"
              animationClassName="animate-fade-up duration-500"
            >
              <p
                className={`mt-6 text-xl leading-8 text-black-secondary fa:text-right`}
              >
                {t(`${keyword}.description`)}
              </p>
            </ScrollAnimationWrapper>
          </div>
        </SideSpaceWrapper>
      </div>
    </div>
  );
}
