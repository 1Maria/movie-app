import React from 'react';
import { Card } from 'react-bootstrap';

const Movie = (props) => {
    return (
        <Card>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.overview}</Card.Text>
                <Card.Text>Release Date: {props.release_date}</Card.Text>
                <Card.Text>Vote Average: {props.vote_average}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Movie;