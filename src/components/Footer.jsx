import AboutUs from "./AboutUs";

const Footer = () => {
    return ( 
        <footer className="flex flex-col gap-[30px] px-[32px] py-[25px] mt-[32px] w-full lg:w-[1240px] lg:px-[0] lg:mx-auto">
            <div className="flex w-[80%] justify-between">
                <div className="flex flex-col gap-[15px] items-start">
                <p className="text-[14px] font-[500] text-center">О нас</p>
                <p className="text-[12px] cursor-pointer text-center">Пункты выдачи</p>
                <p className="text-[12px] cursor-pointer text-center">Вакансии</p>
                </div>
                <div className="flex flex-col gap-[15px] items-start">
                <p className="text-[14px] font-[500] text-center">Пользователям</p>
                <p className="text-[12px] cursor-pointer text-center">Связаться с нами</p>
                <p className="text-[12px] cursor-pointer text-center">Вопрос - Ответ</p>
                </div>
                <div className="flex flex-col gap-[15px] items-start">
                <p className="text-[14px] font-[500] text-center">Для предпринимателей</p>
                <p className="text-[12px] cursor-pointer text-center">Продавайте на Uzum</p>
                <p className="text-[12px] cursor-pointer text-center">Вход для продавцов</p>
                </div>
            </div>
            <div className="flex w-[50%] justify-between items-center">
            <div className="flex flex-col gap-[15px] items-start">
            <p className="text-[14px] font-[500] text-center">Скачать приложение</p>
            <div className="flex items-center gap-[30px]">
            <div className="flex items-center gap-[7px]"><img data-v-e90411aa="" src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M14.961 3.46878C15.6409 2.53501 16.1022 1.28122 15.9805 0C14.9853 0.0543415 13.7709 0.720988 13.0678 1.65549C12.4364 2.45575 11.8777 3.76203 12.0233 4.98954C13.1405 5.09596 14.2566 4.37635 14.961 3.46878Z' fill='black'/%3e %3cpath d='M16.3801 5.00736C14.559 4.8975 13.0106 6.05404 12.141 6.05404C11.2709 6.05404 9.93914 5.06272 8.49877 5.08943C6.62405 5.11732 4.88452 6.19078 3.93317 7.89808C1.97642 11.3135 3.41678 16.3798 5.31962 19.1615C6.24369 20.5377 7.35733 22.053 8.82474 21.9986C10.2112 21.9435 10.7546 21.0894 12.4399 21.0894C14.124 21.0894 14.6135 21.9986 16.0811 21.971C17.6031 21.9435 18.5546 20.5942 19.4787 19.2166C20.5387 17.6478 20.9727 16.133 21 16.0499C20.9727 16.0223 18.0652 14.8928 18.0382 11.5057C18.0108 8.66968 20.321 7.3207 20.4297 7.23704C19.1251 5.28304 17.0867 5.06272 16.3801 5.00736Z' fill='black'/%3e %3c/svg%3e" style={{width: '24px'}}/>
            <p className="text-[13px] font-[500] text-center">AppStore</p>
            </div>
            <div className="flex items-center gap-[7px]">
                <img data-v-e90411aa="" src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M2.46656 0.400879C2.18662 0.680813 2 1.14737 2 1.70724V22.3291C2 22.8889 2.18662 23.3555 2.46656 23.6354L2.55987 23.7288L14.1305 12.1581L2.46656 0.400879Z' fill='url(%23paint0_linear)'/%3e %3cpath d='M17.9563 15.9831L14.1305 12.1574L17.9563 8.23828L22.5285 10.851C23.8349 11.5975 23.8349 12.8105 22.5285 13.557L17.9563 15.9831Z' fill='url(%23paint1_linear)'/%3e %3cpath d='M17.9563 15.9831L14.1305 12.1573L2.46655 23.6347C2.93311 24.1012 3.58629 24.1012 4.42609 23.728L17.9563 15.9831Z' fill='url(%23paint2_linear)'/%3e %3cpath d='M17.9563 8.23822L4.33278 0.306739C3.58629 -0.159819 2.8398 -0.0665074 2.46655 0.40005L14.1305 12.1573L17.9563 8.23822Z' fill='url(%23paint3_linear)'/%3e %3cdefs%3e %3clinearGradient id='paint0_linear' x1='13.036' y1='1.49188' x2='-2.62386' y2='17.1518' gradientUnits='userSpaceOnUse'%3e %3cstop stop-color='%2300A0FF'/%3e %3cstop offset='0.00657445' stop-color='%2300A1FF'/%3e %3cstop offset='0.2601' stop-color='%2300BEFF'/%3e %3cstop offset='0.5122' stop-color='%2300D2FF'/%3e %3cstop offset='0.7604' stop-color='%2300DFFF'/%3e %3cstop offset='1' stop-color='%2300E3FF'/%3e %3c/linearGradient%3e %3clinearGradient id='paint1_linear' x1='24.2658' y1='12.0277' x2='1.68731' y2='12.0277' gradientUnits='userSpaceOnUse'%3e %3cstop stop-color='%23FFE000'/%3e %3cstop offset='0.4087' stop-color='%23FFBD00'/%3e %3cstop offset='0.7754' stop-color='%23FFA500'/%3e %3cstop offset='1' stop-color='%23FF9C00'/%3e %3c/linearGradient%3e %3clinearGradient id='paint2_linear' x1='15.8609' y1='14.1688' x2='-5.37525' y2='35.4049' gradientUnits='userSpaceOnUse'%3e %3cstop stop-color='%23FF3A44'/%3e %3cstop offset='1' stop-color='%23C31162'/%3e %3c/linearGradient%3e %3clinearGradient id='paint3_linear' x1='-0.496367' y1='-6.47169' x2='8.98651' y2='3.01109' gradientUnits='userSpaceOnUse'%3e %3cstop stop-color='%2332A071'/%3e %3cstop offset='0.0685' stop-color='%232DA771'/%3e %3cstop offset='0.4762' stop-color='%2315CF74'/%3e %3cstop offset='0.8009' stop-color='%2306E775'/%3e %3cstop offset='1' stop-color='%2300F076'/%3e %3c/linearGradient%3e %3c/defs%3e %3c/svg%3e" style={{width: '24px'}}/>
                <p className="text-[13px] text-[#1f1f26] text-center">Google Play</p>
            </div>
            </div>
            </div>
            <AboutUs/>
            </div>
            <div className="borderTop w-full flex items-center justify-between py-[16px]">
            <div className="flex items-center gap-[16px]">
            <p className="text-[14px] font-[500] cursor-pointer text-center">Соглашение о конфиденциальности</p>
            <p className="text-[14px] font-[500] cursor-pointer text-center">Пользовательское соглашение</p>
            </div>
            <p className="text-[11px] text-[#4d4e59] cursor-pointer text-center">«2023© ИП ООО «UZUM MARKET». ИНН 309376127. Все права защищены»</p>
            </div>
        </footer>
     );
}
 
export default Footer;