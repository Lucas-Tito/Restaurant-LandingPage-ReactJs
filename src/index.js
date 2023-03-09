import ReactDOM from "react-dom/client"
import App from "./App"
import "./style.css"


ReactDOM.createRoot(document.querySelector("#root")).render(
    <App/>
)














//--+This chunk of code is responsible for dynamically add event listeners for each menu+--
class CategoryMenuElement_Object{
    constructor(menu, btn){
        this.menu = menu
        this.btn = btn
    }
}

//example of an category menu: Lunch, Snacks...
const CategoryMenuElement = document.querySelectorAll(".select-menu"),
      CategoryMenuBtn = document.querySelectorAll(".select-btn"),
      CategoryMenuElement_Array = new Array()

for(let i=0; i<CategoryMenuElement.length; i++)
    CategoryMenuElement_Array.push(new CategoryMenuElement_Object(CategoryMenuElement[i], CategoryMenuBtn[i]))

CategoryMenuElement_Array.forEach((menu_element) =>{
    menu_element.btn.addEventListener("click", ()=>{
        menu_element.menu.classList.toggle("active")
    })
})

//---------------------++--------------------------



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
