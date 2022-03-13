import React, { useState } from 'react'
import styled from 'styled-components'
import { FaBars, FaWindowMinimize } from 'react-icons/fa'

import logo from '../assets/images/logo.svg'

export default function Header() {

  const[openBurgerNav, setOpenBurgerNav] = useState(false)

  return (
    <Container>

      <a>
        <img src={logo} alt="logo tesla" />
      </a>

      <Menu>
        <li><a href="#">Model S</a></li>
        <li><a href="#">Model 3</a></li>
        <li><a href="#">Model X</a></li>
        <li><a href="#">Model Y</a></li>
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <FaBars className='open-burgernav' onClick={() => {setOpenBurgerNav(true)}}/>
      </RightMenu>

      {
        openBurgerNav && (
          <BurgerNav>
            <FaWindowMinimize className='close-burgernav' onClick={() => {setOpenBurgerNav(false)}}/>
            <ul>
              <a href="">Existing Inventory</a>
              <a href="">Used Inventory</a>
              <a href="">Trade-in</a>
              <a href="">Cybertruck</a>
              <a href="">Roadster</a>
              <a href="">Semi</a>
              <a href="">Existing Inventory</a>
            </ul>
          </BurgerNav>
        )
      }

    </Container>
  )
}

const Container = styled.div`
  min-height: 60px;
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  z-index: 1;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  padding-left: 50px;

  li {
    font-weight: 600;
    text-transform: uppercase;
    flex-wrap: no-wrap;
    padding: 0px 15px;
  }

  @media(max-width: 768px){
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a, 
  .open-burgernav{
    font-size: 1.05rem;
  }

  a{
    padding: 0px 5px;
  }

  .open-burgernav{
    margin-left: 10px;
    font-size: 1.1rem;
    cursor: pointer;
  }
`


const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  color: #000;
  width: 20%;
  z-index: 10;
  filter: drop-shadow(4px 4px 10px #aaa);

  ul{
    display: flex;
    flex-direction: column;
    padding: 50px 0px;
  }

  ul a{
    display: flex;
    justify-content: left;
    align-items: center;
    height: 50px;
    padding: 0px 15px;
    box-sizing: border-box;
    color: #3d3d3d;
    transition: 0.2s ease-in-out color;
    border-bottom: 1px solid #ddd;
  }

  ul a:hover{
    color: #000;
  }

  @media (max-width: 768px) {
    width: 50%;
    z-index: 222; 
  }

  .close-burgernav{
    position:fixed;
    top: 10px;
    right: 20px;
    cursor: pointer;
  }
`

