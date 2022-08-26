import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  height: 350px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const FoodImg = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 50%;
`
const Title = styled.h3`
  color: #fbddbb;
  margin: 20px 0px 10px 0px;
`
const ParaText = styled.p`
  color: white;
  font-weight: 200;
  text-align: center;
  width: fit-content;
  font-size: 0.8rem;
  line-height: 1.6rem;
`

function Card({ eachEach }) {
  return (
    <CardContainer>
      <FoodImg src={eachEach.img}></FoodImg>
      <Title>{eachEach.name}</Title>
      <ParaText>{eachEach.desc}</ParaText>
    </CardContainer>
  )
}

export default Card
