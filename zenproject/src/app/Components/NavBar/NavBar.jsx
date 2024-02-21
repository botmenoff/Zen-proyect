import React from 'react'
import NavBarcss from './NavBar.css'

export const NavBar = () => {
  return (
    <nav id='navBar'>
      <a className='navBar-component'><p>Tareas</p></a>
      <a className='navBar-component'><p>Calendario</p></a>
      <a className='navBar-component'><p>Playlist</p></a>
      <a className='navBar-component'><p>Graficos</p></a>
      <a className='navBar-component'><img src=''></img></a> {/* Poner el avatar del usuario */}
    </nav>
  )
}
