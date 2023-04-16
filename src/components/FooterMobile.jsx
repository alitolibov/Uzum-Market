import AboutUs from "./AboutUs";
import FooterAccordions from "./FooterAccordions";


const FooterMobile = () => {
    return ( 
    <footer className="w-full h-fit">
        <FooterAccordions/>
        <AboutUs/>
        <p className="text-[14px] font-[500] cursor-pointer mt-[25px] mb-[14px] text-center">Соглашение о конфиденциальности</p>
        <p className="text-[14px] font-[500] cursor-pointer mb-[14px] text-center">Пользовательское соглашение</p>
        <p className="text-[11px] text-[#4d4e59] cursor-pointer mb-[20px] text-center">«2023© ИП ООО «UZUM MARKET». ИНН 309376127. Все права защищены»</p>
    </footer> );
}
 
export default FooterMobile;