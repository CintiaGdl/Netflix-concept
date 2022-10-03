import { useState, useEffect } from 'react';
import './App.css';
import { API } from './shared/service/api';

function App() {

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    
      API
      .get()
      .then((response) => {
          setMovie(response.data.results)
      })
      .catch((error) => {
          console.error(error);
      });
      
   
  }, []);

  return (
    <div className="App">
      <h1>Hello world</h1>
      {movie && movie
        .map(movie => {
          return (
            <div key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </div>
          )
        })

      }
    </div>
  );
}

export default App;
