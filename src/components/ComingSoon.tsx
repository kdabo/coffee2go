import * as React from 'react';
import styled from "styled-components";
import theme from "../styles/theme";
import {borderRadius, boxShadow, color, fontSize, fontWeight, space, width} from "styled-system";
import PrimaryButton from './Button';


interface IEmailInputfield {
    mt: number;
    pl: number;
    pr: number;
    mr: number;
    mb: number;
    boxShadow: string;
    borderRadius: string;
    fontSize: number;
    fontWeight: string
}

interface ISubmit {
    fontSize: number
    backgroundColor: string;
}

const ComingSoonContainer = styled.div <{}>`
    width: 100%;
    height: 400px;
    
    background: ${theme.colors.white}
    display: flex;
    flex-direction: column;
    box-align: center;
    box-pack: center;
    text-align: center;
    align-items: center;
    justify-content: center;
`;

const animated = 'animated';
const fontalicious = 'fontalicious';

const Title = styled.h1 <{}> `
    font-weight: ${theme.typography.fontWeightRegular};
    color: ${theme.colors.black}
    font-size: 33px;
    line-height: 34px; 
    margin-bottom: 1rem;

  ${theme.mediaQueries.medium} {
    font-size: 68px;
    line-height: 1;
    display: block;
    pointer-events: none;
    }

@keyframes fontalicious {
  0% {
    font-family: roboto;
  }
  10% {
    font-family: rubik;
  }
  20% {
    font-family: monserrat;
  }
  30% {
    font-family: roboto mono;
  }
  40% {
    font-family: roboto;
  }
  50% {
    font-family: rubik;
  }
  60% {
    font-family: monserrat;
  }
  70% {
    font-family: roboto mono;
  }
  80% {
    font-family: roboto;
  }
  90% {
    font-family: rubik;
  }
  99% {
    font-family: roboto;
  }
  100% {
  }
}

   &.${fontalicious} {
  animation-name: fontalicious;
  animation-iteration-count: 100;
  animation-duration: 2.5s;
 }

 &.${animated} {
  animation-fill-mode: both;
}
`;

const ExplainText = styled.h2 < {} > `
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
    margin-bottom: 2rem;
    display: block;
    
  ${theme.mediaQueries.medium} {
    line-height: 30px;
    max-width: 550px;
  }
`;

const Form = styled.form <{}> `
    display: flex;
    align-items: center;
`;

const EmailInputfield = styled.input < IEmailInputfield > `
    ${space};
    ${width};
    ${boxShadow};
    ${borderRadius};
    ${fontSize};
    ${fontWeight};
    height: 45px;
    border: 1px solid white;
    border-radius: 12px;
`;

const Submit = styled.input < ISubmit > `
    ${space};
    ${fontSize};
    ${color};
    color: ${theme.colors.darkBlue30}
    transition: all 0.1s ease-in-out 0s;
    text-transform: capitalize;
    border: 2px solid ${theme.colors.darkBlue30};
    font-weight: ${theme.typography.fontWeightBlack};
    height: 48px;
    width: auto;
    line-height: 1;
    padding: 1rem 2rem;
    font-weight: $
    border-radius: 12px;
        &:hover {
       transform: scale(1.05);  
    }
    margin-top: 1px;
`;

const ComingSoon: React.SFC = () => {
    return (
        <ComingSoonContainer>
            <Title className={animated + ' ' + fontalicious}>Coming soon.</Title>
            <ExplainText>We are working hard on our app. Follow the news updates and you'll be the first to know when it's ready.</ExplainText>
            <PrimaryButton path={'contact'}>
                Notify Me
            </PrimaryButton>
        </ComingSoonContainer>
    )
};

export default ComingSoon;
