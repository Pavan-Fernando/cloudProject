import React from 'react'
import { Bars, Nav, NavIcon, NavLink, UserIcon } from './NavbarElements';
import { useState } from 'react';
import Gmail from '../../gmail';



const Navbar = ({toggle}) => {

      return (
            <Nav>
                 <NavLink to='/'>Home</NavLink> 
                 <NavLink to='/about'>About</NavLink> 
                 <NavLink to='/contact'>Contatc Us</NavLink> 
                 <NavLink to='/signin'>Sign In</NavLink> 
                 <UserIcon />
                 <div className="navTopic">
                       <h1>Pizza Zone</h1>
                 </div>
                 <NavIcon onClick={toggle}>
                       <p>Menu</p>
                       <Bars />
                 </NavIcon>
            </Nav>
      )
}

export default Navbar
