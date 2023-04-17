import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay} from "swiper";
import SwiperBig from "../components/SwiperBig";
import { useSelector } from "react-redux";

const Home = () => {
    const data = useSelector(state => state.goods.data)

    console.log(data);

    const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return ( 
    <div className="">
    {
        viewport_width < 1024 ? (
            <Swiper className="mySwiper height w-full overflow-hidden rounded-[12px] my-[10px]"
    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay]}>
        <SwiperSlide>
            <img src="https://images.uzum.uz/cghdvvvg49devoabuk40/main_page_banner.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://images.uzum.uz/cg5k4tvhgiov1qie4leg/main_page_banner.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://images.uzum.uz/cgqfvcb57mg9720egutg/main_page_banner.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://images.uzum.uz/cgqg0ib57mg9720egv8g/main_page_banner.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://images.uzum.uz/cgqg03vhj8j9g69cpmg0/main_page_banner.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://images.uzum.uz/cg5k4tvhgiov1qie4leg/main_page_banner.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
        ) : <SwiperBig/>
    }
    <ul>
    </ul>
    </div> );
}
 
export default Home;