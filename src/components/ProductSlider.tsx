"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Product from "@/app/(home)/Product";

const ProductSlider = ({ products }: { products: any }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={24}
        breakpoints={{
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper mt-2xl md:mt-3xl"
      >
        {products.map((product: any, index: number) => (
          <SwiperSlide key={index}>
            <Product product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductSlider;
