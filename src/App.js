import React, {useEffect, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?s=avengers&apikey=9cb76cd0";
    
    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
    setMovies(responseJson.Search);
  }; // end getMovieRequest()

  useEffect(()=>{
    getMovieRequest();
  }, []); // end useEffect

  return (
    <div className= 'container-fluid movie-app'>
      <div className='row'>
        <MovieListHeading heading='Movies'/>
      </div>
      <div className='row'>
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;
