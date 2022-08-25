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

class MovieCard extends React.Component {
    constructor({id, title, description, rating, posterImage , backdropImage, showMovieDetails, goBack}) {
        super()
        this.state = {
            posterImage: posterImage,
            backdropImage: backdropImage,
            id: id,
            title: title,
            description: description,
            rating: rating,
            showMovieDetails: showMovieDetails,
            goBack: goBack,
            wasClicked: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick = () => {
        this.state.showMovieDetails(this.state.id)
        this.setState(prevState => {
            return {
                wasClicked: !prevState.wasClicked
            }
        })
    }
    returnHome = () => {
        this.state.goBack()
        this.setState(prevState => {
            return {
                wasClicked: !prevState.wasClicked
            }
        })
    }
    render() {
        // return (
        // <div className="card" onClick={this.handleClick}>
        //     <img src={this.state.posterImage} alt={this.state.title} />
        // </div>
        // )
        return (
            <div>
                {this.state.wasClicked ?
                <div>
                    <button className="home-button" onClick={this.returnHome}>{<HomeButton />}</button>
                    <img src={this.state.backdropImage} alt={this.state.title}/>
                    <h2>{this.state.title}</h2>
                    <p>{this.state.rating.toFixed(1)}</p>
                </div>  
                :        
                <img className="card" onClick={this.handleClick} src={this.state.posterImage} alt={this.state.title} />
                }
            </div>
            )
    }
}
export default MovieCard