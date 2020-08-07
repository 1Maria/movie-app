import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row } from 'react-bootstrap';
import Movie from "./Movie";
import ReactPaginate from 'react-paginate';

class App extends React.Component {

  state = {
    movies: {
      results: []
    },
    paginationConfig: {
      previousLabel: 'previous',
      nextLabel: 'next',
      breakLabel: '...',
      breakClassName: 'page-item',
      pageCount: 1,
      marginPagesDisplayed: 2,
      pageRangeDisplayed: 5,
      pageClassName: 'page-item',
      previousClassName: 'page-item',
      nextClassName: 'page-item',
      pageLinkClassName: 'page-link',
      previousLinkClassName: 'page-link',
      nextLinkClassName: 'page-link',
      breakLinkClassName: 'page-link',
      onPageChange: (page) => {
        this.getCurrentlyPlaying(page.selected + 1);
      },
      containerClassName: 'pagination',
      subContainerClassName: 'pages pagination', 
      activeClassName: 'active',
      offset: 1
    }
  };

  componentDidMount() {
    this.getCurrentlyPlaying();
  }

  getCurrentlyPlaying = async (page = 1) => {
    console.log(page);
    const movieResponse = await fetch(`/movies/currently_playing?page=${page}`);
    const currentlyPlayingMovies = await movieResponse.json()
    this.setState(prevState => {
      return {
        movies: currentlyPlayingMovies,
        paginationConfig: {
          ...prevState.paginationConfig,
          offset: currentlyPlayingMovies.page,
          pageCount: currentlyPlayingMovies.total_pages
        }
      }
    });
  }

  render() {
    return (
      <Container>

        <ReactPaginate {...this.state.paginationConfig} />

        <Row xs={4} md={4}>
          {this.state.movies.results.map(movie =>
            <Movie {...movie} />
          )}
        </Row>

        <ReactPaginate {...this.state.paginationConfig} />

      </Container>
    );
  };
}

export default App;
