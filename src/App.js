import React from "react"
import movieData from "./mockData"
import MoviesContainer from "./MoviesContainer"
import Header from "./Header"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: movieData.movies
    }
    this.showMovieDetails = this.showMovieDetails.bind(this)
    this.goBack = this.goBack.bind(this)
  }
  showMovieDetails = (id) => {
    const selectedMovie = this.state.movies.filter(movie => movie.id === id)
    this.setState({movies: selectedMovie})
  }
  goBack = () => {
    this.setState({movies: movieData.movies})
  }
  render() {
    return (
      <main>
        <Header />
        <MoviesContainer movies={this.state.movies} showMovieDetails={this.showMovieDetails} goBack={this.goBack}/>
      </main>
    )
  }
}

export default App