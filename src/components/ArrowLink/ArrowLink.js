import React from 'react'
import { LinkWrapper, Text, ArrowHead, ArrowBase } from './ArrowLinkStyles'

const ArrowLink = ({ text, lineLength, link }) => {
  return (
    <LinkWrapper className="arrowlink-wrapper" href={link} >
      <Text className="arrowlink-text">{text}</Text>
      <ArrowBase className="arrowlink-base" style={{width: lineLength}}/>
      <ArrowHead />
    </LinkWrapper>
  )
}

ArrowLink.defaultProps = {
  text: "EXPLORE OUR WORKS",
  lineLength: "38px",
  link: "https://themobux.com/"
}

export default ArrowLink
