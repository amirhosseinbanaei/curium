import ScrollAnimationWrapper from "@/components/scrollAnimationWrapper";
import SeparateSection from "@/components/separateSection";
import { TitleAndDescription } from "@/components/titleAndDescription";

export default function ContentSection({ t }: { t: Function }) {
  return (
    <SeparateSection background="white-primary">
      <section className="flex w-full flex-col gap-10 lg:flex-row">
        <div className="w-full space-y-6 lg:w-1/2">
          <TitleAndDescription
            title={t("contentSection.title")}
            description={t("contentSection.description")}
            titleStyle="text-4xl font-normal"
            descriptionStyle="md:text-2xl"
            color="black"
          />
        </div>
        <ScrollAnimationWrapper animationClassName="ltr:animate-fade-left rtl:animate-fade-right">
          <div className="flex h-full w-full flex-col gap-10 pt-3 lg:w-1/2">
            {Array.from(Array(3), (_, index) => (
              <Content
                t={t}
                key={index}
                keyword={`contentSection.contents.${index}`}
              />
            ))}
          </div>
        </ScrollAnimationWrapper>
      </section>
    </SeparateSection>
  );
}

function Content({ t, keyword }: { t: Function; keyword: string }) {
  return (
    <div className="flex w-full flex-col space-y-5 border-t border-white-secondary px-3 pt-10">
      <h1 className="text-4xl text-black-primary">{t(`${keyword}.title`)}</h1>
      <p className="text-black-secondary">{t(`${keyword}.description`)}</p>
    </div>
  );
}
