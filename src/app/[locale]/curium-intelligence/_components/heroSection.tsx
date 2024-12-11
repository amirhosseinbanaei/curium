import ScrollAnimationWrapper from "@/components/scrollAnimationWrapper";
import SideSpaceWrapper from "@/components/sideSpaceWrapper";
import React from "react";

export default function IntelligenceHeroSection({ t }: { t: Function }) {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-cover pt-16 lg:pb-6">
      <SideSpaceWrapper>
        <div className="flex h-full w-full flex-col items-center gap-10 lg:px-20">
          <ScrollAnimationWrapper animationClassName="animate-fade-down">
            <h1 className="text-center text-5xl font-bold text-black-primary lg:text-8xl">
              {t("heroSection.title")}
            </h1>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animationClassName="animate-fade-up">
            <p className="text-center text-xl leading-9 text-black-secondary">
              {t("heroSection.description")}
            </p>
          </ScrollAnimationWrapper>
        </div>
      </SideSpaceWrapper>
    </section>
  );
}
