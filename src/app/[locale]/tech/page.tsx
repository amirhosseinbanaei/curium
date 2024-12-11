import Cta from "@/components/cta";
import { Features } from "@/components/features";
import HeroSection from "@/components/heroSection";
import SeparateSection from "@/components/separateSection";
import SideSpaceWrapper from "@/components/sideSpaceWrapper";
import Slider from "@/components/slider";
import { Slogan } from "@/components/slogan";
import { TitleAndDescription } from "@/components/titleAndDescription";
import featuresData, { FeatureType } from "@/data/features.data";
import imageSources from "@/data/imageSources.data";
import slidersData from "@/data/slider.data";
import slogansData from "@/data/slogans.data";
import { useTranslations } from "next-intl";

export default function TechStudio() {
  const t = useTranslations("TechPage");
  return (
    <main>
      <SideSpaceWrapper>
        <HeroSection t={t} color="white" />
        <Slogan t={t} slogansData={slogansData.techStudio} />
      </SideSpaceWrapper>

      <SeparateSection background="white-primary">
        <TitleAndDescription
          title={t("featureSection.title")}
          description={t("featureSection.description")}
          color="black"
        />
        <div className="flex h-auto w-full flex-wrap">
          {featuresData.tech.map((featureData: FeatureType, index) => (
            <Features
              t={t}
              key={`tech-feature-${featureData.id}`}
              featureData={featureData}
              keyword={`featureSection.features.${index}`}
            />
          ))}
        </div>
      </SeparateSection>

      <SeparateSection background="white-primary" className="mt-0 pt-0 md:pt-10">
        <Slider sliderData={slidersData.projects.tech} page="TechPage">
          <TitleAndDescription title={t("sliderSection.title")} color="black" />
        </Slider>
      </SeparateSection>

      <SideSpaceWrapper>
        <Cta t={t} color="black" imageSource={imageSources.tech.cta} />
      </SideSpaceWrapper>
    </main>
  );
}
