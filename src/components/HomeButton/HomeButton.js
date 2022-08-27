import React from "react"
import "./HomeButton.css"
import HomeIcon from "../../assets/home.png"
import { Link } from 'react-router-dom'

//removed onclick because Link from react router allows us to go back to the main page
const HomeButton = () => {
    return (
            <button className="home-button">
                <Link to={`/movies`} className='back-btn'><img className="home-icon"  src={HomeIcon} alt="home icon"/></Link>
            </button>
    )
}

export default HomeButton