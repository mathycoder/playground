import React, { useState } from 'react'
import { Wrapper, HamburgerDashes, Dash, MiddleDash, Titles, Title,
         Policies, Policy, SocialIcons, FacebookImage, InstagramImage,
         LinkedinImage, TwitterImage } from './HamburgerMenuStyles'

const HamburgerMenu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <Wrapper style={menuIsOpen ? {width: "0px", padding: 0, border: "none"} : null }>
      <HamburgerDashes onClick={() => setMenuIsOpen(!menuIsOpen)}>
        <Dash />
        <MiddleDash />
        <Dash />
      </HamburgerDashes>
      <Titles style={menuIsOpen ? {display: "none"} : null }>
        <Title>WHAT WE DO</Title>
        <Title>FEATURES</Title>
        <Title>OUR CLIENTS</Title>
        <Title>CONTACT US</Title>
      </Titles>
      <Policies style={menuIsOpen ? {width: "0px"} : null }>
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

export default HamburgerMenu
