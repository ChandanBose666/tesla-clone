import React from 'react'
import styled from "styled-components";
import Section from '../section/Section';

const Home = () => {
  return (
    <Container>
       <Section 
       title="Model S"
       description="Order Online for Touchless Delivery"
       backgroundImg="model-s.jpg"
       leftBtnText="Custom Order"
       rightBtnText="Order from existing Inventory"
       />
       <Section 
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Order from existing Inventory"
       />
       <Section 
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Order from existing Inventory"
       />
       <Section 
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Order from existing Inventory"
       />
       <Section 
        title="Lowest Cost Solar Panel in America"
        description="Money Back Guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
       />
       <Section 
        title="Solar for New Roofs"
        description="Solar Roofs costs less than a New Roof"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
       />
       <Section 
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText="Order Now"
       />
    </Container>
  )
}

export default Home

const Container = styled.div`
height: 3000px;

`