import React, { useState } from 'react';
import theme from '../../styles/theme';

import UseCaseComponent from '../UseCaseComponent/UseCaseComponent';
import VerticalSlider from '../VerticalSlider';
import ComingSoon from '../ComingSoon';
import Footer from '../Footer';

import PrimaryButton from '../Button';
import coffee from '../../assets/coffee.gif';
import {
  ButtonContainer,
  DivToRotate, HeaderWrapper, HomePageContainer, Image, ImageContainer, InlineDiv, TextWithShadow, Title,
  Usp
} from './HomePageView.styled';

const HomePages: React.SFC<{}> = () => {
  return (
    <React.Fragment>
      <HomePageContainer>
        <HeaderWrapper>
          <Title color={theme.colors.black}>Getting
            <DivToRotate>
              coffee2go
            </DivToRotate>
            <InlineDiv>
              just got more
            </InlineDiv>
            <TextWithShadow>
              efficient
            </TextWithShadow>
          </Title>
          <Usp>
            For coffee lovers who are short on time our pre-order platform helps you pay ahead and beat the line.
          </Usp>
          <ButtonContainer>
            <PrimaryButton path={'cafes'}>
              ☕ Explore cafés
            </PrimaryButton>
          </ButtonContainer>
        </HeaderWrapper>
        <ImageContainer>
          <Image src={coffee}/>
        </ImageContainer>
      </HomePageContainer>
      
      <UseCaseComponent/>
      
      <VerticalSlider foregroundItemIndex={1}/>
      
      <ComingSoon/>
      
      <Footer/>
    </React.Fragment>
  )
};

export default HomePages;
