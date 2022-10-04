import React from 'react'
import './Header.css';
import { NavLink } from "react-router-dom";


export default function Header() {
  return (
    <div className='navBar'>
        <div className="navBarLeft">
            <NavLink to='/'>
              <img src={require('../../assets/logo.png')} alt='logo'className='logo'></img>
            </NavLink>
            <NavLink to='/'>
              <button>Home</button>
            </NavLink>
            <NavLink to='TVShow'>
              <button>TV Show</button>
            </NavLink>
            <NavLink to='movies'>
              <button>Movies</button>
            </NavLink>
            <NavLink to='/trending'>
              <button>Trending</button>
            </NavLink>
            <NavLink to='myList'>
              <button>My list</button>
            </NavLink>
        </div>
        <div className="navBarRight">
            <button>Search</button>
            <button>Notification</button>
            <button>Profile</button>
        </div>
    </div>
  )
}
