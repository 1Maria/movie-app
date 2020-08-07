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
                this.searchMovies(this.props.query, page.selected + 1);
            },
            containerClassName: 'pagination justify-content-center',
            subContainerClassName: 'pages pagination',
            activeClassName: 'active',
            offset: 1
        }
    };

    componentDidMount() {
        if (this.props.query !== '') {
            this.searchMovies(this.props.query);
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.query !== this.props.query) {
            this.searchMovies(this.props.query);
        }
    }

    searchMovies = async (query, page = 1) => {
        const searchResponse = await fetch(`/movies/search?query=${encodeURIComponent(query)}&page=${page}`);
        const movieResults = await searchResponse.json();
        this.setState(prevState => {
            return {
                movies: movieResults,
                paginationConfig: {
                    ...prevState.paginationConfig,
                    offset: movieResults.page,
                    pageCount: movieResults.total_pages
                }
            }
        })
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Search</h1>
                <ReactPaginate {...this.state.paginationConfig} />

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
