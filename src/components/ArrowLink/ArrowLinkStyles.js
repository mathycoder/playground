import styled from 'styled-components'

export const LinkWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding-right: 15px;
`;

export const Text = styled.div`
  font-family: Rubik;
  font-size: 24px;
  font-weight: 500;
  color: #5F10A3;
  margin-right: 10px;
`;

export const ArrowHeadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -12px;
  justify-content: center;
`;

export const ArrowBase = styled.div`
  background-color: #5F10A3;
  height: 3px;
  border-radius: 10px;
`;

export const ArrowHeadTop = styled.div`
  margin-top: 5px;
  position: absolute;
  background-color: #5F10A3;
  width: 16px;
  height: 3px;
  border-radius: 5px;
  transform: rotate(-49deg);
  -webkit-transform: rotate(-49deg);
`;

export const ArrowHeadBottom = styled.div`
  margin-top: -5px;
  position: absolute;
  background-color: #5F10A3;
  width: 16px;
  height: 3px;
  border-radius: 10px;
  transform: rotate(49deg);
  -webkit-transform: rotate(49deg);
`;
