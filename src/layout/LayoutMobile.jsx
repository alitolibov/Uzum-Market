import { Outlet } from "react-router-dom";
import FooterMobile from "../components/FooterMobile";
import HeaderMobile from "../components/HeaderMobile";

const LayoutMobile = () => {
    return ( 
    <div className="min-h-[100vh]">
    <HeaderMobile/>
    <main className="px-[15px]">
        <Outlet/>
    </main>
    <FooterMobile/>
    </div> 
    );
}
 
export default LayoutMobile;