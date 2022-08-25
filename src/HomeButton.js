import React from "react"
import "./HomeButton.css"
import HomeIcon from "./assets/home.png"


const HomeButton = ({onClick}) => {
    return (
            <button className="home-button" onClick={() => onClick()}>
                <img className="home-icon"  src={HomeIcon} alt="home icon"/>
            </button>
    )
}

export default HomeButton