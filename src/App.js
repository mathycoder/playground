import React from 'react';
import ArrowLink from './components/ArrowLink'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
`;

function App() {
  return (
    <Wrapper>
      <ArrowLink text="EXPLORE OUR WORKS" />
    </Wrapper>
  );
}

export default App;
