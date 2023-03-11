import Banner from "./components/Banner";
import Contact_popup from "./components/Contact_popup";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/menu/Menu";


export default function App(){

    return(
        <>
            <Header/>
            <Banner/>
            <Menu/>
            <Footer/>
            <Contact_popup/>
        </>
    )
}