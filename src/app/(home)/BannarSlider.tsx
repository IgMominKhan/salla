"use client";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BannarSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        autoplay={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          renderBullet: function (index, className) {
            return `<span class="${className} w-12"></span>`;
          },
        }}
        navigation={true}
        modules={[Pagination]}
      >
        {[1, 2, 3].map((slide) => (
          <SwiperSlide key={slide} className="text-clr-dark-white bg-clr-info-600 py-11xl text-center bg-[url('../assets/images/home/bannar/slide01.png')]">
            <div className="main-container">
              <h1 className="text-5xl font-bold">أفضل التخفيضات 2022</h1>
              <p className="max-w-lg mx-auto mt-xl">
                متجر سلة يوفر لك كل ماتحتاجه من إلكترونيات أو أثاث منزلي
                بالإضافة إلى أفضل التحفيضات على المنتجات , تسوق الان واستمتع بكل
                بالتخفيضات على المنتجات
              </p>

              <button className="bg-clr-primary-000 py-xl px-5xl mt-3xl rounded">
                اكتشف المزيد
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BannarSlider;
