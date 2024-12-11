import { useTranslations } from "next-intl";
import SideSpaceWrapper from "@/components/sideSpaceWrapper";
import AboutUsPageSlider from "./_components/slider";
import Cta from "@/components/cta";
import TimeLineSlider from "./_components/timeLineSlider";
import { TitleAndDescription } from "@/components/titleAndDescription";
import SeparateSection from "@/components/separateSection";
import slidersData from "@/data/slider.data";
import PersonCard from "./_components/personCard";
import ScrollAnimationWrapper from "@/components/scrollAnimationWrapper";

export interface PersonsData {
  id: string;
  name: string;
  position: string;
  image: string;
}
interface QuickInfosData {
  title: string;
  value: string;
}

export default function AboutPage() {
  const t = useTranslations("AboutUsPage");
  const personsData = t.raw("ourTeam.persons") as PersonsData[];
  const quickInfosData = t.raw(
    "ourStorySection.quickInfos",
  ) as QuickInfosData[];
  return (
    <>
      <section className="mt-20 w-full pt-10 md:py-20">
        <SideSpaceWrapper>
          <ScrollAnimationWrapper animationClassName="animate-fade-down">
            <h1 className="text-6xl text-black-primary">{t("title")}</h1>
          </ScrollAnimationWrapper>
          <div className="mt-20 flex w-full flex-col gap-10 px-3 lg:flex-row">
            {/* Our Story Section */}
            <div className="flex w-full flex-col gap-10 pr-5 lg:w-1/2">
              <ScrollAnimationWrapper animationClassName="animate-fade-left">
                <h2 className="text-5xl text-black-primary">
                  {t("ourStorySection.title")}
                </h2>
              </ScrollAnimationWrapper>
              <ScrollAnimationWrapper animationClassName="animate-fade-up">
                <p className="text-lg leading-7 text-black-secondary">
                  {t("ourStorySection.description.first")}
                  <br />
                  <br />
                  {t("ourStorySection.description.second")}
                </p>
              </ScrollAnimationWrapper>
            </div>

            <div className="relative flex w-full flex-col items-center gap-5 lg:w-1/2">
              <div className="grid h-20 w-full grid-cols-3 justify-items-center">
                {quickInfosData.map((eachQuickInfo) => {
                  return (
                    <QuickInfos
                      key={eachQuickInfo.title}
                      eachQuickInfo={eachQuickInfo}
                    />
                  );
                })}
              </div>
              <div className="relative aspect-video w-11/12">
                <AboutUsPageSlider sliderData={slidersData.about.imageSlide} />
              </div>
            </div>
          </div>
        </SideSpaceWrapper>
      </section>

      <SeparateSection background="black-primary" className="relative gap-10">
        <TimeLineSlider>
          <TitleAndDescription
            title={t("timeLine")}
            titleStyle="text-6xl md:text-7xl lg:text-6xl"
            color="white"
          />
        </TimeLineSlider>
      </SeparateSection>

      <section className="h-[700px] w-full bg-black-primary pb-20 pt-10">
        <SideSpaceWrapper>
          <TitleAndDescription
            title={t("otherBrands")}
            color="white"
            titleStyle="text-6xl md:text-7xl lg:text-6xl"
          />
        </SideSpaceWrapper>
      </section>

      <section className="w-full space-y-5 py-20">
        <SideSpaceWrapper>
          <TitleAndDescription title={t("ourTeam.title")} color="black" />
          <div className="grid w-full grid-cols-1 gap-x-2 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
            {personsData.map((eachPersonData: PersonsData) => {
              return (
                <PersonCard
                  key={eachPersonData.name}
                  eachPersonData={eachPersonData}
                />
              );
            })}
          </div>
          <Cta t={t} color="black" imageSource="/hero.webp" />
        </SideSpaceWrapper>
      </section>
    </>
  );
}

function QuickInfos({ eachQuickInfo }: { eachQuickInfo: QuickInfosData }) {
  return (
    <span className="flex flex-col items-center text-black-primary">
      <ScrollAnimationWrapper animationClassName="animate-fade-down">
        <p className="text-2xl md:text-5xl">{eachQuickInfo.value}</p>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper animationClassName="animate-fade-up">
        <p className="md:text-lg">{eachQuickInfo.title}</p>
      </ScrollAnimationWrapper>
    </span>
  );
}
