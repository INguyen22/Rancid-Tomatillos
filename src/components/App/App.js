import React from "react"
// import movieData from "./mockData"
import MoviesContainer from "../MoviesContainer/MoviesContainer"
import Header from "../Header/Header"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      error: ''
    }
    this.showMovieDetails = this.showMovieDetails.bind(this)
    this.goBack = this.goBack.bind(this)
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
  showMovieDetails = (id) => {
    const selectedMovie = this.state.movies.filter(movie => movie.id === id)
    this.setState({movies: selectedMovie})
  }
  goBack = () => {
    this.fetchAllMovies()
  }
  render() {
    return (
      <main>
        <Header />
        {this.state.error && <h2>{this.state.error}</h2>}
        <MoviesContainer movies={this.state.movies} showMovieDetails={this.showMovieDetails} goBack={this.goBack}/>
      </main>
    )
  }
}

export default App