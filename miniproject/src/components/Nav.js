import React, { Component } from 'react'

import { Link, NavLink } from 'react-router-dom';

class Nav extends Component {
  render(){
    return (
      <nav className='navtop'>
        <h2>넥스트리가즈아</h2>
        <ul className='nav-links'>
          <li><NavLink exact to='/'>Main</NavLink></li>
          <li><NavLink to='/champions'>Champions</NavLink></li>
        </ul>
      </nav>
    )
  }
}

export default Nav;