import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay} from "swiper";
import SwiperBig from "../components/SwiperBig";
import { useSelector } from "react-redux";
import Item from "../components/Item";
import { useState } from "react";

const Home = () => {
    const data = useSelector(state => state.goods.data)
    const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);


    const [countGame, setCountGame] = useState(viewport_width < 1300 ? 12 : 15)

    let arrGame 
    arrGame = data.filter(item => item.type === 'furniture' || item.type === "PC")

    const countGameFn = () => {
        let btn = document.querySelector('#btnShow')
        if(viewport_width < 1300) {
            if(countGame <= arrGame.length) {
                setCountGame(countGame + 3)
                btn.innerHTML = 'Показать ещё'
            } else {
                setCountGame(12)
                btn.innerHTML = 'Свернуть все'
            }
        } else {
            if(countGame <= arrGame.length) {
                setCountGame(countGame + 5)
                btn.innerHTML = 'Показать ещё'
            } else {
                setCountGame(15)
                btn.innerHTML = 'Свернуть все'
            }
    } }

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
    <p className="text-[16px] font-[600] my-[14px] md:text-[28px]">Для геймеров</p>
    <div className="grid grid-cols-2 gap-[8px] gap-y-[15px] auto mdx:grid-cols-3 lgx:grid-cols-4 lg:grid-cols-5 md:gap-x-[20px] md:gap-y-[32px] ">
        {
            viewport_width < 1300 ? arrGame.slice(0, countGame).map((item, idx) => <Item item={item}/>) : data.slice(0, countGame).map((item, idx) => <Item item={item}/>)
        }
        <button onClick={countGameFn} id='btnShow' className="cursor-pointer duration-[300ms] w-full h-[56px] bg-[#76797f1a] font-[600] rounded-[8px] col-span-full hover:invert-[25%]" >Показать ещё</button>
    </div>
    </div> 
    );
}
 
export default Home;