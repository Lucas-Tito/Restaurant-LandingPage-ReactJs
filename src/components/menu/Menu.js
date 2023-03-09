import little_chef_guy from "../../images/little_chef_guy.svg"
import Selectable_menu from "./Selectable_menu"

export default function Menu(){
    return(
        
        <div className="menu_container">
            <div className="menu"> 
                <img id="little_chef_guy" src={little_chef_guy}/>
                <br/>
                <hr/>
                <br/>
                <h1 align="center">MENU</h1>
                
                <Selectable_menu/>
            </div>
        </div>
    )
}



// //--+This chunk of code is responsible for dynamically add event listeners for each menu+--
// class CategoryMenuElement_Object{
//     constructor(menu, btn){
//         this.menu = menu
//         this.btn = btn
//     }
// }

// //example of an category menu: Lunch, Snacks...
// const CategoryMenuElement = document.querySelectorAll(".select-menu"),
//       CategoryMenuBtn = document.querySelectorAll(".select-btn"),
//       CategoryMenuElement_Array = new Array()

// for(let i=0; i<CategoryMenuElement.length; i++)
//     CategoryMenuElement_Array.push(new CategoryMenuElement_Object(CategoryMenuElement[i], CategoryMenuBtn[i]))

// CategoryMenuElement_Array.forEach((menu_element) =>{
//     menu_element.btn.addEventListener("click", ()=>{
//         menu_element.menu.classList.toggle("active")
//     })
// })

// //---------------------++--------------------------