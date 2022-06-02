import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom';
import { FaPizzaSlice } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import background from '../../images/6.2.jpg'; 

 export const Nav = styled.nav`
 background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url(${background});
 background-position: center;
 background-size: cover;
  // background: black;
  // color: #000;
  opacity: 0.8;
  height: 60px;
  display: flex;
  // justify-content: center;
  // font-weight:700;

  &:hover{
    transition: 0.2s ease-out;
    cursor: pointer;
    color: black; 
}
  
`;

export const NavLink = styled(Link)`

  color: #fff;
  font-size: 24px;
  font-family:  'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  display: flex;
  // align-items: center;
  text-decoration: none;
  cursor: pointer;
  margin-left: 50px;
  margin-top:14px;

  // @media screen and (max-width: 400px) {
  //   position: absolute;
  //   top: 10px;
  //   left: 25px;

    &:hover{
      // background: #ffc500;
      transition: 0.2s ease-out;
      cursor: pointer;
      color: #ffc500; 
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;

  p{
    transform: translate(-175%, 100%);
    font-weight: bold;
  }

  &:hover{
    // background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #ffc500; 
}
`;

export const Bars = styled(FaPizzaSlice)`
font-size: 2rem;
transform: translate(-50%, -15%);
`;

export const UserIcon = styled(FaUserAlt)`
font-size: 2rem;
transform: translate(-50%, -15%);
margin-top: 15px;
margin-left: 25px;
color: white;
`;