import React, { useContext } from 'react'
import './Header.css';
import { NavLink, useNavigate } from "react-router-dom";
import { ApiContext } from '../../shared/context/ApiContext';


export default function Header() {


  const {setSearch} = useContext(ApiContext);

  const navigate = useNavigate();

  const inputSearch = (event) => {
   
    if (event.key === 'Enter') {
      setSearch(() => event.target.value)
      navigate('/search')
    }
    
  }

  return (
    <div className='navBar'>
        <div className="navBarLeft">
            <NavLink to='/'>
              <img src={require('../../assets/logo.png')} alt='logo'className='logo'></img>
            </NavLink>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='TVShow'>TV Show</NavLink>
            <NavLink to='movies'>Movies</NavLink>
            <NavLink to='/trending'>Trending</NavLink>
            <NavLink to='myList'>My list</NavLink>
        </div>
        <div className="navBarRight">
            <input type='text' onKeyDown={inputSearch}></input>
            <button>Notification</button>
            <button>Profile</button>
        </div>
    </div>
  )
}
