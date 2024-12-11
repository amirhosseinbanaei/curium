"use client";
import { NavItems } from "./navbar";
import { useTranslations } from "next-intl";
import socialsData from "@/data/social.data";
import ScrollAnimationWrapper from "./scrollAnimationWrapper";
import { SocialLinks } from "./socialButtons";
import Copyright from "@/assets/icons/Copyright.svg";
export default function Footer() {
  const tFooter = useTranslations("Footer");
  return (
    <>
      <footer className="flex w-full flex-col gap-5 bg-black-primary px-5 pt-10 tech:bg-white-primary media:bg-white-primary md:px-side-space 2xl:px-side-space-2xl">
        <section className="grid h-auto w-full grid-cols-12 gap-5">
          {/* Nav Items Section */}
          <div className="col-span-full flex w-full flex-col gap-3 md:col-span-5 md:items-start">
            <NavItems
              isOpenMobileOverlay={true}
              className="text-white-primary after:bg-primary tech:text-black-primary media:text-black-primary"
            />
          </div>

          {/* Social Buttons Section */}
          <div className="col-span-full flex w-full flex-col justify-start gap-3 md:col-span-4">
            <SocialLinks socialData={socialsData} />
          </div>

          {/* Image Section */}
          <div className="col-span-full mt-3 hidden h-48 w-full justify-end md:col-span-3 md:flex">
            <ScrollAnimationWrapper
              initialClassName="opacity-0"
              animationClassName="animate-fade-right"
            >
              <div className="aspect-square h-full rounded-xl bg-white-primary tech:bg-black-primary media:bg-black-primary"></div>
            </ScrollAnimationWrapper>
          </div>
        </section>
        <section className="my-3 flex h-14 w-full flex-col items-center">
          <div className="h-1 w-10/12 border-t border-white-secondary"></div>
          <div className="flex h-14 w-full items-center justify-center gap-2">
            <Copyright className="size-4 fill-white-primary tech:fill-black-primary media:fill-black-primary" />

            <p className="text-sm text-white-primary fa:tracking-wide tech:text-black-primary media:text-black-primary md:text-base">
              {tFooter("copyright")}
            </p>
          </div>
        </section>
      </footer>
    </>
  );
}
