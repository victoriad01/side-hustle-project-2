import React from 'react'
import styled from 'styled-components'
import SideBar from '../Components/SideBar'
import Ariikemi from '../Pictures/Ariikemi.jpg'
import { foodsOfTwelve } from '../Components/data'
import CardWithPrice from '../Components/CardWithPrice'
import { useGlobalContext } from '../Components/context'
import { Close } from '@mui/icons-material/'
import CardItem from '../Components/CardItem'
import CartItem from '../Components/CartItem'

const MainContainer = styled.div`
  display: flex;
`
const LargeSide = styled.div`
  flex: 5;
  background-color: white;
  position: relative;
  height: 100vh;
  overflow-y: auto;
`
const LargeSideContainer = styled.div`
  padding: 100px 60px;
`
const SectionOne = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`
const WelcomeWrap = styled.div`
  color: #00302e;
`
const TextArea = styled.div``
const WelcomeHeader = styled.h3``
const WelcomeText = styled.p`
  font-size: 0.8rem;
  margin-top: 8px;
`
const ImageArea = styled.div`
  padding-right: 40px;
`
const IMAGE = styled.img`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  cursor: pointer;
  border: 3px solid #659492;
  box-shadow: 2px 1px 8px -2px rgba(0, 0, 0, 0.58);
  -webkit-box-shadow: 2px 1px 8px -2px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 2px 1px 8px -2px rgba(0, 0, 0, 0.58);
`
const SectionTwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const DOverLay = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
`
const OverLay = styled.div`
  background-color: #c4c4c4;
  opacity: 0.21;
  height: 100%;
  width: 60%;
`
const DOverLayWhite = styled.div`
  background-color: white;
  height: 100%;
  width: 50%;
`
const WhiteSideContainer = styled.div`
  padding: 30px 40px 80px 40px;
`
const CloseDiv = styled.div`
  display: flex;
  justify-content: right;
  margin-bottom: 50px;
`
const MainDiv = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
`
const Total = styled.div`
  display: flex;
  margin-top: 50px;
  padding: 15px 0px;
  font-weight: 700;
  justify-content: right;
`
const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`
const Button = styled.button`
  font-size: 0.8rem;
  font-weight: 700;
  background-color: #00302e;
  padding: 15px 20px;
  border: none;
  color: #f3c294;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: #f3c294;
    color: black;
  }
`

const CheckOutMain = styled.div`
  display: flex;
  flex-direction: column;
`
const Checkout = styled.h4`
  margin-bottom: 20px;
`
const Input = styled.input`
  margin-bottom: 20px;
  border: 0.5px solid #fbddbb;
  color: #00302e;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 40px;
  padding: 20px;
  width: 100%;
`

function Dashboard() {
  const {
    toggle,
    closeModal,
    cart,
    closeCart,
    inCart,
    closeOrder,
    order,
    payment,
    openPayment,
    closePayment,
  } = useGlobalContext()

  const handleCheckout = () => {
    closeCart()
    openPayment()
  }

  return (
    <MainContainer>
      <SideBar />
      <LargeSide>
        <LargeSideContainer>
          <SectionOne>
            <TextArea>
              <WelcomeWrap>
                <WelcomeHeader>Good morning, Ariikemi!</WelcomeHeader>
                <WelcomeText>
                  What delicious meal are you craving today?
                </WelcomeText>
              </WelcomeWrap>
            </TextArea>
            <ImageArea>
              <IMAGE src={Ariikemi} />
            </ImageArea>
          </SectionOne>
          <SectionTwo>
            <CardWrapper>
              {foodsOfTwelve.map((eachOfTwelve, index) => {
                return (
                  <CardWithPrice
                    eachOfTwelve={eachOfTwelve}
                    key={eachOfTwelve.id}
                    index={index}
                  />
                )
              })}
            </CardWrapper>
          </SectionTwo>
        </LargeSideContainer>
      </LargeSide>
      {toggle.modal ? (
        <DOverLay>
          <OverLay></OverLay>
          <DOverLayWhite>
            <WhiteSideContainer>
              <CloseDiv>
                <Close
                  onClick={closeModal}
                  style={{ color: '#00302e', cursor: 'pointer' }}
                />
              </CloseDiv>
              <MainDiv>
                <CardItem eachContent={foodsOfTwelve[toggle.item]} />
              </MainDiv>
            </WhiteSideContainer>
          </DOverLayWhite>
        </DOverLay>
      ) : (
        ''
      )}

      {cart.modal ? (
        <DOverLay>
          <OverLay></OverLay>
          <DOverLayWhite>
            <WhiteSideContainer>
              <CloseDiv>
                <Close
                  onClick={closeCart}
                  style={{ color: '#00302e', cursor: 'pointer' }}
                />
              </CloseDiv>
              {inCart.map((eachCartItem) => {
                return (
                  <>
                    <MainDiv>
                      <CartItem
                        eachCartItem={eachCartItem}
                        key={eachCartItem.id}
                      />
                    </MainDiv>
                  </>
                )
              })}

              <ButtonWrap>
                {inCart.length > 0 ? (
                  <Button onClick={handleCheckout}>Checkout</Button>
                ) : (
                  'No item in your Cart at the moment. Close to add some...'
                )}
              </ButtonWrap>
            </WhiteSideContainer>
          </DOverLayWhite>
        </DOverLay>
      ) : (
        ''
      )}

      {payment.modal ? (
        <DOverLay>
          <OverLay></OverLay>
          <DOverLayWhite>
            <WhiteSideContainer>
              <CloseDiv>
                <Close
                  onClick={closePayment}
                  style={{ color: '#00302e', cursor: 'pointer' }}
                />
              </CloseDiv>
              <MainDiv>
                <CheckOutMain>
                  <Checkout>Checkout</Checkout>
                  <Input placeholder='Card Number' />
                  <Input placeholder='Exp Date' />
                  <Input placeholder='CVV/CVV2' />
                  <Input placeholder='Card Pin' />
                  <Button>Make Payment</Button>
                </CheckOutMain>
              </MainDiv>
            </WhiteSideContainer>
          </DOverLayWhite>
        </DOverLay>
      ) : (
        ''
      )}

      {order.modal ? (
        <DOverLay>
          <OverLay></OverLay>
          <DOverLayWhite>
            <WhiteSideContainer>
              <CloseDiv>
                <Close
                  onClick={closeOrder}
                  style={{ color: '#00302e', cursor: 'pointer' }}
                />
              </CloseDiv>
              <MainDiv>
                <CheckOutMain>See Your Orders Status Here!</CheckOutMain>
              </MainDiv>
            </WhiteSideContainer>
          </DOverLayWhite>
        </DOverLay>
      ) : (
        ''
      )}
    </MainContainer>
  )
}

export default Dashboard
