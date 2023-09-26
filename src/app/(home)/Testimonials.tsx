"use client";
import SectionTitles, {
  LeftSlide,
  RightSlide,
} from "@/components/SectionTitles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Testimonial from "@/components/Testimonial";

const customNavigation = (
  <div className="flex gap-3 self-end">
    <button className="prev-testimonial">
      <RightSlide className="h-10 w-10 md:h-11 md:w-11" />
    </button>
    <button className="next-testimonial">
      <LeftSlide className="h-10 w-10 md:h-11 md:w-11" />
    </button>
  </div>
);

const Testimonials = () => {
  return (
    <section className="main-container">
      <SectionTitles
        title="منتجات خاصة"
        subTitle="تسوق احدث المنتجات المميزة المضافة جديد"
        LeftSideContent={customNavigation}
      />

      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1.35}
        breakpoints={{
          960: {
            slidesPerView: 2.35,
            spaceBetween: 24
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 24
          }
        }}
        navigation={{
          nextEl: ".next-testimonial",
          prevEl: ".prev-testimonial",
        }}
      >
        <SwiperSlide>
          <Testimonial />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
