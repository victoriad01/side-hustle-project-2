import React from 'react'
import styled from 'styled-components'
import { Add, Remove } from '@mui/icons-material/'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const ContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const IMAGE = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  border-radius: 50%;
`
const Title = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  color: #00302e;
`
const Para = styled.p`
  text-align: center;
  margin-top: 20px;
  color: #00302e;
  width: 90%;
  font-size: 0.75rem;
`
const PriceSection = styled.div`
  margin-bottom: 20px;
`
const PriceSectionArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  font-weight: 600;
`
const Price = styled.p``
const Time = styled.p``
const Qua = styled.p``

const LastSection = styled.div``

const LastSectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`
const QuaIncDec = styled.div``

const QuaIncDecWrap = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 1.4rem;
  color: #00302e;
`
const QuaIncDecMinus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3c294;
  padding: 5px 3px;
  cursor: pointer;
  &:hover {
    background-color: #00302e;
    color: white;
  }
`
const QuaIncNum = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 10px;
`
const QuaIncPlus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3c294;
  padding: 5px 3px;
  cursor: pointer;
  &:hover {
    background-color: #00302e;
    color: white;
  }
`

const BUTTONWRAP = styled.div``

const BUTTON = styled.button`
  font-size: 0.8rem;
  font-weight: 700;
  background-color: #00302e;
  padding: 15px 20px;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #f3c294;
    color: black;
  }
`
const CardItem = ({ eachContent }) => {
  const { name, img, desc, price, time, avai } = eachContent
  return (
    <Container>
      <ContainerItem>
        <IMAGE src={img} />
        <Title>{name}</Title>
        <Para>{desc}</Para>
      </ContainerItem>
      <PriceSection>
        <PriceSectionArea>
          <Price>$ {price}.00</Price>
          <Time>{time}</Time>
          <Qua>{avai}</Qua>
        </PriceSectionArea>
      </PriceSection>
      <LastSection>
        <LastSectionWrapper>
          <QuaIncDec>
            <QuaIncDecWrap>
              <QuaIncDecMinus>
                <Remove />
              </QuaIncDecMinus>
              <QuaIncNum>3</QuaIncNum>
              <QuaIncPlus>
                <Add />
              </QuaIncPlus>
            </QuaIncDecWrap>
          </QuaIncDec>
          <BUTTONWRAP>
            <BUTTON>Add to cart</BUTTON>
          </BUTTONWRAP>
        </LastSectionWrapper>
      </LastSection>
    </Container>
  )
}

export default CardItem
