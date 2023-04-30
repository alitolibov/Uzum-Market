import { Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CatalogMobile from "./CatalogMobile";



const Header = () => {

	const navigate = useNavigate()
	const {state} = useLocation()
	const [bold, setBold] = useState([])
	const [val, setVal] = useState(false)
	const arr = useSelector((state) => state.goods.data)
	let ul = document.querySelector('#div')
	let inp = document.querySelector('#inp')
	const getOptions = (word) => {
		setVal(!val)
		let value = word.toLowerCase().trim()
		if(value.length !== 0) {
			ul.style.display = 'block'
			setBold([])
			arr.filter(item => {
				if(item.title.toLowerCase().includes(value)) {
					let re = new RegExp(value,"g");
					bold.push({title: item.title.toLowerCase().replace(re, `<b>${value}</b>`), id:item.id, type: item.type})
					reload(bold, ul)
				}
			})
		} else {
			ul.style.display = 'none'
			setBold([])
		}
	}

	const [open, setOpen] = useState(false)
	const [toggleState, setToggleState] = useState(false)

	const changeOpen = () => {
		setOpen(!open)
	}

	function toggle() {
		const select = document.querySelector('select')
			setToggleState(!toggleState)
			select.style.display = toggleState ? 'block' : null
			return toggleState ? (select.size = select.length) : (select.size = 1)
	}

	function changeRegion() {
		const select = document.querySelector('select')
		const span = document.querySelector('#span')

		span.innerHTML = select.value
	}

	const likedID = useSelector(state => state.liked.data)
    const cartData = useSelector(state => state.cart.data)
	// let ul = document.querySelector('#div')

	function reload(arr, place) {
		place.innerHTML = ''
		for(let item of arr) {
			let div = document.createElement('div')
			let img = document.createElement('div')
			let p = document.createElement('p')

			div.classList.add('divSearch')
			img.classList.add('imgSearch')
			p.classList.add('ellipsis')
			p.innerHTML = item.title
			place.append(div)
			div.append(img, p)

			div.onclick = () => {
				ul.style.display = 'none'
				navigate(`search/${item.id}`, {state: {id: item.id, word: inp.value, type: item.type}})
				inp.value = ''
			}
		}
	}

	const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	return ( 
		<>
		<header className="flex flex-col gap-[15px] relative">
			{
				viewport_width > 1024 ? (
					<div className="bg-[#f4f5f5] h-[32px]">
				<div className="flex items-center justify-between h-full px-[25px] lg:w-[1240px] lg:mx-auto lg:px-0">
				<div className="flex items-center gap-[20px]">
					<div className="flex items-center gap-[5px]" onClick={toggle}>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="compass-icon"><path fillRule="evenodd" clipRule="evenodd" d="M7 11C7 8.23858 9.23858 6 12 6C14.7614 6 17 8.23858 17 11C17 13.2317 15.8079 15.2429 14.5153 16.7262C13.8738 17.4623 13.2212 18.0525 12.7097 18.4561C12.4536 18.6582 12.2375 18.8098 12.0802 18.9082C12.0504 18.9268 12.0237 18.9429 12 18.9567C11.9763 18.9429 11.9496 18.9268 11.9198 18.9082C11.7625 18.8098 11.5464 18.6582 11.2903 18.4561C10.7788 18.0525 10.1262 17.4623 9.48471 16.7262C8.19208 15.2429 7 13.2317 7 11ZM12 5C8.68629 5 6 7.68629 6 11C6 13.5808 7.36827 15.8196 8.73081 17.3832C9.41691 18.1705 10.1156 18.803 10.6709 19.2411C10.9482 19.46 11.1944 19.634 11.3897 19.7561C11.4866 19.8167 11.5778 19.8688 11.6582 19.9076C11.6982 19.9269 11.7428 19.9465 11.7889 19.9623C11.8251 19.9747 11.9044 20 12 20C12.0956 20 12.1749 19.9747 12.2111 19.9623C12.2572 19.9465 12.3018 19.9269 12.3418 19.9076C12.4222 19.8688 12.5134 19.8167 12.6103 19.7561C12.8056 19.634 13.0518 19.46 13.3291 19.2411C13.8844 18.803 14.5831 18.1705 15.2692 17.3832C16.6317 15.8196 18 13.5808 18 11C18 7.68629 15.3137 5 12 5ZM11 11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11C13 11.5523 12.5523 12 12 12C11.4477 12 11 11.5523 11 11ZM12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9Z" fill="#141415"></path></svg>
					<p className="text-[14px] text-[#62656a] cursor-pointer">Город: <span className="text-[#141415] font-[500] underline" id="span">Самарканд</span></p>
					<select className="select hidden absolute bottom-[0] z-10" onChange={changeRegion}>
						<option value="Самарканд">Самарканд</option>
						<option value="Ташкент">Ташкент</option>
						<option value="Бухара">Бухара</option>
						<option value="Навои">Навои</option>
					</select>
					</div>
					<p className="text-[#141415] font-[500] text-[14px] cursor-pointer duration-[300ms]">Пункты выдачи</p>
				</div>
				<p className="text-[#62656a] text-[14px] text-center hidden leading-3 lg:block">Доставим ваш заказ бесплатно — всего за 1 день!</p>
				<div className="flex items-center gap-[20px]">
				<p className="text-[#62656a] font-[500] text-[14px] cursor-pointer duration-[300ms] hover:text-[#000]">Продавайте на Uzum</p>
				<p className="text-[#62656a] font-[500] text-[14px] cursor-pointer duration-[300ms] hover:text-[#000]">Вопрос-ответ</p>
				<p className="text-[#62656a] font-[500] text-[14px] cursor-pointer duration-[300ms] hover:text-[#000]">Мои заказы</p>
				<div className="flex items-center gap-[5px] cursor-pointer">
				<img src="../../public/images/rus.png" width='24' height='24' alt="" />
				<p className="text-[#62656a] font-[500] text-[14px] cursor-pointer duration-[300ms] hover:text-[#000]">Русский</p>
				</div>
				</div>
				</div>
			</div>
				) :
				(
					<div className="bg-[#f4f5f5] py-[5px]">
					<p className="text-[#62656a] text-[14px] text-center leading-3">Доставим ваш заказ бесплатно — всего за 1 день!</p>
					</div>
				)
			}
			<div className="bg-[white] flex flex-col gap-[17px] px-[10px] md:px-[25px] lg:px-[0] lg:w-[1240px] lg:mx-auto">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-[20px] md:gap-[30px]">
						<div onClick={() => setOpen(!open)} className='w-[22px] h-[22px] cursor-pointer bg-cover bg-menuIcon md:hidden'/>
						{
							viewport_width <= 768 ? <img onClick={() => navigate('/')} src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 346 113.06'%3e%3cdefs%3e%3cstyle%3e.cls-1%7bfill:%237000ff;%7d%3c/style%3e%3c/defs%3e%3cg id='Layer_2' data-name='Layer 2'%3e%3cg id='Layer_1-2' data-name='Layer 1'%3e%3cpath class='cls-1' d='M229.12,35.78c0,4.41-2.49,6.45-6.2,6.45s-6.11-2-6.11-6.45V21.23h-8V36.07c0,9.66,8.1,13.45,14.18,13.45s14.17-3.79,14.17-13.45V21.23h-8Z'/%3e%3cpolygon class='cls-1' points='202.04 27.98 202.04 21.23 176.04 21.23 176.04 27.98 191.43 27.98 175.42 42.26 175.42 49.01 203 49.01 203 42.26 186.06 42.26 202.04 27.98'/%3e%3cpath class='cls-1' d='M277.44,20.69c-5.06,0-8.88,2.06-10.78,5.2-1.92-3.14-6.11-5.2-10.47-5.2-8.54,0-12.95,5.46-12.95,12.18V49h8V34c0-3.22,1.7-6.05,5.58-6.05a5.6,5.6,0,0,1,5.91,5.94V49h8V33.89c0-3.22,1.89-5.94,5.74-5.94s5.69,2.83,5.69,6.05V49h8V32.87c0-6.72-4.13-12.18-12.73-12.18'/%3e%3cpath class='cls-1' d='M162.15,35.78c0,4.41-2.49,6.45-6.17,6.45s-6.14-2-6.14-6.45V21.23h-8V36.07c0,9.66,8.07,13.45,14.18,13.45s14.14-3.79,14.14-13.45V21.23h-8Z'/%3e%3cpath class='cls-1' d='M113.4,56.56A56.7,56.7,0,1,1,56.7,0a56.59,56.59,0,0,1,56.7,56.56M63.21,19.64q-3.19-.29-6.51-.28c-2.18,0-4.36.09-6.48.28V49.8h13Zm30,17.59a106.94,106.94,0,0,0-14.49-3.65V58.91c0,18.23-7.75,27.81-22,27.81s-22-9.58-22-27.81V33.58A106.2,106.2,0,0,0,20.2,37.23V59.05a36.52,36.52,0,0,0,73,0Z'/%3e%3cpath class='cls-1' d='M176,63.4c-5.06,0-8.88,2.06-10.78,5.17-1.92-3.11-6.11-5.17-10.47-5.17-8.57,0-13,5.43-13,12.15V91.69h8v-15c0-3.2,1.7-6,5.57-6a5.57,5.57,0,0,1,5.89,5.93V91.69h8V76.57c0-3.22,1.9-5.93,5.75-5.93s5.68,2.85,5.68,6v15h8V75.55c0-6.72-4.13-12.15-12.73-12.15'/%3e%3cpath class='cls-1' d='M225.39,81.94h0v-18h-7.92l.06,4.38c-1.73-2.57-4.76-4.92-10.13-4.92-9.25,0-14,7.18-14,14.39-.17,7.29,5.21,14.55,13.61,14.55,4.45,0,8.52-2,10.47-5.45a6.85,6.85,0,0,0,6.91,4.8H229V85h-1.27c-1.62,0-2.3-.6-2.3-3m-16.32,3.45c-4.56,0-7.95-3.14-7.95-7.55s3.39-7.43,7.95-7.43,8.09,3.08,8.09,7.43-3.39,7.55-8.09,7.55'/%3e%3cpath class='cls-1' d='M235.74,73.41V91.69h8V79.43a7.52,7.52,0,0,1,7.84-7.8h5.23V63.37h-3.93c-4.84,0-8.38,4.13-9.14,6.53v-6h-8Z'/%3e%3cpolygon class='cls-1' points='261.69 91.69 269.69 91.69 269.69 78.1 282.14 91.69 291.59 91.69 278.69 77.42 290.6 63.94 281.18 63.94 269.69 76.94 269.69 55.34 261.69 55.34 261.69 91.69'/%3e%3cpath class='cls-1' d='M300.57,80c0,3.06,1.59,6.14,6.71,6.14,4.69,0,5.37-2.83,5.37-2.83h8.8s-.82,9-14.17,9c-9.31,0-15.14-5.2-15.14-14.5S298,63.4,307.19,63.4s14.94,5.14,14.94,14.44A16.89,16.89,0,0,1,322,80Zm.12-4.89h12.9c0-2.26-1.3-5.48-6.4-5.48s-6.5,3.22-6.5,5.48'/%3e%3cpath class='cls-1' d='M341.05,84.73c-2.74,0-3.73-1.22-3.73-5.09V69.86H346V63.42h-8.68V57.88H333l-7.73,7.37v4.61h4.05V80.69c0,7.77,3.79,11,11.74,11H346v-7Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e" className='w-[98px] h-[32px] cursor-pointer' alt="" /> : <img onClick={() => navigate('/')} src="data:image/svg+xml,%3csvg width='215' height='32' viewBox='0 0 215 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_264_8440)'%3e %3cpath d='M184.63 9.9482H189.047L183.466 16.2628L189.509 22.9514H185.081L179.25 16.5839V22.9514H175.5V5.92307H179.25V16.0406L184.63 9.9482Z' fill='%237000FF'/%3e %3cpath d='M167.097 12.7422V9.94467H163.347V22.9479H167.097V17.2047C167.097 14.9787 168.713 13.55 170.769 13.55H173.221V9.66951H171.38C169.101 9.68009 167.453 11.6133 167.097 12.7422Z' fill='%237000FF'/%3e %3cpath fillRule='evenodd' clipRule='evenodd' d='M158.496 9.94467V18.383C158.496 19.5189 158.817 19.7976 159.576 19.7941H160.169V22.9479H158.02C157.307 22.9842 156.603 22.7825 156.017 22.3744C155.431 21.9663 154.998 21.375 154.785 20.6937C153.872 22.3235 151.963 23.2513 149.882 23.2513C145.945 23.2513 143.426 19.847 143.507 16.4322C143.507 13.0561 145.733 9.69067 150.069 9.69067C152.587 9.69067 154.006 10.7913 154.813 11.9943L154.785 9.94467H158.496ZM147.127 16.471C147.127 18.5276 148.732 19.9987 150.848 19.9987C153.05 19.9987 154.641 18.51 154.641 16.471C154.641 14.4319 153.05 12.9891 150.848 12.9891C148.718 12.9891 147.127 14.4143 147.127 16.471Z' fill='%237000FF'/%3e %3cpath d='M130.328 12.1178C131.217 10.6608 133.005 9.6942 135.376 9.6942C139.408 9.6942 141.341 12.2377 141.341 15.388V22.9408H137.591V15.9065C137.591 14.4214 136.73 13.0843 134.928 13.0843C133.125 13.0843 132.236 14.3543 132.236 15.8642V22.962H128.472V15.8748C128.472 14.3649 127.527 13.0949 125.713 13.0949C123.9 13.0949 123.103 14.4214 123.103 15.9171V22.9514H119.353V15.388C119.353 12.2377 121.406 9.6942 125.424 9.6942C127.463 9.6942 129.424 10.6608 130.328 12.1178Z' fill='%237000FF'/%3e %3cpath fillRule='evenodd' clipRule='evenodd' d='M196.818 9.6942C192.497 9.6942 189.763 12.1036 189.763 16.4604C189.763 20.8171 192.493 23.2548 196.853 23.2548C203.112 23.2548 203.496 19.0215 203.496 19.0215H199.376C199.376 19.0215 199.058 20.3444 196.857 20.3444C194.458 20.3444 193.717 18.9016 193.717 17.4728H203.736C203.785 17.1386 203.812 16.8016 203.817 16.4639C203.817 12.1036 201.073 9.6942 196.818 9.6942ZM193.77 15.1763C193.77 14.118 194.476 12.6081 196.818 12.6081C199.161 12.6081 199.813 14.118 199.813 15.1763H193.77Z' fill='%237000FF'/%3e %3cpath d='M215 9.70126V12.721L210.915 12.7316V17.3176C210.915 19.1309 211.395 19.6988 212.679 19.6988H215V22.9831H212.679C208.943 22.9831 207.179 21.4486 207.179 17.808V12.7351H205.285V10.5761L208.904 7.12249H210.929V9.70126H215Z' fill='%237000FF'/%3e %3cpath d='M103.623 9.68008C101.249 9.68008 99.4607 10.6467 98.5717 12.1177C97.6721 10.6467 95.7107 9.68008 93.6682 9.68008C89.6642 9.68008 87.597 12.2377 87.597 15.3879V22.9514H91.3505V15.9171C91.3505 14.4072 92.1442 13.0949 93.961 13.0949C95.7778 13.0949 96.7302 14.3649 96.7302 15.8748V22.962H100.48V15.8642C100.48 14.3543 101.369 13.0843 103.172 13.0843C104.975 13.0843 105.835 14.4072 105.835 15.9065V22.9408H109.585V15.3879C109.585 12.2377 107.652 9.68008 103.623 9.68008Z' fill='%237000FF'/%3e %3cpath d='M68.3003 9.93408V13.0985L60.8109 19.787H68.7483V22.9514H55.8263V19.787L63.3297 13.0985H56.1191V9.93408H68.3003Z' fill='%237000FF'/%3e %3cpath d='M78.0827 19.7729C79.8183 19.7729 80.9825 18.8169 80.9825 16.7532V9.94467H84.736V16.8943C84.736 21.4345 80.9401 23.1983 78.0933 23.1983C75.2464 23.1983 71.4541 21.4239 71.4541 16.8943V9.94467H75.2182V16.7532C75.2182 18.8169 76.347 19.7729 78.0827 19.7729Z' fill='%237000FF'/%3e %3cpath d='M46.7212 19.7729C48.4427 19.7729 49.6104 18.8169 49.6104 16.7532V9.94467H53.3604V16.8943C53.3604 21.4345 49.5575 23.1983 46.7353 23.1983C43.8708 23.1983 40.0926 21.4239 40.0926 16.8943V9.94467H43.8461V16.7532C43.8461 18.8169 44.9997 19.7729 46.7212 19.7729Z' fill='%237000FF'/%3e %3cpath d='M31.9896 16.0053C31.9889 19.1704 31.0498 22.2643 29.2912 24.8955C27.5326 27.5268 25.0334 29.5772 22.1098 30.7875C19.1861 31.9978 15.9693 32.3135 12.8663 31.6949C9.76321 31.0762 6.91327 29.5508 4.6769 27.3117C2.44053 25.0726 0.918195 22.2204 0.302449 19.1158C-0.313297 16.0111 0.00520068 12.7936 1.21766 9.87001C2.43012 6.94646 4.48208 4.44826 7.114 2.6914C9.74592 0.934529 12.8396 -0.00208978 16.0037 3.50108e-06C18.1047 -0.000924639 20.1854 0.412484 22.1266 1.21658C24.0679 2.02068 25.8316 3.1997 27.317 4.68621C28.8023 6.17271 29.9802 7.93754 30.7831 9.87977C31.5861 11.822 31.9985 13.9035 31.9966 16.0053H31.9896ZM17.8304 5.5597C17.2309 5.50326 16.6173 5.47856 15.9966 5.47856C15.3759 5.47856 14.7658 5.50326 14.1663 5.5597V14.0933H17.8304V5.5597ZM26.2942 10.5338C24.9588 10.0949 23.5942 9.7507 22.2104 9.5037V16.672C22.2104 21.8296 20.0239 24.5424 15.9931 24.5424C11.9622 24.5424 9.78282 21.8296 9.78282 16.672V9.5037C8.39801 9.75113 7.03224 10.0953 5.69554 10.5338V16.7108C5.67022 18.0799 5.9179 19.4402 6.42412 20.7124C6.93033 21.9845 7.68493 23.143 8.64382 24.1201C9.60271 25.0973 10.7467 25.8734 12.0088 26.4033C13.271 26.9331 14.6261 27.206 15.9949 27.206C17.3637 27.206 18.7187 26.9331 19.9809 26.4033C21.2431 25.8734 22.387 25.0973 23.3459 24.1201C24.3048 23.143 25.0594 21.9845 25.5656 20.7124C26.0718 19.4402 26.3195 18.0799 26.2942 16.7108V10.5338Z' fill='%237000FF'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_264_8440'%3e %3crect width='215' height='32' fill='white'/%3e %3c/clipPath%3e %3c/defs%3e %3c/svg%3e" className='w-[190px] h-[28px] md:w-[215px] md:h-[32px] cursor-pointer' alt="" />
						}    
					</div>
						<div className="hidden items-center gap-[10px] w-[52%] md:flex">
							<div onClick={() => setOpen(!open)} className="cursor-pointer flex items-center px-[16px] justify-between w-[120px] h-[40px] rounded-[4px] duration-[300ms] bg-[#3131c41a] hover:bg-[#3131c427]">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-41ba8b3e=""><path fillRule="evenodd" clipRule="evenodd" d="M7.5 3C6.67157 3 6 3.67157 6 4.5H18C18 3.67157 17.3284 3 16.5 3H7.5ZM4.5 7.5C4.5 6.67157 5.17157 6 6 6H18C18.8284 6 19.5 6.67157 19.5 7.5H4.5ZM3 11.25C3 10.0074 4.00736 9 5.25 9H18.75C19.9926 9 21 10.0074 21 11.25V18.75C21 19.9926 19.9926 21 18.75 21H5.25C4.00736 21 3 19.9926 3 18.75V11.25ZM5.25 10.5C4.83579 10.5 4.5 10.8358 4.5 11.25V18.75C4.5 19.1642 4.83579 19.5 5.25 19.5H18.75C19.1642 19.5 19.5 19.1642 19.5 18.75V11.25C19.5 10.8358 19.1642 10.5 18.75 10.5H5.25Z" fill="#3131C4"></path></svg>
							<p className="text-[14px] text-[#3131C4] font-[500]">Каталог</p>
							</div>
							<div className="w-full relative">
							<label className="w-full h-[40px] borderFull rounded-[4px] flex pl-[16px] relative">
							<Input onKeyUp={(e) => getOptions(e.target.value)} id="inp" variant='unstyled' className="w-full bg-[transparent] outline-none text-[14px] placeholder:text-[#62656a] placeholder:text-[14px] px-[5px]" placeholder='Искать товары и категории'/>
							<div className="w-[15%] h-full bg-[#76797f0d] flex items-center justify-center">
							<img src="../../public/images/search.png" className='w-[19px] h-[19px] cursor-pointer object-contain' alt="" />
							</div>
							</label>	
							<ul id="div" className="w-full h-fit absolute hidden left-0 top-[40px] z-20 bg-[white]">
							</ul>
							</div>		
						</div> 
					
					<div className="flex items-center">
						<div className="flex items-center gap-[5px] duration-[300ms] py-[9px] rounded-[8px] px-[10px] hover:bg-[#76797f1a] cursor-pointer">
						<div className='w-[22px] h-[22px] cursor-pointer bg-cover' style={{backgroundImage: 'url("../../public/images/chel.png")'}}></div>
						<p className="text-[14px] font-[500] text-center hidden lg:block">Войти</p>
						</div>
					<Link to={'/liked'} className="flex items-center gap-[5px] cursor-pointer duration-[300ms] py-[9px] rounded-[8px] px-[10px] hover:bg-[#76797f1a]">
					<div className='w-[22px] h-[22px] cursor-pointer bg-cover' style={{backgroundImage: 'url("../../public/images/like.png")'}}></div>
					<p className="text-[14px] font-[500] text-center hidden lg:block">Избранное</p>
					{
						likedID.length !== 0 ? <div className="text-[12px] text-[#fff] px-[4px] bg-[#7000ff]">{likedID.length}</div> : null
					}
					</Link>
					<Link to={'/cart'} className="flex items-center gap-[5px] cursor-pointer duration-[300ms] py-[9px] rounded-[8px] px-[10px] hover:bg-[#76797f1a]">
					<svg width="24" className="cursor-pointer" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9 6.5C9 4.88779 10.2402 3.5 12 3.5C13.7598 3.5 15 4.88779 15 6.5V7.5H9V6.5ZM7.5 9V11.5H9V9H15V11.5H16.5V9H18.5V19.75C18.5 20.1642 18.1642 20.5 17.75 20.5H6.25C5.83579 20.5 5.5 20.1642 5.5 19.75V9H7.5ZM7.5 7.5V6.5C7.5 4.11221 9.35984 2 12 2C14.6402 2 16.5 4.11221 16.5 6.5V7.5H19.25H20V8.25V19.75C20 20.9926 18.9926 22 17.75 22H6.25C5.00736 22 4 20.9926 4 19.75V8.25V7.5H4.75H7.5Z" fill="#141415"></path></svg>
					<p className="text-[14px] font-[500] text-center hidden lg:block">Корзина</p>
					{
						cartData.length !== 0 ? <div className="text-[12px] text-[#fff] px-[4px] bg-[#7000ff]">{cartData.length}</div> : null
					}
					</Link>
					</div>
				</div>
				<label className="flex items-center gap-[7px] bg-[#76797f1a] h-[35px] rounded-[8px] px-[20px] md:hidden">
				<img src="../../public/images/search.png" className='w-[19px] h-[19px] invert-[40%] cursor-pointer object-contain' alt="" />
				<Input variant='unstyled' className="w-full bg-[transparent] outline-none text-[14px] placeholder:text-[#62656a] placeholder:text-[14px] px-[5px]" placeholder='Искать товары и категории' />
				</label>
			</div>
			<div className="hidden items-center gap-[25px] h-[39px] md:flex lg:px-[0] lg:w-[1240px] lg:mx-auto">
			<div className="flex items-center gap-[25px] px-[25px] whitespace-nowrap w-[92%] overflow-hidden lg:w-[100%] lg:px-[0]">
			<div className="relative h-full cursor-pointer hover">
				<p className="hover duration-[500ms] text-[#62656a] text-[14px] cursor-pointer">Электроника</p>
				<div className="overflow-hidden w-full hoverTwo relative h-[2px]">
					<div className="line absolute left-[-100%] bottom-0 duration-[500ms] opacity-0 borderBottomHover"></div>
				</div>
			</div>
			<div className="relative h-full cursor-pointer hover">
				<p className="hover duration-[500ms] text-[#62656a] text-[14px] cursor-pointer">Бытовая техника</p>
				<div className="overflow-hidden w-full hoverTwo relative h-[2px]">
					<div className="line absolute left-[-100%] bottom-0 duration-[500ms] opacity-0 borderBottomHover"></div>
				</div>
			</div>
			<div className="relative h-full cursor-pointer hover">
				<p className="hover duration-[500ms] text-[#62656a] text-[14px] cursor-pointer">Одежда</p>
				<div className="overflow-hidden w-full hoverTwo relative h-[2px]">
					<div className="line absolute left-[-100%] bottom-0 duration-[500ms] opacity-0 borderBottomHover"></div>
				</div>
			</div>
			<div className="relative h-full cursor-pointer hover">
				<p className="hover duration-[500ms] text-[#62656a] text-[14px] cursor-pointer">Обувь</p>
				<div className="overflow-hidden w-full hoverTwo relative h-[2px]">
					<div className="line absolute left-[-100%] bottom-0 duration-[500ms] opacity-0 borderBottomHover"></div>
				</div>
			</div>
			<div className="relative h-full cursor-pointer hover">
				<p className="hover duration-[500ms] text-[#62656a] text-[14px] cursor-pointer">Аксессуары</p>
				<div className="overflow-hidden w-full hoverTwo relative h-[2px]">
					<div className="line absolute left-[-100%] bottom-0 duration-[500ms] opacity-0 borderBottomHover"></div>
				</div>
			</div>
			<div className="relative h-full cursor-pointer hover">
				<p className="hover duration-[500ms] text-[#62656a] text-[14px] cursor-pointer">Красота</p>
				<div className="overflow-hidden w-full hoverTwo relative h-[2px]">
					<div className="line absolute left-[-100%] bottom-0 duration-[500ms] opacity-0 borderBottomHover"></div>
				</div>
			</div>
			<div className="relative h-full cursor-pointer hover">
				<p className="hover duration-[500ms] text-[#62656a] text-[14px] cursor-pointer">Здоровье</p>
				<div className="overflow-hidden w-full hoverTwo relative h-[2px]">
					<div className="line absolute left-[-100%] bottom-0 duration-[500ms] opacity-0 borderBottomHover"></div>
				</div>
			</div>
			<div className="relative h-full cursor-pointer hover">
				<p className="hover duration-[500ms] text-[#62656a] text-[14px] cursor-pointer">Товары для дома</p>
				<div className="overflow-hidden w-full hoverTwo relative h-[2px]">
					<div className="line absolute left-[-100%] bottom-0 duration-[500ms] opacity-0 borderBottomHover"></div>
				</div>
			</div>
			<div className="relative h-full cursor-pointer hover">
				<p className="hover duration-[500ms] text-[#62656a] text-[14px] cursor-pointer">Строительство и ремонт</p>
				<div className="overflow-hidden w-full hoverTwo relative h-[2px]">
					<div className="line absolute left-[-100%] bottom-0 duration-[500ms] opacity-0 borderBottomHover"></div>
				</div>
			</div>
			<div className="relative h-full cursor-pointer hover">
				<p className="hover duration-[500ms] text-[#62656a] text-[14px] cursor-pointer">Автотовары</p>
				<div className="overflow-hidden w-full hoverTwo relative h-[2px]">
					<div className="line absolute left-[-100%] bottom-0 duration-[500ms] opacity-0 borderBottomHover"></div>
				</div>
			</div>
			<div className="relative h-full cursor-pointer hover">
				<p className="hover duration-[500ms] text-[#62656a] text-[14px] cursor-pointer">Детские товары</p>
				<div className="overflow-hidden w-full hoverTwo relative h-[2px]">
					<div className="line absolute left-[-100%] bottom-0 duration-[500ms] opacity-0 borderBottomHover"></div>
				</div>
			</div>
			<div className="relative h-full cursor-pointer hover">
				<p className="hover duration-[500ms] text-[#62656a] text-[14px] cursor-pointer">Хобби и творчество</p>
				<div className="overflow-hidden w-full hoverTwo relative h-[2px]">
					<div className="line absolute left-[-100%] bottom-0 duration-[500ms] opacity-0 borderBottomHover"></div>
				</div>
			</div>
			<div className="relative h-full cursor-pointer hover">
				<p className="hover duration-[500ms] text-[#62656a] text-[14px] cursor-pointer">Спорт и отдых</p>
				<div className="overflow-hidden w-full hoverTwo relative h-[2px]">
					<div className="line absolute left-[-100%] bottom-0 duration-[500ms] opacity-0 borderBottomHover"></div>
				</div>
			</div>
			<div className="relative h-full cursor-pointer hover">
				<p className="hover duration-[500ms] text-[#62656a] text-[14px] cursor-pointer">Продукты питания</p>
				<div className="overflow-hidden w-full hoverTwo relative h-[2px]">
					<div className="line absolute left-[-100%] bottom-0 duration-[500ms] opacity-0 borderBottomHover"></div>
				</div>
			</div>
			<div className="relative h-full cursor-pointer hover">
				<p className="hover duration-[500ms] text-[#62656a] text-[14px] cursor-pointer">Бытовая химия и личная гигиена</p>
				<div className="overflow-hidden w-full hoverTwo relative h-[2px]">
					<div className="line absolute left-[-100%] bottom-0 duration-[500ms] opacity-0 borderBottomHover"></div>
				</div>
			</div>
			</div>  
			<div className="flex items-center gap-[5px]">
			<p className="text-[#62656a] text-[14px] cursor-pointer">Ещё </p>
			<img src="../../public/images/bottom.png" className="w-[10px] h-[10px]" alt="" />
			</div>
			</div>
		</header>
		<CatalogMobile open={open} changeOpen={changeOpen}/>
		</>
		
	 );
}
 
export default Header;
