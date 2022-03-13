import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

export default function Section({title, description, backgroundImg, btnTextLeft, btnTextRight}) {
  return (
    <Wrap bgImage={backgroundImg}>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>

        <Buttons>
          <ButtonGroup>
            <LeftButton>
              {btnTextLeft}  
            </LeftButton>

            {btnTextRight && 
            (<RightButton>
              {btnTextRight}
            </RightButton>)}
          </ButtonGroup>

          <DownArrow />
        </Buttons>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;  
  background-image: ${props => `url('/images/${props.bgImage}')`};
`

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  
  @media (max-width: 768px){
    flex-direction: column;
  }
`

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.9);
  height: 40px;
  width: 256px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 0.95rem;
  cursor: pointer;
  margin: 8px;
`

const RightButton = styled(LeftButton)`
  background-color: #fff;
  color: #000;
`

const DownArrow = styled.div`
  width: 40px;
  height: 40px;
  background-image: url('/images/down-arrow.svg');
  background-size: cover;
  background-position: center;
  margin-top: 40px;
  margin-bottom: 20px;
  animation: animationArrow 1.5s ease-in-out infinite alternate;
  overflow-x: hidden;
`

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`