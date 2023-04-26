import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import SwiperProduct from "../components/SwiperProduct";

const Cart = () => {
    const data = useSelector(state => state.cart.data)
    // const total = useSelector(state => state.cart.prices)
    const total = useSelector(state => state.cart.prices)
    console.log(total);
    let allPrices = []
    total.filter(item => allPrices.push(item.price))
    let totalPrice = allPrices.reduce((a, b) => a + b, 0)
    function prettify(num) {
        var n = num.toString();
        return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
    }

    let price = prettify(totalPrice) 
    let dispatch = useDispatch()


    
    // let salePrice = Math.round(item.price ? item.price - (item.price / 100 * item?.salePercentage) : null)
    // let salePrices = Math.round(item.price ? item.price / 12 : null)
    let date = new Date()
    date.setDate(new Date().getDate() + 1)
    let tomorrow = date
    let day = tomorrow.toLocaleString().split(' ').at(0).split('.').slice(0, 2).at(0)
    return ( 
    <div>
       {
        data.length === 0 ? (
            <div className="flex flex-col gap-[16px] items-center py-[40px] w-[95%] mx-auto">
       <img  src="https://uzum.uz/static/img/shopocat.8cee444.png" className="w-[128px] h-[128px]"/>
       <div className="flex flex-col items-center">
        <p className="text-[19.25px] font-[500] md:text-[22px]">В корзине пока нет товаров</p>
        <p className="text-[11.2px] my-[6px] text-center md:text-[12.8px]">Начните с подборок на главной странице или найдите нужный товар через поиск</p>
       </div>
       <Link to={'/'} className="bg-[#6e00ff] duration-[300ms] cursor-pointer hover:bg-[#6f00ff] font-[500] px-[14px] py-[7px] text-[12.25px] md:text-[14px] text-[#fff] rounded-[4px]">На главную</Link>
       </div>
        ) : (
            <>
            <p className="mt-[10px] text-[15.75px] font-[500] md:text-[24px]">Ваша корзина, <span className="text-[#00000075]">{data.length} товар</span></p>
            <div className="mt-[10px] lg:flex lg:gap-[12px]">
                <div className="lg:w-[76%] lg:border lg:px-[16px] lg:py-[16px]">
                <hr className="my-[15px] lg:hidden"/>
                <div className="w-full py-[4px] flex-row justify-center bg-[#00000006] rounded-[2px] lg:flex lg:gap-[10px] lg:bg-[transparent] lg:justify-start">
                    <p className="text-[10.5px] text-[#757575] text-center font-[500] md:text-[12px] lg:text-start">Ближайшая дата доставки:</p>
                    <p className="text-[10.5px] text-[#7000ff] font-[500] text-center md:text-[12px] lg:text-start">{day} апреля (Завтра)</p>
                </div>
                <hr className="mt-[7px] mb-[14px] md:mt-[14px] md:mb-[21px]"/>
                {
                    data.map(item => <CartItem key={item.id} item={item}/>)
                }
                </div>
                <hr className="mt-[14px] mb-[7px] md:mt-[21px] md:mb-[14px]"/>
                <div className="mt-[10px] shadowCart px-[15px] py-[15px] flex flex-col gap-[15px] md:mt-[20px] lg:w-[22%] lg:mt-0 lg:h-fit lg:rounded-[8px]">
                    <p className="text-[15.75px] text-[#212121] font-[500]">Ваш заказ</p>
                    <div className="flex items-center justify-between">
                        <p className="text-[14px]">Товары: <span>(1)</span></p>
                        <p className="text-[14px]">13 000<span> руб</span></p>
                    </div>
                    <div className="purpleBorder flex items-center justify-center py-[2px]">
                    <p className="text-[10.5px] text-[#7000ff] font-[500] text-center md:text-[12px]">{day} апреля (Завтра)</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-[14px]">Итого:</p>
                        <div className="flex flex-col items-end">
                        <p className="text-[13.75px] font-[500] md:text-[20px]">{price}<span> руб</span></p>
                        <p className="text-[10.5px] text-[#00c853] md:text-[12px]">Вы экономите: <span>3 000</span> руб</p>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
       }
       <p className="text-[17.5px] font-[500] mt-[55px] mb-[20px] tab:text-[19.8px] tab:mt-[25px] md:text-[23.2px] md:mt-[35px]">Популярные товары</p>
       <SwiperProduct/>
    </div> );
}
 
export default Cart;