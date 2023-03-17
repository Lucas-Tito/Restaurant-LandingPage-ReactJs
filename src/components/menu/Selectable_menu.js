import arrow_down from "../../images/arrow_down.svg"
import Selectable_menu_options from "./Selectable_menu_options"

export default function Selectable_menu(props){

    let menuOptions = props.data.menu_options.map(
        function(option){
            return(
                <Selectable_menu_options
                    key={option.option_title}
                    data={option}
                />
            )
        }
    )
    
    function selectBtn_click(){
        let select_menus = document.querySelectorAll(".select-menu")
        select_menus[props.data.id].classList.toggle("active")
    }

    return(
        <div className="select-menu">
                <div className="select-btn" onClick={selectBtn_click}>
                    {/* span is a generic container for a text line */}
                    <span className="Sbtn_text">
                        {(props.data.select_menu_title).toUpperCase()}
                    </span>

                    <img align="center" className="selector-img" alt="logo" src={arrow_down}/>
                </div>
            
                {menuOptions}
        </div>
    )
}
