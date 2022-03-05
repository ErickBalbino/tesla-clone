import React from 'react'
import styled from 'styled-components'

export default function Section() {
  return (
    <Wrap>
        <ItemText>
          <h1>Model S</h1>
          <p>Order Online for Touchless Delivery</p>
        </ItemText>

        <ButtonGroup>
          <LeftButton>
            Custom Order
          </LeftButton>

          <RightButton>
            Existing Inventory
          </RightButton>
        </ButtonGroup>
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
`

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`