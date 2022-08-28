import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from './context'

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
`

const Row1Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`
const Detail = styled.div`
  display: flex;
  justify-content: left;
  margin-right: 40px;
`
const IMG = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`
const IMAGE = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`
const Cont = styled.div`
  padding-right: 90px;
`
const TRemove = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
`
const Title = styled.h4`
  margin-bottom: 5px;
`
const Remove = styled.p`
  color: red;
  font-size: 0.7rem;
  cursor: pointer;
`
const QPTotal = styled.div`
  display: flex;
  align-items: center;
`
const Row2Qty = styled.div`
  margin-right: 20px;
`
const Row3UnitPrice = styled.div`
  margin-right: 20px;
`
const Row4SubTotal = styled.div`
  margin-right: 20px;
  color: red;
  font-size: 14px;
`
const Total = styled.div`
  display: flex;
  margin-top: 50px;
  padding: 15px 0px;
  font-weight: 700;
  justify-content: right;
`
const OrderItem = ({ displayOrder, index }) => {
  const { inCart, setInCart, newOrderArray, setNewOrderArray, newArray } =
    useGlobalContext()

  const handleRemove = () => {
    
    let array = inCart.slice()

    array.splice(index, 1)

    setNewOrderArray(array)
  }

  return (
    <MainWrap>
      <Row1Item>
        <Detail>
          <IMG>
            <IMAGE src={displayOrder.img}></IMAGE>
          </IMG>
          <Cont>
            <TRemove>
              <Title>{displayOrder.name}</Title>
              <Remove onClick={handleRemove}>remove</Remove>
            </TRemove>
          </Cont>
        </Detail>
        <Detail>
          <QPTotal>
            <Row2Qty>{displayOrder.count}</Row2Qty>
            <Row3UnitPrice>$ {displayOrder.price}.00</Row3UnitPrice>
            <Row4SubTotal>Cooking...</Row4SubTotal>
          </QPTotal>
        </Detail>
      </Row1Item>
    </MainWrap>
  )
}

export default OrderItem
