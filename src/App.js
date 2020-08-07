import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row } from 'react-bootstrap';
import Movie from "./Movie";

class App extends React.Component {

  state = {
    movies: {
      results: []
    }
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
          <Row xs={4} md={4}>
            {this.state.movies.results.map(movie => 
              <Movie {...movie} />
            )}
          </Row>
      </Container>

    );
  };
}

export default App;
