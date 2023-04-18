import React from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './landing';
import MovieList from './movies';
import APIMovieList from './movie/MovieList';

function App() {
  return (
    <div className="App">
      <Landing />
      <APIMovieList />
    </div>
  );
}

export default App;
