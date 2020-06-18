import React from 'react';
import ArrowLink from './components/ArrowLink/ArrowLink'
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgb(105,105,105);
`;

const RightAlignDiv = styled.div`
  position: absolute;
  right: 0;
`

function App() {
  return (
    <Wrapper>
      <ArrowLink />
      <RightAlignDiv>
        <HamburgerMenu />
      </RightAlignDiv>
    </Wrapper>
  );
}

export default App;
