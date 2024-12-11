import ScrollAnimationWrapper from "@/components/scrollAnimationWrapper";
import SideSpaceWrapper from "@/components/sideSpaceWrapper";
import Image from "next/image";

export default function HeroSection({ t }: { t: Function }) {
  return (
    <section className="relative w-full overflow-hidden pt-24 lg:h-screen">
      <ScrollAnimationWrapper animationClassName="ltr:animate-fade-left rtl:animate-fade-right">
        <div className="absolute bottom-0 -z-10 flex h-[calc(100%-120px)] w-2/3 justify-end lg:w-1/3 xl:w-1/2 ltr:right-0 rtl:left-0">
          <div className="relative aspect-video w-4/5 bg-herosection-tech-1 bg-cover ltr:-right-10 ltr:rounded-l-xl rtl:-left-10 rtl:rounded-r-xl">
            <div className="absolute bottom-10 z-20 hidden aspect-square h-auto w-40 lg:block ltr:-left-20 rtl:-right-20">
              <Image priority={true} fill src="/image.webp" alt="Logo Image." />
            </div>
          </div>
        </div>
      </ScrollAnimationWrapper>
      <SideSpaceWrapper>
        <div className="flex w-full justify-between rounded-md bg-white bg-opacity-40 p-6 backdrop-blur md:px-0 md:pt-16 lg:h-screen lg:bg-transparent lg:backdrop-blur-none">
          <div className="h-full w-full space-y-10 md:px-10 lg:w-2/3 xl:w-1/2">
            <ScrollAnimationWrapper animationClassName="animate-fade-down">
              <h1 className="text-4xl font-normal leading-12 text-black-primary md:text-6xl md:leading-[75px]">
                {t("heroSection.title")}
              </h1>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper animationClassName="animate-fade-up">
              <p className="text-xl leading-8 text-black-secondary md:text-2xl md:leading-10">
                {t("heroSection.description")}
              </p>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </SideSpaceWrapper>
    </section>
  );
}
