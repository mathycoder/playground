import React from 'react'
import styled from 'styled-components'
import facebook from '../../assets/images/facebook.png'
import facebookHover from '../../assets/images/facebook-hover.png'
import instagram from '../../assets/images/instagram.png'
import instagramHover from '../../assets/images/instagram-hover.png'
import linkedin from '../../assets/images/linkedin.png'
import linkedinHover from '../../assets/images/linkedin-hover.png'
import twitter from '../../assets/images/twitter.png'
import twitterHover from '../../assets/images/twitter-hover.png'

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
      <SocialIcons>
        <FacebookImage />
        <InstagramImage />
        <LinkedinImage />
        <TwitterImage />
      </SocialIcons>
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

  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */
`;

const HamburgerDashes = styled.div`
  height: 48px;
  width: 40px;
  margin-bottom: 45px;

  &:hover {
    cursor: pointer;
  }
`;

// #34E0B3

const Dash = styled.div`
  width: 36px;
  height: 4px;
  border-radius: 5px;
  background-color: white;
  margin: 9px 0;
  margin-left: 3px;
  ${HamburgerDashes}:hover & {
    background-color: #34E0B3;
  }
`;

const MiddleDash = styled.div`
  width: 36px;
  height: 4px;
  border-radius: 5px;
  background-color: white;
  margin: 9px 0;

  ${HamburgerDashes}:hover & {
    background-color: #34E0B3;
  }
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

  &:hover {
    color: #34E0B3;
    cursor: pointer;
  }
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

  &:hover {
    color: #34E0B3;
    cursor: pointer;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  width: 102%;
  justify-content: space-between;
  margin: 10px 0;
`;

const FacebookImage = styled.div`
  width: 21px;
  height: 21px;
  background-image: url(${facebook});
  background-size: contain;
  background-repeat: no-repeat;
  &:hover {
    background-image: url(${facebookHover});
    cursor: pointer;
  }
`;

const InstagramImage = styled.div`
  width: 21px;
  height: 21px;
  background-image: url(${instagram});
  background-size: contain;
  background-repeat: no-repeat;
  &:hover {
    background-image: url(${instagramHover});
    cursor: pointer;
  }
`;

const LinkedinImage = styled.div`
  width: 21px;
  height: 21px;
  background-image: url(${linkedin});
  background-size: contain;
  background-repeat: no-repeat;
  &:hover {
    background-image: url(${linkedinHover});
    cursor: pointer;
  }
`;

const TwitterImage = styled.div`
  width: 25px;
  height: 25px;
  background-image: url(${twitter});
  background-size: contain;
  background-repeat: no-repeat;
  &:hover {
    background-image: url(${twitterHover});
    cursor: pointer;
  }
`;


export default HamburgerMenu
