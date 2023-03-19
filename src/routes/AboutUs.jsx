import aboutUs_panel from "../images/aboutUs_panel.png"

export default function AboutUs(){
    return(

        <div className="aboutUs_container">
            <img src={aboutUs_panel} />
            <div className="aboutUs_text">
                <h1>About São Lucas
                    <hr/>
                </h1>
                <p>São Lucas started it's story humble in 1991, founded by Paulo Andrade. Since then our restaurant only grew on it's clients hearts, serving with affordable quality and excellence.</p>
                <p>Come by and you will find yourself friendly staff and delicious food.</p>
            </div>
        </div>

    )
}