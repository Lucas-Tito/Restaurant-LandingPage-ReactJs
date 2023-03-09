import phone_icon from "../images/phone_icon.svg"

export default function Contact_popup(){
    return(
        <div className="popup">
            <button className="close_btn"></button>
            <br/>
            <img src={phone_icon}/>
            <h2>Contact Us</h2>
            <p className="copy_field">(xx) 9-xxxxxxxx <button className="copy_btn"></button></p>
        </div>
    )
}