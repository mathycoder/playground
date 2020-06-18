import React from 'react'
import styled from 'styled-components'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import linkedin from '../../assets/images/linkedin.png'
import twitter from '../../assets/images/twitter.png'

const HamburgerMenu = () => {
  return (
    <Wrapper>
      <HamburgerDashes>
        <Dash />
        <MiddleDash />
        <Dash />
      </HamburgerDashes>
      <Titles>
        <Title>WHAT WE DO</Title>
        <Title>FEATURES</Title>
        <Title>OUR CLIENTS</Title>
        <Title>CONTACT US</Title>
      </Titles>
      <Policies>
        <Policy>COOKIE POLICY</Policy>
        <Policy>TERMS & CONDITIONS</Policy>
        <Policy>PRIVACY POLICY</Policy>
        <Policy>CAREERS</Policy>
      </Policies>
      <Images>
        <Image src={facebook} alt="facebook-logo" />
        <Image src={instagram} alt="instagram-logo" />
        <Image src={linkedin} alt="linkedin-logo" />
        <BiggerImage src={twitter} alt="twitter-logo" />
      </Images>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #300852;
  font-family: Rubik;
  color: white;
  width: 110px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 100%;
  padding: 20px 25px;
  border: 3px solid black;
  border-right: none;
  height: 95vh;
`;

const HamburgerDashes = styled.div`
  height: 48px;
  width: 40px;
  margin-bottom: 45px;
`;

const Dash = styled.div`
  width: 36px;
  height: 4px;
  border-radius: 5px;
  background-color: white;
  margin: 9px 0;
  margin-left: 3px;
`;

const MiddleDash = styled.div`
  width: 36px;
  height: 4px;
  border-radius: 5px;
  background-color: white;
  margin: 9px 0;
`;

const Titles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
  max-height: 260px;
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-size: 16.5px;
  font-weight: 500;
  margin: 10px 0;
  text-align: right;
`;

const Policies = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: auto;
  flex: 1;
  max-height: 160px;
`;

const Policy = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin: 5px 0;
  text-align: right;
`;

const Images = styled.div`
  display: flex;
  width: 102%;
  justify-content: space-between;
  margin: 10px 0;
`;

const Image = styled.img`
  width: 21px;
  object-fit: contain;
`;

const BiggerImage = styled.img`
  width: 25px;
  object-fit: contain;
`;

export default HamburgerMenu
