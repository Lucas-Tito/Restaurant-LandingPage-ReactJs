import Banner from "./components/Banner";
import Contact_popup from "./components/Contact_popup";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/menu/Menu";

import { Outlet } from "react-router-dom";


export default function App(){

    return(
        <>
            <Header/>

            <Outlet />
            
            <Footer/>
            <Contact_popup/>
        </>
    )
}