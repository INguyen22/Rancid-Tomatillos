import React from "react"
// import MovieCard from "../MovieCard/MovieCard"
import "./MoviesContainer.css"
// import "../MovieCard/MovieCard.css"
import { NavLink } from 'react-router-dom'

const MoviesContainer = ({ data, name }) => {
    console.log('this.state.movies', data)
    const movieCards = data.map(movie => {
        const {id, poster_path, title} = movie
        return (
            <NavLink to={`/${name}/${id}`} key={id}>
                {/* <MovieCard 
                    key = {id}
                    id = {id}
                    posterImage = {poster_path}
                    title = {title}
                    showMovieDetails = {showMovieDetails}
                    goBack = {goBack}
                /> */}
                <img src={poster_path} alt={title} className="card"/>
            </NavLink>
            // <NavLink> 
                // <MovieCard 
                //     key = {id}
                //     id = {id}
                //     posterImage = {poster_path}
                //     title = {title}
                //     showMovieDetails = {showMovieDetails}
                //     goBack = {goBack}
                // />
            // </NavLink>
        )
    })

    return (
        <div className="movies-container">
            {movieCards}
        </div>
    )
}

export default MoviesContainer