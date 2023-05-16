import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, removeGood } from "../features/cart/cartSlice"

const CartItem = ({item}) => {
    function prettify(num) {
        var n = num.toString();
        return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
    }

    let price = prettify(item.price) 
    let dispatch = useDispatch()
    
    let salePrice = Math.round(item.price ? item.price - (item.price / 100 * item?.salePercentage) : null)
    let salePrices = Math.round(item.price ? item.price / 12 : null)
    const [count, setCount] = useState(1)
    // const increment = () => {
    //     setCount(count + 1)
    // }
    // const decrement = () => {
    //     if(count !== 1) {
    //         setCount(count - 1)
    //     }
    // }
    return ( 
    <div className="flex flex-col gap-[10px] lg:flex-row lg:justify-between">
        <div className="flex items-center gap-[20px] w-[50%] overflow-hidden">
            <div className="w-[52.5px] h-[52.5px] bg-cover md:w-[100px] md:h-[100px]" style={{backgroundImage: `url('${item.media[0]}')`}}></div>
            <div className="flex flex-col gap-[10px] w-fit">
                <p className="max-h-[20px] overflow-hidden text-[12.25px] md:text-[16px]">{item.title}</p>
                <p className="text-[10.5px] text-[#757575] md:text-[14px]">Продовец: <span className="text-[#000]">ALi</span></p>
            </div>
        </div>
        <div className="flex justify-end lg:hidden">
        {
            item.salePercentage !== 0 ? (
                <div className="float-right w-fit flex flex-col items-end">
                <p className="text-[13.75px] font-[500] md:text-[20px]">{prettify(salePrice)}<span> руб</span></p>
                <p className="text-[10.5px] text-[#757575] line-through md:text-[14px]">{prettify(item.price)}</p>
                </div>
            ) : (
                <p className="float-right text-[13.75px] font-[500] md:text-[20px]">{item.price * item?.qt}<span> руб</span></p>
            )
        }
        </div>
        <div className="flex items-center justify-between lg:hidden">
        <div className="flex items-center h-[35px] gap-[20px] rounded-[4px] borderFul cursor-pointer px-[10px]">
            <p className="text-[50px] leading-[0px] font-[200]" style={{color: item?.qt !== 1 ? '#000000' : "#00000050"}} onClick={() => dispatch(decrement(item))}>-</p>
            <p className="text-[14px] mx-auto">{item?.qt}</p>
            <p className="text-[23px] font-[300]" onClick={() => dispatch(increment(item))}>+</p>
        </div>
        <div className="flex items-center gap-[7px] cursor-pointer">
        <svg data-v-57aaf377="" width="24" height="24" viewBox="0 0 24 24" fill="#757575" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.75 3.5C9.33579 3.5 9 3.83579 9 4.25V5H15V4.25C15 3.83579 14.6642 3.5 14.25 3.5H9.75ZM7.5 4.25V5H3.75C3.33579 5 3 5.33579 3 5.75C3 6.16421 3.33579 6.5 3.75 6.5H4.30005L5.62088 19.9681C5.73386 21.1202 6.70255 21.9985 7.86014 21.9985H16.1399C17.2975 21.9985 18.2661 21.1202 18.3791 19.9681L19.7 6.5H20.25C20.6642 6.5 21 6.16421 21 5.75C21 5.33579 20.6642 5 20.25 5H16.5V4.25C16.5 3.00736 15.4926 2 14.25 2H9.75C8.50736 2 7.5 3.00736 7.5 4.25ZM11 9.75C11 9.33579 10.6642 9 10.25 9C9.83579 9 9.5 9.33579 9.5 9.75V17.25C9.5 17.6642 9.83579 18 10.25 18C10.6642 18 11 17.6642 11 17.25V9.75ZM14.5 9.75C14.5 9.33579 14.1642 9 13.75 9C13.3358 9 13 9.33579 13 9.75V17.25C13 17.6642 13.3358 18 13.75 18C14.1642 18 14.5 17.6642 14.5 17.25V9.75Z" fill="#757575"></path>
        </svg>
        <p className="text-[10.5px] text-[#757575] md:text-[12px]">Удалить</p>
        </div>
        </div>
        <div className="hidden relative items-center justify-end w-[35%] gap-[20%] lg:flex">
        <div className="flex items-center h-[35px] gap-[20px] rounded-[4px] borderFul cursor-pointer px-[10px] absolute left-0 top-[50%] translate-y-[-50%]">
            <p className="text-[50px] leading-[0px] font-[200]" style={{color: item?.qt !== 1 ? '#000000' : "#00000050"}} onClick={() => dispatch(decrement(item))}>-</p>
            <p className="text-[14px] mx-auto">{item?.qt}</p>
            <p className="text-[23px] font-[300] leading-[50px]" onClick={() => dispatch(increment(item))}>+</p>
        </div>
        <div className="flex justify-end">
        <div className="float-right w-fit flex flex-col items-end gap-[7px]">
        <div onClick={() => dispatch(removeGood(item))} className="flex items-center gap-[7px] cursor-pointer">
        <svg data-v-57aaf377="" width="24" height="24" viewBox="0 0 24 24" fill="#757575" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.75 3.5C9.33579 3.5 9 3.83579 9 4.25V5H15V4.25C15 3.83579 14.6642 3.5 14.25 3.5H9.75ZM7.5 4.25V5H3.75C3.33579 5 3 5.33579 3 5.75C3 6.16421 3.33579 6.5 3.75 6.5H4.30005L5.62088 19.9681C5.73386 21.1202 6.70255 21.9985 7.86014 21.9985H16.1399C17.2975 21.9985 18.2661 21.1202 18.3791 19.9681L19.7 6.5H20.25C20.6642 6.5 21 6.16421 21 5.75C21 5.33579 20.6642 5 20.25 5H16.5V4.25C16.5 3.00736 15.4926 2 14.25 2H9.75C8.50736 2 7.5 3.00736 7.5 4.25ZM11 9.75C11 9.33579 10.6642 9 10.25 9C9.83579 9 9.5 9.33579 9.5 9.75V17.25C9.5 17.6642 9.83579 18 10.25 18C10.6642 18 11 17.6642 11 17.25V9.75ZM14.5 9.75C14.5 9.33579 14.1642 9 13.75 9C13.3358 9 13 9.33579 13 9.75V17.25C13 17.6642 13.3358 18 13.75 18C14.1642 18 14.5 17.6642 14.5 17.25V9.75Z" fill="#757575"></path>
        </svg>
        <p className="text-[#757575] md:text-[12px]">Удалить</p>
        </div>
            {item.salePercentage !== 0 ? <p className="font-[500] text-[20px]">{prettify(salePrice * item?.qt)}<span> руб</span></p> : <p className="font-[500] text-[20px]">{prettify(item.price * item?.qt)}<span> руб</span></p>}
            {item.salePercentage !== 0 ? <p className="text-[#757575] line-through md:text-[14px]">{prettify(item.price * item?.qt)}</p> : null}
        </div>
        </div>
        </div>
    </div>
     );
}
 
export default CartItem;
