"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import img from "@/assets/images/home/category/watch.jpeg";

const CategoriesSlider = ({ categories }: { categories: any }) => {
  // console.log(categories);
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={24}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 6,
          },
          1200: {
            slidesPerView: 7,
          },
        }}
        navigation={{
          nextEl: ".next-category",
          prevEl: ".prev-category",
          
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper mt-2xl md:mt-3xl"
      >
        {categories.map((category: any,index: number) => (
          <SwiperSlide key={index}>
            <div className="text-center">
              <Image
                src={img}
                alt={category.category_name}
                width={140}
                height={140}
                placeholder="blur"
                className="mb-xl rounded-full"
              />
              <p className="text-xl text-clr-dark-gray-600">
                {category.category_name}
              </p>
              <p className="text-clr-dark-gray-400">
                {category.total_products} منتج
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CategoriesSlider;
