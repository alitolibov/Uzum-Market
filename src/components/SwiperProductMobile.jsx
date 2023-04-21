import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import '../index.css'
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useContext, useEffect, useState } from "react";
import { cursorCTX } from "../context/cursorCTX";

const SwiperProductMobile = ({media, fn}) => {

    const {setCursor, cursor} = useContext(cursorCTX)
    const [bol, setBol] = useState(true)

    useEffect(() => {
       if(cursor) {
        let imgActive = document.querySelectorAll('.swiperSlide')
        fn(imgActive, 3) 
       } 
    }, [bol, cursor])

  
    return ( 
        <>
        <Swiper
        className="swiper w-[81%] h-full overflow-hidden"
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard]}
          loop={true}
      >
        {
            media.map((item,index) => <SwiperSlide className="swiperSlide" data-index={index + 1} key={index}>
                <img src={item} className="object-contain bg-no-repeat bg-center w-full h-full myImage" alt="" onMouseMove={() => setCursor(true)} />
            </SwiperSlide>)
        }
       
      </Swiper>
        </>
     );
}
 
export default SwiperProductMobile;