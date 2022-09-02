import React from "react"
import "./HomeButton.css"
import HomeIcon from "../../assets/home.png"
import { Link } from 'react-router-dom'

const HomeButton = () => {
    return (
            <button className="home-button">
                <Link to={`/Rancid-Tomatillos`}><img className="home-icon"  src={HomeIcon} alt="home icon"/></Link>
            </button>
    )
}

export default HomeButton