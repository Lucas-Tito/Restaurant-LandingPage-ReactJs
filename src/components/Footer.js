import "../styles/footer.css"
import my_photo from "../images/footer/my_photo.jpg"
import github_icon from "../images/footer/github_icon.svg"
import linkedin_icon from "../images/footer/linkedin_icon.svg"
import youtube_icon from "../images/footer/youtube_icon.svg"

export function Footer(){
    return(
        <footer>
            <div className="main_content">
                <div className="description">
                    <img src={my_photo}/>
                    <p>Professional web development, producing high quality software.</p>
                </div>

                <div className="links">
                    <button onClick={githubLink_Click}>
                        <img src={github_icon}/>
                    </button>

                    <button onClick={linkedinLink_Click}>
                        <img src={linkedin_icon}/>
                    </button>

                    <button onClick={youtubeLink_Click}>
                        <img src={youtube_icon}/>
                    </button>
                </div>
            </div>
            <div className="copyright">
                <hr/>
                <p>&copy; 2023 Lucas Tito</p>
            </div>
        </footer>
    )
}


function githubLink_Click(){
    window.location.href = ("https://github.com/Lucas-Tito")
}

function linkedinLink_Click(){
    window.location.href = ("https://www.linkedin.com/in/lucas-tito-530997211/")
}

function youtubeLink_Click(){
    window.location.href = ("https://www.youtube.com/@lucastitosampaio")
}