import styled from 'styled-components';
import { space } from 'styled-system';
import theme from '../../styles/theme';

export const HomePageContainer = styled.div < {} > `
  ${theme.mediaQueries.xs} {
    margin-left: 0.25rem;
    height: 350px;
  }
  
  ${theme.mediaQueries.medium} {
    margin-left: 6rem;
    height: 500px;
  }
  
  ${theme.mediaQueries.large} {
    margin-left: 2rem;
  }
  
  
  ${theme.mediaQueries.extraLarge} {
    margin-left: 0rem;
  }
  
  ${space};
  display: flex;
  flex-direction: column;
  box-align: center;
  align-items: center;
  width: 100%;
`;

export const HeaderWrapper = styled.div < {} > `
${theme.mediaQueries.medium} {
  display: flex;
  flex-direction: column;
  box-align: center;
  justify-content: center;
  height: 90px;
  width: 920px;
  z-index: 99;
  padding-top: 9.5rem;
 }
`;


export const Title = styled.h1 < {} > `
  font-weight: ${theme.typography.fontWeightBlack};
  font-size: 2rem;
  line-height: 34px;
  margin: 2rem 0 1rem;

${theme.mediaQueries.medium} {
  font-size: 68px;
  line-height: 1;
  text-align: left;
  margin: 1.5rem 0px 1rem;
  z-index: 99;
  display: block;
  pointer-events: none;
  }
`;

export const DivToRotate = styled.div `
  background-color: ${theme.colors.red30}
  color: ${theme.colors.white}
  display: inline-block;
  position: relative;
  border-radius: ${theme.borderRadius}
  padding: 0.25rem;
  margin-left: 0.25rem;
`;

export const TextWithShadow = styled.div `
  color: ${theme.colors.white};
  display: inline-block;
  text-shadow: rgb(13, 36, 129) 3px 3px 0px, rgb(255,219,213) 6px 6px 0px, rgb(213, 0, 31) 9px 9px 0px;
`;

export const Image = styled.iframe < {} > `
  ${theme.mediaQueries.xs} {
    display: none;
  }
  
  ${theme.mediaQueries.medium} {
    display: block;
    width: 435px;
    height: 435px;
    z-index:1;
    border-radius: 100%;
    transition: all 0.15s ease-in-out 0s;
    position: absolute;
    filter: grayscale(100%);
    &:hover {
       transform: scale(1.05);
    }
  }
`;

export const InlineDiv = styled.div < {} > `
  display: inline-flex;
`;

export const Usp = styled.h2 < {} > `
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  
${theme.mediaQueries.medium} {
  line-height: 30px;
  max-width: 450px;
  margin: 0px 0px 32px;
}
`;

export const ImageContainer = styled.div < {} > `
  display: block;
  position: absolute;
`;

export const ButtonContainer = styled.div < {} > `
  width: 100%;
  padding-top: 1rem;
  
  ${theme.mediaQueries.medium} {
     padding: 0;
  }
`;
