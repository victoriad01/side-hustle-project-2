import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import Google from '../Pictures/Download Badge/Google Play Badge.svg'
import Air from '../Pictures/Download Badge/App Store Badge.svg'
import FoodImg1 from '../Pictures/edited-pizza.jpg'
import { foodsOfTwelve } from '../Components/data'
import Card from '../Components/Card'
import Insta from '../Pictures/Download Badge/Social Icons.svg'
import Twitter from '../Pictures/Download Badge/Social Icons (1).svg'
import YouTube from '../Pictures/Download Badge/Social Icons (2).svg'

const HomeContainer = styled.div`
  background-color: #00302e;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`
const SectionTwo = styled.div`
  display: flex;
  margin-top: 120px;
  justify-content: space-between;
  align-items: center;
  padding: 30px 40px 20px 60px;
`
const SectionTwoLeft = styled.div`
  flex: 1;
`
const HText = styled.h2`
  font-weight: 500;
  font-size: 40px;
  line-height: 47px;
  color: #ffffff;
  width: 450px;
`
const Para = styled.p`
  margin-top: 40px;
  color: rgba(255, 255, 255, 0.74);
  font-weight: 200;
  font-size: 0.8rem;
  line-height: 1.6rem;
`
const GetItWrapper = styled.div`
  display: flex;
  width: 450px;
  margin-top: 40px;
  justify-content: left;
`
const GooglePlay = styled.img`
  cursor: pointer;
  margin-right: 20px;
`
const ApplePlay = styled.img`
  /* object-fit: contain; */
  cursor: pointer;
`
const SectionTwoRight = styled.div`
  flex: 1;
  display: flex;
  align-content: center;
  justify-content: center;
`
const FoodImg = styled.img`
  border-radius: 50%;
  height: 350px;
  width: 350px;
  object-fit: contain;
`
const FoodSection = styled.div`
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const FoodSectionHeader = styled.h2`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ParaFood = styled.p`
  margin-top: 20px;
  color: rgba(255, 255, 255, 0.74);
  font-weight: 200;
  width: 550px;
  text-align: center;
  font-size: 0.8rem;
  line-height: 1.6rem;
`
const ThreeFoodSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 80px;
  width: 80%;
  padding: 0px;
  margin-bottom: 120px;
`
const Update = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 40px 0px 40px 80px;
  margin-bottom: 80px;
`
const UpdateLeft = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  /* align-items: center; */
  justify-content: start;
`
const UpdateHeader = styled.h2`
  color: #fbddbb;
  text-align: left;
`
const UpdatePara = styled.p`
  color: rgba(255, 255, 255, 0.74);
  line-height: 1.6rem;
  font-size: 1rem;
  font-weight: 200;
  width: 420px;
  margin-top: 16px;
`
const UpdateRight = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`
const EmailInput = styled.input`
  border: 1px solid #b3b3b3;
  background-color: #f7f7f7;
  color: #b2b2b2;
  padding: 10px 15px;
  border-radius: 5px;
  margin-right: 5px;
  width: 220px;
`
const EmailButton = styled.button`
  background-color: #fbddbb;
  color: #00302e;
  padding: 10px 25px;
  border: none;
  font-weight: 500;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: gray;
    color: white;
  }
`
const Footer = styled.div`
  background-color: #0b0d17;
  color: white;
  display: flex;
  flex-direction: column;
`
const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 80px 0px 40px 0px;
`
const Company = styled.div``

const ULFooter = styled.div`
  list-style: none;
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  font-weight: 200;
  margin-bottom: 16px;
  color: rgba(255, 255, 255, 0.74);
  cursor: pointer;
`
const Support = styled.div``
const Legal = styled.div``
const InstallApp = styled.div``

const Social = styled.div`
  width: 100%;
  padding: 10px 0px;
  border-top: 0.2px solid rgba(111, 110, 110, 0.74); ;
`
const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const SocialText = styled.div`
  font-size: 0.8rem;
  font-weight: 200;
  padding-left: 120px;
  color: rgba(255, 255, 255, 0.74);
`
const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0px 80px 0px 40px;
`
const SocialIconsEach = styled.img`
  margin-right: 20px;
`

function Home() {
  return (
    <>
      <HomeContainer>
        <Navbar />
        <SectionTwo>
          <SectionTwoLeft>
            <HText>Order food anytime, anywhere</HText>
            <Para>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem eius voluptatibus similique, tempora ipsum
              quisquam. Voluptatibus similique, tempora ipsum.
            </Para>
            <GetItWrapper>
              <GooglePlay src={Google} />
              <ApplePlay src={Air} />
            </GetItWrapper>
          </SectionTwoLeft>
          <SectionTwoRight>
            <FoodImg src={FoodImg1} />
          </SectionTwoRight>
        </SectionTwo>
        <FoodSection>
          <FoodSectionHeader>Special Meals of the day!</FoodSectionHeader>
          <ParaFood>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            laborum voluptate excepturi labore omnis error.
          </ParaFood>
          <ThreeFoodSection>
            {foodsOfTwelve.slice(0, 3).map((eachEach) => {
              console.log(eachEach.id)
              return <Card eachEach={eachEach} key={eachEach.id} />
            })}
          </ThreeFoodSection>
        </FoodSection>
        <Update>
          <UpdateLeft>
            <UpdateHeader>Get notified when we update!</UpdateHeader>
            <UpdatePara>
              Get notified when we add new items to our specials menu, update
              our price list of have promos!
            </UpdatePara>
          </UpdateLeft>
          <UpdateRight>
            <EmailInput placeholder='gregphillips@gmail.com'></EmailInput>
            <EmailButton>Get notified</EmailButton>
          </UpdateRight>
        </Update>
        <Footer>
          <FooterWrapper>
            <Company>
              <ULFooter style={{ fontSize: '1rem', fontWeight: 400 }}>
                Company
              </ULFooter>
              <ULFooter>About Us</ULFooter>
              <ULFooter>Careers</ULFooter>
              <ULFooter>Contact Us</ULFooter>
            </Company>
            <Support>
              <ULFooter style={{ fontSize: '1rem', fontWeight: 400 }}>
                Support
              </ULFooter>
              <ULFooter>Help Center</ULFooter>
              <ULFooter>Safety Center</ULFooter>
            </Support>
            <Legal>
              <ULFooter style={{ fontSize: '1rem', fontWeight: 400 }}>
                Legal
              </ULFooter>
              <ULFooter>Cookies Policy</ULFooter>
              <ULFooter>Privacy Policy</ULFooter>
              <ULFooter>Terms of Service</ULFooter>
              <ULFooter>Dispute resolution</ULFooter>
            </Legal>
            <InstallApp>
              <ULFooter style={{ fontSize: '1rem', fontWeight: 400 }}>
                Install App
              </ULFooter>
              <ULFooter>
                <GooglePlay src={Google} />
              </ULFooter>
              <ULFooter>
                <ApplePlay src={Air} style={{ width: '135px' }} />
              </ULFooter>
            </InstallApp>
          </FooterWrapper>
          <Social>
            <SocialWrapper>
              <SocialText>© 2022 LILIES, All rights reserved</SocialText>
              <SocialIcons>
                <SocialIconsEach src={Insta} style={{ cursor: 'pointer' }} />
                <SocialIconsEach src={Twitter} style={{ cursor: 'pointer' }} />
                <SocialIconsEach src={YouTube} style={{ cursor: 'pointer' }} />
              </SocialIcons>
            </SocialWrapper>
          </Social>
        </Footer>
      </HomeContainer>
    </>
  )
}

export default Home
