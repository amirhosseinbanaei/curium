"use client";
import React, { useState, forwardRef } from "react";
import LottieAnimation from "@/components/lottieAnimation";
import animationCube from "@/lotties/cubes.json";
import { useTranslations } from "next-intl";
import ArrowCircleRight from "@/assets/icons/ArrowCircleRight.svg";
import Link from "next/link";
import ScrollAnimationWrapper from "@/components/scrollAnimationWrapper";
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  keyWord: string;
  cardHrefs: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ keyWord, cardHrefs, ...props }, ref) => {
    const t = useTranslations("HomePage");
    const [shouldPlay, setShouldPlay] = useState(false);
    const mouseOverHandler = () => setShouldPlay(true);
    const mouseLeaveHandler = () => setShouldPlay(false);

    return (
      <ScrollAnimationWrapper animationClassName="ltr:animate-fade-left rtl:animate-fade-right">
        <div
          ref={ref}
          {...props}
          onMouseOver={mouseOverHandler}
          onMouseLeave={mouseLeaveHandler}
          className={`flex flex-row flex-wrap justify-between rounded bg-black-primary fill-white-secondary text-white-secondary transition-all duration-500 hover:cursor-pointer hover:bg-primary ${props.className}`}
        >
          <div className="w-full p-5 md:w-1/2 md:p-8 lg:w-2/3 2xl:w-1/2">
            <h3 className="w-full py-5 text-lg md:text-3xl xl:w-64">
              {t(`mainCard.${keyWord}.title`)}
            </h3>
            <p className="mb-8 w-full text-sm font-normal leading-5 xl:w-64">
              {t(`mainCard.${keyWord}.description`)}
            </p>
            <button className="-mt-3 fill-white-primary">
              <Link href={cardHrefs}>
                <ArrowCircleRight className="size-9 fill-white-secondary fa:rotate-180" />
              </Link>
            </button>
          </div>
          <div className="relative hidden h-auto max-h-80 items-center md:flex md:w-1/2 md:justify-end lg:w-1/3 2xl:w-1/2">
            <LottieAnimation
              animation={animationCube}
              className="aspect-square h-full lg:w-full"
              {...(shouldPlay ? { play: true } : { play: false })}
            />
          </div>
        </div>
      </ScrollAnimationWrapper>
    );
  },
);

Card.displayName = "Card";
export default Card;
