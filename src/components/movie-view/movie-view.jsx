import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardGroup, Button } from 'react-bootstrap';

export class MovieView extends React.Component {

    render() {
        const { movie, onBackClick } = this.props;

        return (
            <>
                <Nav>
                    <Nav.Item>
                        <Nav.Link>Home</Nav.Link>
                    </Nav.Item>
                    <NavDropdown title="Profile" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">User Information</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Favorite Movies</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Item>
                        <Nav.Link>Logout</Nav.Link>
                    </Nav.Item>
                </Nav>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={movie.ImagePath} />
                        <Card.Body>
                            <Card.Title>{movie.Title}</Card.Title>
                            <Card.Text>Description: {movie.Description}</Card.Text>
                            <Card.Text>
                                Genre: {movie.Genre.Name} <br></br>
                                {movie.Genre.Description}
                            </Card.Text>
                            <Card.Text>
                                Director: {movie.Director.Name} <br></br>
                                {movie.Director.Bio}
                            </Card.Text>
                            <Button onClick={() => { onBackClick(null); }}>Back</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </>       
        );
    }
}

MovieView.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        ImagePath: PropTypes.string.isRequired,
        Genre: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Description: PropTypes.string.isRequired
        }),
        Director: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Bio: PropTypes.string.isRequired
        }),
    }).isRequired
}