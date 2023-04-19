import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import '../index.css'

// import required modules
import { Navigation } from "swiper";
import Item from "./Item";
import { useSelector } from "react-redux";

export default function SwiperProduct() {
    let data = useSelector(state => state.goods.data)
  return (
    <div>
      <Swiper
        slidesPerView={2}
        spaceBetween={8}
        // modules={[Pagination]}
        className="mySwiper w-full overflow-hidden rounded-[12px] mb-[48px]"
      >
        <SwiperSlide><Item item={data[0]}/></SwiperSlide>
        <SwiperSlide><Item item={data[1]}/></SwiperSlide>
        <SwiperSlide><Item item={data[2]}/></SwiperSlide>
        <SwiperSlide><Item item={data[3]}/></SwiperSlide>
      </Swiper>
    </div>
  );
}