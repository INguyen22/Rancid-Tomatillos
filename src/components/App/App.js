import React from "react"
import { fetchAllMovies } from "../../Apicalls";
import MoviesContainer from "../MoviesContainer/MoviesContainer"
import { Route } from 'react-router-dom'
import MovieCard from "../MovieCard/MovieCard";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      error: ''
    }
  }
  componentDidMount = () => {
    fetchAllMovies().then(data => this.setState({ movies: data.movies}))
    .catch(err => this.setState({error: 'Something went wrong with our server please try again'}))
  }
  render() {
    return (
      <main>
        {this.state.error && <h2>{this.state.error}</h2>}
        <Route exact path="/" render={() => <MoviesContainer name={'movies'} data={this.state.movies} />} />
        <Route
            exact path="/movies/:id"     
            render={({match}) => {
              const movieToRender = this.state.movies.find(movie => {
                return movie.id === parseInt(match.params.id)
              }); 
              return <MovieCard {...movieToRender} />
            }}
            />
      </main>
    )
  }
}

export default App