import { useTranslations } from "next-intl";

import navbarData from "@/data/navbar.data";
import imageSources from "@/data/imageSources.data";

import Cta from "@/components/cta";
import Card from "./_components/card";
import GroupPhotos from "@/components/groupPhotos";
import HeroSection from "./_components/heroSection";
import SideSpaceWrapper from "@/components/sideSpaceWrapper";
import { TitleAndDescription } from "@/components/titleAndDescription";

export default function Home() {
  const t = useTranslations("HomePage");
  const cardKeyWords = navbarData.slice(0, 4).map((eachData) => eachData.key);
  const cardHrefs = navbarData.slice(0, 4).map((eachData) => eachData.href);
  return (
    <main>
      <HeroSection t={t} />

      <SideSpaceWrapper>
        {/* Cards Section */}
        <section className="mt-10 grid w-full grid-cols-1 gap-5 md:mt-20 lg:grid-cols-2">
          {cardKeyWords.map((eachKeyWord, index) => {
            return <Card key={eachKeyWord} keyWord={eachKeyWord} cardHrefs={cardHrefs[index]} />;
          })}
        </section>

        {/* Title And GroupPhotos Section */}
        <section className="mt-20 flex w-full flex-col gap-10 md:my-40 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <TitleAndDescription
              title={t("photosSection.title")}
              titleStyle="leading-11 lg:leading-14"
              description={t("photosSection.description")}
              descriptionStyle="md:text-xl"
              color="black"
            />
          </div>
          <div className="flex h-full w-full gap-5 lg:w-1/2">
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
      </SideSpaceWrapper>
    </main>
  );
}
