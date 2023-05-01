import { Input } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation} from "react-router-dom";
import Filter from "../components/Filter";
import Item from "../components/Item";
import { objCTX } from "../context/objCTX";


const FindedProducts = () => {
    const {state} = useLocation()
    const {obj} = useContext(objCTX)
    const {id, word, type} = obj
    const [value, setValue] = useState('')
    let data = useSelector(state => state.goods.data)
    const [open, setOpen] = useState(false)
    const [arr, setArr] = useState([])
    const [old, setOld] = useState([])
    useEffect(() => {
        if(arr.length === 0) {
            let filtered = type !== '' ? data.filter(item => item.type === type) : data.filter(item => item.title.toLowerCase().includes(word))
            setArr(...arr, filtered)
            setOld(...old, ...filtered)
        }
    }, [])
    useEffect(() => {
        switch (value) {
            case 'Подешевле':
            let sorted = [...arr].sort((a,b) => a.price - b.price, 0)
            setArr([...sorted])
            break
            case 'Подороже':
            let sorted2 = [...arr].sort((a,b) => a.price - b.price, 0).reverse()
            setArr([...sorted2])
            break
            case 'Высокий рейтинг':
            let rating = [...arr].sort((a,b) => a.rating - b.rating, 0).reverse()
            setArr([...rating])
            break
            default:
        }
    }, [value])

    // arrFilter.push(...data.filter(item => item.title.toLowerCase().includes(word) || item.id === id))
    const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const changeOpen = () => {
		setOpen(!open)
	}

    console.log(arr);


    return (
    <div className="">
        <div className="items-center justify-between md:flex">
        <p className="text-[17.5px] font-[500] my-[15px] md:text-[24px]">Результаты поиска по запросу "<span>{word}</span>"</p>
        <div className="hidden items-center gap-[12.5px] md:flex">
            <p className="text-[14px] text-[#62656A]">Сортировка</p>
            <select className="text-[14.4px] border-[1px] border-[#00000012]" onChange={(e) => setValue(e.target.value)}>
                <option className="w-full" value="Популярные">Популярные</option>
                <option className="w-full" value="Подешевле">Подешевле</option>
                <option className="w-full" value="Подороже">Подороже</option>
                <option className="w-full" value="Высокий рейтинг">Высокий рейтинг</option>
            </select>
        </div>
        </div>
        <div className="flex items-center justify-between md:hidden">
            <select className="text-[.8rem] outline-none border-none pl-[0px] font-[500]">
                <option className="w-full" value="Популярные">Популярные</option>
                <option className="w-full" value="Подешевле">Подешевле</option>
                <option className="w-full" value="Подороже">Подороже</option>
                <option className="w-full" value="Высокий рейтинг">Высокий рейтинг</option>
            </select>
            <div className="flex items-center gap-[5px] cursor-pointer" onClick={changeOpen}>
            <svg data-v-79204b40="" width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6 5.75C6 4.7835 6.7835 4 7.75 4C8.69794 4 9.46984 4.75369 9.49914 5.69452C9.49713 5.71274 9.49609 5.73125 9.49609 5.75C9.49609 5.76875 9.49713 5.78726 9.49914 5.80548C9.46984 6.74631 8.69794 7.5 7.75 7.5C6.7835 7.5 6 6.7165 6 5.75ZM7.75 3C9.09803 3 10.2195 3.96994 10.4547 5.25H18.5C18.7761 5.25 19 5.47386 19 5.75C19 6.02614 18.7761 6.25 18.5 6.25H10.4547C10.2195 7.53006 9.09803 8.5 7.75 8.5C6.40197 8.5 5.28047 7.53006 5.04534 6.25H1.49976C1.22361 6.25 0.999756 6.02614 0.999756 5.75C0.999756 5.47386 1.22361 5.25 1.49976 5.25H5.04534C5.28047 3.96994 6.40197 3 7.75 3ZM10.5 14.25C10.5 13.2835 11.2835 12.5 12.25 12.5C13.2119 12.5 13.9925 13.276 13.9999 14.2361C13.9998 14.2407 13.9998 14.2453 13.9998 14.25C13.9998 14.2547 13.9998 14.2593 13.9999 14.2639C13.9925 15.224 13.2119 16 12.25 16C11.2835 16 10.5 15.2165 10.5 14.25ZM14.9547 14.75C14.7195 16.0301 13.598 17 12.25 17C10.902 17 9.78047 16.0301 9.54534 14.75H1.50366C1.22752 14.75 1.00366 14.5261 1.00366 14.25C1.00366 13.9739 1.22752 13.75 1.50366 13.75H9.54534C9.78047 12.4699 10.902 11.5 12.25 11.5C13.598 11.5 14.7195 12.4699 14.9547 13.75H18.5037C18.7798 13.75 19.0037 13.9739 19.0037 14.25C19.0037 14.5261 18.7798 14.75 18.5037 14.75H14.9547Z" fill="black"></path></svg>
            <p className="text-[11.2px] font-[500]">Фильтры</p>
            </div>
            <Filter open={open} changeOpen={changeOpen}/>
        </div>
        <hr />
            <div className="mt-[20px] flex items-start gap-[30px]">
                <div className="w-[260px] hidden flex-col gap-[12px] md:flex">
                    <p className="font-[500]">Категории</p>
                    <div className="">
                    <p className="text-[14px] cursor-pointer py-[5px] duration-[300ms] hover:bg-[#00000010] rounded-[4px]">Электроника</p>
                    <p className="text-[14px] cursor-pointer py-[5px] duration-[300ms] hover:bg-[#00000010] rounded-[4px]">Бытовая техника</p>
                    <p className="text-[14px] cursor-pointer py-[5px] duration-[300ms] hover:bg-[#00000010] rounded-[4px]">Товары для дома</p>
                    </div>
                    <p className="font-[500]">Цена</p>
                    <div className="flex items-center justify-between mt-[10px]">
                <div className="border h-[40px] flex items-center gap-[10px] w-[48%] rounded-[4px] px-[8px]">
                    <p className="text-[12.25px] text-[#00000080]">от</p>
                    <Input variant='unstyled' placeholder="9000" name="from" className="inpText bg-transparent outline-none placeholder:text-[#62656a] placeholder:text-[12px]"/>
                </div>
                <div className="border h-[40px] flex items-center gap-[10px] w-[48%] rounded-[4px] px-[8px]">
                    <p className="text-[12.25px] text-[#00000080]">до</p>
                    <Input variant='unstyled' placeholder="50000" name="to" className="inpText bg-transparent outline-none placeholder:text-[#62656a] placeholder:text-[12px]"/>
                </div>
            </div>
                </div>
                <div className=" w-full grid grid-cols-2 gap-[8px] gap-y-[15px] auto mdx:grid-cols-3 lgx:grid-cols-4 lg:grid-cols-4 md:gap-x-[10px] md:gap-y-[15px] md:w-[76.5%]">
                    {
                        arr.map((item, idx) => <Item item={item} key={item.id}/>)
                    }
                </div>
            </div>
    </div> );
}
 
export default FindedProducts;