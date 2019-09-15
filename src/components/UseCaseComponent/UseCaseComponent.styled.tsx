import styled from 'styled-components';
import theme from '../../styles/theme';

export interface IWhyCoffe2goListItemProps {
  isActive?: boolean
}

export const activeButtonClassName = 'button-active';
export const inactiveButtonClassName = 'button-inactive';

export const WhyCoffe2goWrapper = styled.div < {} > `
  display: block;
  background: rgba(18,49,175, 0.04);
  text-align: center;
`;

export const WhyCoffe2go = styled.div < {} > `
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  height: 550px;
  width: 100%;
  
  ${theme.mediaQueries.medium} {
    height: 400px;
    padding: 1rem;
  }
  
  ${theme.mediaQueries.large} {
    height: 500px;
  }
`;

export const WhyCoffe2goInnerWrapper = styled.div < {} > `
  display: flex;
  flex-wrap: wrap;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: center;
  
  ${theme.mediaQueries.medium} {
    height: 420px;
    width: 920px;
    justify-content: space-between;
  }
`;

export const IframeHolder = styled.div < {} >`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  width: 310px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 40px, rgba(0, 0, 0, 0.03) 0px 0px 12px;
  padding: 0px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  overflow: hidden;
  animation: 0.5s ease-in-out 0s 1 normal none running;
  
  ${theme.mediaQueries.medium} {
    height: 300px;
    width: 300px;
  }
  
  ${theme.mediaQueries.large} {
    height: 300px;
    width: 460px;
  }
`;

export const IframeWhyCoffee2go = styled.iframe < {} > `
  width: 100%;
  height: 300px;
//  margin-left: -1px;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
`;

export const WhyList = styled.div < {} > `
  height: 400px;

  ${theme.mediaQueries.medium} {
    width: 450px;
  }
`;

export const WhyCoffe2goListItem = styled.div < IWhyCoffe2goListItemProps > `
    text-align: left;
    line-height: inherit;
    font-family: inherit;
    display: block;
    margin: 1rem 0.25rem;
    padding: 1rem;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    outline: none;
    border-radius: ${theme.borderRadius};
    transition: all 0.15s ease-in-out 0s;
    
    ${theme.mediaQueries.medium} {
      margin: 1rem;
    }
    
    ${theme.mediaQueries.large} {
      margin: 1rem 0px 0px 4rem;
      padding: 2rem;
    }

   &:hover, &:focus {
     cursor: pointer;
     box-shadow: rgba(0, 0, 0, 0.06) 0px -1px 24px;
     background: white;
     margin: 1rem 0.25rem;
     
   ${theme.mediaQueries.large} {
     transform: scale(1.05);
    }
   }
   
   &.${activeButtonClassName} {
     background: transparent
   }
   
   &.${activeButtonClassName} {
     background: ${theme.colors.white}
   }
`;

export const WhyCoffe2goListItemTitle = styled.h4 < {} > `
  font-size: 22px;
  color: ${theme.colors.darkBlue30};
  font-weight: 700;
  margin: 0px 0px 0.5rem;
`;

export const WhyCoffe2goListItemSubtitle = styled.h3 < {} > `
  font-size: ${theme.typography.p};
  color:  ${theme.colors.black};
  font-weight: ${theme.typography.fontWeightLight};
  margin: 0px;
`;
