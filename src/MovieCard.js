import React from "react"
import "./MovieCard.css"

const MovieCard = ( {id, title, description, rating, image } ) => {
    return (
        <div className="card">
            {/* <h3>{title}</h3>
            <p>{rating.toFixed(1)}</p> */}
            <img src={image} alt={title} />
        </div>
    )
}

export default MovieCard