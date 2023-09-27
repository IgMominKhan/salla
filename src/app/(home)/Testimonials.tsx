"use client";
import SectionTitles from "@/components/SectionTitles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Testimonial from "@/components/Testimonial";
import SlideNavigation from "@/components/SlideNavigation";

const Testimonials = () => {
  return (
    <section className="main-container">
      <SectionTitles
        title="منتجات خاصة"
        subTitle="تسوق احدث المنتجات المميزة المضافة جديد"
        LeftSideContent={<SlideNavigation prevSlide="prev-testimonial" nextSlide="next-testimonial" />}
      />

      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1.35}
        breakpoints={{
          960: {
            slidesPerView: 2.35,
            spaceBetween: 24,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
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
