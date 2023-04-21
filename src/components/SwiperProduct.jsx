import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import '../index.css'

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import Item from "./Item";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function SwiperProduct({type}) {
    const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    let data = useSelector(state => state.goods.data)
    let {pathname} = useLocation()
    let popularity = data
    popularity = [...popularity].sort((a, b) => a.rating - b.rating).reverse().slice(0, 10);
    let arrType = data.filter(item => item.type === type)
  return (
    <div>
      {
        viewport_width < 768 ? 
        (
            <Swiper
        slidesPerView={viewport_width < 592 ? 2 : 3}
        spaceBetween={8}
        className="mySwiper w-full overflow-hidden rounded-[12px] mb-[48px]"
      >
        {
            pathname !== '/liked' && pathname !== '/cart' ? arrType.map((el,index) => <SwiperSlide key={index}><Item item={el}/></SwiperSlide>) : popularity.map((el,index) => <SwiperSlide key={index}><Item item={el}/></SwiperSlide>)
        }
      </Swiper>
        ) :
        <Swiper
        slidesPerView={viewport_width < 1200 ? 4 : 5}
        spaceBetween={8}
        navigation={true}
        pagination={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        className="mySwiper w-full overflow-hidden rounded-[12px] mb-[48px]"
      >
        {
             pathname !== '/liked' && pathname !== '/cart' ? arrType.map((el,index) => <SwiperSlide key={index}><Item item={el}/></SwiperSlide>) : popularity.map((el,index) => <SwiperSlide key={index}><Item item={el}/></SwiperSlide>)
        }
      </Swiper>
      }
    </div>
  );
}