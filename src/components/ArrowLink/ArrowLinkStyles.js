import styled from 'styled-components'

const primaryPurple = '#5F10A3'

export const LinkWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding-right: 15px;
`;

export const Text = styled.div`
  font-family: Rubik;
  font-size: 16px;
  font-weight: 500;
  color: ${primaryPurple};
  margin-right: 7px;
`;

export const ArrowBase = styled.div`
  background-color: ${primaryPurple};
  height: 2px;
  border-radius: 10px;
`;

export const ArrowHead = styled.i`
  border: solid ${primaryPurple};
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  margin-left: -7px;
`;
