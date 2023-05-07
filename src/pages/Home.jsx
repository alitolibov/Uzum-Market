import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay} from "swiper";
import SwiperBig from "../components/SwiperBig";
import { useDispatch, useSelector } from "react-redux";
import Item from "../components/Item";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { getGoods } from "../features/goods/thunk"

const Home = () => {
    let dispatch = useDispatch()
    const data = useSelector(state => state.goods.data)
    const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);


    const [count, setCount] = useState(viewport_width < 1300 ? 12 : 10)
    const [countTex, setCountTex] = useState(viewport_width < 1300 ? 12 : 10)
    let arrGame = data.filter(item => item.type === 'furniture' || item.type === "PC")
    let arrTex = data.filter(item => item.type === 'kitchen' || item.type === "audio")

    const countGameFn = () => {
        if(viewport_width < 1300) {
            if(count <= arrGame.length) {
                setCount(count + 3)
            } else {
                setCount(12)
            }
        } else {
            if(count <= arrGame.length) {
                setCount(count + 5)
            } else {
                setCount(15)
            }
    } }

    const countTexFn = () => {
        if(viewport_width < 1300) {
            if(countTex <= arrTex.length) {
                setCountTex(countTex + 3)
            } else {
                setCountTex(12)
            }
        } else {
            if(countTex <= arrTex.length) {
                setCountTex(countTex + 5)
            } else {
                setCountTex(15)
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
            viewport_width < 1300 ? arrGame.slice(0, count).map((item, idx) => <Item item={item} key={item.id}/>) : arrGame.slice(0, count).map((item, idx) => <Item item={item} key={item.id}/>)
        }
        <button onClick={countGameFn} id='btnShow' className="cursor-pointer duration-[300ms] w-full h-[56px] bg-[#76797f1a] font-[600] rounded-[8px] col-span-full hover:bg-[#65686d27] md:col-start-2 md:col-end-5" >{count < arrGame.length ? 'Показать ещё' : 'Свернуть все'}</button>
    </div>
    <p className="text-[16px] font-[600] my-[14px] md:text-[28px]">Топовая техника по низкой цене</p>
    <div className="grid grid-cols-2 gap-[8px] gap-y-[15px] auto mdx:grid-cols-3 lgx:grid-cols-4 lg:grid-cols-5 md:gap-x-[20px] md:gap-y-[32px] ">
        {
            viewport_width < 1300 ? arrTex.slice(0, countTex).map((item, idx) => <Item item={item} key={item.id}/>) : arrTex.slice(0, countTex).map((item, idx) => <Item item={item} key={item.id}/>)
        }
        <button onClick={countTexFn} id='btnShow' className="cursor-pointer duration-[300ms] w-full h-[56px] bg-[#76797f1a] font-[600] rounded-[8px] col-span-full hover:bg-[#65686d27] md:col-start-2 md:col-end-5" >{countTex < arrTex.length ? 'Показать ещё' : 'Свернуть все'}</button>
    </div>
    </div> 
    );
}
 
export default Home;
