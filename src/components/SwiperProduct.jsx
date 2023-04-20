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

export default function SwiperProduct({type}) {
    let data = useSelector(state => state.goods.data)
    let arrType = data.filter(item => item.type === type)
  return (
    <div>
      <Swiper
        slidesPerView={2}
        spaceBetween={8}
        // modules={[Pagination]}
        className="mySwiper w-full overflow-hidden rounded-[12px] mb-[48px]"
      >
        {
            arrType.map((el,index) => <SwiperSlide key={index}><Item item={el}/></SwiperSlide>)
        }
      </Swiper>
    </div>
  );
}