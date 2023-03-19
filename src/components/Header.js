import { Link, useNavigate } from "react-router-dom"
import logo from "../images/logo.svg"
import "../styles/header.css"

export default function Header(){

    const navigate = useNavigate()

    return (
        // header represents a support tag that can work as a navigation section
    <header>
        <img 
        className="logo" src={logo} alt="logo" onClick={ ()=>navigate("/Restaurant-LandingPage-ReactJs/") }/>
        
        {/* nav is a section that contains links to others pages */}
        <nav>
            {/* ul is an unordered list that can contain various items */}
            <ul className="nav-links">
                {/* li tag represents a list item */}
                
                <li><Link to="/Restaurant-LandingPage-ReactJs/aboutUs">About Us</Link></li>
            </ul>
        </nav>
        <button className="contact_btn" onClick={contactClick}>Contact</button>
    </header>
    )
}




function contactClick(){
    let contact_popup = document.querySelector(".popup")
    contact_popup.classList.toggle("active")
    document.querySelector("#root").classList.toggle("blur")
}

