import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movieTitles = [
    "Matrix",
    "Full Metal Jacket",
    "Oldboy",
    "Star Wars"
];

const movieImages = [
    "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPPdTaS4dDABC1YIkNj6LMg2IWSbD_ld4gTgQaRStUBYo-CnY_LqrZaHA",
    "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg",
    "https://screenrant.com/wp-content/uploads/2016/12/Star-Wars-Rebels-Darth-Vader.jpg"
];

class App extends Component {
    render() {
        return (
            <div className="App">
                <Movie title={movieTitles[0]} poster={movieImages[0]}/>
                <Movie title={movieTitles[1]} poster={movieImages[1]}/>
                <Movie title={movieTitles[2]} poster={movieImages[2]}/>
                <Movie title={movieTitles[3]} poster={movieImages[3]}/>
            </div>
        );
    }
}

export default App;
