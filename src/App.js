import React from 'react';
import logo from './logo.svg';
import './App.css';
import fetch from 'node-fetch';

class App extends React.Component {

  state = {
    movies: {}
  };

  getCurrentlyPlaying = async () => {
    const movieResponse = await fetch(`/movies/currently_playing`);
    const currentlyPlayingMovies = await movieResponse.json()
    this.setState({
        movies: currentlyPlayingMovies
    });
  }

  render() {
    return (
      <div className="App">
        <div className="movies">
          <button onClick={ this.getCurrentlyPlaying }>Get Currently Playing</button>
          <span className="currently-playing">{ JSON.stringify(this.state.movies) }</span>
        </div>
      </div>
    );
  };
}

export default App;
