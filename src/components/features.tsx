import { cn } from "@/utils/cn.util";
import ScrollAnimationWrapper from "./scrollAnimationWrapper";

export interface PropsTypes {
  className?: string;
  t: Function;
  keyword: string;
  featureData: any;
}

export function Features({ className, t, keyword, featureData }: PropsTypes) {
  return (
    <ScrollAnimationWrapper animationClassName="ltr:animate-fade-left rtl:animate-fade-right">
      <div
        className={cn(
          `w-full space-y-3 px-4 py-5 md:w-1/2 md:space-y-4 md:py-8 xl:w-1/3`,
        )}
      >
        <div className={`w-full md:mb-5 ${className}`}>
          <featureData.icon className="mb-1 block size-12 fill-primary" />
          <h2 className="text-2xl text-black-primary md:text-3xl">
            {t(`${keyword}.title`)}
          </h2>
        </div>
        <p className="leading-1 text-black-secondary md:text-lg">
          {t(`${keyword}.description`)}
        </p>
      </div>
    </ScrollAnimationWrapper>
  );
}
