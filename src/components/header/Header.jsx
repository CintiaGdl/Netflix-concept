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
            <NavLink to='/'>Home</NavLink>
            <NavLink to='TVShow'>TV Show</NavLink>
            <NavLink to='movies'>Movies</NavLink>
            <NavLink to='/trending'>Trending</NavLink>
            <NavLink to='myList'>My list</NavLink>
        </div>
        <div className="navBarRight">
            <button>Search</button>
            <button>Notification</button>
            <button>Profile</button>
        </div>
    </div>
  )
}
