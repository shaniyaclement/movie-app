import React, {useEffect, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=9cb76cd0`;
    
    const response = await fetch(url);
    const responseJson = await response.json();

    if(responseJson.search) {
      setMovies(responseJson.Search);
    }
  }; // end getMovieRequest()

  useEffect(()=>{
    getMovieRequest(searchValue);
  }, [searchValue]); // end useEffect

  return (
    <div className= 'container-fluid movie-app'>
      <div className='row d-flex align-item-center mt-4 mb-4'>
        <MovieListHeading heading='Movies'/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className='row'>
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;
