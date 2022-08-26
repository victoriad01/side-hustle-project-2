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
`
const Total = styled.div`
  display: flex;
  margin-top: 50px;
  padding: 15px 0px;
  font-weight: 700;
  justify-content: right;
`
const CartItem = ({ eachCartItem }) => {
  const { inCart, setInCart } = useGlobalContext()
  const handleRemove = (eachCartItem) => {
    // inCart.filter((item) => item.id !== eachCartItem.id)
    setInCart(inCart.filter((item) => item.id !== eachCartItem.id))
  }

  // const handleRemove = () => {
  //   inCart.splice(
  //     inCart.findIndex((item) => item._id === eachCartItem.id),
  //     1
  //   )
  // }

  return (
    <MainWrap>
      <Row1Item>
        <Detail>
          <IMG>
            <IMAGE src={eachCartItem.img}></IMAGE>
          </IMG>
          <Cont>
            <TRemove>
              <Title>{eachCartItem.name}</Title>
              <Remove onClick={handleRemove}>remove</Remove>
            </TRemove>
          </Cont>
        </Detail>
        <Detail>
          <QPTotal>
            <Row2Qty>3</Row2Qty>
            <Row3UnitPrice>$ {eachCartItem.price}.00</Row3UnitPrice>
            <Row4SubTotal>$ {eachCartItem.price * 3}.00</Row4SubTotal>
          </QPTotal>
        </Detail>
      </Row1Item>
    </MainWrap>
  )
}

export default CartItem
