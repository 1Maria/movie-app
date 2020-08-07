import React from 'react';
import { Row } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import Movie from '../Movie';

class CurrentlyPlaying extends React.Component {
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
                window.scrollTo(0,0);
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
        const movieResponse = await fetch(`/movies/currently_playing?page=${page}`);
        const currentlyPlayingMovies = await movieResponse.json();

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
            <div>
                <h1 className="text-center">Currently Playing Movies</h1>

                <Row xs={4} md={4}>
                    {this.state.movies.results.map(movie =>
                        <Movie
                            {...movie}
                            key={movie.id}
                        />
                    )}
                </Row>

                <ReactPaginate {...this.state.paginationConfig} />
            </div>
        )
    }
}

export default CurrentlyPlaying;