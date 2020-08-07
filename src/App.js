import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Button } from 'react-bootstrap';

class App extends React.Component {

  state = {
    movies: {}
  };

  componentDidMount() {
    this.getCurrentlyPlaying();
  }

  getCurrentlyPlaying = async () => {
    const movieResponse = await fetch(`/movies/currently_playing`);
    const currentlyPlayingMovies = await movieResponse.json()
    this.setState({
      movies: currentlyPlayingMovies
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <div className="App">
            <div className="movies">
              <span className="currently-playing">{JSON.stringify(this.state.movies)}</span>
            </div>
          </div>
        </Row>
      </Container>

    );
  };
}

export default App;
