import { useState } from 'react';
import data from './MovieData.json';
import Navbar from './navbar';

const MD = data.MovieData;

function MovieList() {
  const [listOfMovies, setListOfMovies] = useState(MD);
  const addMovie = () => {
    setListOfMovies([
      ...MD,
      {
        Category: 'Action/Adventure',
        Title: 'Batman',
        Year: 1989,
        Director: 'Tim Burton',
        Rating: 'PG-13',
        Edited: 'No',
      },
    ]);
  };

  return (
    <>
      <div>
        <Navbar />
        <h3>Joel Hilton's Movie Collection</h3>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {listOfMovies.map((m) => (
              <tr key={m.Title}>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="btn btn-primary" onClick={addMovie}>
        Add Batman!
      </button>
    </>
  );
}

export default MovieList;
