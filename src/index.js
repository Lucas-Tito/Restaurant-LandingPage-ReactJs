import ReactDOM from "react-dom/client"
import App from "./App"
import "./style.css"


ReactDOM.createRoot(document.querySelector("#root")).render(
    <App/>
)







// let popup_closer_btn = document.querySelector(".close_btn")
// popup_closer_btn.addEventListener("click", ()=>{
//     contact_popup.classList.remove("active")
//     copyNumber_btn.classList.remove("active")
// })

// let copyNumber_field = document.querySelector(".copy_field"),
//     copyNumber_btn = document.querySelector(".copy_btn")
// copyNumber_field.addEventListener("click", ()=>{
//     navigator.clipboard.writeText(copyNumber_field.innerText)    
//     copyNumber_btn.classList.add("active")
// })
