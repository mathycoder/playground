import styled from 'styled-components'
import facebook from '../../assets/images/facebook.png'
import facebookHover from '../../assets/images/facebook-hover.png'
import instagram from '../../assets/images/instagram.png'
import instagramHover from '../../assets/images/instagram-hover.png'
import linkedin from '../../assets/images/linkedin.png'
import linkedinHover from '../../assets/images/linkedin-hover.png'
import twitter from '../../assets/images/twitter.png'
import twitterHover from '../../assets/images/twitter-hover.png'


export const HamburgerDashes = styled.div`
  position: absolute;
  top: 32px;
  right: 25px;
  height: 48px;
  width: 40px;

  &:hover {
    cursor: pointer;
  }
`;

export const Dash = styled.div`
  width: 36px;
  height: 4px;
  border-radius: 5px;
  background-color: #34E0B3;
  margin: 9px 0;
  margin-left: 3px;
  ${HamburgerDashes}:hover & {
    background-color: #34E0B3;
  }
`;

export const MiddleDash = styled.div`
  width: 36px;
  height: 4px;
  border-radius: 5px;
  background-color: #34E0B3;
  margin: 9px 0;

  ${HamburgerDashes}:hover & {
    background-color: #34E0B3;
  }
`;

export const Wrapper = styled.div`
  background-color: #300852;
  font-family: Rubik;
  color: white;
  width: 170px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  /* padding: 20px 25px; */
  border: 3px solid black;
  border-right: none;
  height: 100vh;

  transition: width .2s;

  /* transition-property: width;
  transition-duration: .4s;
  transition-timing-function: cubic-bezier(.56, 1, .56, 1); */

  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */
`;

export const Titles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
  max-height: 260px;
  margin-top: 80px;
  margin-bottom: 20px;
  margin-right: 25px;
`;

export const Title = styled.div`
  font-size: 17px;
  font-weight: 500;
  margin: 10px 0;
  text-align: right;
  white-space: nowrap;

  &:hover {
    color: #34E0B3;
    cursor: pointer;
  }
`;

export const Policies = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: auto;
  flex: 1;
  max-height: 160px;
  margin-right: 25px;
`;

export const Policy = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin: 5px 0;
  text-align: right;
  white-space: nowrap;

  &.terms-top {
    margin-bottom: 0;
  }

  &.terms-bottom {
    margin-top: 0;
  }

  &:hover {
    color: #34E0B3;
    cursor: pointer;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  width: 130px;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const FacebookImage = styled.div`
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

export const InstagramImage = styled.div`
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

export const LinkedinImage = styled.div`
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

export const TwitterImage = styled.div`
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
