import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import FooterMobile from "../components/FooterMobile";
import Header from "../components/Header";
import { cursorCTX } from "../context/cursorCTX";

const Layout = () => {
    const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const [cursor, setCursor] = useState(false)
    return ( 
        <cursorCTX.Provider value={{setCursor, cursor}}>
            <div className="min-h-[100vh]">
    <Header/>
    <main className="px-[15px] md:px-[25px] lg:w-[1240px] lg:px-[0] lg:mx-auto">
        <Outlet/>
    </main>
    {
        viewport_width > 1024 ? <Footer/> : <FooterMobile/>
    }
    </div> 
        </cursorCTX.Provider>
    );
}
 
export default Layout;