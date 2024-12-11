"use client";
import PlusCircle from "@/assets/icons/PlusCircle.svg";
import { useState } from "react";
import ScrollAnimationWrapper from "./scrollAnimationWrapper";
import featuresData from "@/data/features.data";
import { useTranslations } from "next-intl";
import ArrowRight from "@/assets/icons/ArrowRight.svg";
export default function MediaFeatures({ index }: { index: number }) {
  const [showDetails, setShowDetails] = useState(false);
  const featureData = featuresData.media[index];
  const t = useTranslations("MediaPage");
  const keyword = `featureSection.features.${index}`;
  const buttonClickHandler = () => setShowDetails(!showDetails);
  return (
    <ScrollAnimationWrapper animationClassName="ltr:animate-fade-left rtl:animate-fade-right">
      <div className="relative flex w-full flex-col gap-5 overflow-hidden rounded-md bg-black-primary p-5">
        <span
          className={`space-y-3 duration-500 ${showDetails ? "animate-fade-in opacity-0" : "animate-fade-out opacity-100"}`}
        >
          <span className="flex items-center gap-5">
            <div className="relative aspect-square size-12 rounded-lg">
              <featureData.icon
                className="rounded-lg fill-white-primary"
                alt="Test"
              />
            </div>
            <h1 className="text-2xl text-white-primary">
              {t(`${keyword}.title`)}
            </h1>
          </span>
          <p className="w-11/12 text-sm text-white-secondary md:text-base">
            {t(`${keyword}.description`)}
          </p>
        </span>

        {/* Details Section */}
        <span
          className={`absolute -z-10 space-y-3 duration-500 ${showDetails ? "block animate-fade-out opacity-100" : "animate-fade-in opacity-0"}`}
        >
          <p className="w-11/12 text-sm md:text-base text-white-secondary">
            {t(`${keyword}.detailed`)}
          </p>
        </span>
        <span className="flex w-full justify-end">
          <button onClick={buttonClickHandler}>
            {!showDetails ? (
              <PlusCircle className="size-9 fill-white-secondary" />
            ) : (
              <ArrowRight className="size-9 fill-white-secondary ltr:rotate-180" />
            )}
          </button>
        </span>
      </div>
    </ScrollAnimationWrapper>
  );
}
