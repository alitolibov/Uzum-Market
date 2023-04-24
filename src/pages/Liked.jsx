import { useSelector } from "react-redux";
import Item from "../components/Item";
import SwiperProduct from "../components/SwiperProduct";

const Liked = () => {
    const liked = useSelector(state => state.liked.data)
    console.log(liked);
    return ( 
    <div>
      {
        liked.length === 0 ? (
            <div className="flex flex-col gap-[16px] items-center pt-[40px] w-[95%] mx-auto">
            <img  src="https://uzum.uz/static/img/hearts.cf414be.png" className="w-[128px] h-[128px]"/>
            <div className="flex flex-col items-center">
             <p className="text-[19.25px] font-[500] md:text-[22px]">Добавьте то, что понравилось</p>
             <p className="text-[11.2px] my-[6px] text-center md:text-[12.8px]">Нажмите на ♡ в товаре. Войдите в аккаунт и всё избранное сохранится</p>
            </div>
            </div>
        ) : (
            <div className="">
                <h1 className="text-[21px] font-[500] my-[16px] md:text-[24px]">Мои желания</h1>
                <hr className="mb-[20px] hidden md:block"/>
                    <div className="grid grid-cols-2 gap-[8px] gap-y-[15px] auto mdx:grid-cols-3 lgx:grid-cols-4 lg:grid-cols-5 md:gap-x-[20px] md:gap-y-[32px] ">
                {
                    liked.map(item => <Item key={item.id} item={item}/>)
                }
                    </div>
            </div>
        )
      }
       <p className="text-[17.5px] font-[500] mt-[55px] mb-[20px] tab:text-[19.8px] tab:mt-[25px] md:text-[23.2px] md:mt-[35px]">Популярные товары</p>
       <SwiperProduct/>
    </div> );
}
 
export default Liked;