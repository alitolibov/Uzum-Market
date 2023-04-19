import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import '../index.css'
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperProductMobile = ({media}) => {
    
    return ( 
        <Swiper
        className="mySwiper w-[81%] h-full overflow-hidden"
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard]}
          loop={true}
      >
        {
            media.map(item => <SwiperSlide>
                <img src={item} className="object-contain bg-no-repeat bg-center w-full h-full" alt="" />
            </SwiperSlide>)
        }
       
      </Swiper>
     );
}
 
export default SwiperProductMobile;