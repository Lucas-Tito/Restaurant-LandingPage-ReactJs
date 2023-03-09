import little_chef_guy from "../../images/little_chef_guy.svg"
import arrow_down from "../../images/arrow_down.svg"

export default function Menu(){
    return(
        
        <div className="menu_container">
            <div className="menu"> 
                <img id="little_chef_guy" src={little_chef_guy}/>
                <br/>
                <hr/>
                <br/>
                <h1 align="center">MENU</h1>
                <div className="select-menu">
                    <div className="select-btn">
                        {/* span is a generic container for a text line */}
                        <span className="Sbtn_text">LUNCH</span>
                        <img align="center" className="selector-img" alt="logo" src={arrow_down}/>
                    </div>
            
                    <ul className="select-menu-options">
                        <li className="option">
                            <img src="images/receipe/panelada.jpg"/>
                            <div>
                                <p className="option-text-title">Panelada</p>
                                <p className="option-text">Comes with rice and cuzcuz</p> 
                            </div>
                        </li>
                        <br/><br/>
                        <li className="option">
                            <img src="images/receipe/mao-de-vaca.jpg"/>
                            <div>
                                <p className="option-text-title">Mão de Vaca</p>
                                <p className="option-text">Comes with rice and cuzcuz</p> 
                            </div>
                        </li>
                    </ul>
                </div>
            
            
                <div className="select-menu">
                    <div className="select-btn">
                        {/* span is a generic container for a text line */}
                        <span className="Sbtn_text">SNACKS</span>
                        <img align="center" className="selector-img" alt="logo" src={arrow_down}/>
                    </div>
            
                    <ul className="select-menu-options">
                        <li className="option">
                            <img src="images/receipe/salgado.png"/>
                            <div>
                                <p className="option-text-title">Salgado</p>
                                <p className="option-text">You can pick: meat, cheese, ham and cheese or chicken</p> 
                            </div>
                        </li>
                        <br/><br/>
                        <li className="option">
                            <img src="images/receipe/tapioca.jpg"/>
                            <div>
                                <p className="option-text-title">Tapioca</p>
                                <p className="option-text">Goes well with coffee</p> 
                            </div>
                        </li>
                        <br/><br/>
                        <li className="option">
                            <img src="images/receipe/bolo-mole.jpg"/>
                            <div>
                                <p className="option-text-title">Soft Cake</p>
                                <p className="option-text">fluffy and delicious</p> 
                            </div>
                        </li>
                    </ul>
                </div>
            
            
                <div className="select-menu">
                    <div className="select-btn">
                        {/* span is a generic container for a text line */}
                        <span className="Sbtn_text">DRINKS</span>
                        <img align="center" className="selector-img" alt="logo" src={arrow_down}/>
                    </div>
            
                    <ul className="select-menu-options">
                        <li className="option">
                            <img src="images/receipe/coffee.jpg"/>
                            <div>
                                <p className="option-text-title">Coffee</p>
                                <p className="option-text">Every soul out there loves</p> 
                            </div>
                        </li>
                        <br/><br/>
                        <li className="option">
                            <img src="images/receipe/soda.jpeg"/>
                            <div>
                                <p className="option-text-title">Soda</p>
                                <p className="option-text">Refreshing!</p> 
                            </div>
                        </li>
                        <br/><br/>
                        <li className="option">
                            <img src="images/receipe/juice.jpg"/>
                            <div>
                                <p className="option-text-title">Juice</p>
                                <p className="option-text">We use fresh fruits</p> 
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}