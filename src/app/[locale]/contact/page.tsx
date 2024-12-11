import ScrollAnimationWrapper from "@/components/scrollAnimationWrapper";
import SideSpaceWrapper from "@/components/sideSpaceWrapper";
import { Slogan } from "@/components/slogan";
import slogansData from "@/data/slogans.data";
import { useTranslations } from "next-intl";

export default function ContactUsPage() {
  const t = useTranslations("ContactUsPage");
  return (
    <div className="flex h-auto w-full flex-col pt-14 xl:h-svh">
      <div className="flex h-72 w-full items-center bg-black-primary md:h-96">
        <SideSpaceWrapper>
          <ScrollAnimationWrapper animationClassName="animate-fade-down">
            <h1 className="text-5xl text-white-primary md:text-8xl">
              {t("title")}
            </h1>
          </ScrollAnimationWrapper>
        </SideSpaceWrapper>
      </div>
      <div className="flex h-auto w-full xl:h-1/2 xl:items-center">
        <SideSpaceWrapper>
          <Slogan
            t={t}
            slogansData={slogansData.contactUs}
            color="black"
            className="my-0 gap-0 divide-white-secondary md:my-0 xl:my-0 xl:grid-cols-2 xl:divide-y-0 xl:py-3"
          />
        </SideSpaceWrapper>
      </div>
    </div>
  );
}
