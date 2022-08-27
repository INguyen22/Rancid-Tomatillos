import React from "react"
import HomeButton from "../HomeButton/HomeButton"
import "./MovieCard.css"
import { Route, NavLink, Link } from 'react-router-dom'

//globals
let backdropImage;
let releaseDate;
let runTime;
let genre;
let overview;

const fetchMovieDetails = (movieId) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            // backdropImage = data.movie.backdrop_path
            // releaseDate = data.movie.release_date
            // runTime = data.movie.runtime
            // genre = data.movie.genres
            // overview = data.movie.overview
        })
}

const MovieCard = ({id, title, average_rating, backdrop_path, goBack}) => {
    // await fetchMovieDetails(id)
    // console.log(fetchedData)
    return (
        <div>
            <Link to={`/movies`} className='back-btn'>◀ back</Link>
            <img className="backdrop-img" src={backdrop_path} alt={title}/>
            <article className="details-container">
                <h2 className="movie-title">{title}</h2>
                <p className="movie-details">{`⭐️ ${average_rating} stars ⭐️`}</p>
                <p>Release Date: {releaseDate}</p>
                <p>Run Time: {runTime} minutes</p>
                <p>Genres: {genre}</p>
                <p>Description: {console.log('overview', overview)}</p>
            </article>
        </div>
    )
}

// class MovieCard extends React.Component {
//     constructor({id, title, posterImage, showMovieDetails, goBack}) {
//         super()
//         this.state = {
//             posterImage: posterImage,
//             backdropImage: '',
//             id: id,
//             title: title,
//             releaseDate: '',
//             overview: '',
//             genre: [],
//             runtime: 0,
//             rating: 0,
//             showMovieDetails: showMovieDetails,
//             goBack: goBack,
//             wasClicked: false
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }
//     handleClick = () => {
//         this.state.showMovieDetails(this.state.id)
//         fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.id}`)
//         .then(response => response.json())
//         .then(data => {
//             this.setState(prevState => {
//                 return {
//                     backdropImage: data.movie.backdrop_path,
//                     rating: data.movie.average_rating,
//                     releaseDate: data.movie.release_date,
//                     overview: data.movie.overview,
//                     genre: data.movie.genres,
//                     runtime: data.movie.runtime,
//                     wasClicked: !prevState.wasClicked
//                 }
//             })
//         })
//     }
//     returnHome = () => {
//         this.state.goBack()
//         this.setState(prevState => {
//             return {
//                 overview: '',
//                 genre: [],
//                 runtime: 0,
//                 wasClicked: !prevState.wasClicked
//             }
//         })
//     }
//     render() {
//         return (
//             <div>
//                 {this.state.wasClicked ?
//                 <div>
//                     <HomeButton className="home-button" onClick={this.returnHome}/>
//                     <img className="backdrop-img" src={this.state.backdropImage} alt={this.state.title}/>
//                     <article className="details-container">
//                         <h2 className="movie-title">{this.state.title}</h2>
//                         <p className="movie-details">{`⭐️ ${this.state.rating.toFixed(1)} stars ⭐️`}</p>
//                         <p>Release Date: {this.state.releaseDate}</p>
//                         <p>Run Time: {this.state.runtime} minutes</p>
//                         <p>Genres: {(this.state.genre).join()}</p>
//                         <p>Description: {this.state.overview}</p>
//                     </article>
//                 </div>  
//                 :        
//                 <img className="card" onClick={this.handleClick} src={this.state.posterImage} alt={this.state.title} />
//                 }
//             </div>
//             )
//     }
// }
export default MovieCard