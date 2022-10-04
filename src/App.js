import './App.css';
import Header from './components/header/Header';
import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TrendingPage from './pages/TrendingPage';
import TVShowPage from './pages/TVShowPage';
import MoviesPage from './pages/MoviesPage';
import MyListPage from './pages/MyListPage';


function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/TVShow' element={<TVShowPage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/trending' element={<TrendingPage />} />
          <Route path='/myList' element={<MyListPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
