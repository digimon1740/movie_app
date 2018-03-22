import React, {Component} from 'react';
import './Movie.css';

class Movie extends Component {
    render() {
        return (
            <div>
                <MoviePoster/>
                <h1>hello this is a movie</h1>
            </div>
        )
    }
}

class MoviePoster extends Component {
    render() {
        return (
            <img
                src="https://vignette.wikia.nocookie.net/thehungergames/images/3/3b/The-Hunger-Games_-Mockingjay-Pt.-1-Original-Motion-Picture-Soundtrack-608x608.jpg/revision/latest?cb=20141021111818"/>
        )
    }
}

export default Movie;