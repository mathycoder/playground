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
  top: 20px;
  right: 25px;
  height: 48px;
  width: 40px;
  &:hover { cursor: pointer; }
`;

export const MiddleDash = styled.div`
  width: 36px;
  height: 4px;
  border-radius: 5px;
  background-color: white;
  margin: 9px 0;
  
  ${HamburgerDashes}:hover & { background-color: #34E0B3; }
`;

export const Dash = styled(MiddleDash)`
  margin-left: 3px;
`;

export const Wrapper = styled.div`
  background-color: #300852;
  font-family: Rubik;
  color: white;
  width: ${props => props.menuIsOpen ? "160px" : "0px"};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border: 3px solid black;
  border-right: none;
  border-left-width: ${props => props.menuIsOpen ? "3px" : "0px"};
  height: 100vh;
  overflow: hidden;
  transition: width .25s cubic-bezier(.56, 1, .56, 1);
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
  margin-top: 90px;
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

export const TermsAndConditions = styled.div`
`;

export const Policy = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin: 5px 0;
  text-align: right;
  white-space: nowrap;

  &.terms-top { margin-bottom: 0; }
  &.terms-bottom { margin-top: 0; }

  &:hover {
    color: #34E0B3;
    cursor: pointer;
  }

  ${TermsAndConditions}:hover & {
    color: #34E0B3;
    cursor: pointer;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  width: 120px;
  justify-content: space-between;
  margin: 20px 0;
  margin-right: 20px;
`;

const SocialImage = styled.div`
  width: 21px;
  height: 21px;
  background-size: contain;
  background-repeat: no-repeat;
  &:hover { cursor: pointer; }
`;

export const FacebookImage = styled(SocialImage)`
  background-image: url(${facebook});
  &:hover { background-image: url(${facebookHover}); }
`;

export const InstagramImage = styled(SocialImage)`
  background-image: url(${instagram});
  &:hover { background-image: url(${instagramHover}); }
`;

export const LinkedinImage = styled(SocialImage)`
  background-image: url(${linkedin});
  &:hover { background-image: url(${linkedinHover}); }
`;

export const TwitterImage = styled(SocialImage)`
  width: 25px;
  height: 25px;
  background-image: url(${twitter});
  &:hover { background-image: url(${twitterHover}); }
`;
