import React, { useState } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from './context'
import { foodsOfTwelve } from '../Components/data'

const CardContainer = styled.div`
  height: 280px;
  width: 230px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
  border: 1px solid #ddeae9;
  border-radius: 5px;
  margin-right: 100px;
  box-shadow: 2px 1px 8px -2px rgba(0, 0, 0, 0.58);
  -webkit-box-shadow: 2px 1px 8px -2px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 2px 1px 8px -2px rgba(0, 0, 0, 0.58);
`
const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const FoodImg = styled.img`
  margin-top: 50px;
  height: 100px;
  width: 100px;
  border-radius: 50%;
`
const Title = styled.h3`
  color: #00302e;
  margin: 20px 0px 5px 0px;
  font-size: 1rem;
`
const ParaText = styled.p`
  color: #00302e;
  font-weight: 400;
  text-align: center;
  width: fit-content;
  font-size: 0.6rem;
  width: 70%;
  margin-bottom: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
`
const PCsection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 30px;
  margin-bottom: 20px;
`
const PriceCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  font-weight: 600;
`
const Price = styled.p`
  color: #00302e;
  margin-right: 75px;
`
const Cart = styled.p`
  color: #059a3c;
  cursor: pointer;
  font-size: 0.75rem;
  text-align: left;
  &:hover {
    color: red;
    background-color: #e5e5e5;
    border-radius: 5px;
    padding: 1px 0px;
  }
`
const Over = styled.div`
  width: 100vh;
  height: 100vh;
  background-color: green;
`
function Card({ eachOfTwelve, index }) {
  const { toggle, openModal } = useGlobalContext()
  const handleClick = () => {
    openModal(index)
  }

  return (
    <CardContainer>
      <ContentWrap>
        <FoodImg src={eachOfTwelve.img}></FoodImg>
        <Title>{eachOfTwelve.name}</Title>
        <ParaText>{eachOfTwelve.desc}</ParaText>
      </ContentWrap>
      <PCsection>
        <PriceCart>
          <Price>${eachOfTwelve.price}</Price>
          <Cart onClick={handleClick}>Add to Cart</Cart>
        </PriceCart>
      </PCsection>
    </CardContainer>
  )
}

export default Card
