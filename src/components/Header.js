import logo from "../images/logo.svg"

export default function Header(){
    return (
        // header represents a support tag that can work as a navigation section
    <header>
        <img className="logo" src={logo} alt="logo"/>
        
        {/* nav is a section that contains links to others pages */}
        <nav>
            {/* ul is an unordered list that can contain various items */}
            <ul className="nav-links">
                {/* li tag represents a list item */}
                <li><a href="aboutUs.html">About Us</a></li>
            </ul>
        </nav>
        <button className="contact_btn" onClick={contactClick}>Contact</button>
    </header>
    )
}



function contactClick(){
    let contact_popup = document.querySelector(".popup")
    contact_popup.classList.toggle("active")
}

