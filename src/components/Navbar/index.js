import React from 'react'
import { Bars, Nav, NavIcon, NavLink } from './NavbarElements';



const Navbar = ({toggle}) => {
      return (
            <Nav>
                 <NavLink to='/'>Home</NavLink> 
                 <NavLink to='/about'>About</NavLink> 
                 <NavLink to='/contact'>Contatc Us</NavLink> 
                 <NavLink to='/signin'>Sign In</NavLink> 
                 <NavIcon onClick={toggle}>
                       <p>Menu</p>
                       <Bars />
                 </NavIcon>
            </Nav>
      )
}

export default Navbar
