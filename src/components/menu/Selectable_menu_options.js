export default function Selectable_menu_options(props){
    return(
        <ul className="select-menu-options">
            <li className="option">
                <img src={require('../../images/receipe/'+props.data.option_img_url)}/>
                <div>
                    <p className="option-text-title">Panelada</p>
                    <p className="option-text">Comes with rice and cuzcuz</p> 
                </div>
            </li>

            <br/><br/>
        </ul>
    )
}