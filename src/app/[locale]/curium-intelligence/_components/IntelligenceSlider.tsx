"use client";
import Image from "next/image";
import { ReactNode, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderButtons from "@/components/sliderButton";
import { useTranslations } from "next-intl";
import slidersData from "@/data/slider.data";
import ScrollAnimationWrapper from "@/components/scrollAnimationWrapper";

interface SliderProps {
  children: ReactNode;
}

export default function IntelligenceSlider({ children }: SliderProps) {
  const swiperRef = useRef<any>(null);
  const t = useTranslations(`CuriumIntelligencePage`);
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
        slidesPerView={1}
        centeredSlides
        onSlideChange={slideChangeHandler}
        className="mySwiper"
        breakpoints={{
          768: {
            slidesPerView: 1.8,
          },
        }}
      >
        {slidersData.intelligence.map((eachData, index) => {
          return (
            <SwiperSlide key={eachData.id} className="aspect-video w-full">
              <ScrollAnimationWrapper
                initialClassName="opacity-0"
                animationClassName="ltr:animate-fade-left rtl:animate-fade-right duration-300"
              >
                <div className="space-y-6 rounded-md p-4 pb-6">
                  <div className="custom-shadow-light relative aspect-video w-full rounded-xl">
                    <Image
                      fill
                      alt="Slider Image."
                      src={eachData.image}
                      loading="lazy"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="w-full space-y-3 px-2">
                    <p className={`text-md text-black-secondary`}>
                      {t(`sliderSection.slides.${index}`)}
                    </p>
                  </div>
                </div>
              </ScrollAnimationWrapper>
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
