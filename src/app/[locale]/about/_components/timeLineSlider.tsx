"use client";
import { ReactNode, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderButtons from "@/components/sliderButton";
import { useTranslations } from "use-intl";

interface TimeLineSlides {
  year: string;
  contents: TimeLineSlidesContents[];
}

interface TimeLineSlidesContents {
  title: string;
  description: string;
}

const TimeLineSlider = ({ children }: { children: ReactNode }) => {
  const swiperRef = useRef<any>(null);
  const t = useTranslations("AboutUsPage");
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

  const slidesData = t.raw("timeLineSection") as TimeLineSlides[];

  return (
    <div className="relative">
      {children}
      <Swiper
        ref={swiperRef}
        grabCursor={true}
        spaceBetween={30}
        onSlideChange={slideChangeHandler}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4,
          },
        }}
      >
        {slidesData.map((eachSlideData) => {
          return (
            <SwiperSlide
              key={`timeLine-${eachSlideData.year}`}
              className="mt-20 h-[500px] w-full border-l border-white-primary px-5 pb-10 pt-44 fa:border-l-0 fa:border-r"
            >
              <TimeLineSliderSlide slideData={eachSlideData} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <SliderButtons
        isBeginning={isSlideBeginning}
        isEnd={isSlideEnd}
        handlers={sliderButtonHandlers}
        color="white"
        className="md:top-5"
      />
    </div>
  );
};

function TimeLineSliderSlide({ slideData }: { slideData: TimeLineSlides }) {
  return (
    <>
      <span className="absolute -left-3 top-10 w-24 rotate-90 fa:-right-3">
        <h1 className="text-5xl text-white-primary">
          {slideData.year}
        </h1>
      </span>
      <div className="flex h-full flex-col justify-end gap-5">
        {slideData.contents.map((eachContentData) => {
          return (
            <span key={eachContentData.title} className="w-full space-y-2">
              <h1 className="text-3xl font-medium text-white-primary">
                {eachContentData.title}
              </h1>
              <p className="text-lg text-white-secondary">
                {eachContentData.description}
              </p>
            </span>
          );
        })}
      </div>
    </>
  );
}

export default TimeLineSlider;
