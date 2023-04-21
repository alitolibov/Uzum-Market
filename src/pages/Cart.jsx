import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SwiperProduct from "../components/SwiperProduct";

const Cart = () => {
    const data = useSelector(state => state.goods.data)
    // const likedID = useSelector(state => state.liked.data)
    // // let filtered = data.filter(item => {
    // //     likedID.filter(el => {
    // //         if(item.id === el) {
    // //              return item
    // //         }
    // //     })
    // //     return item
    // // })

    // console.log(likedID);
    return ( 
    <div>
       <div className="flex flex-col gap-[16px] items-center py-[40px] w-[95%] mx-auto">
       <img  src="https://uzum.uz/static/img/shopocat.8cee444.png" className="w-[128px] h-[128px]"/>
       <div className="flex flex-col items-center">
        <p className="text-[19.25px] font-[500] md:text-[22px]">В корзине пока нет товаров</p>
        <p className="text-[11.2px] my-[6px] text-center md:text-[12.8px]">Начните с подборок на главной странице или найдите нужный товар через поиск</p>
       </div>
       <Link to={'/'} className="bg-[#6e00ff] duration-[300ms] cursor-pointer hover:bg-[#6f00ff] font-[500] px-[14px] py-[7px] text-[12.25px] md:text-[14px] text-[#fff] rounded-[4px]">На главную</Link>
       </div>
       <p className="text-[17.5px] font-[500] mt-[15px] tab:text-[19.8px] tab:mt-[25px] md:text-[23.2px] md:mt-[35px]">Популярные товары</p>
       <SwiperProduct/>
    </div> );
}
 
export default Cart;