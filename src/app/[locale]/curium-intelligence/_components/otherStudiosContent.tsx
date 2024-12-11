import React from "react";
import ArrowRight from "@/assets/icons/ArrowRight.svg";
import ScrollAnimationWrapper from "@/components/scrollAnimationWrapper";
export default function OtherStudiosContent({
  t,
  keyword,
  numberOfTags,
}: {
  t: Function;
  keyword: string;
  numberOfTags: number;
}) {
  return (
    <>
      <div className="w-full border-b-2 lg:py-0">
        <div className="space-y-6 py-8">
          <ScrollAnimationWrapper
            initialClassName="opacity-0"
            animationClassName="animate-fade-down duration-500"
          >
            <h1 className={`text-3xl text-black-primary`}>
              {t(`${keyword}.title`)}
            </h1>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper
            initialClassName="opacity-0"
            animationClassName="animate-fade-up duration-500"
          >
            <p className={`text-black-secondary`}>
              {t(`${keyword}.description`)}
            </p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper
            initialClassName="opacity-0"
            animationClassName="ltr:animate-fade-left rtl:animate-fade-right duration-700"
          >
            <div className="flex flex-wrap gap-3">
              {Array.from(Array(numberOfTags), (_, index) => (
                <div
                  key={t(`${keyword}.tags.${index}`)}
                  className="rounded-lg border border-black-secondary px-3 py-1 transition-all"
                >
                  <p className={`text-sm text-black-primary`}>
                    {t(`${keyword}.tags.${index}`)}
                  </p>
                </div>
              ))}
            </div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper
            initialClassName="opacity-0"
            animationClassName="ltr:animate-fade-left rtl:animate-fade-right duration-500"
          >
            <button className="mt-3 flex items-center gap-1 fill-black-primary text-black-primary transition-all duration-500 hover:cursor-pointer hover:fill-primary hover:text-primary">
              See Studio
              <ArrowRight className="size-6 rtl:rotate-180" />
            </button>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </>
  );
}
