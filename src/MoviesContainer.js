import React from "react"
import MovieCard from "./MovieCard"
import "./MoviesContainer.css"

const MoviesContainer = ({ movies }) => {
    const movieCards = movies.map(movie => {
        return (
            <MovieCard 
                key = {movie.id}
                id = {movie.id}
                image = {movie.poster_path}
                title = {movie.title}
                rating = {movie.average_rating}
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