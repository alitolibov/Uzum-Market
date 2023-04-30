import { useContext, useEffect } from "react"
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Input } from "@chakra-ui/react";

const Filter = ({open, changeOpen}) => {

    useEffect(() => {
        let body = document.body
        let catalog = document.querySelector('#filter')
        body.style.overflow = open ? 'hidden' : null 
         open ? catalog.classList.add('click') : catalog.classList.remove('click')
     }, [open])

    return ( 
        <div id="filter" className="w-full h-[100vh] absolute top-0 z-[100] left-[-100%] duration-[300ms] bg-[#EFEFEF] flex flex-col justify-between pb-[15px]">
            <div className="">
                <div className="bg-[#fff] pr-[15px] pl-[44%] py-[12px] flex items-center justify-between">
                    <p className="text-[14.5px] font-[500]">Фильтр</p>
                    <p className="text-[14.5px] text-[#7000ff] cursor-pointer" onClick={changeOpen}>Отменить</p>
                </div>
                <div className="px-[15px] bg-[#fff] mt-[3px]">
                <Accordion sx={{background: '#fff', borderBottom: '0px solid transparent'}} allowMultiple="allowMultiple">
				<AccordionItem sx={{background: '#fff', borderTop: '0px solid transparent'}}>
				<AccordionButton sx={{paddingLeft: '0px'}}>
					<Box as="span" flex='1'  sx={{display: 'flex', alignItems: 'center', gap: '10px', height: '28px'}}>
					<div className="flex flex-col items-start">
                    <p className="text-[13px]">Категория</p>
                    <p className="text-[11px] text-[#8a8d93] leading-[11px]">Все категории</p>
                    </div>
					</Box>
				<AccordionIcon/>
				</AccordionButton>
					<AccordionPanel pb={4}>
							<div className="">
                                <p className="text-[12px] cursor-pointer">Электроника</p>
                                <p className="text-[12px] cursor-pointer">Бытовая техника</p>
                                <p className="text-[12px] cursor-pointer">Товары для дома</p>
                            </div>
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem sx={{background: '#fff'}}>
				<AccordionButton sx={{paddingLeft: '0px'}}>
					<Box as="span" flex='1' textAlign='left' sx={{display: 'flex', alignItems: 'center', gap: '10px', height: '28px'}}>
					<div className="flex flex-col items-start">
                    <p className="text-[13px]">Сортировать</p>
                    <p className="text-[11px] text-[#8a8d93] leading-[11px]">Популярное</p>
                    </div>
					</Box>
				<AccordionIcon/>
				</AccordionButton>
					<AccordionPanel pb={4}>
                    <p className="text-[12px]">Популярные</p>
                    <p className="text-[12px]">Подешевле</p>
                    <p className="text-[12px]">Подороже</p>
                    <p className="text-[12px]">Высокий рейтинг</p>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
                </div>
                <div className="px-[15px] bg-[#fff] py-[8px] mt-[8px]">
            <p className="text-[13px] font-[500]">Выберите параметры</p>
            <p className="text-[13px] mt-[17px]" >Цена</p>
            <div className="flex items-center justify-between mt-[10px]">
                <div className="bg-[#f4f5f5] h-[38px] flex items-center gap-[10px] w-[48%] rounded-[4px] px-[8px]">
                    <p className="text-[12.25px] text-[#00000080]">от</p>
                    <Input variant='unstyled' placeholder="9000" name="from" className="inpText bg-transparent outline-none placeholder:text-[#62656a] placeholder:text-[12px]"/>
                </div>
                <div className="bg-[#f4f5f5] h-[38px] flex items-center gap-[10px] w-[48%] rounded-[4px] px-[8px]">
                    <p className="text-[12.25px] text-[#00000080]">до</p>
                    <Input variant='unstyled' placeholder="50000" name="to" className="inpText bg-transparent outline-none placeholder:text-[#62656a] placeholder:text-[12px]"/>
                </div>
            </div>
            </div>
            </div>
            <div className="w-[95%] h-[38px] bg-[#7000ff] cursor-pointer duration-[300ms] hover:bg-[#6f00ffe1] mx-auto flex items-center justify-center text-[#fff] rounded-[13px]">
                <p className="text-[13px] font-[500]">Показать</p>
            </div>
        </div>
     );
}
 
export default Filter;