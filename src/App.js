import React from "react"
import movieData from "./mockData"
import MoviesContainer from "./MoviesContainer"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: movieData.movies
    }
  }

  render() {
    return (
      <main>
        <h1>Rancid Tomatillos</h1>
        <MoviesContainer movies={this.state.movies}/>
      </main>
    )
  }
}

export default App