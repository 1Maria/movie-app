import React from 'react';
import { Container } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Nav from './Navigation';
import CurrentlyPlaying from './pages/CurrentlyPlaying';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


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
      containerClassName: 'pagination justify-content-center',
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
      <Router>
        <Nav></Nav>
        <Container>

          <ReactPaginate {...this.state.paginationConfig} />

          <Switch>
            <Route path="/">
              <CurrentlyPlaying movies={this.state.movies} />
            </Route>
            <Route path="/currently_playing" default>
              <CurrentlyPlaying movies={this.state.movies} />
            </Route>
          </Switch>

          <ReactPaginate {...this.state.paginationConfig} />

        </Container>
      </Router>
    );
  };
}

export default App;
