import { Key } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useSwiper } from "swiper/react";
import Img from "../components/Img";
import SwiperProduct from "../components/SwiperProduct";
import SwiperProductMobile from "../components/SwiperProductMobile";


const ProductPage = () => {
    let data = useSelector(state => state.goods.data)
    let {pathname} = useLocation()
    let ids = pathname.split('/').at(-1)
    const [count, setCount] = useState(1)
    let filtered = data.filter(item => item.id === +ids)
    let {title, type, rating, salePercentage, price, id, description, media} = filtered[0]
    function prettify(num) {
        var n = num.toString();
        return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
    }
    let prices = prettify(price) 

    let salePrice = Math.round(price ? price - (price / 100 * salePercentage) : null)
    let salePrices = Math.round(price ? price  * count / 12 : null)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        if(count !== 1) {
            setCount(count - 1)
        }
    }
    return ( 
    <div>
        <div className="flex relative flex-col gap-[25px] h-fit mt-[20px] tab:flex-row tab:gap-[0] tab:justify-between">
            <div className="flex gap-[8px] overflow-hidden aspectSwiperBlock w-full tab:max-w-[42%] tab:h-fit tab:sticky tab:top-0 tab:bottom-0">
                <div className="w-[17%] h-auto max-h-full flex flex-col gap-[8px]">
                    {
                        
                        media.map((item, idx) => <Img key={idx} item={item}/>)
                    }
                </div>
                <SwiperProductMobile media={media}/>
            </div>
            <div className="tab:w-[55%] tab:px-[25px]">
                <div className="flex flex-col gap-[12px]">
                <div className="flex items-center justify-between">
                    <div className="flex items-center h-[20px] gap-[2px]">
                        <img data-v-b3e9397c="" src="data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 19 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e" data-test-id="icon__rating-star" style={{width: '14px'}}/>
                        <p className="text-[13px] text-[#8a8d93]">{rating}</p>
                    </div>
                    <img src="../../public/images/heart.png" className="w-[20px] duration-[300ms] h-[20px] hover:invert-[70%]" alt="" />
                </div>
                <p className="text-[22px] text-[#212121]">{title}</p>
                <div className="flex items-center gap-x-[16px] h-[28px]">
                    {
                        salePercentage !== 0 ? (
                            <div className="flex items-center gap-x-[16px] h-[28px]">
                            <p className="text-[20px] text-[#7000ff] font-[500]"><span>{prettify(salePrice)}</span> руб / ед.</p>
                            <p className="text-[14px] text-[#757575] line-through"><span>{prettify(price)}</span> руб</p>
                            </div>
                        ) : <p className="text-[20px] text-[#7000ff] font-[500]"><span>{prettify(price)}</span> руб / ед.</p>
                    }
                </div>
                <div className="flex flex-col gap-[10px]">
                {
                    salePercentage !== 0 ? <div className="w-[50px] rounded-[4px] h-[21px] bg-[#5000aa] flex items-center justify-center tab:hidden">
                    <p className="text-[13px] text-[#fff]">Акция</p>
                </div> : null
                }
                <div className="flex flex-col gap-[3px]">
                <p className="text-[14px]">Продавец:</p>
                <p className="text-[14px] underline cursor-pointer">Zam-zam</p>
                </div>
                <div className="flex flex-col gap-[3px]">
                <p className="text-[14px]">Доставка:</p>
                <p className="text-[14px]">1 день, бесплатно</p>
                </div>
                </div>
                </div>
                <div className="hr"></div>
                <div className="flex flex-col gap-[24px]">
                    <div className="flex flex-col gap-[8px]">
                        <p className="text-[14px]">Количество:</p>
                        <div className="flex items-center gap-[10px]">
                            <div className="flex items-center h-[35px] w-[120px] rounded-[4px] borderFul cursor-pointer px-[10px]">
                                <div onClick={decrement} className="w-[14px] h-[2px] bg-[#00000050]"></div>
                                <p className="text-[14px] mx-auto">{count}</p>
                                <div onClick={increment} className="relative h-full w-[14px] flex items-center">
                                <div className="w-[14px] h-[2px] bg-[#000000]"></div>
                                <div className="w-[14px] h-[2px] bg-[#000000] absolute rotate"></div>
                                </div>
                            </div>
                        <p className="text-[14px] text-[#00c853]">В наличии 999</p>
                        </div>
                        <p className="text-[14px] mt-[20px] hidden tab:block">Цена:</p>
                        <div className="hidden items-end gap-[22px] tab:flex">
                        <p className="text-[20px] font-[500]"><span>{prettify(salePrice * count)}</span> руб / ед.</p>
                        <p className="text-[14px] text-[#757575] line-through"><span>{prettify(price)}</span> руб</p>
                        <div className="w-[50px] rounded-[4px] h-[21px] bg-[#5000aa] hidden items-center justify-center tab:flex">
                        <p className="text-[13px] text-[#fff]">Акция</p>
                        </div>
                        </div>
                    </div>
                    <div className="w-full h-[54px] px-[12px] bg-[#f5f6fA] rounded-[12px] cursor-pointer flex items-center justify-between">
                        <div className="flex items-center gap-[5px]">
                        <div className="w-fit px-[6px] py-[6px] flex items-center justify-center rounded-[8px] bg-[#ffff00]">
                            <p className="text-[12.25px] font-[500]">От <span>{prettify(salePrices)}</span> руб/мес</p>
                         </div>
                            <p className="text-[12.25px] font-[500]">в рассрочку</p>
                        </div>
                        <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 14C18 14.3672 17.8013 14.4996 17.5508 14.7305L11.5 20.3242C11.3032 20.5195 11.1211 20.75 10.7266 20.75C10.4492 20.75 10 20.5352 10 19.9492C10 19.5859 10.2942 19.4151 10.5 19.2109L16.1172 14L10.4922 8.78125C10.2954 8.57705 9.99609 8.42578 9.99609 8C9.99609 7.66406 10.2578 7.25 10.793 7.25C11.0882 7.25 11.3579 7.52734 11.5547 7.72266L17.5508 13.25C17.8013 13.4897 18 13.6328 18 14Z" className="fill-[#76797F] hover:fill-[#000]" fillOpacity="0.6"></path></svg>
                    </div>
                    <button className="text-[16px] bg-[#7000ff] duration-[300ms] hover:bg-[#7614f7] font-[500] cursor-pointer rounded-[10px] text-[#fff] py-[10px] w-[100%] hidden tab:block">Добавить в корзину</button>
                    <div className="w-full py-[9px] rounded-[8px] flex items-center justify-center px-[16px] bg-[#ffe4334d] tab:mb-[30px]">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M14 4.5C12.2402 4.5 11 5.88779 11 7.5H17C17 5.88779 15.7598 4.5 14 4.5ZM9.5 11.5V9H7.5V14.25C7.5 14.6642 7.16421 15 6.75 15C6.33578 15 6 14.6642 6 14.25V8.25V7.5H6.75H9.5C9.5 5.11221 11.3598 3 14 3C16.6402 3 18.5 5.11221 18.5 7.5H21.25H22V8.25V21.75C22 22.9926 20.9926 24 19.75 24H15.25C14.8358 24 14.5 23.6642 14.5 23.25C14.5 22.8358 14.8358 22.5 15.25 22.5H19.75C20.1642 22.5 20.5 22.1642 20.5 21.75V9H18.5V11.5H17V9H11V11.5H9.5ZM14.2738 18.0323C14.5667 17.7395 14.5667 17.2646 14.2738 16.9717C13.9809 16.6788 13.506 16.6788 13.2131 16.9717L7.99548 22.1893L5.78034 19.9742C5.48744 19.6813 5.01257 19.6813 4.71967 19.9741C4.42678 20.267 4.42677 20.7419 4.71966 21.0348L7.46513 23.7803C7.60579 23.921 7.79655 24 7.99547 24C8.19438 24 8.38515 23.921 8.5258 23.7803L14.2738 18.0323Z" fill="#141415"></path></svg>
                    <p className="text-[13px]">413 человек купили на этой неделе</p>
                    </div>
                </div>
            </div>
            </div>
            <div className="w-full h-[62.5px] borderY flex gap-[25px]">
                <div className="h-full w-fit flex items-center borderB cursor-pointer">
                <p className="text-[12.25px] text-[#7000ff]">Описание товара</p>
                </div>
                <div className="h-full w-fit flex items-center cursor-pointer">
                <p className="text-[12.25px]">Отзывы (3)</p>
                </div>
            </div>
            <p className="text-[11px] my-[20px]">{description}</p>
            <p className="text-[17.5px] font-[600] my-[14px]">Похожие товары</p>
            <SwiperProduct type={type}/>
            <div className="w-full footerShadow h-[56px] px-[6px] bg-[#fff] fixed bottom-0 left-0 z-40 flex items-center justify-between tab:hidden">
                <div className="w-fit">
                    <p className="text-[8.75px]">Цена общая</p>
                    {
                        salePercentage !== 0 ? <p className="text-[15.75px] font-[500] leading-[15px]"><span>{prettify(salePrice * count)}</span> руб</p> : <p className="text-[15.75px] font-[500] leading-[15px]"><span>{prettify(price * count)}</span> руб</p>
                    } 
                </div>
                <div className="flex items-center gap-[20px] w-[50%]">
                <img src="../../public/images/heart.png" className="w-[20px] duration-[300ms] h-[20px] hover:invert-[70%]" alt="" />
                <button className="text-[14px] bg-[#7000ff] duration-[300ms] hover:bg-[#7614f7] font-[500] cursor-pointer rounded-[10px] text-[#fff] h-[36px] w-[90%] block">В корзину</button>
                </div>
            </div>
    </div> );
}
 
export default ProductPage;