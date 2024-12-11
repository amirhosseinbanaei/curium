import ScrollAnimationWrapper from "@/components/scrollAnimationWrapper";
import { cn } from "@/utils/cn.util";
import Image from "next/image";

export default function Cta({
  t,
  color,
  className,
  imageSource,
}: {
  t: Function;
  className?: string;
  color: "white" | "black";
  imageSource: string;
}) {
  return (
    <div
      className={cn(
        `custom-shadow-light my-20 w-full tech:shadow-2xl media:shadow-2xl ${className}`,
      )}
      dir="ltr"
    >
      <div
        className={cn(
          "relative items-center overflow-hidden rounded-md px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:gap-x-20 lg:pt-0 lg:ltr:flex lg:rtl:flex-row-reverse",
          {
            "bg-white-primary": color === "black",
            "bg-black-primary": color === "white",
          },
        )}
      >
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <ScrollAnimationWrapper animationClassName="animate-fade-down">
            <h2
              className={`text-3xl text-${color}-primary fa:text-right sm:text-4xl`}
            >
              {t(`cta.title`)}{" "}
            </h2>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animationClassName="animate-fade-up">
            <p
              className={`mt-6 text-lg leading-8 text-${color}-secondary fa:text-right`}
            >
              {t(`cta.description`)}
            </p>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animationClassName="ltr:animate-fade-left rtl:animate-fade-right">
            <div className="mt-10 flex items-center justify-center gap-x-6 fa:justify-end lg:justify-start">
              <button className="rounded-md bg-primary px-14 py-3 font-medium text-white-primary transition-all duration-500 hover:scale-105 hover:cursor-pointer">
                {t(`cta.button`)}
              </button>
            </div>
          </ScrollAnimationWrapper>
        </div>
        <div className="relative my-10 aspect-video w-full xl:h-96">
          <ScrollAnimationWrapper animationClassName="animate-scale-down">
            <Image
              alt="App screenshot"
              src={`${imageSource}`}
              loading="lazy"
              fill
              className="rounded-md"
            />
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
}
