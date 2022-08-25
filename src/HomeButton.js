import React from "react"
import "./HomeButton.css"
import HomeIcon from "./assets/home.png"


const HomeButton = () => {
    return (
            <button className="home-button">
                <img className="home-icon"  src={HomeIcon} alt="home icon"/>
            </button>
    )
}

export default HomeButton