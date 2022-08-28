import React from "react"
// import movieData from "./mockData"
import MoviesContainer from "../MoviesContainer/MoviesContainer"
import Header from "../Header/Header"
import { Route, Redirect } from 'react-router-dom'
import MovieCard from "../MovieCard/MovieCard";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      error: ''
    }
  }
  fetchAllMovies() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => {
      if(!response.ok) {
        throw new Error('sorry try again')
      } else {
        return response.json()
      }
    })
    .then(data => this.setState({ movies: data.movies}))
    .catch(err => this.setState({error: 'Something went wrong with our server please try again'}))
  }
  componentDidMount() {
    return this.fetchAllMovies()
  }
  // showMovieDetails = (id) => {
  //   const selectedMovie = this.state.movies.filter(movie => movie.id === id)
  //   this.setState({movies: selectedMovie})
  // }
  // goBack = () => {
  //   this.fetchAllMovies()
  // }
  render() {
    console.log(this.state.movies)
    return (
      <main>
        {/* <Route path="/" component={ Header }/> */}
        <Redirect exact from="/" to="movies" />
        <Header />
        {this.state.error && <h2>{this.state.error}</h2>}
        {/* {!this.state.movies.length && <h2>Sorry no movies here</h2>} */}
        {/* <Route exact path="/movies" render={() => <MoviesContainer name={'movies'} data={this.state.movies} />} /> */}
        <Route
            exact path="/:movies"
            render={({ match }) => {
              return <MoviesContainer name={'movies'} data={this.state.movies} />
            }}
          />
        <Route
            exact path="/movies/:id"     
            render={({match}) => {
              const movieToRender = this.state.movies.find(movie => movie.id === parseInt(match.params.id));  
              //find the one movie that matches the id and then passes that movie object to movieCard
            return <MovieCard {...movieToRender} />
          }}
        />
      </main>
    )
  }
}

export default App