import Cta from "@/components/cta";
import HeroSection from "@/components/heroSection";
import { useTranslations } from "next-intl";
import SideSpaceWrapper from "@/components/sideSpaceWrapper";
import { Slogan } from "@/components/slogan";
import slogansData from "@/data/slogans.data";
import Slider from "@/components/slider";
import { TitleAndDescription } from "@/components/titleAndDescription";
import SeparateSection from "@/components/separateSection";
import slidersData from "@/data/slider.data";
import featuresData, { FeatureType } from "@/data/features.data";
import imageSources from "@/data/imageSources.data";
import MediaFeatures from "@/components/mediaFeatures";

export default function MediaPage() {
  const t = useTranslations("MediaPage");
  return (
    <main>
      <SideSpaceWrapper>
        <HeroSection t={t} color="white" />
        <Slogan t={t} slogansData={slogansData.mediaEngine} />
      </SideSpaceWrapper>

      <SeparateSection background="white-primary">
        <TitleAndDescription
          title={t("featureSection.title")}
          description={t("featureSection.description")}
          color="black"
        />
        <div className="grid h-auto w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuresData.media.map((featureData: FeatureType, index) => (
            <MediaFeatures key={featureData.id} index={index} />
          ))}
        </div>
      </SeparateSection>

      <SeparateSection background="white-primary" className="mt-0 pt-0 md:pt-10">
        <Slider sliderData={slidersData.projects.media} page="MediaPage">
          <TitleAndDescription title={t("sliderSection.title")} color="black" />
        </Slider>
      </SeparateSection>

      <SideSpaceWrapper>
        <Cta t={t} color="black" imageSource={imageSources.media.cta} />
      </SideSpaceWrapper>
    </main>
  );
}
