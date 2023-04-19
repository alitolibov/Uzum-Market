import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";


import '../index.css'
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";

export default function SwiperBig() {
  return (
    <div className="">
      <Swiper
        className="mySwiper w-full aspect overflow-hidden rounded-[12px] mt-[15px] mb-[48px]"
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
      >
        <SwiperSlide>
            <img src="https://images.uzum.uz/cghdvrjfkbipbv1u94ig/main_page_banner.jpg" className="object-cover w-full h-full" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://images.uzum.uz/cg7hqbfhj8j9g699qoa0/main_page_banner.jpg" className="object-cover w-full h-full" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://images.uzum.uz/cgqg0d357mg9720egv60/main_page_banner.jpg" className="object-cover w-full h-full" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://images.uzum.uz/cgqfv57g49devoadeung/main_page_banner.jpg" className="object-cover w-full h-full" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://images.uzum.uz/cgqfulb57mg9720egung/main_page_banner.jpg" className="object-cover w-full h-full" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
