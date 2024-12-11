import { cn } from "@/utils/cn.util";
import { ReactNode } from "react";
import ScrollAnimationWrapper from "./scrollAnimationWrapper";

export default function HeroSection({
  t,
  color,
}: {
  t: Function;
  color: "white" | "black";
}) {
  return (
    <div className="relative h-full w-full overflow-hidden pt-24 xl:h-svh xl:pb-6">
      <Frame
        className={
          "tech:bg-herosection-tech-2 media:bg-herosection-tech-1 business:bg-herosection-tech-2"
        }
      >
        <Frame className="bg-background-primary">
          <Frame
            className={
              "tech:bg-herosection-tech-2 media:bg-herosection-tech-1 business:bg-herosection-tech-2"
            }
          >
            <Frame className="bg-background-primary">
              <Frame className="flex flex-col items-center justify-center gap-3 md:gap-5">
                <ScrollAnimationWrapper animationClassName="animate-fade-down">
                  <h1
                    className={`text-${color}-primary text-3xl font-bold md:text-6xl xl:text-8xl`}
                  >
                    {t("heroSection.title")}
                  </h1>
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper animationClassName="animate-fade-up">
                  <p
                    className={`text-${color}-secondary text-center text-sm md:text-lg md:leading-8 xl:text-xl`}
                  >
                    {t("heroSection.description.first")} <br />
                    <span className="hidden md:block">
                      {t("heroSection.description.second")}
                    </span>
                  </p>
                </ScrollAnimationWrapper>
              </Frame>
            </Frame>
          </Frame>
        </Frame>
      </Frame>
    </div>
  );
}

function Frame({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        `${className} h-full w-full rounded-2xl bg-cover p-3 md:p-6 xl:p-14`,
      )}
    >
      {children}
    </div>
  );
}
