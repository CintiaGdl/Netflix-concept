import React, { useContext, useEffect, useState } from 'react'
import './Header.css';
import { NavLink, useNavigate } from "react-router-dom";
import { ApiContext } from '../../shared/context/ApiContext';
import HamburguerMenu from '../../shared/component/menu/HamburguerMenu';


export default function Header() {


  const [stateMenu, setStateMenu] = useState();

  useEffect(() => {

    const handleMenu = () => {
      if (window.innerWidth < 900) {
        setStateMenu(true)
      } else {
        setStateMenu(false)
      }
    }
    window.addEventListener('resize', handleMenu);
    return () => {
      window.removeEventListener('resize', handleMenu);
    };
  }, []);


  const { setSearch } = useContext(ApiContext);

  const navigate = useNavigate();

  const inputSearch = (event) => {

    if (event.key === 'Enter') {
      if (event.target.value === '') {
        alert('Please you need to write something to search')
      } else {
        setSearch(() => event.target.value)
        navigate('/search')
        event.target.value = ''
      }
    }
  }

  if (stateMenu) {
    return (
      <div className='navBar'>
        <HamburguerMenu />
        <input type='text' onKeyDown={inputSearch} placeholder='Search...'></input>
      </div>
    )

  } else {

    return (
      <div className='navBar'>
        <div className="navBarLeft">
          <NavLink to='/'>
            <img src={require('../../assets/logo.png')} alt='logo' className='logo'></img>
          </NavLink>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='TVShow'>TV Show</NavLink>
          <NavLink to='movies'>Movies</NavLink>
          <NavLink to='/trending'>Trending</NavLink>
          <NavLink to='myList'>My list</NavLink>
        </div>
        <div className="navBarRight">
          <input type='text' onKeyDown={inputSearch} placeholder='Search...'></input>
          <button>Notification</button>
          <button>Profile</button>
        </div>
      </div>
    )
  }

}
