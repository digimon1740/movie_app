import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movies = [
    {
        title: "Matrix",
        poster: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
    },
    {
        title: "Full Metal Jacket",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPPdTaS4dDABC1YIkNj6LMg2IWSbD_ld4gTgQaRStUBYo-CnY_LqrZaHA",
    },
    {
        title: "Oldboy",
        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg",
    },
    {
        title: "Star Wars",
        poster: "https://screenrant.com/wp-content/uploads/2016/12/Star-Wars-Rebels-Darth-Vader.jpg"
    }
];

class App extends Component {
    render() {
        return (
            <div className="App">
                {movies.map(movie => {
                    return <Movie title={movie.title} poster={movie.poster}/>;
                })}
            </div>
        );
    }
}

export default App;
