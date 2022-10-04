import React from 'react'
import './Header.css';

export default function Header() {
  return (
    <div className='navBar'>
        <div className="navBarLeft">
            <img src={require('../../assets/logo.png')} alt='logo'className='logo'></img>
            <button>Home</button>
            <button>TV Show</button>
            <button>Movies</button>
            <button>Trending</button>
            <button>My list</button>
        </div>
        <div className="navBarRight">
            <button>Search</button>
            <button>Notification</button>
            <button>Profile</button>
        </div>
    </div>
  )
}
