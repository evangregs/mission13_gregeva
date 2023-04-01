import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopBanner from './blaspheme';
import MovieList from './movies';

function App() {
  return (
    <div className="App">
      <TopBanner />
      <MovieList />
    </div>
  );
}

export default App;
