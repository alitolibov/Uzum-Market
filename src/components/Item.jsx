import { Link } from "react-router-dom";

const Item = ({item}) => {

    function prettify(num) {
        var n = num.toString();
        return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
    }

    let price = prettify(item.price) 
    
    let salePrice = Math.round(item.price ? item.price - (item.price / 100 * item?.salePercentage) : null)
    let salePrices = Math.round(item.price ? item.price / 12 : null)
    return ( 
    <Link to={'/product/' + item?.id} className="rounded-[8px] cursor-pointer hoverBlock overflow-hidden duration-[250ms] min-w-[140px] h-fit">
        <div className="relative duration-[250ms] overflow-hidden bg-[#fff] mb-[10px]">
            <img src="../../public/images/heart.png" className="w-[20px] duration-[300ms] h-[20px] absolute right-[10px] top-[10px] z-[10] hover:invert-[70%]" alt="" />
            <div className="w-full aspectImg duration-[250ms] bg-center bg-no-repeat cover" style={{backgroundImage: `url('${item?.media[0]}')`}}></div>
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
                
                <div className="w-[38px] cursor-pointer h-[38px] rounded-full duration-[250ms] borderFull flex items-center justify-center hover:bg-[#76797f0d]">
                <svg data-v-b3e9397c="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M8 10V8H6V12.5C6 12.7761 5.77614 13 5.5 13C5.22386 13 5 12.7761 5 12.5V7H8C8 4.59628 9.95227 3 12 3C14.0575 3 16 4.70556 16 7H19V19.5C19 20.3284 18.3284 21 17.5 21H12.5C12.2239 21 12 20.7761 12 20.5C12 20.2239 12.2239 20 12.5 20H17.5C17.7761 20 18 19.7761 18 19.5V8H16V10H15V8H9V10H8ZM12 4C10.4477 4 9 5.20372 9 7H15C15 5.29444 13.5425 4 12 4Z" fill="black"></path>
                <path d="M7.5 14C7.77614 14 8 14.2239 8 14.5V17H10.5C10.7761 17 11 17.2239 11 17.5C11 17.7761 10.7761 18 10.5 18H8V20.5C8 20.7761 7.77614 21 7.5 21C7.22386 21 7 20.7761 7 20.5V18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H7V14.5C7 14.2239 7.22386 14 7.5 14Z" fill="black"></path>
                </svg>
                </div>
            </div>
        </div>
    </Link> 
    );
}
 
export default Item;