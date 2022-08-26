import React from "react"
import MovieCard from "../MovieCard/MovieCard"
import "./MoviesContainer.css"

const MoviesContainer = ({ movies , showMovieDetails, goBack}) => {
    const movieCards = movies.map(movie => {
        return (
            <MovieCard 
                key = {movie.id}
                id = {movie.id}
                posterImage = {movie.poster_path}
                title = {movie.title}
                // releaseDate = {movie.release_date}
                showMovieDetails = {showMovieDetails}
                goBack = {goBack}
                />
        )
    })

    return (
        <div className="movies-container">
            {movieCards}
        </div>
    )
}

export default MoviesContainer