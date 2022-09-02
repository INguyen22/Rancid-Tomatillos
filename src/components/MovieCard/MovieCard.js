import React, { Component } from "react"
import { fetchMovieDetails, fetchMovieTrailers } from "../../Apicalls"
import HomeButton from "../HomeButton/HomeButton"
import Trailers from "../Trailers/Trailers"
import "./MovieCard.css"

class MovieCard extends Component {
    constructor({id, title, average_rating, backdrop_path}) {
        super()
        this.state = {
            title: title,
            id: id,
            rating: average_rating,
            backdropImage: backdrop_path,
            releaseDate: '',
            overview: '',
            genre: [],
            runtime: 0,
            trailers: [],
        }
    }

    componentDidMount() {
        const currentUrl = window.location.href
        let id = currentUrl.substring(currentUrl.lastIndexOf('/') + 1);
        if(id) {
            fetchMovieDetails(id).then(data => {
                this.setState({
                    id: data.movie.id,
                    rating: data.movie.average_rating.toFixed(1),
                    backdropImage: data.movie.backdrop_path,
                    releaseDate: data.movie.release_date,
                    overview: data.movie.overview,
                    genre: data.movie.genres,
                    runTime: data.movie.runtime
            })
        })
            fetchMovieTrailers(id).then(data => {
                console.log('trailer data', data)
                // console.log('trailer state', this.state.trailers)
                this.setState({trailers: data.videos})
            })
        } else {
            fetchMovieDetails(this.state.id).then(data => {
                this.setState({
                    id: data.movie.id,
                    rating: data.movie.average_rating.toFixed(1),
                    backdropImage: data.movie.backdrop_path,
                    releaseDate: data.movie.release_date,
                    overview: data.movie.overview,
                    genre: data.movie.genres,
                    runTime: data.movie.runtime
                })
            })
            fetchMovieTrailers(this.state.id).then(data => {
                console.log('trailer data', data.videos)
                this.setState({trailers: data.videos})
            })
        }
    }
    render() {
        return (
            <div className="movie-details-container">
                <HomeButton />
                <div className="details-container">
                    <img className="backdrop-img" src={this.state.backdropImage} alt={this.state.title}/>
                    <div className="trailer-container">
                        {!this.state.trailers ? <h3>Sorry there are no trailers available for this movie</h3> : <Trailers videos={this.state.trailers}/>}
                    </div>
                    <article className="details-text">
                        <div className="title-details-container">
                            <div className="title-container">
                                <h2 className="movie-title">{this.state.title}</h2>
                                <p className="movie-rating">{`${this.state.rating} stars ⭐️`}</p>
                            </div>
                            <div className="release-runtime-genre-container">
                                <p>Release Date:  {this.state.releaseDate}</p>
                                <p>Run Time:  {this.state.runTime} minutes</p>
                                <p>Genres:  {this.state.genre.join(', ')}</p>
                            </div>
                        </div>
                        <div className="description">
                            <p>Description:  {this.state.overview}</p>
                        </div>
                    </article>
                </div>
            </div>
        )
    }
}

export default MovieCard