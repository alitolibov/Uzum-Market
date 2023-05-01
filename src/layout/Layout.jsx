import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import FooterMobile from "../components/FooterMobile";
import Header from "../components/Header";
import { cursorCTX } from "../context/cursorCTX";
import { objCTX } from "../context/objCTX";
import { getGoods } from "../features/goods/thunk";

const Layout = () => {
    const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const [cursor, setCursor] = useState(false)
    const [obj, setObj] = useState({})
    const changeObj = (id, value, type) => {
        setObj({
            id: id,
            word: value,
            type: type
        })
    }
    const dispatch = useDispatch()
    const {status, data} = useSelector((state) => state.goods)
    useEffect(() => {
		if(data.length === 0) {
			dispatch(getGoods())
		}
	}, []);
    return ( 
        <cursorCTX.Provider value={{setCursor, cursor}}>
            <objCTX.Provider value={{changeObj, obj}}>
            <div className="min-h-[100vh]">
    <Header/>
    <main className="px-[15px] md:px-[25px] lg:w-[1240px] lg:px-[0] lg:mx-auto">
        <Outlet/>
    </main>
    {
        viewport_width > 1024 ? <Footer/> : <FooterMobile/>
    }
    </div> 
            </objCTX.Provider>
        </cursorCTX.Provider>
    );
}
 
export default Layout;