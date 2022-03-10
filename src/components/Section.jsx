import React from 'react'
import styled from 'styled-components'

export default function Section() {
  return (
    <Wrap>
        <ItemText>
          <h1>Model S</h1>
          <p>Order Online for Touchless Delivery</p>
        </ItemText>

        <Buttons>
          <ButtonGroup>
            <LeftButton>
              Custom Order
            </LeftButton>

            <RightButton>
              Existing Inventory
            </RightButton>
          </ButtonGroup>

          <DownArrow />
        </Buttons>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('/images/model-s.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;  
`

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px
`

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
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
  animation: animationArrow 2s ease-in-out infinite alternate;
  overflow-x: hidden;
`

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`