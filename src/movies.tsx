import { useState } from 'react';
import data from './MovieData.json';

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
            </tr>
          </thead>
          <tbody>
            {MD.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="btn btn-primary" onClick={addMovie}></button>
    </>
  );
}

export default MovieList;
