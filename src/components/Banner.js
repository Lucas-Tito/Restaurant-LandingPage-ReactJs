import banner from "../images/banner.jpg"

export default function Banner(){
    let bannerStyle = {
        backgroundImage: 'url('+banner+')'
    }
    
    return(
        <div className="banner" style={bannerStyle}>
            <div className="banner-container">
                <h1>São Lucas</h1>
                <p>Your best lunch is here, come visit us!</p>
            </div>
        </div>
    )
}