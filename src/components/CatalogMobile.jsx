import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const CatalogMobile = ({open, changeOpen}) => {

    useEffect(() => {
       let body = document.body
       let catalog = document.querySelector('#catalog')
       body.style.overflow = open ? 'hidden' : null 
        open ? catalog.classList.add('click') : catalog.classList.remove('click')
    }, [open])

    return (
        <section id="catalog" className="absolute top-0 z-[100] left-[-100%] duration-[300ms] w-full h-[100vh] bg-[#EFEFEF] flex-col gap-[7px]">
			<div className="px-[15px] bg-[#fff] h-[48px] flex items-center justify-between">
			<svg onClick={changeOpen} className="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-test-id="button__close-sidebar"><path fillRule="evenodd" clipRule="evenodd" d="M6.28033 5.21967C5.98744 4.92678 5.51256 4.92678 5.21967 5.21967C4.92678 5.51256 4.92678 5.98744 5.21967 6.28033L10.9393 12L5.21967 17.7197C4.92678 18.0126 4.92678 18.4874 5.21967 18.7803C5.51256 19.0732 5.98744 19.0732 6.28033 18.7803L12 13.0607L17.7197 18.7803C18.0126 19.0732 18.4874 19.0732 18.7803 18.7803C19.0732 18.4874 19.0732 18.0126 18.7803 17.7197L13.0607 12L18.7803 6.28033C19.0732 5.98744 19.0732 5.51256 18.7803 5.21967C18.4874 4.92678 18.0126 4.92678 17.7197 5.21967L12 10.9393L6.28033 5.21967Z"></path></svg>
			<div className="">
			<span className="text-[13px] underline cursor-pointer">Войти</span>
			<span className="text-[13px] mx-[2px]">/</span>
			<span className="text-[13px] underline cursor-pointer">Зарегистрироваться</span>
			</div>
			</div>
			<Accordion sx={{background: '#fff', borderTop: '0px solid transparent', borderBottom: '0px solid transparent'}} allowMultiple="allowMultiple">
				<AccordionItem sx={{background: '#fff'}}>
				<AccordionButton>
					<Box as="span" flex='1' textAlign='left' sx={{display: 'flex', alignItems: 'center', gap: '10px', height: '36px'}}>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-41ba8b3e=""><path fillRule="evenodd" clipRule="evenodd" d="M7.5 3C6.67157 3 6 3.67157 6 4.5H18C18 3.67157 17.3284 3 16.5 3H7.5ZM4.5 7.5C4.5 6.67157 5.17157 6 6 6H18C18.8284 6 19.5 6.67157 19.5 7.5H4.5ZM3 11.25C3 10.0074 4.00736 9 5.25 9H18.75C19.9926 9 21 10.0074 21 11.25V18.75C21 19.9926 19.9926 21 18.75 21H5.25C4.00736 21 3 19.9926 3 18.75V11.25ZM5.25 10.5C4.83579 10.5 4.5 10.8358 4.5 11.25V18.75C4.5 19.1642 4.83579 19.5 5.25 19.5H18.75C19.1642 19.5 19.5 19.1642 19.5 18.75V11.25C19.5 10.8358 19.1642 10.5 18.75 10.5H5.25Z" fill="#3131C4"></path></svg>
					<p className="text-[13px] text-[#3131C4]">Каталог</p>
					</Box>
				<AccordionIcon/>
				</AccordionButton>
					<AccordionPanel pb={4}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
            <div className="pl-[15px] bg-white">
                <div className="flex items-center gap-[10px] h-[40px] cursor-pointer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-41ba8b3e=""><path fillRule="evenodd" clipRule="evenodd" d="M12 2.5C10.2402 2.5 9 3.88779 9 5.5H15C15 3.88779 13.7598 2.5 12 2.5ZM7.5 9.5V7H5.5V12.25C5.5 12.6642 5.16421 13 4.75 13C4.33578 13 4 12.6642 4 12.25V6.25V5.5H4.75H7.5C7.5 3.11221 9.35984 1 12 1C14.6402 1 16.5 3.11221 16.5 5.5H19.25H20V6.25V19.75C20 20.9926 18.9926 22 17.75 22H13.25C12.8358 22 12.5 21.6642 12.5 21.25C12.5 20.8358 12.8358 20.5 13.25 20.5H17.75C18.1642 20.5 18.5 20.1642 18.5 19.75V7H16.5V9.5H15V7H9V9.5H7.5ZM12.2738 16.0323C12.5667 15.7395 12.5667 15.2646 12.2738 14.9717C11.9809 14.6788 11.506 14.6788 11.2131 14.9717L5.99548 20.1893L3.78034 17.9742C3.48744 17.6813 3.01257 17.6813 2.71968 17.9741C2.42678 18.267 2.42677 18.7419 2.71966 19.0348L5.46513 21.7803C5.60579 21.921 5.79655 22 5.99547 22C6.19438 22 6.38515 21.921 6.5258 21.7803L12.2738 16.0323Z" fill="#141415"></path></svg>
                <p className="text-[13px]">Мои заказы</p>
                </div>
                <div className="flex items-center gap-[10px] h-[40px] cursor-pointer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-41ba8b3e=""><path fillRule="evenodd" clipRule="evenodd" d="M7.5 5.5C5.26935 5.5 3.5 7.30906 3.5 9.5C3.5 10.4282 3.87684 11.4436 4.5487 12.5105C5.21692 13.5716 6.14148 14.6274 7.15127 15.6219C8.55769 17.007 10.0318 18.1879 11.1708 19.1003C11.4734 19.3427 11.7523 19.5661 12 19.7694C12.2477 19.5661 12.5266 19.3427 12.8292 19.1003C13.9682 18.1879 15.4423 17.007 16.8487 15.6219C17.8585 14.6274 18.7831 13.5716 19.4513 12.5105C20.1232 11.4436 20.5 10.4282 20.5 9.5C20.5 7.30898 18.7314 5.5 16.5 5.5C14.3473 5.5 13.0738 7.20226 12.7262 7.74742C12.3889 8.27655 11.6111 8.27653 11.2738 7.74742C10.9262 7.20225 9.65273 5.5 7.5 5.5ZM2 9.5C2 6.49094 4.43065 4 7.5 4C9.73143 4 11.2249 5.30207 12 6.21581C12.7751 5.30207 14.2686 4 16.5 4C19.5702 4 22 6.49102 22 9.5C22 10.8218 21.4706 12.1189 20.7206 13.3098C19.9669 14.5066 18.954 15.6539 17.9013 16.6906C16.4429 18.1269 14.808 19.4384 13.6502 20.3672C13.1649 20.7565 12.7634 21.0786 12.4939 21.3144C12.2111 21.5619 11.7889 21.5619 11.5061 21.3144C11.2366 21.0786 10.8351 20.7565 10.3498 20.3672C9.19201 19.4384 7.55712 18.1269 6.09873 16.6906C5.04602 15.6539 4.03308 14.5066 3.27942 13.3098C2.52941 12.1189 2 10.8218 2 9.5Z" fill="#141415"></path></svg>
                <p className="text-[13px]">Избранное</p>
                </div>
                <div className="flex items-center gap-[10px] h-[40px] cursor-pointer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5.5 10C5.5 6.41015 8.41015 3.5 12 3.5C15.5899 3.5 18.5 6.41015 18.5 10C18.5 12.9108 16.9441 15.5528 15.2457 17.5127C14.4039 18.4842 13.5474 19.2641 12.877 19.7972C12.5412 20.0642 12.2591 20.2638 12.0551 20.3924C12.0356 20.4046 12.0173 20.416 12 20.4265C11.9827 20.416 11.9644 20.4046 11.9449 20.3924C11.741 20.2638 11.4588 20.0642 11.123 19.7972C10.4526 19.2641 9.59614 18.4842 8.7543 17.5127C7.05595 15.5528 5.5 12.9108 5.5 10ZM12 2C7.58172 2 4 5.58172 4 10C4 13.433 5.81905 16.4159 7.6207 18.4951C8.52886 19.5431 9.45369 20.3863 10.1895 20.9713C10.5568 21.2634 10.884 21.4967 11.1449 21.6612C11.2741 21.7427 11.3974 21.8138 11.5076 21.8675C11.5622 21.8942 11.6247 21.922 11.6903 21.9446C11.7408 21.9621 11.8575 22 12 22C12.1425 22 12.2592 21.9621 12.3097 21.9446C12.3753 21.922 12.4378 21.8942 12.4924 21.8675C12.6026 21.8138 12.7259 21.7427 12.8551 21.6612C13.1159 21.4967 13.4432 21.2634 13.8105 20.9713C14.5463 20.3863 15.4711 19.5431 16.3793 18.4951C18.1809 16.4159 20 13.433 20 10C20 5.58172 16.4183 2 12 2ZM10.5 10C10.5 9.17157 11.1716 8.5 12 8.5C12.8284 8.5 13.5 9.17157 13.5 10C13.5 10.8284 12.8284 11.5 12 11.5C11.1716 11.5 10.5 10.8284 10.5 10ZM12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7Z" fill="#141415"></path></svg>    
                <p className="text-[13px]">Город: <span id="spanCatalog">Самарканд</span></p>
                </div>
                <div className="flex items-center gap-[10px] h-[40px] cursor-pointer borderBottom">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg" ><path fillRule="evenodd" clipRule="evenodd" d="M4.5 18.6644V8.01852L8.25 6.14352V16.7964C8.20123 16.8162 8.15305 16.8379 8.10558 16.8616L4.5 18.6644ZM9.75 16.7964V6.14352L14.1056 8.3213C14.153 8.34504 14.2012 8.36678 14.25 8.38651V19.0394L9.89443 16.8616C9.84695 16.8379 9.79877 16.8162 9.75 16.7964ZM15.75 19.0394L19.5 17.1644V6.51852L15.8944 8.32131C15.847 8.34504 15.7988 8.36678 15.75 8.38651V19.0394ZM8.77639 18.2033C8.91716 18.1329 9.08284 18.1329 9.22361 18.2033L14.6646 20.9238C14.8757 21.0293 15.1243 21.0293 15.3354 20.9238L20.5854 18.2988C20.8395 18.1717 21 17.912 21 17.6279V5.30499C21 4.74746 20.4133 4.38483 19.9146 4.63417L15.2236 6.97966C15.0828 7.05005 14.9172 7.05005 14.7764 6.97966L9.33541 4.25917C9.12426 4.1536 8.87574 4.1536 8.66459 4.25917L3.41459 6.88417C3.1605 7.01122 3 7.27091 3 7.55499V19.8779C3 20.4355 3.58673 20.7981 4.08541 20.5488L8.77639 18.2033Z" fill="black"></path></svg>
                <p className="text-[13px]">Пункты выдачи</p>
                </div>
                <div className="flex items-center gap-[10px] h-[40px] cursor-pointer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16ZM10.4908 9.36697C10.6002 8.67414 11.1635 8 12 8C12.823 8 13.3815 8.65255 13.5035 9.33344C13.5246 9.75954 13.4341 10.0331 13.3139 10.238C13.1791 10.4678 12.9791 10.661 12.6984 10.8964C12.6531 10.9345 12.6037 10.9746 12.5515 11.017L12.5514 11.017C12.0385 11.4332 11.25 12.073 11.25 13.25C11.25 13.6642 11.5858 14 12 14C12.4142 14 12.75 13.6642 12.75 13.25C12.75 12.8099 12.9721 12.6239 13.5817 12.1133L13.6625 12.0456C13.9628 11.7937 14.3345 11.4627 14.6077 10.997C14.8922 10.5121 15.0443 9.92852 14.9985 9.20281L14.9963 9.16774L14.9908 9.13303C14.8002 7.92587 13.7728 6.5 12 6.5C10.2272 6.5 9.19978 7.92587 9.00918 9.13303C8.94458 9.54217 9.22388 9.92622 9.63303 9.99082C10.0422 10.0554 10.4262 9.77612 10.4908 9.36697Z" fill="black"></path></svg>
                <p className="text-[13px]">Часто задаваемые вопросы</p>
                </div>
                <div className="flex items-center gap-[10px] h-[40px] cursor-pointer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5.56066 7H18.4393L12.8839 12.5555C12.3957 13.0436 11.6043 13.0436 11.1161 12.5555L5.56066 7ZM4.5 15.9393V8.06066L8.43934 12L4.5 15.9393ZM5.56066 17H18.4393L14.5 13.0607L13.9445 13.6161C12.8706 14.6901 11.1294 14.6901 10.0555 13.6161L9.5 13.0607L5.56066 17ZM15.5607 12L19.5 15.9393V8.06066L15.5607 12ZM5 5.5C3.89543 5.5 3 6.39543 3 7.5V16.5C3 17.6046 3.89543 18.5 5 18.5H19C20.1046 18.5 21 17.6046 21 16.5V7.5C21 6.39543 20.1046 5.5 19 5.5H5Z" fill="black"></path></svg>
                <p className="text-[13px]">Связаться с нами</p>
                </div>
                <div className="flex items-center gap-[10px] h-[40px] cursor-pointer">
                <img src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fillRule='evenodd' clipRule='evenodd' d='M8.25 2C7.00736 2 6 3.00736 6 4.25V11.0189C6.16502 11.0064 6.33176 11 6.5 11C6.84007 11 7.17403 11.0261 7.5 11.0764V4.25C7.5 3.83579 7.83579 3.5 8.25 3.5H15.75C16.1642 3.5 16.5 3.83579 16.5 4.25V19.75C16.5 20.1642 16.1642 20.5 15.75 20.5H12.2678C11.9806 21.051 11.6168 21.5557 11.1904 22H15.75C16.9926 22 18 20.9926 18 19.75V4.25C18 3.00736 16.9926 2 15.75 2H8.25ZM13 17.5C13 18.0163 12.9398 18.5185 12.8261 19H14.5C14.9142 19 15.25 18.6642 15.25 18.25C15.25 17.8358 14.9142 17.5 14.5 17.5H13ZM12 17.5C12 20.5376 9.53757 23 6.5 23C3.46243 23 1 20.5376 1 17.5C1 14.4624 3.46243 12 6.5 12C9.53757 12 12 14.4624 12 17.5ZM7 14.5C7 14.2239 6.77614 14 6.5 14C6.22386 14 6 14.2239 6 14.5V19.2929L4.35355 17.6464C4.15829 17.4512 3.84171 17.4512 3.64645 17.6464C3.45118 17.8417 3.45118 18.1583 3.64645 18.3536L6.14645 20.8536C6.34171 21.0488 6.65829 21.0488 6.85355 20.8536L9.35355 18.3536C9.54882 18.1583 9.54882 17.8417 9.35355 17.6464C9.15829 17.4512 8.84171 17.4512 8.64645 17.6464L7 19.2929V14.5Z' fill='%23141415'/%3e %3c/svg%3e" alt="" />
                <p className="text-[13px]">Приложение Uzum</p>
                </div>
                <div className="flex items-center gap-[10px] h-[40px] cursor-pointer">
                <img src="../../public/images/rus.png" width='24' height='24' alt="" />
                <p className="text-[13px]">Язык сайта: Русский</p>
                </div>
                <Accordion sx={{background: '#fff'}} allowMultiple="allowMultiple">
				<AccordionItem sx={{background: '#fff'}}>
				<AccordionButton sx={{paddingLeft: '0px'}}>
					<Box as="span" flex='1'  sx={{display: 'flex', alignItems: 'center', gap: '10px', height: '36px'}}>
					<p className="text-[13px]">О нас</p>
					</Box>
				<AccordionIcon/>
				</AccordionButton>
					<AccordionPanel pb={4}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem sx={{background: '#fff'}}>
				<AccordionButton sx={{paddingLeft: '0px'}}>
					<Box as="span" flex='1' textAlign='left' sx={{display: 'flex', alignItems: 'center', gap: '10px', height: '36px'}}>
					<p className="text-[13px]">Партнёрам</p>
					</Box>
				<AccordionIcon/>
				</AccordionButton>
					<AccordionPanel pb={4}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
            </div>
		</section>
     );
}
 
export default CatalogMobile;