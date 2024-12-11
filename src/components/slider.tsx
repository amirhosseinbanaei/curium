"use client";
import Image from "next/image";
import { ReactNode, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ScrollAnimationWrapper from "./scrollAnimationWrapper";
import SliderButtons from "./sliderButton";
import { ProjectSlideTypes } from "@/data/slider.data";
import { useTranslations } from "next-intl";

interface SliderProps {
  page: string;
  children: ReactNode;
  sliderData: ProjectSlideTypes[];
}

export default function Slider({ page, sliderData, children }: SliderProps) {
  const swiperRef = useRef<any>(null);
  const t = useTranslations(`${page}`);
  const [isSlideEnd, setIsSlideEnd] = useState(false);
  const [isSlideBeginning, setIsSlideBeginning] = useState(true);
  const sliderButtonHandlers: any = [
    () => swiperRef?.current?.swiper.slidePrev(),
    () => swiperRef?.current?.swiper.slideNext(),
  ];
  const slideChangeHandler = (swiper: any) => {
    if (swiper.isEnd) {
      setIsSlideEnd(true);
      setIsSlideBeginning(false);
    } else if (swiper.isBeginning) {
      setIsSlideEnd(false);
      setIsSlideBeginning(true);
    } else {
      setIsSlideEnd(false);
      setIsSlideBeginning(false);
    }
  };

  return (
    <div className="relative">
      {children}
      <Swiper
        ref={swiperRef}
        grabCursor={true}
        spaceBetween={30}
        centeredSlidesBounds
        className="mySwiper"
        slidesPerView={"auto"}
        onSlideChange={(swiper) => slideChangeHandler(swiper)}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1440: {
            slidesPerView: 4,
          },
        }}
      >
        {sliderData.map((eachProjectData: ProjectSlideTypes, index) => {
          return (
            <SwiperSlide
              key={eachProjectData.id}
              className="aspect-square max-w-96"
            >
              <SliderSlide
                t={t}
                image={eachProjectData.image}
                keyword={`sliderSection.projects.${index}`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <SliderButtons
        isBeginning={isSlideBeginning}
        isEnd={isSlideEnd}
        handlers={sliderButtonHandlers}
        color="black"
        className="md:top-0"
      />
    </div>
  );
}

function SliderSlide({
  t,
  image,
  keyword,
}: {
  t: Function;
  image: string;
  keyword: string;
}) {
  return (
    <ScrollAnimationWrapper animationClassName="ltr:animate-fade-left rtl:animate-fade-right">
      <div className="mt-4 space-y-4 rounded-md">
        <div className="relative aspect-video w-full rounded-xl">
          <Image
            loading="lazy"
            fill
            alt="Slider Image."
            src={image}
            className="rounded-xl"
          />
        </div>
        <div className="w-full space-y-1 px-2">
          <h1 className={`text-2xl text-black-primary`}>
            {t(`${keyword}.title`)}
          </h1>
          <p className={`text-black-secondary`}>
            {t(`${keyword}.description`)}
          </p>
        </div>
      </div>
    </ScrollAnimationWrapper>
  );
}
