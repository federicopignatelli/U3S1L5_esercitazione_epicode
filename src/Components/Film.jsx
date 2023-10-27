import React, { Component } from "react";
import { Row } from "react-bootstrap";
import SingleFilm from "./SingleFilm";
import Spinner from 'react-bootstrap/Spinner';


class Film extends Component {
    state = {
        movies: [],
        isLoading: true,
        isError: false,
    }

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=bc4b2484&s=${this.props.propId}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Network response was not ok');
                }
            })
            .then(data => {
                console.log(data);
                this.setState({ movies: data.Search, isLoading: false });
            })
            .catch(error => {
                console.error(error);
                this.setState({ isError: true, isLoading: false });
            });
    }

    render() {
        return (
            <div className="text-center">
                {this.state.isLoading ? (
                    <Spinner animation="border" role="status" variant="light">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                ) : this.state.isError ? (
                    <p>C'è stato un errore durante il recupero dei dati.</p>
                ) : (
                    <div>

                        <Row className="d-flex justify-content-evenly">
                            {this.state.movies.map(Film => (
                                <SingleFilm key={Film.imdbID} title={Film.Title} imgcover={Film.Poster} />
                            ))}
                        </Row>
                    </div>
                )}
            </div>
        );
    }
}

export default Film;