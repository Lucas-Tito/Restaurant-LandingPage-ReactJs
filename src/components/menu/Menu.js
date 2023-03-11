import little_chef_guy from "../../images/little_chef_guy.svg"
import Selectable_menu from "./Selectable_menu"
import menuData from "../../menuData.js"

export default function Menu(){

    let menuOptions = menuData.map(function(menu){
        return(
            <Selectable_menu
                key={menu.id}
                data={menu}
            />
        )
    })

    return(
        <div className="menu_container">
            <div className="menu"> 
                <img id="little_chef_guy" src={little_chef_guy}/>
                <br/>
                <hr/>
                <br/>
                <h1 align="center">MENU</h1>
                
                {menuOptions}
            </div>
        </div>
    )
}
