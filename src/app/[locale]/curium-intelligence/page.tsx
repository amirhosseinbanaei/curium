import Cta from "@/components/cta";
import SideSpaceWrapper from "@/components/sideSpaceWrapper";
import { TitleAndDescription } from "@/components/titleAndDescription";
import { useTranslations } from "next-intl";
import LeftRightContent from "./_components/leftRightContent";
import IntelligenceSlider from "./_components/IntelligenceSlider";
import GroupPhotos from "@/components/groupPhotos";
import SeparateSection from "@/components/separateSection";
import imageSources from "@/data/imageSources.data";
import IntelligenceHeroSection from "./_components/heroSection";
import OtherStudiosContent from "./_components/otherStudiosContent";
import ScrollAnimationWrapper from "@/components/scrollAnimationWrapper";

export default function CuriumIntelligence() {
  const t = useTranslations("CuriumIntelligencePage");

  const otherStudiosContent = [
    { id: 1, href: "/tech", numberOfTags: 5 },
    { id: 2, href: "/business", numberOfTags: 2 },
    { id: 3, href: "/media", numberOfTags: 3 },
  ];
  return (
    <main>
      <IntelligenceHeroSection t={t} />

      <SeparateSection background="white-primary" className="mt-0">
        <div className="mx-auto flex h-3/4 w-full flex-col gap-10 py-10 lg:w-10/12 lg:py-40">
          <ScrollAnimationWrapper animationClassName="animate-fade-down">
            <h1 className="text-center text-4xl text-black-primary md:text-6xl">
              {t("heroSection.title")}
            </h1>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animationClassName="animate-fade-up">
            <p className="text-center text-xl leading-12 text-black-secondary md:text-2xl md:leading-10">
              {t("heroSection.description")}
            </p>
          </ScrollAnimationWrapper>
        </div>
      </SeparateSection>

      <LeftRightContent t={t} keyword="leftRightSection.0" image="/hero.webp" />

      <SeparateSection background="white-primary" className="mt-0">
        <IntelligenceSlider>
          <TitleAndDescription title={t("sliderSection.title")} color="black" />
        </IntelligenceSlider>
      </SeparateSection>

      <LeftRightContent
        t={t}
        reverse={true}
        keyword="leftRightSection.1"
        image="/cta.webp"
      />

      <SeparateSection background="white-primary">
        <section className="flex w-full flex-col gap-10 lg:flex-row">
          <div className="h-auto w-full lg:w-1/2">
            <ScrollAnimationWrapper animationClassName="animate-fade-down">
              <h1 className="mb-10 text-5xl text-black-primary md:text-6xl">
                {t(`otherStudiosSection.title`)}
              </h1>
            </ScrollAnimationWrapper>
            {otherStudiosContent.map((eachData, index) => {
              return (
                <OtherStudiosContent
                  t={t}
                  key={`OtherStudiosContent-${index}`}
                  numberOfTags={eachData.numberOfTags}
                  keyword={`otherStudiosSection.contents.${index}`}
                />
              );
            })}
          </div>
          <div className="flex h-full w-full items-center gap-5 lg:w-1/2">
            {imageSources.landing.groupPhotos.map((eachImageObject, index) => {
              return (
                <GroupPhotos
                  reverse={index % 2 === 0}
                  key={`groupPhotos-${index}`}
                  imageSources={eachImageObject}
                />
              );
            })}
          </div>
        </section>
        <Cta t={t} color="white" imageSource={imageSources.landing.cta} />
      </SeparateSection>
    </main>
  );
}
