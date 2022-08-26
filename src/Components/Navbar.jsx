import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import TopLogo from '../Pictures/Group 15.svg'

const Wrap = styled.div`
  padding: 40px 40px 20px 60px;

  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Left = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`
const Logo = styled.img`
  height: 35px;
  cursor: pointer;
`
const Right = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
`

const UL = styled.ul`
  display: flex;
  list-style: none;
  display: flex;
  align-items: center;
`
const LI = styled.li`
  padding-right: 20px;
  cursor: pointer;
`
const Button = styled.button`
  background-color: #e2b887;
  border: none;
  color: #00302e;
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 5px 18px;
  cursor: pointer;
  font-weight: 500;
  border-radius: 5px;
`

function Navbar() {
  const navigate = useNavigate()
  return (
    <Wrap>
      <Left>
        <Logo src={TopLogo} onClick={() => navigate('/')} />
      </Left>
      <Right>
        <UL>
          <LI onClick={() => navigate('/dashboard')}>Dashboard</LI>
          <LI onClick={() => navigate('/login')}>Login</LI>
          <LI>
            <Button onClick={() => navigate('/signup')}>Sign Up</Button>
          </LI>
        </UL>
      </Right>
    </Wrap>
  )
}

export default Navbar
