import { Outlet } from "react-router-dom";
import HeaderMobile from "../components/HeaderMobile";

const LayoutMobile = () => {
    return ( 
    <>
    <HeaderMobile/>
    <main className="m-w-[96.7%]">
        <Outlet/>
    </main>
    </> 
    );
}
 
export default LayoutMobile;