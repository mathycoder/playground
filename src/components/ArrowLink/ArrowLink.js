import React from 'react'
import { LinkWrapper, Text, ArrowHeadWrapper,
         ArrowBase, ArrowHeadTop, ArrowHeadBottom } from './ArrowLinkStyles'

const ArrowLink = ({ text, lineLength, link }) => {
  return (
    <LinkWrapper className="arrowlink-wrapper" href={link} >
      <Text className="arrowlink-text">{text}</Text>
      <ArrowBase className="arrowlink-base" style={{width: lineLength}}/>
      <ArrowHeadWrapper className="arrowlink-head">
        <ArrowHeadTop />
        <ArrowHeadBottom />
      </ArrowHeadWrapper>
    </LinkWrapper>
  )
}

ArrowLink.defaultProps = {
  text: "EXPLORE OUR WORKS",
  lineLength: "57px",
  link: "https://themobux.com/"
}

export default ArrowLink
