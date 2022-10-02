import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import { API } from './shared/service/api';

function App() {

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    
            
      axios
      .get('https://api.themoviedb.org/4/list/1?api_key=8a0710661d3c2195ca561e0323dd91f5')
      .then((response) => {
          console.log(response);
          setMovie(response.data.results)
      })
      .catch((error) => {
          console.error(error);
      });
      
  
   
  }, []);

  console.log(movie)

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
