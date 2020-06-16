import React from 'react'
import styled from 'styled-components'

const ArrowLink = ({ text="EXPLORE OUR WORKS", lineLength="57px" }) => {
  const PurpleLine = styled.div`
    background-color: #5F10A3;
    width: ${lineLength};
    height: 3px;
    border-radius: 10px;
  `;

  // <ArrowHead />

  return (
    <div style={{display: "flex", flexDirection: 'column'}}>
      <Wrapper>
        <Text>{text}</Text>
        <PurpleLine />
        <ArrowHead />
      </Wrapper>
      <Wrapper>
        <Text>{text}</Text>
        <PurpleLine />
        <ArrowHeadWrapper>
          <ArrowHeadTop />
          <ArrowHeadBottom />
        </ArrowHeadWrapper>
      </Wrapper>
    </div>
  )
}

const ArrowHeadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -12px;
  justify-content: center;
`;

const ArrowHeadTop = styled.div`
  margin-top: 5px;
  position: absolute;
  background-color: #5F10A3;
  width: 16px;
  height: 3px;
  border-radius: 5px;
  transform: rotate(-49deg);
  -webkit-transform: rotate(-49deg);
`;

const ArrowHeadBottom = styled.div`
  margin-top: -5px;
  position: absolute;
  background-color: #5F10A3;
  width: 16px;
  height: 3px;
  border-radius: 10px;
  transform: rotate(49deg);
  -webkit-transform: rotate(49deg);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-family: Rubik;
  font-size: 24px;
  -webkit-text-stroke: 1px #707070;
  font-weight: 500;
  color: #5F10A3;
  margin-right: 10px;
`;

const ArrowHead = styled.i`
  border: solid #5F10A3;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 7px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  border-radius: 2px;
  margin-left: -17px;
`;

export default ArrowLink
