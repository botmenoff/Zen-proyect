import React from 'react'
import NavBarcss from './NavBar.css'

export const NavBar = () => {
  return (
    <nav id='navBar'>
      <div className='navBar-component'><p>Tareas</p></div>
      <div className='navBar-component'><p>Calendario</p></div>
      <div className='navBar-component'><p>Playlist</p></div>
      <div className='navBar-component'><p>Graficos</p></div>
      <div className='navBar-component'><img src=''></img></div>
    </nav>
  )
}
