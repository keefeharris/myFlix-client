import React from 'react';
import axios from 'axios';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { RegisterView } from '../registration-view/registration-view';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import Container from 'react-bootstrap/container';

class MainView extends React.Component {

    constructor() {
        super();
        this.state = {
            movies: [],
            selectedMovie: null,
            user: null,
            register: false
        };
    }

    componentDidMount() {
        axios.get('https://kwhjmoviesdb.herokuapp.com/movies')
            .then(response => {
                this.setState({
                    movies: response.data
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    setSelectedMovie(newSelectedMovie) {
        this.setState({
            selectedMovie: newSelectedMovie
        });
    }

    onLoggedIn(user) {
        this.setState({
            user
        });
    }

    onOpenRegisterPage() {
        this.setState({
            register: true
        });
    }

    onRegistered() {
        this.setState({
            register: false
        });
    }

    render() {
        const { movies, selectedMovie, user, register } = this.state;
        //selectedMovie state is used to render <MovieView/>

        if (register) return <RegisterView onRegistered={user => this.onRegistered(user)} />

        if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} onOpenRegisterPage={() => this.onOpenRegisterPage()} />

        if (movies.length === 0) return <div className="main-view" />;

        return (
            <div className="main-view">
                {selectedMovie
                    ? (
                        <Row>
                            <Col>
                                <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
                            </Col>
                        </Row>
                    )
                    : (
                        <Row className="justify-content-md-center">
                            {movies.map(movie => (
                                <Col md={1}>
                                    <MovieCard key={movie._id} movie={movie} onMovieClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
                                </Col>
                            ))}
                        </Row>
                    )
                }
            </div>
        );
    }
}

export default MainView;