import React from "react";
import { Row } from 'react-bootstrap';
import Movie from "../Movie";

const CurrentlyPlaying = (props) => {
    return (
        <Row xs={4} md={4}>
            {props.movies.results.map(movie =>
                <Movie {...movie} />
            )}
        </Row>
    )
}

export default CurrentlyPlaying;