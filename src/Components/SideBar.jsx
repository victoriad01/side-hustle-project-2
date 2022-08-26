import { Home, AccountCircle, ViewStream, Bookmark } from '@mui/icons-material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import DLogo from '../Pictures/Download Badge/Logo.svg'

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #fbfbfb;
  height: 100vh;
  position: sticky;
  top: 0;
`
const Wrapper = styled.div``

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
const LogoImg = styled.img`
  margin-top: 100px;
  width: 125px;
  &:hover {
    width: 150px;
    transition: ease-in-out 1s;
  }
`
const Content = styled.div`
  padding: 20px;
  margin-top: 80px;
`
const Homepage = styled.div`
  display: flex;
  align-items: center;
  padding: 7px;
  background-color: transparent;
  color: gray;
  border-radius: 5px;
  gap: 10px;
  font-weight: 400;
  font-size: 1rem;
  line-height: 24px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    background-color: #efefef;
    color: #00302e;
    font-weight: 600;
  }
`
const SectionTitle = styled.p`
  font-size: 0.9rem;
`
const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px;
  background-color: transparent;
  border-radius: 5px;
  gap: 10px;
  font-weight: 400;
  font-size: 1rem;
  line-height: 24px;
  color: gray;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    background-color: #efefef;
    color: #00302e;
    font-weight: 600;
  }
`
const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const TextWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
`
const P = styled.div`
  background-color: #06e775;
  font-size: 0.8rem;
  font-weight: 700;
  text-align: left;
  padding: 0px 6px;
  border-radius: 5px;
  color: #00302e;
`
const P2 = styled.div`
  background-color: #f3c294;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0px 6px;
  border-radius: 5px;
  color: #00302e;
`

function SideBar() {
  const navigate = useNavigate()
  return (
    <MainContainer>
      <Wrapper>
        <Logo onClick={() => navigate('/')}>
          <LogoImg src={DLogo} />
        </Logo>
        <Content>
          <Homepage>
            <Home />
            <SectionTitle>Dashboard</SectionTitle>
          </Homepage>
          <Homepage>
            <AccountCircle />
            <SectionTitle>Your Profile</SectionTitle>
          </Homepage>
          <Profile>
            <ContentWrapper>
              <ViewStream />
              <SectionTitle>Orders</SectionTitle>
            </ContentWrapper>
            <TextWrap>
              <P>6</P>
            </TextWrap>
          </Profile>
          <Profile>
            <ContentWrapper>
              <Bookmark />
              <SectionTitle>Your Cart</SectionTitle>
            </ContentWrapper>
            <TextWrap>
              <P2>6</P2>
            </TextWrap>
          </Profile>
        </Content>
      </Wrapper>
    </MainContainer>
  )
}

export default SideBar
