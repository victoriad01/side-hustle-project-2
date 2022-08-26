import React from 'react'
import styled from 'styled-components'
import SideBar from '../Components/SideBar'
import Ariikemi from '../Pictures/Ariikemi.jpg'
import { foodsOfTwelve } from '../Components/data'
import CardWithPrice from '../Components/CardWithPrice'
import { useGlobalContext } from '../Components/context'
import { Close } from '@mui/icons-material/'
import CardItem from '../Components/CardItem'

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
  opacity: none;
`
const DOverLayWhite = styled.div`
  background-color: white;
  height: 100%;
  width: 40%;
  opacity: none;
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
  justify-content: center;
`
function Dashboard() {
  const { toggle, openModal, closeModal } = useGlobalContext()
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
    </MainContainer>
  )
}

export default Dashboard
