import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addGood } from "../features/cart/cartSlice";
import { addLiked, removeLiked } from "../features/liked/likedSlice";

const Item = ({item}) => {

    function prettify(num) {
        var n = num.toString();
        return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
    }

    let price = prettify(item?.price) 
    let dispatch = useDispatch()


    
    let salePrice = Math.round(item.price ? item.price - (item.price / 100 * item?.salePercentage) : null)
    let salePrices = Math.round(item.price ? item.price / 12 : null)
    const likedID = useSelector(state => state.liked.data_id)
    const cartData = useSelector(state => state.cart.data_id)

    function add() {
        dispatch(addGood({id: item.id, item: item, qt: 1}))
        // dispatch(total(item.salePercentage !== 0 ? salePrice : item.price))
    }

    return ( 
    <div className="rounded-[8px] cursor-pointer hoverBlock overflow-hidden duration-[250ms] min-w-[140px] h-fit">
        <div className="relative duration-[250ms] overflow-hidden bg-[#fff] mb-[10px]">
            {
                likedID.includes(item.id) ? <svg onClick={() => dispatch(removeLiked(item))} className="w-fit float-right" data-v-b3e9397c="" width="20" height="20" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg" alt="like">
                <path d="M5.45 0.169434C8.01792 0.169434 9.5 2.32178 9.5 2.32178C9.5 2.32178 10.985 0.169434 13.55 0.169434C16.205 0.169434 18.5 2.23943 18.5 5.11943C18.5 9.34995 12.0604 13.7892 9.86509 15.7297C9.65819 15.9126 9.34179 15.9126 9.13488 15.7297C6.94056 13.7903 0.5 9.34976 0.5 5.11943C0.5 2.23943 2.795 0.169434 5.45 0.169434Z" fill="#8967F0"></path>
                </svg> : <svg onClick={() => dispatch(addLiked(item))} className="w-fit float-right top-[5px] right-[5px]" data-v-b3e9397c="" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.95 2C8.51792 2 10 4.15234 10 4.15234C10 4.15234 11.485 2 14.05 2C16.705 2 19 4.07 19 6.95C19 11.1805 12.5604 15.6197 10.3651 17.5603C10.1582 17.7432 9.84179 17.7432 9.63488 17.5603C7.44056 15.6209 1 11.1803 1 6.95C1 4.07 3.295 2 5.95 2Z" fill="white" fillOpacity="0.8"></path>
                <path d="M1 6.86486C1 4.20297 3.15017 2 5.86486 2C7.98685 2 9.35921 3.35876 10 4.18673C10.6408 3.35876 12.0132 2 14.1351 2C16.8506 2 19 4.20302 19 6.86486C19 8.02987 18.5328 9.18622 17.8534 10.265C17.1716 11.3476 16.252 12.3903 15.29 13.3377C13.9567 14.6508 12.4757 15.8387 11.4134 16.6907C10.9618 17.0529 10.5859 17.3544 10.3293 17.579C10.1407 17.7439 9.85926 17.7439 9.67075 17.579C9.41405 17.3544 9.03815 17.0529 8.58659 16.6907C7.52431 15.8387 6.04326 14.6508 4.70997 13.3377C3.74802 12.3903 2.82836 11.3476 2.14659 10.265C1.46724 9.18622 1 8.02987 1 6.86486ZM5.86486 3C3.70929 3 2 4.74838 2 6.86486C2 7.76743 2.36553 8.73607 2.99277 9.73208C3.61759 10.7242 4.47833 11.706 5.41165 12.6252C6.71033 13.9042 8.08423 15.005 9.13396 15.8461C9.45728 16.1052 9.74985 16.3396 10 16.547C10.2501 16.3396 10.5427 16.1052 10.866 15.8461C11.9158 15.005 13.2897 13.9042 14.5883 12.6252C15.5217 11.706 16.3824 10.7242 17.0072 9.73208C17.6345 8.73607 18 7.76743 18 6.86486C18 4.74833 16.2914 3 14.1351 3C12.0406 3 10.8181 4.70211 10.5033 5.21028C10.2727 5.5825 9.72727 5.58249 9.4967 5.21027C9.1819 4.7021 7.95944 3 5.86486 3Z" fill="#15151A"></path>
                </svg>
            }
            <Link to={'/product/' + item?.id} className="w-full aspectImg block duration-[250ms] bg-center bg-no-repeat cover" style={{backgroundImage: `url('${item?.media[0]}')`}}></Link>
            {
                item?.salePercentage !== 0 ? (
                    <div className="w-[50px] rounded-[4px] h-[21px] bg-[#5000aa] flex items-center justify-center absolute left-0 bottom-0 z-10">
                    <p className="text-[13px] text-[#fff]">Акция</p>
                    </div>
                ) : null
            }
        </div>
        <div className="w-full h-[140px] px-[4px] pb-[4px] flex flex-col justify-between">
            <div className="flex flex-col gap-[3px] smx:gap-[0] smx:h-[60%] smx:justify-between">
            <p className="text-[12px] textEllipsis md:text-[12.8px]">{item?.title}</p>
            <div className="flex items-center h-[20px] gap-[2px]">
            <img data-v-b3e9397c="" src="data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 19 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e" data-test-id="icon__rating-star" style={{width: '14px'}}/>
            <p className="text-[11.2px] text-[#8a8d93]">{item?.rating}</p>
            </div>
            <div className="w-fit px-[5px] h-[17px] flex items-center justify-center bg-[#ffff00]">
                <p className="text-[11px]"><span>{prettify(salePrices)}</span> руб/мес</p>
            </div>
            </div>
            <div className="flex items-end justify-between">
                
                    {
                        item?.salePercentage !== 0 ? (
                            <div className="flex flex-col gap-[2px]">
                            <p className="text-[9.8px] text-[#757575] line-through md:text-[11.2px]"><span>{price}</span> руб</p>
                            <p className="text-[11px] font-[500] md:text-[15px]"><span>{prettify(salePrice)}</span> руб</p>
                            </div>
                        ) : <div className="flex flex-col gap-[2px]">
                            <p className="text-[11px] font-[500] md:text-[16px]"><span>{price}</span> руб</p>
                        </div>
                    }
                
                {
                    cartData.includes(item.id) ? (     
                        <div onClick={add} className="w-[38px] bg-[#a6a9b227] cursor-pointer h-[38px] rounded-full duration-[250ms] borderFull flex items-center justify-center">
                <svg data-v-b3e9397c="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M8 10V8H6V12.5C6 12.7761 5.77614 13 5.5 13C5.22386 13 5 12.7761 5 12.5V7H8C8 4.59628 9.95227 3 12 3C14.0575 3 16 4.70556 16 7H19V19.5C19 20.3284 18.3284 21 17.5 21H12.5C12.2239 21 12 20.7761 12 20.5C12 20.2239 12.2239 20 12.5 20H17.5C17.7761 20 18 19.7761 18 19.5V8H16V10H15V8H9V10H8ZM12 4C10.4477 4 9 5.20372 9 7H15C15 5.29444 13.5425 4 12 4Z" fill="#a6a9b2"></path>
                <path d="M7.5 14C7.77614 14 8 14.2239 8 14.5V17H10.5C10.7761 17 11 17.2239 11 17.5C11 17.7761 10.7761 18 10.5 18H8V20.5C8 20.7761 7.77614 21 7.5 21C7.22386 21 7 20.7761 7 20.5V18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H7V14.5C7 14.2239 7.22386 14 7.5 14Z" fill="#a6a9b2"></path>
                </svg>
                </div>
                    ) : (
                        <div onClick={add} className="w-[38px] cursor-pointer h-[38px] rounded-full duration-[250ms] borderFull flex items-center justify-center hover:bg-[#76797f0d]">
                <svg data-v-b3e9397c="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M8 10V8H6V12.5C6 12.7761 5.77614 13 5.5 13C5.22386 13 5 12.7761 5 12.5V7H8C8 4.59628 9.95227 3 12 3C14.0575 3 16 4.70556 16 7H19V19.5C19 20.3284 18.3284 21 17.5 21H12.5C12.2239 21 12 20.7761 12 20.5C12 20.2239 12.2239 20 12.5 20H17.5C17.7761 20 18 19.7761 18 19.5V8H16V10H15V8H9V10H8ZM12 4C10.4477 4 9 5.20372 9 7H15C15 5.29444 13.5425 4 12 4Z" fill="black"></path>
                <path d="M7.5 14C7.77614 14 8 14.2239 8 14.5V17H10.5C10.7761 17 11 17.2239 11 17.5C11 17.7761 10.7761 18 10.5 18H8V20.5C8 20.7761 7.77614 21 7.5 21C7.22386 21 7 20.7761 7 20.5V18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H7V14.5C7 14.2239 7.22386 14 7.5 14Z" fill="black"></path>
                </svg>
                </div>
                    )
                }
            </div>
        </div>
    </div> 
    );
}
 
export default Item;