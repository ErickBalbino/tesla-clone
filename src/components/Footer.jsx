import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  return (
    <Container>
        <ul>
            <a href="#">Tesla @2022</a>
            <a href="#">Privacy legal</a>
            <a href="#">Contact</a>
            <a href="#">Carrers</a>
            <a href="#">News</a>
            <a href="#">Engage</a>
            <a href="#">Locations</a>
        </ul>
    </Container>
  )
}

const Container = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;

  a{
    font-size: 0.9rem;
    padding: 0px 10px;
    color: #222;
    transition: 0.2s ease-in-out color;
  }

  a:hover{
    color: #000;
  }

  @media (max-width: 768px) {
    ul{
      display: flex;
      flex-direction: column;
      text-align: center;
    }

    a{
      padding: 5px 0px;
    }
  }
`
