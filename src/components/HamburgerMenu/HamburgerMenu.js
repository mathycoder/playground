import React, { useState } from 'react'
import { Wrapper, HamburgerDashes, Dash, MiddleDash, Titles, Title,
         Policies, Policy, SocialIcons, FacebookImage, InstagramImage,
         LinkedinImage, TwitterImage, TermsAndConditions } from './HamburgerMenuStyles'

const HamburgerMenu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <>
      <HamburgerDashes
        className="hamburger-menu-icon"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        <Dash />
        <MiddleDash />
        <Dash />
      </HamburgerDashes>
      <Wrapper
        menuIsOpen={menuIsOpen}
        className="hamburger-menu-wrapper"
      >
        <Titles>
          <Title>WHAT WE DO</Title>
          <Title>FEATURES</Title>
          <Title>OUR CLIENTS</Title>
          <Title>CONTACT US</Title>
        </Titles>
        <Policies>
          <Policy>COOKIE POLICY</Policy>
          <TermsAndConditions>
            <Policy className="terms-top">TERMS &</Policy>
            <Policy className="terms-bottom">CONDITIONS</Policy>
          </TermsAndConditions>
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
    </>
  )
}

export default HamburgerMenu
