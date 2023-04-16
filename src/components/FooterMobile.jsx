import AboutUs from "./AboutUs";
import FooterAccordions from "./FooterAccordions";


const FooterMobile = () => {
    return ( 
    <footer className="absolute left-0 bottom-0 w-full h-fit ">
        <FooterAccordions/>
        <AboutUs/>
    </footer> );
}
 
export default FooterMobile;