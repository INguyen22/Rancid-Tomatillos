import React from "react"
import HomeButton from "./HomeButton"
import "./MovieCard.css"

// const MovieCard = ( {id, title, description, rating, image , showMovieDetails} ) => {
//     return (
//         <div className="card" onClick={() => showMovieDetails(id)}>
//             {/* <h3>{title}</h3>
//             <p>{rating.toFixed(1)}</p> */}
//             <img src={image} alt={title} />
//         </div>
//     )
// }

//questions for kim: how do i use componenet did update
//refactor functions to not have full fetch function inside of them
//how to get back all the movies witrhout a re-fetch unless i have too

class MovieCard extends React.Component {
    constructor({id, title, posterImage, showMovieDetails, goBack}) {
        super()
        this.state = {
            posterImage: posterImage,
            backdropImage: '',
            id: id,
            title: title,
            releaseDate: '',
            overview: '',
            genre: [],
            runtime: 0,
            rating: 0,
            showMovieDetails: showMovieDetails,
            goBack: goBack,
            wasClicked: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick = () => {
        this.state.showMovieDetails(this.state.id)
        fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.id}`)
        .then(response => response.json())
        .then(data => {
            this.setState(prevState => {
                return {
                    backdropImage: data.movie.backdrop_path,
                    rating: data.movie.average_rating,
                    releaseDate: data.movie.release_date,
                    overview: data.movie.overview,
                    genre: data.movie.genres,
                    runtime: data.movie.runtime,
                    wasClicked: !prevState.wasClicked
                }
            })
        })
    }
    returnHome = () => {
        this.state.goBack()
        this.setState(prevState => {
            return {
                overview: '',
                genre: [],
                runtime: 0,
                wasClicked: !prevState.wasClicked
            }
        })
    }
    render() {
        return (
            <div>
                {this.state.wasClicked ?
                <div>
                    <HomeButton className="home-button" onClick={this.returnHome}/>
                    <img className="backdrop-img" src={this.state.backdropImage} alt={this.state.title}/>
                    <article className="details-container">
                        <h2 className="movie-title">{this.state.title}</h2>
                        <p className="movie-details">{`⭐️ ${this.state.rating.toFixed(1)} stars ⭐️`}</p>
                        <p>Release Date: {this.state.releaseDate}</p>
                        <p>Run Time: {this.state.runtime} minutes</p>
                        <p>Genres: {(this.state.genre).join()}</p>
                        <p>Description: {this.state.overview}</p>
                    </article>
                </div>  
                :        
                <img className="card" onClick={this.handleClick} src={this.state.posterImage} alt={this.state.title} />
                }
            </div>
            )
    }
}
export default MovieCard