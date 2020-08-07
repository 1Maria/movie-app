import React from 'react';

const Movie = (props) => {
    return (
        <div>
            { props.title }
            { props.overview }
            { props.release_date }
            { props.vote_average }
            { props.poster_path }
        </div>
    )
}

export default Movie;