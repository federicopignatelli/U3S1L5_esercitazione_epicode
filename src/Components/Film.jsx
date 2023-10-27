import React, { Component } from "react";
import { Row } from "react-bootstrap";
import SingleFilm from "./SingleFilm";


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
            <div>
                {this.state.isLoading ? (
                    <p>Caricamento...</p>
                ) : this.state.isError ? (
                    <p>C'è stato un errore durante il recupero dei dati.</p>
                ) : (
                    <div>

                        <Row>
                            {this.state.movies.map(Film => (
                                <SingleFilm key={Film.imdbID} title={Film.Title} poster={Film.Poster} />
                            ))}
                        </Row>
                    </div>
                )}
            </div>
        );
    }
}

export default Film;