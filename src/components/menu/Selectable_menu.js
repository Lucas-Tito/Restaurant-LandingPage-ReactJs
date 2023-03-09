import arrow_down from "../../images/arrow_down.svg"
import Selectable_menu_options from "./Selectable_menu_options"

export default function Selectable_menu(){
    return(
        <div className="select-menu">
                <div className="select-btn">
                    {/* span is a generic container for a text line */}
                    <span className="Sbtn_text">LUNCH</span>
                    <img align="center" className="selector-img" alt="logo" src={arrow_down}/>
                </div>
            
                <Selectable_menu_options/>
        </div>
    )
}