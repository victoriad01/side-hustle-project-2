import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import ImageLe from '../Pictures/kitchen1.jpg'

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100wh;
`
const LoginContainerLeft = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: relative;
`

const LeftImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`
const Filter = styled.div`
  position: absolute;
  opacity: 0.3;
  background-color: #e2b887;
  z-index: 5;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`
const LoginContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
`
const Right = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const WelcomeText = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 27px;
  line-height: 33px;
  letter-spacing: 1.2;
  margin-bottom: 60px;
  color: #00302e;
  text-align: center;
`
const INPUT = styled.input`
  border: 0.5px solid #fbddbb;
  color: #00302e;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 40px;
  padding: 25px;
  width: 65%;
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
`
const PASSWORDINPUT = styled.div`
  border: 0.5px solid #fbddbb;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 40px;
  padding: 25px;
  width: 65%;
  display: flex;
  justify-content: space-between;
`
const PINPUT = styled.input`
  border: 0.5px solid #fbddbb;
  background-color: white;
  border-radius: 5px;
  border: none;
  background-color: none;
  width: 60%;
`
const SHOW = styled.p`
  color: lightgray;
  cursor: pointer;
`
const Button = styled.button`
  width: 75%;
  padding: 20px;
  color: #fbddbb;
  background-color: #00302e;
  margin-bottom: 20px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  border: none;
  letter-spacing: 0.12rem;
  &:hover {
    background-color: gray;
    color: white;
  }
`
const AfterButton = styled.div`
  display: flex;
  width: 77%;

  justify-content: left;
  align-content: left;
  background-color: red;
`
const Wrapper = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  color: #00302e;
`
const AfterButtonLeft = styled.div`
  cursor: pointer;
`
const AfterButtonRight = styled.div`
  cursor: pointer;
`

function Login() {
  const navigate = useNavigate()
  return (
    <>
      <LoginContainer>
        <LoginContainerLeft>
          <LeftImage src={ImageLe} />
          <Filter />
        </LoginContainerLeft>

        <LoginContainerRight>
          <Right>
            <WelcomeText>Welcome Back!</WelcomeText>
            <INPUT placeholder='Your Email address'></INPUT>
            <PASSWORDINPUT>
              <PINPUT placeholder='Your Password' type='password'></PINPUT>
              <SHOW>show</SHOW>
            </PASSWORDINPUT>
            <Button>LOGIN</Button>
            <AfterButton>
              <Wrapper>
                <AfterButtonLeft onClick={() => navigate('/signup')}>
                  Create an account
                </AfterButtonLeft>
                <AfterButtonRight>Forgot Passoword</AfterButtonRight>
              </Wrapper>
            </AfterButton>
          </Right>
        </LoginContainerRight>
      </LoginContainer>
    </>
  )
}

export default Login
