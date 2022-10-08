import React from 'react'
import { stack as Menu } from 'react-burger-menu'

export default function HamburguerMenu() {
  return (
    // <Menu >
      <Menu customBurgerIcon={<img src={require('../../../assets/logo.png')} alt='logo' className='logo'></img>} >
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/TVShow">TV Show</a>
        <a id="contact" className="menu-item" href="/movies">Movies</a>
        <a id="contact" className="trending" href="/movies">Trending</a>
        <a id="contact" className="menu-item" href="/myList">My list</a>
    </Menu>
  )
}
