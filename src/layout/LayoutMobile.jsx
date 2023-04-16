import { Outlet } from "react-router-dom";
import FooterMobile from "../components/FooterMobile";
import Header from "../components/Header";

const LayoutMobile = () => {
    return ( 
    <div className="min-h-[100vh]">
    <Header/>
    <main className="px-[15px]">
        <Outlet/>
    </main>
    <FooterMobile/>
    </div> 
    );
}
 
export default LayoutMobile;