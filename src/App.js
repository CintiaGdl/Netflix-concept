import './App.css';
import Header from './components/header/Header';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TrendingPage from './pages/TrendingPage';
import TVShowPage from './pages/TVShowPage';
import MoviesPage from './pages/MoviesPage';
import MyListPage from './pages/MyListPage';
import { ApiProvider } from './shared/context/ApiContext';
import SearchPage from './pages/SearchPage';
import PlayPage from './pages/PlayPage';
import HamburguerMenu from './shared/component/menu/HamburguerMenu';


function App() {

  return (
    <div className="App">
      <ApiProvider>

        <Router>

          <Header />

          <Routes>

            <Route path='/' element={<HomePage />} />
            <Route path='/TVShow' element={<TVShowPage />} />
            <Route path='/movies' element={<MoviesPage />} />
            <Route path='/trending' element={<TrendingPage />} />
            <Route path='/myList' element={<MyListPage />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/play' element={<PlayPage />} />
            
            <Route path='/menu' element={<HamburguerMenu />} />

          </Routes>

        </Router>
        
      </ApiProvider>
    </div>
  );
}

export default App;
