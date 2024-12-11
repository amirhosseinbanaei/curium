import Cta from "@/components/cta";
import HeroSection from "@/components/heroSection";
import SeparateSection from "@/components/separateSection";
import SideSpaceWrapper from "@/components/sideSpaceWrapper";
import Slider from "@/components/slider";
import { TitleAndDescription } from "@/components/titleAndDescription";
import slidersData from "@/data/slider.data";
import { useTranslations } from "next-intl";
import ContentSection from "./_components/contentSection";
import featuresData, { FeatureType } from "@/data/features.data";
import { Features } from "@/components/features";
import imageSources from "@/data/imageSources.data";

export default function BusinessPage() {
  const t = useTranslations("BusinessPage");
  return (
    <main>
      <SideSpaceWrapper>
        <HeroSection t={t} color="white" />
      </SideSpaceWrapper>

      <ContentSection t={t} />

      <SeparateSection background="white-primary" className="mt-0">
        <TitleAndDescription
          title={t("featureSection.title")}
          description={t("featureSection.description")}
          color="black"
        />
        <div className="flex h-auto w-full flex-wrap">
          {featuresData.business.map((featureData: FeatureType, index) => (
            <Features
              t={t}
              key={featureData.id}
              featureData={featureData}
              keyword={`featureSection.features.${index}`}
              className="flex items-center gap-3"
            />
          ))}
        </div>
      </SeparateSection>

      <SeparateSection background="white-primary" className="mt-0 pt-0 md:pt-10">
        <Slider sliderData={slidersData.projects.business} page="BusinessPage">
          <TitleAndDescription
            title={t("sliderSection.title")}
            color="black"
          />
        </Slider>
      </SeparateSection>

      <SideSpaceWrapper>
        <Cta className="shadow-none" color="black" t={t} imageSource={imageSources.business.cta} />
      </SideSpaceWrapper>
    </main>
  );
}
