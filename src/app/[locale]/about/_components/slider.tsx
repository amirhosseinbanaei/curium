"use client";
import Image from "next/image";
import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
interface AboutUsPageSliderProps {
  sliderData: ImageObjectTypes[];
}
type ImageObjectTypes = { src: string };

const AboutUsPageSlider: React.FC<AboutUsPageSliderProps> = ({
  sliderData,
}) => {
  const swiperRef = useRef<any>(null);
  return (
    <div className="relative">
      <Swiper
        ref={swiperRef}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        spaceBetween={30}
      >
        {sliderData.map((eachData: ImageObjectTypes, index) => {
          return (
            <SwiperSlide
              className="aspect-video w-full"
              key={`swiper-slide-about-${index}`}
            >
              <Image
                fill
                alt={`About Us Slider Image.`}
                src={`${eachData.src}`}
                className="rounded-xl"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default AboutUsPageSlider;
