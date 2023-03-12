import phone_icon from "../images/phone_icon.svg"
import "../styles/contact_popup.css"

export default function Contact_popup(){
    return(
          
        <div className="popup">
            <button className="close_btn" onClick={closeBtn_Click}></button>
            <br/>
            <img src={phone_icon}/>
            <h2>Contact Us</h2>
            <p className="copy_field">(xx) 9-xxxxxxxx <button className="copy_btn" onClick={copyBtn_Click}></button></p>
        </div>
        
        
    )
}


function closeBtn_Click(){
    document.querySelector(".popup").classList.remove("active")
    document.querySelector(".copy_btn").classList.remove("active")
    document.querySelector("#root").classList.remove("blur")
}

function copyBtn_Click(){
    navigator.clipboard.writeText(document.querySelector(".copy_field").innerText)    
    document.querySelector(".copy_btn").classList.add("active")
}