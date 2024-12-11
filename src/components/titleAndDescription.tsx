import ScrollAnimationWrapper from "./scrollAnimationWrapper";
import { cn } from "@/utils/cn.util";

export function TitleAndDescription({
  title,
  className,
  color,
  description,
  titleStyle,
  descriptionStyle,
}: {
  title: string;
  className?: string;
  description?: string;
  titleStyle?: string;
  color: "white" | "black";
  descriptionStyle?: string;
}) {
  return (
    <div className={cn(`mb-10 w-full space-y-3 md:space-y-6 ${className}`)}>
      <ScrollAnimationWrapper animationClassName="animate-fade-down">
        <h1
          className={cn(
            `text-${color}-primary text-4xl lg:text-5xl ${titleStyle}`,
          )}
        >
          {title}
        </h1>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper animationClassName="animate-fade-up">
        <p
          className={cn(
            `text-${color}-secondary md:text-lg lg:text-xl ${descriptionStyle}`,
          )}
        >
          {description}
        </p>
      </ScrollAnimationWrapper>
    </div>
  );
}
