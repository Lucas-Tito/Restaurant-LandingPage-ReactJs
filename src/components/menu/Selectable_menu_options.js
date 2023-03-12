export default function Selectable_menu_options(props){
    return(
        <ul className="select-menu-options">
            <li className="option">
                <img src={require('../../images/receipe/'+props.data.option_img_url)}/>
                <div>
                    <p className="option-text-title">{props.data.option_title}</p>
                    <p className="option-text">{(props.data.option_description).toLowerCase()}</p> 
                </div>
            </li>
        </ul>
    )
}