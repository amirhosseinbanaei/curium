import React from "react";
import { cn } from "@/utils/cn.util";
import ScrollAnimationWrapper from "./scrollAnimationWrapper";

interface SloganProps {
  t: Function;
  className?: string;
  slogansData: SloganData[];
  color?: "white" | "black";
}

export type SloganData = {
  id: number;
  tags: boolean;
  numberOfTags?: number;
  buttonsLink?: ButtonLink[];
};

export type ButtonLink = { title: string; icon: string; link: string };

export const Slogan: React.FC<SloganProps> = ({
  t,
  className,
  slogansData,
  color = "white",
}) => {
  return (
    <>
      <div
        dir="ltr"
        className={cn(
          `mb-10 grid h-auto w-full grid-cols-1 divide-y divide-background-secondary md:my-20 xl:mb-40 xl:mt-20 xl:grid-cols-3 xl:divide-x xl:divide-y-0 ${className}`,
        )}
      >
        {slogansData.map((sloganData, index) => {
          const arrayWithNumberOfTags =
            sloganData.numberOfTags &&
            Array.from(Array(sloganData.numberOfTags), (_, index) => index + 1);

          return (
            <>
              <div className="w-full py-3 md:py-5 lg:py-0">
                <div className="space-y-4 p-8 md:space-y-6">
                  <ScrollAnimationWrapper animationClassName="animate-fade-down">
                    <h1
                      className={`text-${color}-primary text-2xl md:text-4xl`}
                    >
                      {t(`sloganSection.${[index]}.title`)}
                    </h1>
                  </ScrollAnimationWrapper>
                  <ScrollAnimationWrapper animationClassName="animate-fade-up">
                    <p className={`text-${color}-secondary md:text-lg`}>
                      {t(`sloganSection.${[index]}.description`)}
                    </p>
                  </ScrollAnimationWrapper>
                  <ScrollAnimationWrapper animationClassName="ltr:animate-fade-left rtl:animate-fade-right">
                    <div className="flex flex-wrap gap-3">
                      {arrayWithNumberOfTags &&
                        arrayWithNumberOfTags.map((_, tagIndex) => {
                          return (
                            <div
                              key={t(
                                `sloganSection.${[index]}.tags.${tagIndex}`,
                              )}
                              className="rounded-lg border border-white-secondary px-3 py-1 transition-all"
                            >
                              <p
                                className={`text-sm text-white-primary md:text-base`}
                              >
                                {t(`sloganSection.${[index]}.tags.${tagIndex}`)}
                              </p>
                            </div>
                          );
                        })}

                      {sloganData.buttonsLink?.map((buttonLinkData: any, i) => {
                        return (
                          <a
                            href={`${buttonLinkData.link}`}
                            key={t(`sloganSection.${[index]}.tags.${i}`)}
                          >
                            <button className="border-base-dark fill-base-text-dark text-base-text-dark flex items-center gap-2 rounded-lg border px-4 py-2 text-sm transition-all duration-500 hover:cursor-pointer hover:bg-black-primary hover:fill-white-primary hover:text-white-primary">
                              <buttonLinkData.icon
                                className={`size-5 ${buttonLinkData.title === "Get In Touch" && "rtl:rotate-180"}`}
                              />
                              {t(`sloganSection.${[index]}.buttonsLink.${i}`)}
                            </button>
                          </a>
                        );
                      })}
                    </div>
                  </ScrollAnimationWrapper>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
