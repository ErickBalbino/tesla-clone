import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'

import Section from './Section'

export default function Home() {
  return (
    <Container>
      <Section 
        title="Model S" 
        description="Order Online for Touchless Delivery" 
        backgroundImg="model-s.jpg"
        btnTextLeft="Custom Order"
        btnTextRight="Existing Inventory"
      />

      <Section 
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        btnTextLeft="Custom Order"
        btnTextRight="Existing Inventory"
      />

      <Section 
        title="Model 3"
        description="Order Online for Touchless Delivery" 
        backgroundImg="model-3.jpg"
        btnTextLeft="Custom Order"
        btnTextRight="Existing Inventory"
      />

      <Section 
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        btnTextLeft="Custom Order"
        btnTextRight="Existing Inventory"
      />

      <Section
        title="Lowest Cost Solar Panels In America"
        description="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        btnTextLeft="Order Now"
        btnTextRight="Learn More"
      />

      <Section 
        title="Solar for New Roofs" 
        description="Solar Roof Cost Less Than a New Roof Plus Solar Panels"
        backgroundImg="solar-roof.jpg"
        btnTextLeft="Order Now"
        btnTextRight="Learn More
        "
      />

      <Section 
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        btnTextLeft="Shop Now"
      />
      
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
`