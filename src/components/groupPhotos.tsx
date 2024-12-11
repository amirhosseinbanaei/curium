import Image from "next/image";
import ScrollAnimationWrapper from "./scrollAnimationWrapper";

export default function GroupPhotos({
  imageSources,
  reverse,
}: {
  imageSources: { squareImage: string; rectangleImage: string };
  reverse?: boolean;
}) {
  return (
    <div
      className={`flex h-full w-1/2 ${
        reverse ? "flex-col-reverse" : "flex-col"
      } gap-5`}
    >
      <ScrollAnimationWrapper animationClassName="animate-fade-down">
        <span className="custom-shadow-light bg-background relative aspect-square max-w-full rounded-md">
          <Image
            loading="lazy"
            fill
            className="rounded-md"
            src="/image.webp"
            alt="Image"
          />
        </span>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper animationClassName="animate-fade-up">
        <span className="custom-shadow-light relative aspect-video max-w-full rounded-md">
          <Image
            fill
            loading="lazy"
            className="rounded-md"
            src="/hero.webp"
            alt="Image"
          />
        </span>
      </ScrollAnimationWrapper>
    </div>
  );
}
