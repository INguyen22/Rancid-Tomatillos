import React, {Component} from "react"
import "./MoviesContainer.css"
import Header from "../Header/Header"
import { NavLink } from 'react-router-dom'
import Form from "../Form/Form"

class MoviesContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchQuery: ''
        }
    }

    onSearchQueryChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        const { data, name } = this.props
        const movieCards = data.map(movie => {const {id, poster_path, title} = movie
                    return (
                        <NavLink to={`/${name}/${id}`} key={id}>
                            <img src={poster_path} alt={title} className="card"/>
                        </NavLink>
                    )
                    }) 
        const filteredMovies = data.filter(movie => {
            return movie.title.toLowerCase().startsWith(this.state.searchQuery.toLowerCase())
        }).map(filteredMovie => {const {id, poster_path, title} = filteredMovie
            return (
                <NavLink to={`/${name}/${id}`} key={id}>
                    <img src={poster_path} alt={title} className="card"/>
                </NavLink>
            )
        })
        console.log('filtered movies: ', filteredMovies)
        return (
            <div>
            <Header />
            <Form searchQuery={this.state.searchQuery} onSearchQueryChange={this.onSearchQueryChange}/>
        <div className="movies-container">
            {this.state.searchQuery === '' ? movieCards : filteredMovies}
            {filteredMovies.length === 0 && <h2>Sorry there are no movies with that title, please try again🥲</h2>}
        </div>
        </div>
        )
    }
}

export default MoviesContainer